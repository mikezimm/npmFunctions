/***
 *    .d888b.  .d88b.  .d888b.  .d88b.          db .d888b.         db   j88D                     
 *    VP  `8D .8P  88. VP  `8D .8P  88.        o88 VP  `8D        o88  j8~88                     
 *       odD' 88  d'88    odD' 88  d'88         88    odD'         88 j8' 88                     
 *     .88'   88 d' 88  .88'   88 d' 88 C8888D  88  .88'   C8888D  88 V88888D                    
 *    j88.    `88  d8' j88.    `88  d8'         88 j88.            88     88                     
 *    888888D  `Y88P'  888888D  `Y88P'          VP 888888D         VP     VP                     
 *                                                                                               
 *                                                                                               
 *    d8888b. d888888b db    db  .d88b.  d888888b      d888888b d888888b db      d88888b .d8888. 
 *    88  `8D   `88'   88    88 .8P  Y8. `~~88~~'      `~~88~~'   `88'   88      88'     88'  YP 
 *    88oodD'    88    Y8    8P 88    88    88            88       88    88      88ooooo `8bo.   
 *    88~~~      88    `8b  d8' 88    88    88            88       88    88      88~~~~~   `Y8b. 
 *    88        .88.    `8bd8'  `8b  d8'    88            88      .88.   88booo. 88.     db   8D 
 *    88      Y888888P    YP     `Y88P'     YP            YP    Y888888P Y88888P Y88888P `8888Y' 
 *                                                                                               
 *                                                                                               
 */

import * as React from 'react';


import { sortStringArray , sortNumberArray } from './arrayServices';

/***
 *     .o88b.  .d8b.  .88b  d88. d88888b db      d888888b d88888D d88888b 
 *    d8P  Y8 d8' `8b 88'YbdP`88 88'     88        `88'   YP  d8' 88'     
 *    8P      88ooo88 88  88  88 88ooooo 88         88       d8'  88ooooo 
 *    8b      88~~~88 88  88  88 88~~~~~ 88         88      d8'   88~~~~~ 
 *    Y8b  d8 88   88 88  88  88 88.     88booo.   .88.    d8' db 88.     
 *     `Y88P' YP   YP YP  YP  YP Y88888P Y88888P Y888888P d88888P Y88888P 
 *                                                                        
 *                                                                        
 */

//https://stackoverflow.com/a/2970667/4210807
export function camelize(str : string ,firstCap: boolean) {

    if ( str == null ) { return ''; }
    else {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, 
            (word, index) => {
                if ( firstCap ) {   //Use this flavor for CamelCase
                    return index == 0 ? word.toUpperCase() : word.toUpperCase();
                } else {    //Use this flavor for camelCase
                    return index == 0 ? word.toLowerCase() : word.toUpperCase();
                } 
            }).replace(/\s+/g, '');
    }
}




/***
 *    .88b  d88.  .d8b.  db   dD d88888b      d888888b d8888b. 
 *    88'YbdP`88 d8' `8b 88 ,8P' 88'            `88'   88  `8D 
 *    88  88  88 88ooo88 88,8P   88ooooo         88    88   88 
 *    88  88  88 88~~~88 88`8b   88~~~~~         88    88   88 
 *    88  88  88 88   88 88 `88. 88.            .88.   88  .8D 
 *    YP  YP  YP YP   YP YP   YD Y88888P      Y888888P Y8888D' 
 *                                                             
 *                                                             
 */

    //https://stackoverflow.com/a/1349426
    export function makeid(length: number) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }

/***
 *    d8888b.  .d8b.  d8b   db d8888b.  .d88b.  .88b  d88. d888888b d88888D d88888b       .o88b.  .d8b.  .d8888. d88888b 
 *    88  `8D d8' `8b 888o  88 88  `8D .8P  Y8. 88'YbdP`88   `88'   YP  d8' 88'          d8P  Y8 d8' `8b 88'  YP 88'     
 *    88oobY' 88ooo88 88V8o 88 88   88 88    88 88  88  88    88       d8'  88ooooo      8P      88ooo88 `8bo.   88ooooo 
 *    88`8b   88~~~88 88 V8o88 88   88 88    88 88  88  88    88      d8'   88~~~~~      8b      88~~~88   `Y8b. 88~~~~~ 
 *    88 `88. 88   88 88  V888 88  .8D `8b  d8' 88  88  88   .88.    d8' db 88.          Y8b  d8 88   88 db   8D 88.     
 *    88   YD YP   YP VP   V8P Y8888D'  `Y88P'  YP  YP  YP Y888888P d88888P Y88888P       `Y88P' YP   YP `8888Y' Y88888P 
 *                                                                                                                       
 *                                                                                                                       
 */

  export function randomizeCase(str: string) {
      var result = '';
      if ( str !== null && str !== undefined  ) {
          for ( let i = 0; i < str.length; i++) {
              let UC = Math.random() > .5 ? true : false;
              if ( UC === true ) {
                  result += str.substr(i,1).toUpperCase();
              } else { result += str.substr(i,1).toLowerCase(); }
          }
      } else { result = str; }
      return result;
  }
  

