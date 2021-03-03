import { Web, IList, IItem, IItemAddResult, IWebEnsureUserResult, PrincipalType } from "@pnp/sp/presets/all";

import "@pnp/sp/webs";
import "@pnp/sp/clientside-pages/web";
import "@pnp/sp/site-users/web";

import { PermissionKind } from '@pnp/sp/presets/all';

import { IRefiners, IRefinerLayer, IItemRefiners, RefineRuleValues, RefinerStatTypes, IRefinerStats, IRefinerStatType, IUser } from './IReUsableInterfaces';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";

import { getHelpfullError } from './ErrorHandler';

import { doesObjectExistInArray } from './arrayServices';
import { isEqual } from '@microsoft/sp-lodash-subset';


/***
 *     d888b  d88888b d888888b      d8888b. d8888b. d888888b d8b   db  .o88b. d888888b d8888b.  .d8b.  db           d888888b db    db d8888b. d88888b 
 *    88' Y8b 88'     `~~88~~'      88  `8D 88  `8D   `88'   888o  88 d8P  Y8   `88'   88  `8D d8' `8b 88           `~~88~~' `8b  d8' 88  `8D 88'     
 *    88      88ooooo    88         88oodD' 88oobY'    88    88V8o 88 8P         88    88oodD' 88ooo88 88              88     `8bd8'  88oodD' 88ooooo 
 *    88  ooo 88~~~~~    88         88~~~   88`8b      88    88 V8o88 8b         88    88~~~   88~~~88 88              88       88    88~~~   88~~~~~ 
 *    88. ~8~ 88.        88         88      88 `88.   .88.   88  V888 Y8b  d8   .88.   88      88   88 88booo.         88       88    88      88.     
 *     Y888P  Y88888P    YP         88      88   YD Y888888P VP   V8P  `Y88P' Y888888P 88      YP   YP Y88888P         YP       YP    88      Y88888P 
 *                                                                                                                                                    
 *                                                                                                                                                    
 */

export function getPrincipalTypeString( type: PrincipalType ) {
  if ( type === 0 ) { return 'None'; }
  if ( type === 1 ) { return 'User'; }
  if ( type === 2 ) { return 'Distribution'; }
  if ( type === 4 ) { return 'Security'; }
  if ( type === 8 ) { return 'SharePoint'; }
  if ( type === 15 ) { return 'All'; }
}


/***
 *    d88888b d8b   db .d8888. db    db d8888b. d88888b      db    db .d8888. d88888b d8888b.      d888888b d8b   db d88888b  .d88b.  
 *    88'     888o  88 88'  YP 88    88 88  `8D 88'          88    88 88'  YP 88'     88  `8D        `88'   888o  88 88'     .8P  Y8. 
 *    88ooooo 88V8o 88 `8bo.   88    88 88oobY' 88ooooo      88    88 `8bo.   88ooooo 88oobY'         88    88V8o 88 88ooo   88    88 
 *    88~~~~~ 88 V8o88   `Y8b. 88    88 88`8b   88~~~~~      88    88   `Y8b. 88~~~~~ 88`8b           88    88 V8o88 88~~~   88    88 
 *    88.     88  V888 db   8D 88b  d88 88 `88. 88.          88b  d88 db   8D 88.     88 `88.        .88.   88  V888 88      `8b  d8' 
 *    Y88888P VP   V8P `8888Y' ~Y8888P' 88   YD Y88888P      ~Y8888P' `8888Y' Y88888P 88   YD      Y888888P VP   V8P YP       `Y88P'  
 *                                                                                                                                    
 *                                                                                                                                    
 */

export async function ensureUserInfo ( webURL: string, userEmail: string ) {

    let thisListWeb = Web(webURL);
    //const username = "mike.zimmerman@autoliv.com";
    let result = await thisListWeb.ensureUser(userEmail);
    console.log('userInfo', result );

    let thisUser: IUser = {
            title: result.data.Title,
            Title: result.data.Title,
            initials: '',  //Single person column
            email: result.data.Email,  //Single person column
            id: result.data.Id,
            Id: result.data.Id,
            ID: result.data.Id,
          
            isSiteAdmin:result.data.IsSiteAdmin,
            LoginName: result.data.LoginName,
            Name: result.data.LoginName,
          
            //These optional props are from the React PeoplePicker control
            imageInitials: '', //same as Initials,         From React People Picker control
            imageUrl: '',  //Thumbnail URL,                From React People Picker control
            loginName: result.data.LoginName,  //Same as LoginName and Name,  From React People Picker control
            text: result.data.Title,   //Same as Title and title,         From React People Picker control

            remoteID: null,
            ensureWeb: webURL,
    };

    return thisUser;
}

