/**
 * NeutronDesk's script
 *  Customizable Windows 10 style for your Electrons Apps, Easy, Faster and Lightweight!
 *  Github: https://github.com/Loxoz/NeutronDesk
 *   by Loxoz
**/

var remote = require('electron').remote;
var window = remote.getCurrentWindow();

var ND = {}

ND.options = require('../ndoptions.json');
if (typeof options != 'object') {
    ND.options = require('ndconfig_default.json');
}

ND.createContainer = (classlit) => {
    let elm = document.createElement('div');
    elm.classList.add(classlit);
}
ND.elmroot = {}
ND.containers = {
    dargregion: 'drag-region',
    appicon: 'window-appicon',
    menubar: 'window-menubar',
    title: 'window-title',
    region: 'drag-region',
    controls: 'window-controls-container',
    resizer: 'resizer'
}
ND.initElements = () => {
    for (let v in containers) {
        let cn = containers[v];
        ND.elmroot[v] = ND.createcontainer(cn);
        ND.titleroot.appendChild(ND.elmroot[v]);
    }
}

ND.createtitlebar = () => {
    ND.titleroot = document.querySelector('header');
    if (ND.titleroot) {
        ND.initElements();
    }
    else {
        console.warn('The <header> container for the NeutronDesk titlebar was not found, ignoring all, refer to https://github.com/Loxoz/NeutronDesk#first-take-in for more infos.');
    }
}

/* Note that if you see that file commit not complete, is because it's an actual remake of an old thing like this that i made for public usage called NeutronDesk ;) */
