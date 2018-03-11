/* 
-filename: index.js
-author: john ditullio (jditullio92)
-path: \nodejs\web\index.js
*/

//global variables
var mods = '';

//init
$(window).load(function (e) {
    //Prevent default
    e.preventDefault();

    //check browser storage for modaule data
    if (window.sessionStorage.getItem("jditullio92_sessiondata") === null || window.sessionStorage.getItem("jditullio92_sessiondata").length === 0) {
        //Import data
        loadData();
    }
});

//load modules to client
function loadData() {
    var page = { "started": new Date().toISOString(), "page_name": "", "git_repository": "https://github.com/jditullio92/nodejs/" };
    window.sessionStorage.setItem("jditullio92_sessiondata", JSON.stringify(page));
    return;
}

//Get modules and put data into window.sessionStorage
function getModulesForSession() {

    return;
}