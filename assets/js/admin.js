;(function () {

    const app = {
        init: () => {
            app.initDarkmode();
            app.blockSwitches();
            app.blockPresets();

            app.checkDesc();
            app.checkSwitchdDeps();
            app.checkCustomize();

            app.checkSwitchMenu();

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

            const switch_menu_checkbox = document.querySelector('.enable_menu_switch input[type=checkbox]');
            if (switch_menu_checkbox) {
                switch_menu_checkbox.addEventListener('change', app.checkSwitchMenu);
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

            document.querySelectorAll(`.switch_text_light, .switch_text_dark, .show_above_post, .show_above_page, .excludes, .exclude_pages, .exclude_pages, .enable_menu_switch, .switch_menus`).forEach((element) => {
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

    };

    document.addEventListener('DOMContentLoaded', app.init);

})();


if (wpDarkModeAdmin.is_pro_active) {

    if (String(wpDarkModeAdmin.pro_version) < '1.0.3') {
        ;(function () {
            const app = {

                init: () => {

                    //block color presets
                    app.blockPresets();

                    if (wpDarkModeProAdmin.is_valid_license) {

                        app.checkTimeBasedDeps();

                        const time_based_switch = document.querySelector('.time_based_mode input[type=checkbox]');
                        if (time_based_switch) {
                            time_based_switch.addEventListener('change', app.checkTimeBasedDeps);
                        }
                    }

                    //admin switch
                    const admin_switch = document.querySelector('.wp-admin .wp-dark-mode-switch');
                    if (admin_switch) {
                        admin_switch.addEventListener('change', app.handleSwitch);
                    }

                    //widget switch style
                    document.querySelectorAll('.switch-style-choose-group input').forEach(element => {
                        element.addEventListener('change', app.handleWidgetImages)
                    })

                },

                blockPresets: function () {

                    if (wpDarkModeAdmin.is_ultimate_active) {
                        return;
                    }

                    const image_opts = document.querySelectorAll('.color_preset .image-choose-opt');
                    image_opts.forEach((image_opt, i) => {
                        if (i < 5) {
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

                handleSwitch: function (e) {
                    const is_checked = e.target.checked;

                    sessionStorage.setItem('wp_dark_mode_admin', is_checked ? 1 : 0);
                },

                handleWidgetImages: function (e) {
                    document.querySelectorAll('.switch-style-choose-group').forEach(element => {
                        element.classList.remove('checked');
                    });

                    e.target.parentNode.classList.add('checked');
                },

            };

            document.addEventListener('DOMContentLoaded', app.init)
        })();
    }
}


if (wpDarkModeAdmin.is_ultimate_active) {

    if (String(wpDarkModeAdmin.pro_version) < '1.0.3') {

        ;(function () {
            const app = {
                init: () => {
                    document.querySelectorAll('.add_row').forEach(element => {
                        element.addEventListener('click', app.addRow);
                    });

                    document.querySelectorAll('.remove_row').forEach(element => {
                        element.addEventListener('click', app.removeRow);
                    });
                },

                addRow: function (e) {
                    e.preventDefault();

                    const html = `<td><input type="url" value="" name="wp_dark_mode_image_settings[light_images][]">
                            </td>
                            <td>
                                <input type="url" value="" name="wp_dark_mode_image_settings[dark_images][]">
                            </td>
                            <td>
                                <a href="#" class="add_row button button-primary">Add</a>
                                <a href="#" class="remove_row button button-link-delete">Remove</a>
                            </td>`;

                    const tr = document.createElement('TR');
                    tr.innerHTML = html;

                    tr.querySelector('.add_row').addEventListener('click', app.addRow);
                    tr.querySelector('.remove_row').addEventListener('click', app.removeRow);

                    document.querySelector('.image-settings-table tbody').appendChild(tr);

                },

                removeRow: function (e) {
                    e.preventDefault();

                    e.target.parentNode.parentNode.remove();
                }

            };

            document.addEventListener('DOMContentLoaded', app.init);
        })();

    }
}
