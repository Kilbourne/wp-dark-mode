;(function () {

    const app = {
        init: () => {
            app.initDarkmode();
            app.blockSwitches();
            app.blockPresets();
            app.checkCategories();

            app.checkDesc();
            app.checkFloating();
            app.checkSwitchDeps();
            app.checkCustomize();
            app.checkTimeBasedDeps();


            app.checkSwitchMenu();
            app.checkSwitchText();
            app.checkSwitchIcon();

            const enable_frontend = document.querySelector('.enable_frontend input[type=checkbox]');
            if (enable_frontend) {
                enable_frontend.addEventListener('change', app.checkFloating);
            }

            const enable_darkmode_checkbox = document.querySelector('.enable_os_mode input[type=checkbox]');
            if (enable_darkmode_checkbox) {
                enable_darkmode_checkbox.addEventListener('change', app.checkDesc);
            }

            const show_switcher_checkbox = document.querySelector('.show_switcher input[type=checkbox]');
            if (show_switcher_checkbox) {
                show_switcher_checkbox.addEventListener('change', app.checkSwitchDeps);
            }

            const customize_colors_checkbox = document.querySelector('.customize_colors input[type=checkbox]');
            if (customize_colors_checkbox) {
                customize_colors_checkbox.addEventListener('change', app.checkCustomize);
            }

            const switch_menu_checkbox = document.querySelector('.enable_menu_switch input[type=checkbox]');
            if (switch_menu_checkbox) {
                switch_menu_checkbox.addEventListener('change', app.checkSwitchMenu);
            }

            const switch_text_checkbox = document.querySelector('.custom_switch_text input[type=checkbox]');
            if (switch_text_checkbox) {
                switch_text_checkbox.addEventListener('change', app.checkSwitchText);
            }

            const switch_icon_checkbox = document.querySelector('.custom_switch_icon input[type=checkbox]');
            if (switch_icon_checkbox) {
                switch_icon_checkbox.addEventListener('change', app.checkSwitchIcon);
            }


            const specific_cat = document.querySelector('.specific_category input[type=checkbox]');
            if (specific_cat) {
                specific_cat.addEventListener('change', app.checkCategories);
            }

            const tab_links = document.querySelectorAll('.tab-links .tab-link');
            tab_links.forEach((tab_link) => {
                tab_link.addEventListener('click', function (e) {
                    e.preventDefault();

                    document.querySelectorAll('.tab-links .tab-link, .tab-content').forEach(active => {
                        active.classList.remove('active');
                    });

                    tab_link.classList.add('active');

                    const target = tab_link.getAttribute('href');
                    document.querySelector(`#${target}`).classList.add('active');

                });
            });

            document.querySelectorAll(`.color-palette td`).forEach((element) => {
                element.classList.add('wp-dark-mode-ignore');
            });

            /**--- license activate button --**/
            const activate_license = document.querySelector('.activate-license');
            if (activate_license) {
                activate_license.addEventListener('click', function () {
                    const link = document.getElementById('wp_dark_mode_license-tab');
                    if (link) {
                        link.click();
                    }
                });
            }


        },

        initDarkmode: function () {
            const is_saved = sessionStorage.getItem('wp_dark_mode_admin');

            if (wpDarkModeAdmin.enable_backend && 1 == is_saved && !wpDarkModeAdmin.is_block_editor) {
                document.querySelector('html').classList.add('wp-dark-mode-active');
                window.dispatchEvent(new Event('darkmodeInit'));
            }
        },

        blockSwitches: function () {

            if (wpDarkModeAdmin.is_pro_active || wpDarkModeAdmin.is_ultimate_active) {
                return;
            }

            const image_opts = document.querySelectorAll('.switch_style .image-choose-opt');
            image_opts.forEach((image_opt, i) => {
                if (i < 2) {
                    return;
                }
                image_opt.classList.add('disabled');
                const div = document.createElement('DIV');
                div.classList.add('disabled-text', 'wp-dark-mode-ignore');

                image_opt.appendChild(div);
            });

            document.querySelectorAll(`.remember_darkmode, .start_at, .end_at, .specific_category, .time_based_mode, .custom_switch_icon, .switch_icon_light, .switch_icon_dark,.custom_switch_text, .switch_text_light, .switch_text_dark, .show_above_post, .show_above_page, .excludes, .exclude_pages, .exclude_pages, .enable_menu_switch, .switch_menus`).forEach((element) => {
                element.classList.add('disabled');
            });
        },

        blockPresets: function () {

            if (wpDarkModeAdmin.is_pro_active || wpDarkModeAdmin.is_ultimate_active) {
                return;
            }

            const image_opts = document.querySelectorAll('.color_preset .image-choose-opt');
            image_opts.forEach((image_opt, i) => {
                if (i < 2) {
                    return;
                }
                image_opt.classList.add('disabled');
                const div = document.createElement('DIV');
                div.classList.add('disabled-text', 'wp-dark-mode-ignore');

                image_opt.appendChild(div);
            });

            const customize_colors_checkbox = document.querySelector('.customize_colors');
            if (customize_colors_checkbox) {
                customize_colors_checkbox.classList.add('disabled');
            }
        },

        checkFloating: function () {
            const checkBox = document.querySelector('.enable_frontend input[type=checkbox]');
            if (!checkBox) {
                return;
            }
            const is_darkmode_enabled = checkBox.checked;

            if (is_darkmode_enabled) {
                document.querySelector('.show_switcher').style.display = 'contents';
            } else {
                document.querySelector('.show_switcher').style.display = 'none';
            }
        },

        checkDesc: function () {
            const checkBox = document.querySelector('.enable_os_mode input[type=checkbox]');
            if (!checkBox) {
                return;
            }
            const is_darkmode_enabled = checkBox.checked;

            if (is_darkmode_enabled) {
                document.querySelector('.enable_os_mode .description').style.display = 'block';
            } else {
                document.querySelector('.enable_os_mode .description').style.display = 'none';
            }
        },

        checkSwitchDeps: function () {
            const checkBox = document.querySelector('.show_switcher input[type=checkbox]');
            if (!checkBox) {
                return;
            }
            const checked = checkBox.checked;

            if (checked) {
                document.querySelector('.switcher_position, .switch_style').style.display = 'contents';
            } else {
                document.querySelector('.switcher_position, .switch_style').style.display = 'none';
            }
        },

        checkCustomize: function () {
            const checkBox = document.querySelector('.customize_colors input[type=checkbox]');
            if (!checkBox) {
                return;
            }


            const is_customized = checkBox.checked;

            const isPro = wpDarkModeAdmin.is_pro_active || wpDarkModeAdmin.is_ultimate_active;

            if (isPro && is_customized) {
                document.querySelectorAll('.darkmode_bg_color, .darkmode_text_color, .darkmode_link_color').forEach((element) => {
                    element.style.display = 'table-row';
                });
            } else {
                document.querySelectorAll('.darkmode_bg_color, .darkmode_text_color, .darkmode_link_color').forEach((element) => {
                    element.style.display = 'none';
                });
            }
        },

        checkSwitchMenu: function () {
            const checkBox = document.querySelector('.enable_menu_switch input[type=checkbox]');
            if (!checkBox) {
                return;
            }
            const is_on = checkBox.checked;

            if (is_on) {
                document.querySelector('.switch_menus').style.display = 'table-row';
            } else {
                document.querySelector('.switch_menus').style.display = 'none';
            }
        },

        checkCategories: function () {
            const checkBox = document.querySelector('.specific_category input[type=checkbox]');
            if (!checkBox) {
                return;
            }

            const is_on = checkBox.checked;

            if (is_on) {
                document.querySelector('.specific_categories').style.display = 'table-row';
            } else {
                document.querySelector('.specific_categories').style.display = 'none';
            }
        },

        checkSwitchText: function () {
            const checkBox = document.querySelector('.custom_switch_text input[type=checkbox]');
            if (!checkBox) {
                return;
            }
            const is_on = checkBox.checked;

            if (is_on) {
                document.querySelector('.switch_text_light').style.display = 'table-row';
                document.querySelector('.switch_text_dark').style.display = 'table-row';
            } else {
                document.querySelector('.switch_text_light').style.display = 'none';
                document.querySelector('.switch_text_dark').style.display = 'none';
            }
        },

        checkSwitchIcon: function () {
            const checkBox = document.querySelector('.custom_switch_icon input[type=checkbox]');
            if (!checkBox) {
                return;
            }
            const is_on = checkBox.checked;

            if (is_on) {
                document.querySelector('.switch_icon_light').style.display = 'table-row';
                document.querySelector('.switch_icon_dark').style.display = 'table-row';
            } else {
                document.querySelector('.switch_icon_light').style.display = 'none';
                document.querySelector('.switch_icon_dark').style.display = 'none';
            }
        },

        checkTimeBasedDeps: function () {

            const checkBox = document.querySelector('.time_based_mode input[type=checkbox]');
            if (!checkBox) {
                return;
            }

            if (checkBox.checked) {
                document.querySelector('.start_at').classList.remove('hidden');
                document.querySelector('.end_at').classList.remove('hidden');
            } else {
                document.querySelector('.start_at').classList.add('hidden');
                document.querySelector('.end_at').classList.add('hidden');
            }
        },

    };

    document.addEventListener('DOMContentLoaded', app.init);

})();