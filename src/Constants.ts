

/**
 * Usage:
 * 
 *  import { SystemLists, TempSysLists, TempContLists, entityMaps, EntityMapsNames } from '@mikezimm/npmfunctions/dist/Constants';
 * 
 */

/**
 * Copied from Easy Constants for grouping "System Lists".
 * Re-using in Pivot Tiles as well because it also has a setting to hide/show system lists.
 * Technically SystemLists could be under List Types but that is more focused on interfaces and functions
 * where as this is just a list of List Titles for easy use of filtering.
 * 
 */

//2020-11-17:  Copied from genericSolution listsFunctions.ts
//Usage:  if ( SystemLists.indexOf(theList.EntityTypeName) > -1 ) { ... }
export const SystemLists = ["WorkflowTasks", "Style Library",
"SitePages", "SiteAssets", "ReusableContent", "Pages", "SearchConfigList", "OData__catalogs/masterpage", "OData__catalogs/design",
"TeamSiteFooterQL1List", "TeamSiteFooterQL2List",
"SiteCollectionImages", "SiteCollectionDocuments", "FormServerTemplates", "Reports List", "PublishingImages",
"AEInspiredTilesItemsList", "AEInspiredTilesAssetsList", "PublishedFeedList", "Workflow TasksList", "AEGoalThermometerAssetsList", "AEMetroGridAssetsList", "AEMetroGridItemsList", "AEMetroGridPicLibList", "AESwipeGalleryAssetsList",
"AESwipeGalleryDefaultImagesList", "Workflows", "Workflow HistoryList", "OData__catalogs/fpdatasources", "IWConvertedForms", "Access Requests", "Style Library",

"OData__catalogs/appdata","OData__catalogs/appfiles","OData__catalogs/lt","OData__catalogs/solutions","OData__catalogs/theme","OData__catalogs/wp",

"CCSAdvancedApprovalLogList","CCSWFHistory_Common_ErrorLogsList","CrowCanyonAppsEmailsList","CrowCanyonMailTemplatesList","Send MailsList","CrowCanyonAppsLib","NITROUserPreferencesList",

"OData__catalogs/hubsite","OData__catalogs/MaintenanceLogs",

];

/**
 * This is originally used in Easy Contents to get list of lists that were part of Template sites.
 * They are grouped in the webpart with similar lists to keep them separate from what a user might create.
 */
export const TempSysLists = ["OurGroupsList", "OurTilesList", "TemplateHistoryList", "Template HistoryList",
"TemplateReferenceList", "AE KPI ListList", "PnpPanelList",
"SiteLaunchCheckListList", "EmailSettingsList", "YearView ConfigurationList", "SubscribeList","ProjectsList","TrackMyTimeList"
];


/**
 * This is originally used in Easy Contents to get list of lists that were part of Template sites but are considered user content.
 * They are grouped in the webpart with similar lists to keep them separate from what a user might create.
 */
export const TempContLists = ["ActionRegisterList", "AgendasList", "AutoOnBoardList", "BringOnBoardList", "BudgetDeptList", "BudgetFiles", "CalendarDocs", "CalendarList", "CustomerComplaints", "CustRequirements", "Deliverables", "DeskInstructions",
"Documents2", "Documents3", "Documents4", "Documents5", "Emails", "EventDocs", "EventsList", "FAQsList", "FinanceDocs2", "FinanceDocs3", "FinanceDocs4", "FinanceDocs5", "Itineraries", "LaunchThisSiteChecklistList", "ManufacturingRecords",
"Media", "OurForms", "OurOnBoardingList", "OurPNsList", "OurTasksList", "OurWiki", "PartTrackerList", "Performance", "PresentationLinksList", "Presentations", "ProcessProductionEquipment", "ProjectOverviewList", "QualityRecords",
"QualitySysReporting", "ReportFiles", "RequestsList", "RFQDocs2", "RFQDocs3", "RFQDocs4", "RFQDocs5", "SerialDocuments", "Shared Documents", "SiteLaunchCheckListList", "SuggestionsList", "TasksList", "TimelineList", "ToolTrackerList",
"TrainingRecords", "VehicleVolumesList", 
"Smile1List", "Smile2List", "Smile3List", "Smile4List", "Smile5List", "Smile6List", "Smile7List", "Smile8List", "Smile9List", "Smile10List", "Smile11List", "Smile12List", 
"Attachments00", "Attachments01", "Attachments02", "Attachments03", "Attachments04", "Attachments05", "Attachments06", "Attachments07", "Attachments08", "Attachments09",
"Attachments10", "Attachments11", "Attachments12", "LessonsLearned", "ReadAcrossList", "YokotensList",
"FilesYMCat","FilesYMCatU"
];


