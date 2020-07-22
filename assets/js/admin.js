;(function ($) {

    const app = {

        init: () => {
            app.checkTimeBasedDeps();
            app.checkSwitchdDeps();
            app.checkStyleDeps();
            app.checkDesc();

            $('.enable_darkmode input[type=checkbox]').on('change', app.checkDesc);
            $('.time_based_mode input[type=checkbox]').on('change', app.checkTimeBasedDeps);
            $('.show_switcher input[type=checkbox]').on('change', app.checkSwitchdDeps);
            $('.customize_color input[type=checkbox]').on('change', app.checkStyleDeps);
        },

        checkDesc: function () {
            var is_darkmode_enabled = $('.enable_darkmode input[type=checkbox]').is(':checked');

            if (is_darkmode_enabled) {
                $('.disable_darkmode .description').show();
            } else {
                $('.disable_darkmode .description').hide();
            }
        },

        checkTimeBasedDeps: function () {
            var checked = $('.time_based_mode input[type=checkbox]').is(':checked');

            if (checked) {
                $('.start_at, .end_at').show();
            } else {
                $('.start_at, .end_at').hide();
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

        checkStyleDeps: function () {
            var checked = $('.customize_color input[type=checkbox]').is(':checked');

            if (checked) {
                $('.darkmode_bg_color, .darkmode_text_color, .darkmode_links_color').show();
            } else {
                $('.darkmode_bg_color, .darkmode_text_color, .darkmode_links_color').hide();
            }
        },

        checkDesc: function () {
            var is_darkmode_disabled = $('.disable_darkmode input[type=checkbox]').is(':checked');

            if (is_darkmode_disabled) {
                $('.disable_darkmode .description').hide();
            } else {
                $('.disable_darkmode .description').show();
            }
        }

    };

    $(document).ready(app.init);
})(jQuery);

