const {render} = wp.element;

import ColorPalettes from './Color-Palettes';

import './style.scss';

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        appendThemeSwitch();
    }, 1);
});

function appendThemeSwitch() {

    const is_saved = sessionStorage.getItem('wp_dark_mode_admin)');

    if (is_saved && is_saved != 0) {
        document.querySelector('html').classList.add(`wp-dark-mode-theme-darkmode`);
    }

    let node = document.querySelector('.edit-post-header__toolbar');

    let newElem = document.createElement('div');
    newElem.classList.add('wpdm-theme-switch-wrapper');

    let html = `<div id="wpDarkModeThemeSwitch"><img id="wpDarkModeThemeSwitchImg" src="${wpDarkModeAdmin.pluginUrl}/block/build/images/default.png" /> <i class="wpdm-arrow down"></i> </div>`;
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