/***
 *     .o88b. db   db d88888b  .o88b. db   dD      d888888b d88888b      db    db .d8888. d88888b d8888b.                     
 *    d8P  Y8 88   88 88'     d8P  Y8 88 ,8P'        `88'   88'          88    88 88'  YP 88'     88  `8D                     
 *    8P      88ooo88 88ooooo 8P      88,8P           88    88ooo        88    88 `8bo.   88ooooo 88oobY'                     
 *    8b      88~~~88 88~~~~~ 8b      88`8b           88    88~~~        88    88   `Y8b. 88~~~~~ 88`8b                       
 *    Y8b  d8 88   88 88.     Y8b  d8 88 `88.        .88.   88           88b  d88 db   8D 88.     88 `88.                     
 *     `Y88P' YP   YP Y88888P  `Y88P' YP   YD      Y888888P YP           ~Y8888P' `8888Y' Y88888P 88   YD                     
 *                                                                                                                            
 *                                                                                                                            
 *    d88888b db    db d888888b .d8888. d888888b .d8888.      d888888b d8b   db       .d8b.  d8888b. d8888b.  .d8b.  db    db 
 *    88'     `8b  d8'   `88'   88'  YP `~~88~~' 88'  YP        `88'   888o  88      d8' `8b 88  `8D 88  `8D d8' `8b `8b  d8' 
 *    88ooooo  `8bd8'     88    `8bo.      88    `8bo.           88    88V8o 88      88ooo88 88oobY' 88oobY' 88ooo88  `8bd8'  
 *    88~~~~~  .dPYb.     88      `Y8b.    88      `Y8b.         88    88 V8o88      88~~~88 88`8b   88`8b   88~~~88    88    
 *    88.     .8P  Y8.   .88.   db   8D    88    db   8D        .88.   88  V888      88   88 88 `88. 88 `88. 88   88    88    
 *    Y88888P YP    YP Y888888P `8888Y'    YP    `8888Y'      Y888888P VP   V8P      YP   YP 88   YD 88   YD YP   YP    YP    
 *                                                                                                                            
 *                                                                                                                            
 */

export function checkIfUserExistsInArray( recentUsers : IUser[] , user: IUser ) {

    let remoteId : any = false;

    remoteId = doesObjectExistInArray(recentUsers, "Id", user.id, true );
    if ( remoteId === false ) { remoteId = doesObjectExistInArray(recentUsers, "email", user.email, true ); }
    if ( remoteId === false ) { remoteId = doesObjectExistInArray(recentUsers, "loginName", user.loginName, true ); }
    if ( remoteId === false ) { remoteId = doesObjectExistInArray(recentUsers, "email", user.email, true ); }
    if ( remoteId === false ) { remoteId = doesObjectExistInArray(recentUsers, "title", user.title, true ); }

    if ( remoteId === false ) {
        alert('Error addTheseFieldsToSaveObject:\n' +  JSON.stringify( user ));
    } else {
        remoteId = parseInt(remoteId, 10);
    }

    return remoteId;
}

//getEmailFromLoginName, checkForLoginName

/***
 *     d888b  d88888b d888888b      d88888b .88b  d88.  .d8b.  d888888b db      
 *    88' Y8b 88'     `~~88~~'      88'     88'YbdP`88 d8' `8b   `88'   88      
 *    88      88ooooo    88         88ooooo 88  88  88 88ooo88    88    88      
 *    88  ooo 88~~~~~    88         88~~~~~ 88  88  88 88~~~88    88    88      
 *    88. ~8~ 88.        88         88.     88  88  88 88   88   .88.   88booo. 
 *     Y888P  Y88888P    YP         Y88888P YP  YP  YP YP   YP Y888888P Y88888P 
 *                                                                              
 *                                                                              
 */


