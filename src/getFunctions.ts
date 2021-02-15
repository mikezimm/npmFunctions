//2021-02-14:  Copied from GridCharts

import { IPickedList, IPickedWebBasic, IMyPivots, IPivot,  ILink, IUser, IMyProgress, IMyIcons, IMyFonts, IChartSeries, 
  ICharNote, IRefinerRules, RefineRuleValues, ICustViewDef, IRefinerStat, ICSSChartTypes, QuickCommandsTMT, IZBasicItemInfo } from './IReUsableInterfaces';

/**
 * 2020-09-28:  getFunctions.ts intro
 * 
 * The first 3 functions in this file were pulled from PivotTiles.tsx.
 * They are used for fetching items, finding select and expand columns.
 * 
 * Here's how they are used in PivotTiles.tsx
 * 
        let selectCols: string = "*";
        let expandThese = "";

        let allColumns = this.getKeysLike(this.props,"col","Begins");
        let expColumns = this.getExpandColumns(allColumns);
        let selColumns = this.getSelectColumns(allColumns);


        selColumns.length > 0 ? selectCols += "," + selColumns.join(",") : selectCols = selectCols;
        if (expColumns.length > 0) { expandThese = expColumns.join(","); }

        web.lists.getByTitle(useTileList).items
          .select(selectCols).expand(expandThese).filter(restFilter).orderBy(restSort,true).getAll()
 */


/**
 * getKeysLike function takes an object like "props"
 *      looks for specific keys that begin with a string like 'col'
 *      and returns those keys back in an array.
 *      Use case:  Look for props that begin with 'col' which will then return all the known or mapped static column names
 * @param thisProps 
 * @param findMe 
 * @param findOp 
 */

  export function getKeysLike(thisProps: any, findMe:string, findOp: string){
    //Sample call:  getKeysLike(this.props,"col","begins")
    //console.log('FoundProps that ' + findOp + ' with ' + findMe);
    //console.log(thisProps);
    const allKeys = Object.keys(thisProps);
    let foundKeys = [];
    const lFind = findMe.length;

    findMe = findMe.toLowerCase();
    findOp = findOp.toLowerCase();

    if (findOp==="begins") {
      foundKeys = allKeys.filter(k => k.toLowerCase().indexOf(findMe) === 0);
    } else if (findOp === "ends") {
      foundKeys = allKeys.filter(k => k.toLowerCase().indexOf(findMe) === ( k.length - lFind));
    } else {
      foundKeys = allKeys.filter(k => k.toLowerCase().indexOf(findMe) > -1);
    }

    let foundProps = [];
    for (let thisProp of foundKeys) {
      if (thisProp && thisProp !== "" ) { foundProps.push(thisProps[thisProp]) ; }
    }

    return foundProps;
  }

  /**
   * getSelectColumns function will take an array of column names (string format)
   *    and return an array of the columns that need to be added to the select variable in getItems
   *    It pushes the entire expanded name like:  Created/ID
   * @param lookupColumns 
   */
  export function getSelectColumns(lookupColumns : string[] ){

    let baseSelectColumns = [];

    for (let thisColumn of lookupColumns) {
      // Only look at columns with / in the name
      if (thisColumn && thisColumn.indexOf("/") > -1 ) {
        let isLookup = thisColumn.indexOf("/");
        if(isLookup) {
          baseSelectColumns.push(thisColumn);
        }
      }
    }
    return baseSelectColumns;
  }

    /**
   * getExpandColumns function will take an array of column names (string format)
   *    and return an array of the columns that need to be added to the expand variable in getItems
   *    It pushes the just the column name: It finds: Created/ID and returns just Created
   * @param lookupColumns 
   */
  export function getExpandColumns(lookupColumns : string[] ){

    let baseExpandColumns = [];

    for (let thisColumn of lookupColumns) {
      // Only look at columns with / in the name
      if (thisColumn && thisColumn.indexOf("/") > -1 ) {
        let splitCol = thisColumn.split("/");
        let leftSide = splitCol[0];
        if(baseExpandColumns.indexOf(leftSide) < 0) {
          baseExpandColumns.push(leftSide);
        }
      }
    }
    return baseExpandColumns;
  }

  