/***
 *     .o88b. db      d88888b  .d8b.  d8b   db      .d8888. d8888b.      db      d888888b .d8888. d888888b      db    db d8888b. db      
 *    d8P  Y8 88      88'     d8' `8b 888o  88      88'  YP 88  `8D      88        `88'   88'  YP `~~88~~'      88    88 88  `8D 88      
 *    8P      88      88ooooo 88ooo88 88V8o 88      `8bo.   88oodD'      88         88    `8bo.      88         88    88 88oobY' 88      
 *    8b      88      88~~~~~ 88~~~88 88 V8o88        `Y8b. 88~~~        88         88      `Y8b.    88         88    88 88`8b   88      
 *    Y8b  d8 88booo. 88.     88   88 88  V888      db   8D 88           88booo.   .88.   db   8D    88         88b  d88 88 `88. 88booo. 
 *     `Y88P' Y88888P Y88888P YP   YP VP   V8P      `8888Y' 88           Y88888P Y888888P `8888Y'    YP         ~Y8888P' 88   YD Y88888P 
 *                                                                                                                                       
 *                                                                                                                                       
 */
/**
 * SharePoint automatically removes characters from library names
 * 
 * @param str
 */
export function cleanSPListURL( str : string ) {
  return str.replace(/\s\%\&\?\.\+/g, '');

}

/***
 *     .o88b. db      d88888b  .d8b.  d8b   db      db    db d8888b. db      
 *    d8P  Y8 88      88'     d8' `8b 888o  88      88    88 88  `8D 88      
 *    8P      88      88ooooo 88ooo88 88V8o 88      88    88 88oobY' 88      
 *    8b      88      88~~~~~ 88~~~88 88 V8o88      88    88 88`8b   88      
 *    Y8b  d8 88booo. 88.     88   88 88  V888      88b  d88 88 `88. 88booo. 
 *     `Y88P' Y88888P Y88888P YP   YP VP   V8P      ~Y8888P' 88   YD Y88888P 
 *                                                                           
 *                                                                           
 */

//Sample to convert to arrow function
//const sum1 = function(list, prop){ return list.reduce( function(a, b){ return a + b[prop];}, 0);}
//const sum2 = (list,prop) =>  { return list.reduce((a,b) => {return (a+ b[prop])}, 0);}

export function cleanURL(originalURL: String) {

    let newURL = originalURL.toLowerCase();
    if ( newURL.indexOf('/sitepages/') > 0 ) { return newURL.substring(0, newURL.indexOf('/sitepages/') + 1) ; }
    if ( newURL.indexOf('/lists/') > 0 ) { return newURL.substring(0, newURL.indexOf('/lists/') + 1) ; }
    if ( newURL.indexOf('/siteassets/') > 0 ) { return newURL.substring(0, newURL.indexOf('/siteassets/') + 1) ; }
    if ( newURL.indexOf('/_layouts/') > 0 ) { return newURL.substring(0, newURL.indexOf('/_layouts/') + 1) ; }
    if ( newURL.indexOf('/documents/') > 0 ) { return newURL.substring(0, newURL.indexOf('/documents/') + 1) ; }
    if ( newURL.indexOf('/shared documents/') > 0 ) { return newURL.substring(0, newURL.indexOf('/shared documents/') + 1) ; }
    if ( newURL.indexOf('/shared%20documents/') > 0 ) { return newURL.substring(0, newURL.indexOf('/shared%20documents/') + 1) ; }
    if ( newURL.indexOf('/forms/') > 0 ) { 
      newURL = newURL.substring(0, newURL.indexOf('/forms/'));
      newURL = newURL.substring(0, newURL.indexOf('/') + 1);
      return newURL;
    }
    if ( newURL.indexOf('/pages/') > 0 ) { return newURL.substring(0, newURL.indexOf('/pages/') + 1) ; }
    if ( newURL.substring(newURL.length -1) !== '/' ) { return newURL + '/'; }
    
    return newURL;

  }


  /***
 *     d888b  d88888b d888888b       .o88b. db   db  .d88b.  d888888b  .o88b. d88888b      db   dD d88888b db    db 
 *    88' Y8b 88'     `~~88~~'      d8P  Y8 88   88 .8P  Y8.   `88'   d8P  Y8 88'          88 ,8P' 88'     `8b  d8' 
 *    88      88ooooo    88         8P      88ooo88 88    88    88    8P      88ooooo      88,8P   88ooooo  `8bd8'  
 *    88  ooo 88~~~~~    88         8b      88~~~88 88    88    88    8b      88~~~~~      88`8b   88~~~~~    88    
 *    88. ~8~ 88.        88         Y8b  d8 88   88 `8b  d8'   .88.   Y8b  d8 88.          88 `88. 88.        88    
 *     Y888P  Y88888P    YP          `Y88P' YP   YP  `Y88P'  Y888888P  `Y88P' Y88888P      YP   YD Y88888P    YP    
 *                                                                                                                  
 *                                                                                                                  
 */
