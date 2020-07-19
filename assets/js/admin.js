;(function ($) {

    const app = {

        init: () => {
            app.checkTimeBasedDeps();
            app.checkSwitchdDeps();
            app.checkStyleDeps();

            $('.time_based_mode input[type=checkbox]').on('change', app.checkTimeBasedDeps);
            $('.show_switcher input[type=checkbox]').on('change', app.checkSwitchdDeps);
            $('.customize_color input[type=checkbox]').on('change', app.checkStyleDeps);
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
        }

    };

    $(document).ready(app.init);
})(jQuery);
