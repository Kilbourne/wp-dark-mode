;(function ($) {

    const app = {

        init: () => {
            app.checkDesc();
            app.checkTimeBasedDeps();
            app.checkSwitchdDeps();
            app.checkCustomize();

            $('.enable_darkmode input[type=checkbox]').on('change', app.checkDesc);
            $('.time_based_mode input[type=checkbox]').on('change', app.checkTimeBasedDeps);
            $('.show_switcher input[type=checkbox]').on('change', app.checkSwitchdDeps);
            $('.customize_colors input[type=checkbox]').on('change', app.checkCustomize);
        },

        checkCustomize: function () {
            var is_customized = $('.customize_colors input[type=checkbox]').is(':checked');

            if (is_customized) {

                $('.darkmode_bg_color, .darkmode_text_color, .darkmode_links_color').show();
            } else {
                $('.darkmode_bg_color, .darkmode_text_color, .darkmode_links_color').hide();
            }
        },

        checkDesc: function () {
            var is_darkmode_enabled = $('.enable_darkmode input[type=checkbox]').is(':checked');

            if (is_darkmode_enabled) {
                $('.enable_darkmode .description').show();
            } else {
                $('.enable_darkmode .description').hide();
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

    };

    $(document).ready(app.init);
})(jQuery);

