;(function ($) {

    var app = {

        init: function(){
            app.initDarkmode();
            app.blockSwitches();
            app.blockPresets();

            app.checkDesc();
            app.checkSwitchdDeps();
            app.checkCustomize();


            $('.enable_darkmode input[type=checkbox]').on('change', app.checkDesc);
            $('.show_switcher input[type=checkbox]').on('change', app.checkSwitchdDeps);
            $('.customize_colors input[type=checkbox]').on('change', app.checkCustomize);


            $(document).on('click', '.add_row', app.addRow);
            $(document).on('click', '.remove_row', app.removeRow);
            $(document).on('click', '.close-promo', app.closePromo);

            if (wpDarkModeAdmin.is_settings_page) {
                wp.codeEditor.initialize($('.custom_css textarea'), wpDarkModeAdmin.cm_settings);
            }

            $('.exclude_pages select').select2({
                placeholder: 'Select Pages',
                multiple: true,
            });

            $(document).on('click', '.image-choose-opt.disabled', app.showPopup);
            $(document).on('click', '.form-table tr.disabled', app.showPopup);

        },

        initDarkmode: function () {
            var is_saved = sessionStorage.getItem('wp_dark_mode_admin');

            if (wpDarkModeAdmin.enable_backend && 1 == is_saved && !wpDarkModeAdmin.is_block_editor) {
                $('html').addClass('wp-dark-mode-active');
                $(window).trigger('darkmodeInit');
            }
        },

        closePromo: function () {
            $(this).closest('.promo').addClass('hidden');
        },

        addRow: function (e) {
            e.preventDefault();

            $(this).closest('tr').clone().appendTo('.image-settings-table tbody').find('input').val('');
        },

        removeRow: function (e) {
            e.preventDefault();
            $(this).closest('tr').remove();
        },

        checkDesc: function () {
            var is_darkmode_enabled = $('.enable_darkmode input[type=checkbox]').is(':checked');

            if (is_darkmode_enabled) {
                $('.enable_darkmode .description').show();
            } else {
                $('.enable_darkmode .description').hide();
            }
        },

        checkSwitchdDeps: function () {
            var checked = $('.show_switcher input[type=checkbox]').is(':checked');

            if (checked) {
                $('.switcher_position, .switch_style').show();
            } else {
                $('.switcher_position, .switch_style').hide();
            }
        },

        checkCustomize: function () {
            var is_customized = $('.customize_colors input[type=checkbox]').is(':checked');

            if (is_customized) {

                $('.darkmode_bg_color, .darkmode_text_color, .darkmode_link_color').show();
            } else {
                $('.darkmode_bg_color, .darkmode_text_color, .darkmode_link_color').hide();
            }
        },

        blockSwitches: function () {

            if (wpDarkModeAdmin.is_pro_active) {
                return;
            }

            $('.switch_style .image-choose-opt').slice(2).addClass('disabled').append('<div class="disabled-text"></div>');

            $('.switcher_position, .show_above_post, .show_above_page, .excludes, .exclude_pages').addClass('disabled');
        },

        blockPresets: function () {

            if (wpDarkModeAdmin.is_pro_active) {
                return;
            }

            $('.color_preset .image-choose-opt').slice(2).addClass('disabled').append('<div class="disabled-text"></div>');

            $('.customize_colors').addClass('disabled');
        },

        showPopup: function (e) {
            e.preventDefault();

            $(this).closest('table').next('.promo.hidden').removeClass('hidden');
        }

    };

    $(document).ready(app.init);
})(jQuery);