/**
 * This is originally used in Easy Contents to get list of lists that were part of System List
 * But also have a mapping to the URL since they didn't always match.  especially ones that were buried as pages like ReusableContent.
 */
export const entityMaps = [

    { name: 'ReusableContent' , url: 'ReusableContent/Content Preview.aspx' },
    { name: 'Style Library', url: 'Style Library' },
    { name: 'MicroFeed', url: '/Lists/PublishedFeed/' },
    { name: 'Long Running Operation Status', url: 'Long Running Operation Status' },
    { name: 'Notification Pages', url: 'Notification Pages' },
    { name: 'UserInfo', url: '_layouts/15/people.aspx' },
    { name: 'Reports List', url: 'Reports List' },
    { name: 'DeviceChannels', url: 'Device Channels' },
    { name: 'Cache Profiles', url: 'Cache Profiles' },
    { name: 'ProjectPolicyItemList', url: 'ProjectPolicyItemList' },
    { name: 'Quick Deploy Items', url: 'Quick Deploy Items' },
    { name: 'Relationships List', url: 'Relationships List' },
    { name: 'SharePointHomeCacheListList', url: 'SharePointHomeCacheList' },
    { name: 'PublishedLinks', url: 'PublishedLinks' },
    { name: 'Translation Packages', url: 'Translation Packages' },
    { name: 'Translation Status', url: 'Translation Status' },
    { name: 'TaxonomyHiddenListList', url: 'Lists/TaxonomyHiddenList' },
    { name: 'Variation Labels', url: 'Variation Labels' },
    { name: 'IWConvertedForms', url: 'IWConvertedForms' },
    { name: 'FormServerTemplates', url: 'FormServerTemplates' },
    { name: 'Access Requests', url: 'Access Requests/pendingreq.aspx?mbypass=1' },

    { name: 'ClientSideAssets', url: 'ClientSideAssets' },
    { name: 'ComponentManifestsList', url: 'Lists/ComponentManifests' },
    { name: 'ContentTypeSyncLogList', url: 'Lists/ContentTypeSyncLog' },
    { name: 'SiteCollectionAppCatalogsList', url: 'SiteCollectionAppCatalogsList' },
    { name: 'WebApiPermissionRequestsList', url: 'WebApiPermissionRequestsList' },
    { name: 'AppRequests', url: 'AppRequests' },
    { name: 'AgaveCatalog', url: 'AgaveCatalog' },
    { name: 'AppCatalog', url: 'AppCatalog' },
    { name: 'TenantWideExtensionsList', url: 'Lists/TaxonomyHiddenList' },
    { name: '_catalogs/appdata', url: '_catalogs/appdata' },
    { name: '_catalogs/appfiles', url: '_catalogs/appfiles' },
    { name: '_catalogs/lt', url: '_catalogs/lt' },
    { name: '_catalogs/MaintenanceLogs', url: '_catalogs/MaintenanceLogs' },
    { name: '_catalogs/solutions', url: '_catalogs/solutions' },
    { name: '_catalogs/theme', url: '_catalogs/theme' },
    { name: '_catalogs/wp', url: '_catalogs/wp' },
    { name: '_catalogs/hubsite', url: '_catalogs/hubsite' },
    { name: '', url: '' },
    { name: '', url: '' },
    { name: 'CrowCanyonAppsLib', url: 'CrowCanyonAppsLib' },
    { name: 'NITROUserPreferences', url: 'NITROUserPreferencesList' },
    { name: '', url: '' },
    { name: '', url: '' },
    { name: '', url: '' },
    { name: '', url: '' },
    { name: '', url: '' },
];



export const EntityMapsNames = entityMaps.map( e => {
    return e.name;
});