/***
 *    db    db d8888b. d8888b.  .d8b.  d888888b d88888b      d88888b d88888b d888888b  .o88b. db   db db      d888888b .d8888. d888888b       .o88b.  .d88b.  db      db    db .88b  d88. d8b   db .d8888. 
 *    88    88 88  `8D 88  `8D d8' `8b `~~88~~' 88'          88'     88'     `~~88~~' d8P  Y8 88   88 88        `88'   88'  YP `~~88~~'      d8P  Y8 .8P  Y8. 88      88    88 88'YbdP`88 888o  88 88'  YP 
 *    88    88 88oodD' 88   88 88ooo88    88    88ooooo      88ooo   88ooooo    88    8P      88ooo88 88         88    `8bo.      88         8P      88    88 88      88    88 88  88  88 88V8o 88 `8bo.   
 *    88    88 88~~~   88   88 88~~~88    88    88~~~~~      88~~~   88~~~~~    88    8b      88~~~88 88         88      `Y8b.    88         8b      88    88 88      88    88 88  88  88 88 V8o88   `Y8b. 
 *    88b  d88 88      88  .8D 88   88    88    88.          88      88.        88    Y8b  d8 88   88 88booo.   .88.   db   8D    88         Y8b  d8 `8b  d8' 88booo. 88b  d88 88  88  88 88  V888 db   8D 
 *    ~Y8888P' 88      Y8888D' YP   YP    YP    Y88888P      YP      Y88888P    YP     `Y88P' YP   YP Y88888P Y888888P `8888Y'    YP          `Y88P'  `Y88P'  Y88888P ~Y8888P' YP  YP  YP VP   V8P `8888Y' 
 *                                                                                                                                                                                                         
 *                                                                                                                                                                                                         
 */


export function updateBasicListColumns( list: IZBasicList ) {
       
  let selectCols: string = list.minDataDownload === true ? "" : "*";
  let expandThese = "";

  let allColumns = ['Title','Id','Created','Modified','Author/Title','Author/ID','Author/Name','Editor/Title','Editor/ID','Editor/Name'];

  list.staticColumns.map( c => {
      allColumns.push( c );
  });

  //Add all refiner columns to array.

  let expColumns = getExpandColumns(allColumns);
  let selColumns = getSelectColumns(allColumns);

  selColumns.length > 0 ? selectCols += "," + allColumns.join(",") : selectCols = selectCols;
  if (expColumns.length > 0) { expandThese = expColumns.join(","); }

  list.selectColumns = selColumns;
  list.staticColumns = allColumns;
  list.expandColumns = expColumns;

  list.selectColumnsStr = selColumns.join(',') ;
  list.staticColumnsStr = allColumns.join(',');
  list.expandColumnsStr = expColumns.join(',');

  return list;

}


/***
 *     .o88b. d8888b. d88888b  .d8b.  d888888b d88888b      d88888b d88888b d888888b  .o88b. db   db      db      d888888b .d8888. d888888b 
 *    d8P  Y8 88  `8D 88'     d8' `8b `~~88~~' 88'          88'     88'     `~~88~~' d8P  Y8 88   88      88        `88'   88'  YP `~~88~~' 
 *    8P      88oobY' 88ooooo 88ooo88    88    88ooooo      88ooo   88ooooo    88    8P      88ooo88      88         88    `8bo.      88    
 *    8b      88`8b   88~~~~~ 88~~~88    88    88~~~~~      88~~~   88~~~~~    88    8b      88~~~88      88         88      `Y8b.    88    
 *    Y8b  d8 88 `88. 88.     88   88    88    88.          88      88.        88    Y8b  d8 88   88      88booo.   .88.   db   8D    88    
 *     `Y88P' 88   YD Y88888P YP   YP    YP    Y88888P      YP      Y88888P    YP     `Y88P' YP   YP      Y88888P Y888888P `8888Y'    YP    
 *                                                                                                                                          
 *                                                                                                                                          
 */


