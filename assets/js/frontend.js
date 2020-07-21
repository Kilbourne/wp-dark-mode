;(function ($) {

    const darkClass = 'wp-dark-mode-active';

    const app = {

        init: () => {
            app.initDarkMode();
            app.checkDarkMode();
            app.checkOsMode();

            $(document).on('change', '.wp-dark-mode-switch', app.handleToggle);

        },

        /** initialize object holder */
        darkMode: null,

        /** init dark mode */
        initDarkMode: function () {
            //$('body').addClass(darkClass);
        },

        /** handle dark mode toggle */
        handleToggle: function () {
            $('body').toggleClass(darkClass);
            app.checkDarkMode();
        },

        /** check if the darkmode is active or not on initialize */
        checkDarkMode: function () {
            if ($('body').hasClass(darkClass)) {
                $('.wp-dark-mode-switch').prop('checked', true);

            } else {
                $('.wp-dark-mode-switch').prop('checked', false);
            }
        },

        checkOsMode: function () {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                $('body').addClass(darkClass);
            }


            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
                const newColorScheme = e.matches ? "dark" : "light";

                if ('dark' === newColorScheme) {
                    $('body').addClass(darkClass);
                } else {
                    $('body').removeClass(darkClass);
                }

            });

            /**IOS*/
            window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
                const newColorScheme = e.matches ? "dark" : "light";

                if ('dark' === newColorScheme) {
                    $('body').addClass(darkClass);
                } else {
                    $('body').removeClass(darkClass);
                }
            });

        }

    };

    $(document).ready(app.init);
})(jQuery);