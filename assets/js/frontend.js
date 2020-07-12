;(function ($) {

    const app = {

        init: () => {
            app.initDarkMode();
            app.checkDarkMode();
            $('.wp-dark-mode-switch').on('change', app.handleToggle);
        },

        /** initialize object holder */
        darkMode: null,

        /** check if the darkmode is active or not on initialize */
        checkDarkMode: function () {
            if ('dark' === app.darkMode.getMode()) {
                $('.wp-dark-mode-switch').prop('checked', true);
            } else {
                $('.wp-dark-mode-switch').prop('checked', false);
            }
        },

        /** init dark mode */
        initDarkMode: function () {

            var options = {
                dark: wpDarkModeFrontend.pluginUrl + 'assets/css/dark.css',
                light: wpDarkModeFrontend.pluginUrl + 'assets/css/light.css',
                startAt: wpDarkModeFrontend.startAt,
                endAt: wpDarkModeFrontend.endAt,
                checkSystemScheme: wpDarkModeFrontend.matchSystem,
                saveOnToggle: wpDarkModeFrontend.saveMode
            };

            app.darkMode = new DarkMode(options);

        },

        /** handle dark mode toggle */
        handleToggle: function () {
            app.darkMode.toggleMode();
            app.checkDarkMode();
        }

    };

    $(document).ready(app.init);
})(jQuery);