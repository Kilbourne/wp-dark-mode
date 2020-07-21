;(function ($) {

    const app = {

        init: () => {
            app.checkDesc();

            $('.enable_darkmode input[type=checkbox]').on('change', app.checkDesc);
        },

        checkDesc: function () {
            var is_darkmode_enabled = $('.enable_darkmode input[type=checkbox]').is(':checked');

            if (is_darkmode_enabled) {
                $('.disable_darkmode .description').show();
            } else {
                $('.disable_darkmode .description').hide();
            }
        }

    };

    $(document).ready(app.init);
})(jQuery);
