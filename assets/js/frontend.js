import {createHooks} from '@wordpress/hooks';

window.wpDarkModeHooks = createHooks();

(function () {

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

            const darkmodeSwitch = document.querySelector('.wp-dark-mode-switch');
            if (darkmodeSwitch) {
                darkmodeSwitch.addEventListener('click', app.handleToggle);
                darkmodeSwitch.addEventListener('change', app.handleExcludes);
            }

            app.checkDarkMode();
            app.handleExcludes();

            window.addEventListener('darkmodeInit', app.checkDarkMode);
            window.addEventListener('darkmodeInit', app.handleExcludes);
            window.addEventListener('darkmodeInit', app.excludeBGELements);


            setTimeout(app.handleExcludes, 1000);
            setTimeout(app.handleExcludes, 2000);
            setTimeout(app.handleExcludes, 3000);


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

            if(typeof wpDarkModeFrontend === 'undefined'){
                return;
            }

            const elements = document.querySelectorAll('header, footer, div, section');

            elements.forEach((element) => {
                const bi = window.getComputedStyle(element, false).backgroundImage;
                const parallax = element.getAttribute('data-jarallax-original-styles');

                if (bi !== 'none' || parallax) {
                    element.classList.add('wp-dark-mode-ignore');
                    element.querySelectorAll('*').forEach((child) => child.classList.add('wp-dark-mode-ignore'));
                }
            });

        },

        handleToggle: function () {

            const html = document.querySelector('html');
            html.classList.toggle('wp-dark-mode-active');
            app.checkDarkMode();

            const is_saved = html.classList.contains('wp-dark-mode-active') ? 1 : 0;

            if (typeof wpDarkModeAdmin === 'undefined') {
                sessionStorage.setItem('wp_dark_mode_frontend', is_saved);
                localStorage.setItem('wp_dark_mode_active', is_saved);
            } else {
                sessionStorage.setItem('wp_dark_mode_admin', is_saved);
            }

            window.dispatchEvent(new Event('darkmodeInit'));
        },

        /** check if the darkmode is active or not on initialize */
        checkDarkMode: () => {
            if (document.querySelector('html').classList.contains('wp-dark-mode-active')) {
                DarkReader.enable({
                    brightness: 100,
                    contrast: 90,
                    sepia: 10
                });
                document.querySelectorAll('.wp-dark-mode-switcher').forEach((switcher) => switcher.classList.add('active'));
            } else {
                DarkReader.disable();
                document.querySelectorAll('.wp-dark-mode-switcher').forEach((switcher) => switcher.classList.remove('active'));
            }
        },

        checkOsMode: function () {

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