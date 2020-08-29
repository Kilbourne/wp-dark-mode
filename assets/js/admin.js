;(function ($) {

    var app = {

        init: function(){
            app.initDarkmode();

            app.checkDesc();
            app.checkSwitchdDeps();

            $('.enable_darkmode input[type=checkbox]').on('change', app.checkDesc);
            $('.show_switcher input[type=checkbox]').on('change', app.checkSwitchdDeps);

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

    };

    $(document).ready(app.init);
})(jQuery);