/**
 * This is used specifically for making a key value from text that can be in a css ID or classname.
 * Used in Dropdown Fields
 * 
 * @param val 
 */
export function getChoiceKey(val: string) {

    if (val === null) {  
      console.log('getChoiceKey is null');
      return'valueIsNull'; }
    else if (val === undefined) {  
      console.log('getChoiceKey is undefined');
      return'valueIsNull'; }
    else {
      return val.replace(' ','SPACE').replace('.','DOT').replace('~','TILDE').replace('~','COMMA');
    }

}

/***
 *     d888b  d88888b d888888b       .o88b. db   db  .d88b.  d888888b  .o88b. d88888b      d888888b d88888b db    db d888888b 
 *    88' Y8b 88'     `~~88~~'      d8P  Y8 88   88 .8P  Y8.   `88'   d8P  Y8 88'          `~~88~~' 88'     `8b  d8' `~~88~~' 
 *    88      88ooooo    88         8P      88ooo88 88    88    88    8P      88ooooo         88    88ooooo  `8bd8'     88    
 *    88  ooo 88~~~~~    88         8b      88~~~88 88    88    88    8b      88~~~~~         88    88~~~~~  .dPYb.     88    
 *    88. ~8~ 88.        88         Y8b  d8 88   88 `8b  d8'   .88.   Y8b  d8 88.             88    88.     .8P  Y8.    88    
 *     Y888P  Y88888P    YP          `Y88P' YP   YP  `Y88P'  Y888888P  `Y88P' Y88888P         YP    Y88888P YP    YP    YP    
 *                                                                                                                            
 *                                                                                                                            
 */

/**
 * This is the opposite of getChoiceKey..
 * Just converts the key back to the text
 * 
 * @param val 
 */
export function getChoiceText(val: string) {

    if (val === null) {  
      console.log('getChoiceText is null');
      return null; }
    else if (val === undefined) {  
      console.log('getChoiceText is undefined');
      return null; }
    else {
      return val.replace('SPACE',' ').replace('DOT','.').replace('TILDE','~').replace('COMMA','~');
    }

}

/***
 *    d88888b d8b   db  .o88b.  .d88b.  d8888b. d88888b      d8888b. d88888b  .o88b.  .d88b.  d8888b. d88888b      .d8888. d888888b d8888b. d888888b d8b   db  d888b  
 *    88'     888o  88 d8P  Y8 .8P  Y8. 88  `8D 88'          88  `8D 88'     d8P  Y8 .8P  Y8. 88  `8D 88'          88'  YP `~~88~~' 88  `8D   `88'   888o  88 88' Y8b 
 *    88ooooo 88V8o 88 8P      88    88 88   88 88ooooo      88   88 88ooooo 8P      88    88 88   88 88ooooo      `8bo.      88    88oobY'    88    88V8o 88 88      
 *    88~~~~~ 88 V8o88 8b      88    88 88   88 88~~~~~      88   88 88~~~~~ 8b      88    88 88   88 88~~~~~        `Y8b.    88    88`8b      88    88 V8o88 88  ooo 
 *    88.     88  V888 Y8b  d8 `8b  d8' 88  .8D 88.          88  .8D 88.     Y8b  d8 `8b  d8' 88  .8D 88.          db   8D    88    88 `88.   .88.   88  V888 88. ~8~ 
 *    Y88888P VP   V8P  `Y88P'  `Y88P'  Y8888D' Y88888P      Y8888D' Y88888P  `Y88P'  `Y88P'  Y8888D' Y88888P      `8888Y'    YP    88   YD Y888888P VP   V8P  Y888P  
 *                                                                                                                                                                    
 *                                                                                                                                                                    
 */

