;(function ($) {

    const app = {

        init: () => {
            app.initDarkMode();
            app.checkDarkMode();
            $(document).on('change', '.wp-dark-mode-switch', app.handleToggle);
        },

        /** initialize object holder */
        darkMode: null,


        /** check if the darkmode is active or not on initialize */
        checkDarkMode: function () {
            if (app.darkMode.isActivated()) {
                $('.wp-dark-mode-switch').prop('checked', true);
                //app.handleTextColor();

            } else {
                $('.wp-dark-mode-switch').prop('checked', false);
                //$('html *').removeClass('darkmode-text-color');
            }
        },

        /** init dark mode */
        initDarkMode: function () {
            var options = {
                saveInCookies: wpDarkModeFrontend.saveMode,
            };

            app.darkMode = new Darkmode(options);

            /*-------- check os mode --------*/
            if (wpDarkModeFrontend.matchSystem) {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    if (!app.darkMode.isActivated()) {
                        app.darkMode.toggle();
                    }
                }
            }

        },

        /** handle dark mode toggle */
        handleToggle: function () {
            app.darkMode.toggle();
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

            endDate = new Date(currentDate.getTime());
            endDate.setHours(endTime.split(":")[0]);
            endDate.setMinutes(endTime.split(":")[1]);

            return startDate < currentDate && endDate > currentDate;
        },

        handleTextColor: function () {
            $(`html .darkmode--activated p,
            html .darkmode--activated li,
            html .darkmode--activated span,
            html .darkmode--activated h1:not(:has(a)),
            html .darkmode--activated h2:not(:has(a)),
            html .darkmode--activated h3:not(:has(a)),
            html .darkmode--activated h4:not(:has(a)),
            html .darkmode--activated h5:not(:has(a)),
            html .darkmode--activated h6:not(:has(a))`).addClass('darkmode-text-color');
        }

    };

    $(document).ready(app.init);
})(jQuery);