export function getEmailFromLoginName( uName: string ) {

let result = null;

if (uName.indexOf('|') > -1 && uName.indexOf('@') > 0 ) {
    //This is an ID structure from reading in from the list:  "i:0#.f|membership|clicky.mcclickster@mcclickster.onmicrosoft.com"
    let uProps = uName.split('|');
    let expectedEmailIndex = 2;
    if (uProps.length === 3 && uProps[expectedEmailIndex].indexOf('@') > -1) {
        result = uProps[expectedEmailIndex];
    } else {
        alert('Not able to find email from this user name: ' + uName );
    }
}

return result;

}

/***
 *     d888b  d88888b d888888b      db       .d88b.   d888b  d888888b d8b   db      d8b   db  .d8b.  .88b  d88. d88888b 
 *    88' Y8b 88'     `~~88~~'      88      .8P  Y8. 88' Y8b   `88'   888o  88      888o  88 d8' `8b 88'YbdP`88 88'     
 *    88      88ooooo    88         88      88    88 88         88    88V8o 88      88V8o 88 88ooo88 88  88  88 88ooooo 
 *    88  ooo 88~~~~~    88         88      88    88 88  ooo    88    88 V8o88      88 V8o88 88~~~88 88  88  88 88~~~~~ 
 *    88. ~8~ 88.        88         88booo. `8b  d8' 88. ~8~   .88.   88  V888      88  V888 88   88 88  88  88 88.     
 *     Y888P  Y88888P    YP         Y88888P  `Y88P'   Y888P  Y888888P VP   V8P      VP   V8P YP   YP YP  YP  YP Y88888P 
 *                                                                                                                      
 *                                                                                                                      
 */

export function checkForLoginName( u : IUser ) {

  let results = undefined;

  if ( u.Name ) {
      results = u.Name;

  } else if ( u.loginName ) {
      results = u.loginName;

  } else if ( u.LoginName ) {
      results = u.LoginName;

  } else if ( u.email ) {
      results = u.email;
  }

  return results;

}

/***
 *    d88888b d8b   db .d8888. db    db d8888b. d88888b      db    db .d8888. d88888b d8888b.      db   db d88888b d8888b. d88888b 
 *    88'     888o  88 88'  YP 88    88 88  `8D 88'          88    88 88'  YP 88'     88  `8D      88   88 88'     88  `8D 88'     
 *    88ooooo 88V8o 88 `8bo.   88    88 88oobY' 88ooooo      88    88 `8bo.   88ooooo 88oobY'      88ooo88 88ooooo 88oobY' 88ooooo 
 *    88~~~~~ 88 V8o88   `Y8b. 88    88 88`8b   88~~~~~      88    88   `Y8b. 88~~~~~ 88`8b        88~~~88 88~~~~~ 88`8b   88~~~~~ 
 *    88.     88  V888 db   8D 88b  d88 88 `88. 88.          88b  d88 db   8D 88.     88 `88.      88   88 88.     88 `88. 88.     
 *    Y88888P VP   V8P `8888Y' ~Y8888P' 88   YD Y88888P      ~Y8888P' `8888Y' Y88888P 88   YD      YP   YP Y88888P 88   YD Y88888P 
 *                                                                                                                                 
 *                                                                                                                                 
 */

 /**
  * 
  * @param loginName  2021-03-01:  should really be string | undefined but set to any to get into npmFunctions
  * @param webUrl 
  * @param supressSaveConflict 
  */
export async function ensureUserHere( loginName: string | undefined, webUrl: string, supressSaveConflict: boolean ) {
    
    let thisListWeb = Web(webUrl);

    let errMessage = null;

    if ( loginName === undefined ) {
        return undefined ;
    } else {
        try {
            const user = await thisListWeb.ensureUser(loginName);
            const users = thisListWeb.siteUsers;
            await users.add(user.data.LoginName);
            console.log('ensureUserHere: user', user );
            console.log('ensureUserHere: users', users );
            return user ;
    
        } catch (e) {
            errMessage = getHelpfullError(e, true, true);
            let saveMessage =  'Ensure Failed!\n' + loginName + "\n" + webUrl + "\n" + errMessage;
    
            if ( supressSaveConflict === true && errMessage.indexOf('Save Conflict') === 0 ) {
              //Do nothting
            } else {
              alert( saveMessage );
            }
    
            console.log( saveMessage );
        }
    }


}