export function encodeDecodeString( str : string , doThis: 'encode' | 'decode') {

  //https://abstractspaces.wordpress.com/2008/05/07/sharepoint-column-names-internal-name-mappings-for-non-alphabet/

  let newStr = str + '';
  newStr = newStr.replace(/_x007e_/g,'~');
  newStr = newStr.replace(/_x0021_/g,'!');
  newStr = newStr.replace(/_x0040_/g,'@');
  newStr = newStr.replace(/_x0023_/g,'#');
  newStr = newStr.replace(/_x0024_/g,'$');
  newStr = newStr.replace(/_x0025_/g,'%');
  newStr = newStr.replace(/_x005e_/g,'^');
  newStr = newStr.replace(/_x0026_/g,'&');
  newStr = newStr.replace(/_x002a_/g,'*');
  newStr = newStr.replace(/_x0028_/g,'(');
  newStr = newStr.replace(/_x0029_/g,')');
  newStr = newStr.replace(/_x002b_/g,'+');
  newStr = newStr.replace(/_x002d_/g,'\–');
  newStr = newStr.replace(/_x003d_/g,'=');
  newStr = newStr.replace(/_x007b_/g,'{');
  newStr = newStr.replace(/_x007d_/g,'}');
  newStr = newStr.replace(/_x003a_/g,':');
  newStr = newStr.replace(/_x0022_/g,'\“');
  newStr = newStr.replace(/_x007c_/g,'|');
  newStr = newStr.replace(/_x003b_/g,';');
  newStr = newStr.replace(/_x0027_/g,'\‘');
  newStr = newStr.replace(/_x005c_/g,'\\');
  newStr = newStr.replace(/_x003c_/g,'\<');
  newStr = newStr.replace(/_x003e_/g,'\>');
  newStr = newStr.replace(/_x003f_/g,'?');
  newStr = newStr.replace(/_x002c_/g,',');
  newStr = newStr.replace(/_x002e_/g,'.');
  newStr = newStr.replace(/_x002f_/g,'/');
  newStr = newStr.replace(/_x0060_/g,'`');
  newStr = newStr.replace(/_x0020_/g,' ');
  newStr = newStr.replace(/_x005f_/g,'_');
  newStr = newStr.replace(/_/g,'_');

  return newStr;

}

/***
 *     d888b  d88888b d888888b      .d8888. d888888b d8888b. d888888b d8b   db  d888b        .d8b.  d8888b. d8888b.  .d8b.  db    db 
 *    88' Y8b 88'     `~~88~~'      88'  YP `~~88~~' 88  `8D   `88'   888o  88 88' Y8b      d8' `8b 88  `8D 88  `8D d8' `8b `8b  d8' 
 *    88      88ooooo    88         `8bo.      88    88oobY'    88    88V8o 88 88           88ooo88 88oobY' 88oobY' 88ooo88  `8bd8'  
 *    88  ooo 88~~~~~    88           `Y8b.    88    88`8b      88    88 V8o88 88  ooo      88~~~88 88`8b   88`8b   88~~~88    88    
 *    88. ~8~ 88.        88         db   8D    88    88 `88.   .88.   88  V888 88. ~8~      88   88 88 `88. 88 `88. 88   88    88    
 *     Y888P  Y88888P    YP         `8888Y'    YP    88   YD Y888888P VP   V8P  Y888P       YP   YP 88   YD 88   YD YP   YP    YP    
 *                                                                                                                                   
 *                                                                                                                                   
 *    d88888b d8888b.  .d88b.  .88b  d88.      .d8888. d888888b d8888b. d888888b d8b   db  d888b                                     
 *    88'     88  `8D .8P  Y8. 88'YbdP`88      88'  YP `~~88~~' 88  `8D   `88'   888o  88 88' Y8b                                    
 *    88ooo   88oobY' 88    88 88  88  88      `8bo.      88    88oobY'    88    88V8o 88 88                                         
 *    88~~~   88`8b   88    88 88  88  88        `Y8b.    88    88`8b      88    88 V8o88 88  ooo                                    
 *    88      88 `88. `8b  d8' 88  88  88      db   8D    88    88 `88.   .88.   88  V888 88. ~8~                                    
 *    YP      88   YD  `Y88P'  YP  YP  YP      `8888Y'    YP    88   YD Y888888P VP   V8P  Y888P                                     
 *                                                                                                                                   
 *                                                                                                                                   
 */
