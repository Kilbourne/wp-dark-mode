;(function ($) {

    const app = {

        init: () => {
            app.checkTimeBasedDeps();
            app.checkSwitchdDeps();

            $('.time_based_mode input[type=checkbox]').on('change', app.checkTimeBasedDeps);
            $('.show_switcher input[type=checkbox]').on('change', app.checkSwitchdDeps);
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
                $('.switcher_position').show();
            } else {
                $('.switcher_position').hide();
            }
        }

    };

    $(document).ready(app.init);
})(jQuery);
