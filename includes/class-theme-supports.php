<?php

defined( 'ABSPATH' ) || exit();

class WP_Dark_Mode_Theme_Supports {
	private static $instance = null;

	public function __construct() {
		add_action( 'wp_head', [ $this, 'theme_header' ] );
		//add_action( 'wp_footer', [ $this, 'theme_js' ] );
		add_filter('wp_dark_mode/not', [$this, 'not_selectors']);

		add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
		add_filter( 'wp_dark_mode/excludes', [ $this, 'excludes' ] );
	}

	public function excludes( $excludes ) {

		if ($this->is_theme('Jannah')) {
			$excludes .= ", .post-thumb-overlay-wrap, .post-thumb-overlay";
		}

		if ($this->is_theme('OceanWP')) {
			$excludes .= ", .wcmenucart-details";
		}

		if ( $this->is_theme( 'Salient' ) ) {
			$excludes .= ", .slide_out_area_close";
		}

		if ( $this->is_theme( 'Twenty Twenty' ) ) {
			$excludes .= ", .search-toggle, .woocommerce-product-gallery__trigger .emoji";
		}

		if ( $this->is_theme( 'Flatsome' ) ) {
			$excludes .= ", .section-title b, .box, .is-divider, .blog-share, .slider-wrapper";
		}

		if ( $this->is_theme( 'Avada' ) ) {
			$excludes .= ", .fusion-column-inner-bg-wrapper, .fusion-progressbar, .fusion-sliding-bar-wrapper, .fusion-button";
		}

		return $excludes;
	}

	public function is_theme($theme){
		$theme = wp_get_theme();

		$theme_name        = $theme->name;
		$theme_parent_name = !empty($theme->parent()->name) ? $theme->parent()->name : '';

		return in_array( $theme, [ $theme_name, $theme_parent_name ] ) ;

	}

	public function theme_header() {

		if ( $this->is_theme('Astra')) {
			$this->astra_css();
		}

		if ($this->is_theme('Jannah')) {

		}

		if($this->is_theme('Twenty Twenty')){

        }

		if ( $this->is_theme( 'Salient' ) ) {
			?>
            <script>
                var target = document.querySelector('html');
                // create an observer instance
                var observer = new MutationObserver(function(mutations) {
                    var is_saved = sessionStorage.getItem('wp_dark_mode_frontend');
                    if (is_saved && is_saved != 0) {
                        document.querySelector('html').classList.add('wp-dark-mode-active');
                    }

					<?php

					//check os aware mode
					if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_os_mode', 'on' ) ) {
					?>

                    if (!is_saved || is_saved == 0) {
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
					<?php
					}
					?>


                });
                // configuration of the observer:
                var config = {  childList: true, characterData: true };
                // pass in the target node, as well as the observer options
                observer.observe(target, config);
            </script>
            <?php
		}

	}

	public function not_selectors($selectors){
		if ($this->is_theme('Jannah')) {
			$selectors = ':not(.breaking-title-text):not(.shopping-cart-icon):not(.menu-counter-bubble-outer):not(.menu-counter-bubble)';
		}

		return $selectors;
    }

    public function enqueue_scripts(){
	    if ($this->is_theme('Jannah')) {
	        wp_enqueue_style('wp-dark-mode-jannah', wp_dark_mode()->plugin_url('assets/css/themes/jannah.css'));
        }

	    if ($this->is_theme('OceanWP')) {
	        wp_enqueue_style('wp-dark-mode-salient', wp_dark_mode()->plugin_url('assets/css/themes/oceanwp.css'));
        }

	    if ($this->is_theme('Salient')) {
	        wp_enqueue_style('wp-dark-mode-salient', wp_dark_mode()->plugin_url('assets/css/themes/salient.css'));
        }

	    if ($this->is_theme('Twenty Twenty')) {
	        wp_enqueue_style('wp-dark-mode-twentytwenty', wp_dark_mode()->plugin_url('assets/css/themes/twentytwenty.css'));
        }

	    if ($this->is_theme('Salient')) {
	        wp_enqueue_style('wp-dark-mode-salient', wp_dark_mode()->plugin_url('assets/css/themes/salient.css'));
        }

	    if ($this->is_theme('Flatsome')) {
	        wp_enqueue_style('wp-dark-mode-flatsome', wp_dark_mode()->plugin_url('assets/css/themes/flatsome.css'));
        }

	    if ($this->is_theme('Avada')) {
	        wp_enqueue_style('wp-dark-mode-avada', wp_dark_mode()->plugin_url('assets/css/themes/avada.css'));
        }

    }

	public function astra_css() { ?>
        <style>
           .wp-dark-mode-active .widget.widget_search .search-submit {
                opacity: 0;
            }
        </style>
	<?php }

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}

WP_Dark_Mode_Theme_Supports::instance();