/** was: cleanProjEditOptions from TrackMyTime7
 * This function takes a string with ;, converts to array of strings and removes empty elements (like if ; is at the end.)
 * 
 * example input:   ";test;this;string;;now;"
 * example result:  ['test','this','string','now']
 * 
 * @param str
 */
export function getStringArrayFromString ( str : string, delim: string, removeEmpty: boolean, sort: 'asc' | 'dec' | null ) : string[] | null {

    if (str == null ) { return null; }
    else if (  delim == null || delim == '' ) { return [ str ]; }
  
    let arr : string[] = str.split( delim );

    arr = sortStringArray( arr, sort );

    let finalStringArray : string[] = [];

    if ( removeEmpty === true ) {
        finalStringArray = arr.filter( (el) => {
            return el != null;
        });
    } else {
        finalStringArray = arr;
    }

    return finalStringArray;
  
}

/***
 *     .o88b. db      d88888b  .d8b.  d8b   db      d88888b .88b  d88. d8888b. d888888b db    db      d88888b db      d88888b .88b  d88. d88888b d8b   db d888888b .d8888. 
 *    d8P  Y8 88      88'     d8' `8b 888o  88      88'     88'YbdP`88 88  `8D `~~88~~' `8b  d8'      88'     88      88'     88'YbdP`88 88'     888o  88 `~~88~~' 88'  YP 
 *    8P      88      88ooooo 88ooo88 88V8o 88      88ooooo 88  88  88 88oodD'    88     `8bd8'       88ooooo 88      88ooooo 88  88  88 88ooooo 88V8o 88    88    `8bo.   
 *    8b      88      88~~~~~ 88~~~88 88 V8o88      88~~~~~ 88  88  88 88~~~      88       88         88~~~~~ 88      88~~~~~ 88  88  88 88~~~~~ 88 V8o88    88      `Y8b. 
 *    Y8b  d8 88booo. 88.     88   88 88  V888      88.     88  88  88 88         88       88         88.     88booo. 88.     88  88  88 88.     88  V888    88    db   8D 
 *     `Y88P' Y88888P Y88888P YP   YP VP   V8P      Y88888P YP  YP  YP 88         YP       YP         Y88888P Y88888P Y88888P YP  YP  YP Y88888P VP   V8P    YP    `8888Y' 
 *                                                                                                                                                                         
 *                                                                                                                                                                         
 *    d88888b d8888b.  .d88b.  .88b  d88.      .d8888. d888888b d8888b. d888888b d8b   db  d888b                                                                           
 *    88'     88  `8D .8P  Y8. 88'YbdP`88      88'  YP `~~88~~' 88  `8D   `88'   888o  88 88' Y8b                                                                          
 *    88ooo   88oobY' 88    88 88  88  88      `8bo.      88    88oobY'    88    88V8o 88 88                                                                               
 *    88~~~   88`8b   88    88 88  88  88        `Y8b.    88    88`8b      88    88 V8o88 88  ooo                                                                          
 *    88      88 `88. `8b  d8' 88  88  88      db   8D    88    88 `88.   .88.   88  V888 88. ~8~                                                                          
 *    YP      88   YD  `Y88P'  YP  YP  YP      `8888Y'    YP    88   YD Y888888P VP   V8P  Y888P                                                                           
 *                                                                                                                                                                         
 *                                                                                                                                                                         
 */

/** was originally copied from cleanProjEditOptions from TrackMyTime7
 * This function takes a string with ;, converts to array of strings and removes empty elements (like if ; is at the end.)
 * 
 * example input:   ";test;this;string;;now;"
 * example result:  "test;this;string;now"
 * @param str
 */

export function cleanEmptyElementsFromString ( str : string, delim: string, removeEmpty: boolean, sort: 'asc' | 'dec' | null ) : string {

    let stringArray : string[] | any = getStringArrayFromString( str, delim, removeEmpty, sort );
    return stringArray.join(';');
  
}
