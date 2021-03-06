define([], function() {
//Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
//default web map, default app color theme and more. These values can be overwritten by template configuration settings
//and url parameters.
    var defaults = {
        "appid": "", 
        //"webmap": "fdead874e4d141af9896305bc7fbc648",
        "webmap":"95da126c5a42403d9f9f038972af1a7e",
        //Group templates must support a group url parameter. This will contain the id of the group. 
        //group: "",
        //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "resources/proxy.php",
        //Example of a template specific property. If your template had several color schemes
        //you could define the default here and setup configuration settings to allow users to choose a different
        //color theme.  
        "theme": "blue", 
        "bingmapskey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "sharinghost": location.protocol + "//" + "www.arcgis.com" //Defaults to arcgis.com. Set this value to your portal or organization host name. 

    };
    return defaults;
});