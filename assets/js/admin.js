;(function () {

    const app = {
        init: () => {
            app.initDarkmode();
            app.blockSwitches();
            app.blockPresets();

            app.checkDesc();
            app.checkSwitchdDeps();
            app.checkCustomize();

            const enable_darkmode_checkbox = document.querySelector('.enable_os_mode input[type=checkbox]');
            if (enable_darkmode_checkbox) {
                enable_darkmode_checkbox.addEventListener('change', app.checkDesc);
            }

            const show_switcher_checkbox = document.querySelector('.show_switcher input[type=checkbox]');
            if (show_switcher_checkbox) {
                show_switcher_checkbox.addEventListener('change', app.checkSwitchdDeps);
            }

            const customize_colors_checkbox = document.querySelector('.customize_colors input[type=checkbox]');
            if (customize_colors_checkbox) {
                customize_colors_checkbox.addEventListener('change', app.checkCustomize);
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
                div.classList.add('disabled-text','wp-dark-mode-ignore');

                image_opt.appendChild(div);
            });

            document.querySelectorAll('.switcher_position, .show_above_post, .show_above_page, .excludes, .exclude_pages').forEach((element) => {
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
            if(customize_colors_checkbox){
                customize_colors_checkbox.classList.add('disabled');
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

        checkSwitchdDeps: function () {
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

            if (is_customized) {
                document.querySelectorAll('.darkmode_bg_color, .darkmode_text_color, .darkmode_link_color').forEach((element) => {
                    element.style.display = 'table-row';
                });
            } else {
                document.querySelectorAll('.darkmode_bg_color, .darkmode_text_color, .darkmode_link_color').forEach((element) => {
                    element.style.display = 'none';
                });
            }
        },

    };

    document.addEventListener('DOMContentLoaded', app.init);

})();

