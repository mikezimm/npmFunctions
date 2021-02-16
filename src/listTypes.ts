
/**
 * Ensures that the specified list exists in the collection (note: this method not supported for batching)
 *
 * @param title The new list's title
 * @param desc The new list's description
 * @param template The list template value
 * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
 * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
 */
// ensure(title: string, desc?: string, template?: number, enableContentTypes?: boolean, additionalSettings?: Partial<IListInfo>): Promise<IListEnsureResult>;

export function notify(statusLog : IServiceLog | any, verb : any, status: any, step : any, f: any, returnField: any, checkValue = null, noAlert = false) {
    if ( f == null ) { f = {name:''} ; }
    let thisItem = f == null ? null : f.name ? f.name : f.Title;

    let thisNotify : IServiceLog = {
        time: (new Date()).toLocaleString() ,  
        verb: verb,   
        step: '',
        status: '',
        //status: status,
        //checkValue: checkValue,
    };

    if ( step !== null && step !== undefined ) { thisNotify["step"] = step; }
    if ( status !== null && status !== undefined ) { thisNotify["status"] = status; }
    if ( thisItem !== null && thisItem !== undefined ) { thisNotify["item"] = thisItem; }
    if ( returnField !== null && returnField !== undefined ) { thisNotify["returnField"] = returnField; }
    if ( checkValue !== null && checkValue !== undefined ) { thisNotify["checkValue"] = checkValue; }

    //alert(verb + ' ' + f.name + ' ' + status );
    statusLog.push(thisNotify);

    return statusLog;
}


export interface IServiceLog {
    time: string;
    step: string;
    verb: string;
    status: string;
    checkValue?: any;
    returnField?: any;
    item?: any;
}

export interface IMyListInfo {
    webURL?: string;
    title: string;
    desc?: string;
    template?: number;
    enableContentTypes?: boolean;
    additionalSettings?: Partial<IListInfo>;
}

export interface IListInfo {
    EnableRequestSignOff: boolean;
    EnableVersioning: boolean;
    EntityTypeName: string;
    ExemptFromBlockDownloadOfNonViewableFiles: boolean;
    FileSavePostProcessingEnabled: boolean;
    ForceCheckout: boolean;
    HasExternalDataSource: boolean;
    Hidden: boolean;
    Id: string;
    ImagePath: {
        DecodedUrl: string;
    };
    ImageUrl: string;
    IrmEnabled: boolean;
    IrmExpire: boolean;
    IrmReject: boolean;
    IsApplicationList: boolean;
    IsCatalog: boolean;
    IsPrivate: boolean;
    ItemCount: number;
    LastItemDeletedDate: string;
    LastItemModifiedDate: string;
    LastItemUserModifiedDate: string;
    ListExperienceOptions: number;
    ListItemEntityTypeFullName: string;
    MajorVersionLimit: number;
    MajorWithMinorVersionsLimit: number;
    MultipleDataList: boolean;
    NoCrawl: boolean;
    ParentWebPath: {
        DecodedUrl: string;
    };
    ParentWebUrl: string;
    ParserDisabled: boolean;
    ServerTemplateCanCreateFolders: boolean;
    TemplateFeatureId: string;
    Title: string;
    UniquePerms?: boolean;

}

export interface IContentsLists {
  tabs: string[];
  lists: {
    all: IContentsListInfo[];
    searched: IContentsListInfo[];
//    hidden: IContentsListInfo[];
//    visible: IContentsListInfo[];
//    maxItems: IContentsListInfo[];
//    empty: IContentsListInfo[];
//    notEmpty: IContentsListInfo[];
//    noVersions: IContentsListInfo[];
//    infVersions: IContentsListInfo[];
  };
}

export interface IContentsListInfo {

  //Minimum Props
  //AllowContentTypes: boolean;
  ContentTypesEnabled: boolean;
  BaseTemplate: number;
  BaseType: number;

  EntityTypeName: string;   //"Projects83List"
  Title: string;
  Hidden: boolean;
  Id: string;
  Description: string;

  ItemCount: number;
  Created: string;
  LastItemDeletedDate: string;
  LastItemModifiedDate: string;
  LastItemUserModifiedDate: string;

  ParentWebPath: {
    DecodedUrl: string;
  };
  ParentWebUrl: string;
  listURL: string;
  railsOffLink: boolean; // true only show link to list when in railsOff mode
  allowCrazyLink: boolean; // true for going directly to very hidden settings
  responseIndex: any;

  //Versioning
  EnableRequestSignOff: boolean;
  EnableVersioning: boolean;
  EnableMinorVersions: boolean;
  MajorVersionLimit: number;
  MajorWithMinorVersionsLimit: number;
  DraftVersionVisibility: number;
  ForceCheckout: boolean;
  EnableModeration: boolean;

  //Advanced Settings
  ServerTemplateCanCreateFolders: boolean;
  EnableAttachments: boolean;
  NoCrawl: boolean;

  //Custom info
  UniquePerms?: boolean;
  searchString: string;
  modifiedAge?: number;
  createdAge?: number;
  meta?: string[];
  
  sort: string;
  bucketCategory: string;
  bucketLabel: string;
  bucketIdx: any;

  //Backend Info
  odataEtag: string; //""121""
  odataId: string; //odata.id: "https://mcclickster.sharepoint.com/sites/Templates/Testing/_api/Web/Lists(guid'd6f45bb5-57d9-436a-a62a-ac9bd2fbffec')"
  ListItemEntityTypeFullName: string;  //:  "SP.Data.Projects83ListItem"

  ImagePath: {
      DecodedUrl: string;
  };

  ImageUrl: string;
  IrmEnabled: boolean;
  IrmExpire: boolean;
  IrmReject: boolean;
  IsApplicationList: boolean;
  IsCatalog: boolean;
  IsPrivate: boolean;

  TemplateFeatureId: string;

  //Unknown Props
  HasExternalDataSource: boolean;
  ExemptFromBlockDownloadOfNonViewableFiles?: boolean;
  FileSavePostProcessingEnabled?: boolean;
  ParserDisabled: boolean;

  ListExperienceOptions: number;
  MultipleDataList: boolean;

}