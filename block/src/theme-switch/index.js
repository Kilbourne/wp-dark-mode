const {render} = wp.element;

import ColorPalettes from './Color-Palettes';

import './style.scss';

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        appendThemeSwitch();
    }, 1);
});

function appendThemeSwitch() {
    let node = document.querySelector('.edit-post-header__toolbar');

    let newElem = document.createElement('div');
    newElem.classList.add('wpdm-theme-switch-wrapper');

    let html = `<div id="wpDarkModeThemeSwitch"><button id="wpDarkModeThemeSwitchBtn" class="wpdm-theme-switch wpdm-theme-switch__default"></button> <i class="wpdm-arrow down"></i> </div>`;
    html += `<div id="wpdmColorPalettesContainer"></div> `;

    newElem.innerHTML = html;
    node.insertBefore(newElem, node.childNodes[0]);

    document.getElementById('wpDarkModeThemeSwitch').addEventListener('click', editorColorPalettes);
}

let themeChooseActive = false;

function editorColorPalettes() {
    themeChooseActive = !themeChooseActive;
    render(<ColorPalettes active={themeChooseActive}/>, document.getElementById('wpdmColorPalettesContainer'));
}