export interface IPerformanceSettings {
  fetchCount: number;
  fetchCountMobile: number;
  restFilter: string;
  minDataDownload: boolean;
}

export function createFetchList(webURL: string, parentListURL: string, title: string, name: string, isLibrary: boolean, performance: IPerformanceSettings, pageContext: any, 
  staticColumns: string[] , searchColumns: string[], metaColumns: string[], expandDates: string[] ) {

  if ( performance === null ) {
      performance = {
          fetchCount: 1000,
          fetchCountMobile: 1000,
          restFilter: '',
          minDataDownload: true,
      }
  }

  let list: IZBasicList = {
      title: title,
      name: name,
      guid: '',
      contextUserInfo: {
          LoginName: pageContext.user.loginName,
          Title: pageContext.user.displayName,
          email: pageContext.user.email,
          remoteID: null, //This is for cross site ID requirements
          Id: pageContext.user.Id

      },
      sourceUserInfo: undefined,
      fetchCount: performance.fetchCount,
      fetchCountMobile: performance.fetchCountMobile,
      restFilter: !performance.restFilter ? ' ' : performance.restFilter,
      minDataDownload: performance.minDataDownload === true ? true : false,
      odataSearch: [],

      isLibrary: isLibrary,
      hasAttach: false,

      webURL: webURL,
      parentListURL: parentListURL,
      staticColumns: staticColumns,
      searchColumns: searchColumns,
      metaColumns: metaColumns,
      expandDates: expandDates,
      selectColumns: [],
      expandColumns: [],
      staticColumnsStr: '',
      selectColumnsStr: '',
      expandColumnsStr: '',
      removeFromSelect: ['currentTime','currentUser'],
  };

  list = updateBasicListColumns( list ) ;

  return list;
}


/***
*    d888888b      d88888D      d8888b.  .d8b.  .d8888. d888888b  .o88b. db      d888888b .d8888. d888888b 
*      `88'        YP  d8'      88  `8D d8' `8b 88'  YP   `88'   d8P  Y8 88        `88'   88'  YP `~~88~~' 
*       88            d8'       88oooY' 88ooo88 `8bo.      88    8P      88         88    `8bo.      88    
*       88           d8'        88~~~b. 88~~~88   `Y8b.    88    8b      88         88      `Y8b.    88    
*      .88.         d8' db      88   8D 88   88 db   8D   .88.   Y8b  d8 88booo.   .88.   db   8D    88    
*    Y888888P      d88888P      Y8888P' YP   YP `8888Y' Y888888P  `Y88P' Y88888P Y888888P `8888Y'    YP    
*                                                                                                          
*                                                                                                          
*/

export interface IZBasicList extends Partial<IPickedList> {
  title: string;
  name?: string;
  guid?: string;
  fetchCount: number;
  fetchCountMobile: number;
  restFilter: string;
  minDataDownload: boolean;
  isLibrary?: boolean;
  hasAttach: boolean;
  webURL?: string;
  parentListURL?: string;
  contextUserInfo?: IUser;  //For site you are on ( aka current page context )
  sourceUserInfo?: IUser;   //For site where the list is stored

  metaColumns: string[];
  searchColumns: string[];
  expandDates: string[];
  odataSearch?: string[];  //Used optionally in search text... but can cause issues if the list name/content type are the same text as you may want to search

  staticColumns: string[];
  selectColumns: string[];
  expandColumns: string[];

  staticColumnsStr: string;
  selectColumnsStr: string;
  expandColumnsStr: string;
  removeFromSelect: string[];
}
