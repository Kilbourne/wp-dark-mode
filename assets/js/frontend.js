;(function ($) {

    var darkClass = 'wp-dark-mode-active';

    var app = {

        init: function () {

            /** block from admin side */
            if (typeof wpDarkModeAdmin === 'undefined') {
                app.checkOsMode();
            }

            if (typeof elementor === 'undefined') {
                app.initDarkmode();
            }

            app.excludeBGELements();

            $(document).on('change', '.wp-dark-mode-switch', app.handleToggle);
            $(window).on('darkmodeInit', app.checkDarkMode);

        },

        /** initialize object holder */
        darkMode: null,

        initDarkmode: function () {
            var is_saved = sessionStorage.getItem('wp_dark_mode_frontend');

            if (1 == is_saved) {
                $('html').addClass('wp-dark-mode-active');
                app.checkDarkMode();
                $(window).trigger('darkmodeInit');
            }
        },

        excludeBGELements: function () {
            $('div, section').each(function () {

                if ($(this).css('background-image') != 'none') {
                    $(this).add($(this).find('*')).addClass('wp-dark-mode-ignore');
                }

            });
        },

        /** handle dark mode toggle */
        handleToggle: function () {
            $('html').toggleClass(darkClass);
            app.checkDarkMode();

            var is_saved = $(this).is(':checked') ? 1 : 0;

            if (typeof wpDarkModeProFrontend !== 'undefined') {
                is_saved = wpDarkModeProFrontend.remember_darkmode ? 1 : 0;
            }

            sessionStorage.setItem('wp_dark_mode_frontend', is_saved);
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
            if (!wpDarkModeFrontend.enable_darkmode) {
                return;
            }


            var darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            try {
                // Chrome & Firefox
                darkMediaQuery.addEventListener('change', function (e) {
                    var newColorScheme = e.matches ? 'dark' : 'light';

                    if ('dark' === newColorScheme) {
                        $('html').addClass(darkClass);
                        $(window).trigger('darkmodeInit');
                    } else {
                        $('html').removeClass(darkClass);
                    }
                });
            } catch (e1) {
                try {
                    // Safari
                    darkMediaQuery.addListener(function (e) {
                        var newColorScheme = e.matches ? 'dark' : 'light';

                        if ('dark' === newColorScheme) {
                            $('html').addClass(darkClass);
                        } else {
                            $('html').removeClass(darkClass);
                        }
                    });
                } catch (e2) {
                    console.error(e2);
                }
            }

            /** check init dark theme */
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                $('html').addClass(darkClass);
                $(window).trigger('darkmodeInit');
            }

        }

    };

    $(document).ready(app.init);


})(jQuery);