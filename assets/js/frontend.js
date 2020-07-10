;(function ($) {

    const app = {

        init: () => {
            app.initDarkMode();
            $('.wp-dark-mode-switch').on('change', app.handleToggle);
        },

        darkMode: null,

        initDarkMode: function () {

            var options = {
                bottom: '64px',
                right: 'unset',
                left: '32px',
                time: '0.5s',
                saveInCookies: true,
                label: '🌓',
                autoMatchOsTheme: true,
            };

            app.darkMode = new Darkmode(options);

        },

        handleToggle: function () {
            app.darkMode.toggle();
        }

    };

    $(document).ready(app.init);
})(jQuery);