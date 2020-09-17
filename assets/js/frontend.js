/**
 * Functions
 *
 * 1. Exclude BG Elements
 * 2. Handle Switch Toggle
 * 3. Check Darkmode
 * 4. Check OSMode
 * 5. Exclude Elements
 */

;(function () {
    const app = {

        init: () => {

            if (typeof wpDarkModeFrontend !== 'undefined' && wpDarkModeFrontend.is_excluded) {
                return;
            }

            if (typeof elementor === 'undefined') {
                app.initDarkmode();
            }

            if (typeof wpDarkModeAdmin === 'undefined') {

                if (sessionStorage.getItem('wp_dark_mode_frontend') != 0) { //block from admin side
                    app.checkOsMode();
                }
            }

            app.excludeBGELements();

            document.querySelector('.wp-dark-mode-switch').addEventListener('click', app.handleToggle);

            document.querySelector('.wp-dark-mode-switch').addEventListener('change', app.handleExcludes);

            app.checkDarkMode();
            app.handleExcludes();

            window.addEventListener('darkmodeInit', app.checkDarkMode);
            window.addEventListener('darkmodeInit', app.handleExcludes);
        },

        initDarkmode: function () {

            if (typeof wpDarkModeAdmin !== 'undefined') {
                return;
            }

            var is_saved = sessionStorage.getItem('wp_dark_mode_frontend');

            if (1 == is_saved) {
                document.querySelector('html').classList.add('wp-dark-mode-active');
                app.checkDarkMode();
            }

            window.dispatchEvent(new Event('darkmodeInit'));
        },

        excludeBGELements: function () {
            const elements = document.querySelectorAll('div, section');

            elements.forEach((element) => {
                const bi = window.getComputedStyle(element, false).backgroundImage;
                if (bi !== 'none') {
                    element.classList.add('wp-dark-mode-ignore');
                    element.querySelectorAll('*').forEach((child) => child.classList.add('wp-dark-mode-ignore'));
                }
            });

        },

        handleToggle: function () {
            const html = document.querySelector('html');
            html.classList.toggle('wp-dark-mode-active');

            document.querySelectorAll('.wp-dark-mode-switcher').forEach((switcher) => switcher.classList.toggle('active'));

            app.checkDarkMode();

            const is_saved = html.classList.contains('wp-dark-mode-active') ? 1 : 0;

            if (typeof wpDarkModeAdmin === 'undefined') {
                sessionStorage.setItem('wp_dark_mode_frontend', is_saved);
            } else {
                sessionStorage.setItem('wp_dark_mode_admin', is_saved);
            }

            window.dispatchEvent(new Event('darkmodeInit'));
        },

        /** check if the darkmode is active or not on initialize */
        checkDarkMode: () => {
            if (document.querySelector('html').classList.contains('wp-dark-mode-active')) {
                document.querySelectorAll('.wp-dark-mode-switcher').forEach((switcher) => switcher.classList.add('active'));
            } else {
                document.querySelectorAll('.wp-dark-mode-switcher').forEach((switcher) => switcher.classList.remove('active'));
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
                        document.querySelector('html').classList.add('wp-dark-mode-active');
                    } else {
                        document.querySelector('html').classList.remove('wp-dark-mode-active');
                    }

                    window.dispatchEvent(new Event('darkmodeInit'));

                });
            } catch (e1) {
                try {
                    // Safari
                    darkMediaQuery.addListener(function (e) {
                        var newColorScheme = e.matches ? 'dark' : 'light';

                        if ('dark' === newColorScheme) {
                            document.querySelector('html').classList.add('wp-dark-mode-active');
                        } else {
                            document.querySelector('html').classList.remove('wp-dark-mode-active');
                        }

                        window.dispatchEvent(new Event('darkmodeInit'));

                    });
                } catch (e2) {
                    console.error(e2);
                }
            }

            /** check init dark theme */
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.querySelector('html').classList.add('wp-dark-mode-active');
                window.dispatchEvent(new Event('darkmodeInit'));
            }

        },

        handleExcludes: function () {

            if (typeof wpDarkModeFrontend === 'undefined') {
                return;
            }

            const elements = document.querySelectorAll(wpDarkModeFrontend.excludes);

            elements.forEach((element) => {
                element.classList.add('wp-dark-mode-ignore');
                const children = element.querySelectorAll('*');

                children.forEach((child) => {
                    child.classList.add('wp-dark-mode-ignore');
                })
            });
        },

    };

    document.addEventListener('DOMContentLoaded', app.init);

})();