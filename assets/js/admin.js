;(function ($) {

    const app = {

        init: () => {
            app.checkDesc();
            app.checkSwitchdDeps();

            $('.enable_darkmode input[type=checkbox]').on('change', app.checkDesc);
            $('.show_switcher input[type=checkbox]').on('change', app.checkSwitchdDeps);
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