/***
 *    d88888b d8b   db .d8888. db    db d8888b. d88888b      d888888b db   db d88888b .d8888. d88888b      db    db .d8888. d88888b d8888b. .d8888. 
 *    88'     888o  88 88'  YP 88    88 88  `8D 88'          `~~88~~' 88   88 88'     88'  YP 88'          88    88 88'  YP 88'     88  `8D 88'  YP 
 *    88ooooo 88V8o 88 `8bo.   88    88 88oobY' 88ooooo         88    88ooo88 88ooooo `8bo.   88ooooo      88    88 `8bo.   88ooooo 88oobY' `8bo.   
 *    88~~~~~ 88 V8o88   `Y8b. 88    88 88`8b   88~~~~~         88    88~~~88 88~~~~~   `Y8b. 88~~~~~      88    88   `Y8b. 88~~~~~ 88`8b     `Y8b. 
 *    88.     88  V888 db   8D 88b  d88 88 `88. 88.             88    88   88 88.     db   8D 88.          88b  d88 db   8D 88.     88 `88. db   8D 
 *    Y88888P VP   V8P `8888Y' ~Y8888P' 88   YD Y88888P         YP    YP   YP Y88888P `8888Y' Y88888P      ~Y8888P' `8888Y' Y88888P 88   YD `8888Y' 
 *                                                                                                                                                  
 *                                                                                                                                                  
 */

