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
    if (window.sessionStorage.getItem("jnjs_modules") === null) {
        getModulesForSession();
    }

    //Import globals
    mods = loadModules();

});

//load modules to client
function loadModules() {
    var mod = {
        "module_name": "",
        "git_repository": "https://github.com/jditullio92/nodejs/"
    };
    return mod;
}

//Get modules and put data into window.sessionStorage
function getModulesForSession() {

    return;
}