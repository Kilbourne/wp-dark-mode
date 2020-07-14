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
                checkSystemScheme: wpDarkModeFrontend.matchSystem,
                saveOnToggle: wpDarkModeFrontend.saveMode
            };

            app.darkMode = new DarkMode(options);

            if (wpDarkModeFrontend.timeBasedMode) {
                app.setTimeBasedMode();
            }

        },

        /** handle dark mode toggle */
        handleToggle: function () {
            app.darkMode.toggleMode();
            app.checkDarkMode();
        },

        setTimeBasedMode: function () {
            if (app.checkTime(wpDarkModeFrontend.startAt, wpDarkModeFrontend.endAt)) {
                app.darkMode.setMode('dark');
            }
        },

        checkTime: function (startTime, endTime) {
            currentDate = new Date();

            startDate = new Date(currentDate.getTime());
            startDate.setHours(startTime.split(":")[0]);
            startDate.setMinutes(startTime.split(":")[1]);
            //startDate.setSeconds(startTime.split(":")[2]);

            endDate = new Date(currentDate.getTime());
            endDate.setHours(endTime.split(":")[0]);
            endDate.setMinutes(endTime.split(":")[1]);
            //endDate.setSeconds(endTime.split(":")[2]);


            return startDate < currentDate && endDate > currentDate;
        }

    };

    $(document).ready(app.init);
})(jQuery);