export async function ensureTheseUsers ( theseUsers: IUser[], checkTheseUsers: IUser[] , webUrl: string ) {

    let updateState: boolean ;

    console.log('ensureTheseUsers', theseUsers);
    let recentUsers : IUser[] = checkTheseUsers;
    let ensureLogin : IUser[] = [];

    //Get each user and check if they are in stateUsers:  getEmailFromLoginName, checkForLoginName
    if ( theseUsers.length > 0 ) {
      theseUsers.map( ensureUser => {
        let loginName = checkForLoginName( ensureUser );
        if ( loginName ) {
  
          let isAlreadyInState = false;
  
          //Check if loginName of new user is already in state
          recentUsers.map( existingUser => {
            if ( existingUser.loginName === loginName ) { isAlreadyInState = true ; }
          });
  
          if ( isAlreadyInState === false ) {
            console.log('NEED TO ENSURE LOGIN: ', loginName );
            updateState = true;
            ensureUser.loginName = loginName;
            ensureLogin.push(ensureUser);
          }
        }
      });
    }

    if ( ensureLogin.length > 0 ) {
      for (let i = 0; i < ensureLogin.length; i++) {
        let user : IWebEnsureUserResult | undefined = await ensureUserHere( ensureLogin[i].loginName, webUrl, false );
        let localId = ensureLogin[i].id ? ensureLogin[i].id : ensureLogin[i].Id;
        if ( user !== undefined ) {
            recentUsers.push({
                id: localId,
                Id: localId,
                remoteID: user.data.Id,
                title: user.data.Title,
                Title: user.data.Title,
                loginName: user.data.LoginName,
                email: user.data.Email,
                PrincipalType: user.data.PrincipalType,
              });
        } else {
            recentUsers.push({
                id: localId,
                Id: localId,
                remoteID: '',
                title: '',
                Title: '',
                loginName: '',
                email: '',
                PrincipalType: undefined,
              });
        }

      }
      console.log('updated state recentUsers: ', recentUsers );

    }

    return recentUsers;

  }




  /***
 *     d888b  d88888b d888888b      db    db .d8888. d88888b d8888b.      d8888b. d88888b d8888b. .88b  d88. d888888b .d8888. .d8888. d888888b  .d88b.  d8b   db .d8888. 
 *    88' Y8b 88'     `~~88~~'      88    88 88'  YP 88'     88  `8D      88  `8D 88'     88  `8D 88'YbdP`88   `88'   88'  YP 88'  YP   `88'   .8P  Y8. 888o  88 88'  YP 
 *    88      88ooooo    88         88    88 `8bo.   88ooooo 88oobY'      88oodD' 88ooooo 88oobY' 88  88  88    88    `8bo.   `8bo.      88    88    88 88V8o 88 `8bo.   
 *    88  ooo 88~~~~~    88         88    88   `Y8b. 88~~~~~ 88`8b        88~~~   88~~~~~ 88`8b   88  88  88    88      `Y8b.   `Y8b.    88    88    88 88 V8o88   `Y8b. 
 *    88. ~8~ 88.        88         88b  d88 db   8D 88.     88 `88.      88      88.     88 `88. 88  88  88   .88.   db   8D db   8D   .88.   `8b  d8' 88  V888 db   8D 
 *     Y888P  Y88888P    YP         ~Y8888P' `8888Y' Y88888P 88   YD      88      Y88888P 88   YD YP  YP  YP Y888888P `8888Y' `8888Y' Y888888P  `Y88P'  VP   V8P `8888Y' 
 *                                                                                                                                                                       
 *        Updated function from https://github.com/pnp/pnpjs/issues/1480#issuecomment-745203843                                                                                                                                                               
 */

  export async function getUserPermissions( webUrl: string , supressError: boolean ) {
    let thisWeb = Web(webUrl);
    let errMessage = null;

    try {
        const userPerm = await thisWeb.getCurrentUserEffectivePermissions();
       
        console.log({
          'PermissionKind.ViewListItems': sp.web.hasPermissions(userPerm, PermissionKind.ViewListItems),
          'PermissionKind.AddListItems': sp.web.hasPermissions(userPerm, PermissionKind.AddListItems),
          'PermissionKind.ManageWeb': sp.web.hasPermissions(userPerm, PermissionKind.ManageWeb),
          'PermissionKind.FullMask': sp.web.hasPermissions(userPerm, PermissionKind.FullMask),
        });

        return { permissions: userPerm, errMessage: errMessage } ;

      } catch (e) {

        errMessage = getHelpfullError(e, true, true);
        if ( supressError === true && errMessage.indexOf('Save Conflict') === 0 ) {
          alert( errMessage );
        }
        console.log( 'getUserPermissions', errMessage ) ;
        return { users: [], errMessage: errMessage } ;

    }

  }

  /***
 *     d888b  d88888b d888888b      .d8888. d888888b d888888b d88888b       .d8b.  d8888b. .88b  d88. d888888b d8b   db .d8888. 
 *    88' Y8b 88'     `~~88~~'      88'  YP   `88'   `~~88~~' 88'          d8' `8b 88  `8D 88'YbdP`88   `88'   888o  88 88'  YP 
 *    88      88ooooo    88         `8bo.      88       88    88ooooo      88ooo88 88   88 88  88  88    88    88V8o 88 `8bo.   
 *    88  ooo 88~~~~~    88           `Y8b.    88       88    88~~~~~      88~~~88 88   88 88  88  88    88    88 V8o88   `Y8b. 
 *    88. ~8~ 88.        88         db   8D   .88.      88    88.          88   88 88  .8D 88  88  88   .88.   88  V888 db   8D 
 *     Y888P  Y88888P    YP         `8888Y' Y888888P    YP    Y88888P      YP   YP Y8888D' YP  YP  YP Y888888P VP   V8P `8888Y' 
 *                                                                                                                              
 *                                                                                                                              
 */

  export async function getSiteAdmins( webUrl: string , supressError: boolean ) {
    let thisWeb = Web(webUrl);

    let errMessage = null;
    //let adminFilter = "IsSiteAdmin eq true"; //This did not work....
    let adminFilter = "IsSiteAdmin eq 1";  //Updated per @koltyakov: https://github.com/pnp/pnpjs/issues/1480

    try {
 
      const siteAdmins = await thisWeb.siteUserInfoList.items.filter( adminFilter ).get();

      /**
       * This was added because loginName is not retured but is in other functions so it just copies it to make it easier to resuse.
       */
      siteAdmins.map( user => {
        if ( !user.loginName && user.Name ) { user.loginName = user.Name ; }
        if ( !user.Email && user.EMail ) { user.Email = user.EMail ; }
      });

      return { users: siteAdmins, errMessage: errMessage }  ;

    } catch (e) {

      errMessage = getHelpfullError(e, true, true);
      if ( supressError !== true ) {
        alert( errMessage );
      }
      console.log( 'getSiteAdmins', errMessage );

      return { users: [], errMessage: errMessage }  ;
  }
}

