;(function ($) {

    const darkClass = 'wp-dark-mode-active';

    const app = {

        init: () => {

            app.initDarkMode();

            /** block from admin side */
            if (typeof wpDarkModeAdmin === 'undefined') {
                app.checkOsMode();
            }

            app.checkDarkMode();
            app.excludeBGELements();

            $(document).on('change', '.wp-dark-mode-switch', app.handleToggle);
            $(window).on('darkmodeInit', app.checkDarkMode);

        },

        /** initialize object holder */
        darkMode: null,

        /** init dark mode */
        initDarkMode: function () {
            //$('html').addClass(darkClass);
        },

        excludeBGELements: function () {
            $("div, section").each(function () {

                if ($(this).css('background-image') != 'none') {
                    $(this).add($(this).find('*')).addClass('wp-dark-mode-ignore');
                }

            });
        },

        /** handle dark mode toggle */
        handleToggle: function () {
            $('html').toggleClass(darkClass);
            app.checkDarkMode();
        },

        /** check if the darkmode is active or not on initialize */
        checkDarkMode: function () {
            if ($('html').hasClass(darkClass)) {
                $('.wp-dark-mode-switch').prop('checked', true);

            } else {
                $('.wp-dark-mode-switch').prop('checked', false);
            }
        },

        checkOsMode: function () {

            if (typeof wpDarkModeProFrontend !== 'undefined') {
                if (!wpDarkModeProFrontend.match_os_mode) {
                    return;
                }
            }

            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    $('html').addClass(darkClass);
                $(window).trigger('darkmodeInit');
            }


            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
                const newColorScheme = e.matches ? "dark" : "light";

                if ('dark' === newColorScheme) {
                    $('html').addClass(darkClass);
                    $(window).trigger('darkmodeInit');
                } else {
                    $('html').removeClass(darkClass);
                }

            });

            /**IOS*/
            window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
                const newColorScheme = e.matches ? "dark" : "light";

                if ('dark' === newColorScheme) {
                    $('html').addClass(darkClass);
                } else {
                    $('html').removeClass(darkClass);
                }
            });

        }

    };

    $(document).ready(app.init);


})(jQuery);