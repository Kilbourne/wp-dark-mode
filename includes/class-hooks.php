<?php

/** Block direct access */
defined( 'ABSPATH' ) || exit();

/** check if class `WP_Dark_Mode_Hooks` not exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Hooks' ) ) {
	class WP_Dark_Mode_Hooks {

		/**
		 * @var null
		 */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Hooks constructor.
		 */
		public function __construct() {
			add_action( 'rest_api_init', array( $this, 'rest_api' ) );

			add_action( 'wp_head', [ $this, 'dark_styles' ] );

			/** display the dark mode switcher if the dark mode enabled on frontend */
			if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'show_switcher', 'on' ) ) {
				add_action( 'wp_footer', [ $this, 'display_widget' ] );
			}

			add_action( 'wsa_form_bottom_wp_dark_mode_advanced', [ $this, 'pro_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_advanced', [ $this, 'ultimate_promo' ] );

			add_action( 'wsa_form_bottom_wp_dark_mode_display', [ $this, 'pro_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_display', [ $this, 'ultimate_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_style', [ $this, 'ultimate_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_style', [ $this, 'pro_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_image_settings', [ $this, 'ultimate_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_custom_css', [ $this, 'ultimate_promo' ] );

			if ( is_admin() && 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'off' ) ) {
				add_action( 'admin_bar_menu', [ $this, 'render_admin_switcher_menu' ], 2000 );
				add_action( 'admin_head', [ $this, 'dark_styles' ] );
			}

			add_filter( 'wp_dark_mode/not', [ $this, 'not_selectors' ] );

			add_action( 'admin_init', [ $this, 'init_update' ] );

			add_filter( 'wp_dark_mode/excludes', [ $this, 'excludes' ] );

			//add_action( 'admin_init', [ $this, 'display_notice' ] );

			/** hide black friday notice */
			//add_action( 'wp_ajax_hide_black_friday_notice', [ $this, 'hide_black_friday_notice' ] );

            add_action('admin_footer', [$this, 'display_promo']);

		}

		public function display_promo(){

			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

		    if(wp_dark_mode_is_gutenberg_page()){
			    wp_dark_mode()->get_template( 'admin/promo', ['is_hidden' => true] );
		    }
        }

//		public function hide_black_friday_notice() {
//			update_option( 'wp_dark_mode_hide_black_friday_notice', true );
//			update_option( sanitize_key( 'wp_dark_mode_notices' ), [] );
//			die();
//		}

//		public function display_notice() {
//
//			if ( get_option( 'wp_dark_mode_hide_black_friday_notice' ) ) {
//				return;
//			}
//
//			/** display the black-friday notice if the pro version is not activated */
//			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
//				return;
//			}
//
//			$message = '<h4>Enjoy upto 75% OFF on WP Dark Mode. Get Your Black Friday <a href="https://wppool.dev/wp-dark-mode" target="_blank">Deals Now</a></h4>';
//
//			wp_dark_mode()->add_notice( 'info is-dismissible', $message );
//
//		}

		/**
		 * Exclude elements
		 *
		 * @param $excludes
		 *
		 * @return string
		 */
		public function excludes( $excludes ) {

		    /** exclude rev slider */
		    if(class_exists('RevSliderFront')){
		        $excludes .= ', rs-fullwidth-wrap';
            }

			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				$selectors = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'excludes', '' );

				if ( ! empty( $selectors ) ) {
					$excludes .= ", $selectors";
				}
			}

			return $excludes;
		}

		public function init_update() {

			if ( class_exists( 'WP_Dark_Mode_Update' ) && current_user_can( 'manage_options' ) ) {
				$updater = new WP_Dark_Mode_Update();
				if ( $updater->needs_update() ) {
					$updater->perform_updates();
				}
			}
		}

		public function not_selectors( $selectors ) {

			$excludes = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'excludes', '' );

			$excludes = trim( $excludes, ',' );
			$excludes = explode( ',', $excludes );

			if ( ! empty( $excludes ) ) {
				foreach ( $excludes as $exclude ) {
				    $exclude = trim($exclude);
					$selectors .= ":not($exclude)";
				}
			}

			//elementor
			if ( defined( 'ELEMENTOR_VERSION' ) ) {
				$selectors .= ':not(.elementor-element-overlay):not(.elementor-background-overlay)';
			}

			//buddypress
			if ( class_exists( 'BuddyPress' ) ) {
				$selectors .= ':not(#item-header-cover-image):not(#item-header-avatar):not(.activity-content):not(.activity-header)';
			}

			return $selectors;
		}

		/**
		 * display dark mode switcher button on the admin bar menu
		 */
		public function render_admin_switcher_menu() {

			if ( class_exists( 'Dark_mode' ) ) {
				return;
			}

			$light_text = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_text_light', 'Light' );
			$dark_text  = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_text_dark', 'Dark' );

			global $wp_admin_bar;
			$wp_admin_bar->add_menu( array(
				'id'    => 'wp-dark-mode',
				'title' => sprintf( '<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
                            <div class="wp-dark-mode-switcher wp-dark-mode-ignore">
                            
                                <label for="wp-dark-mode-switch">
                                    <div class="toggle"></div>
                                    <div class="modes">
                                        <p class="light">%s</p>
                                        <p class="dark">%s</p>
                                    </div>
                                </label>
                            
                            </div>', $light_text, $dark_text ),
				'href'  => '#',
			) );
		}

		/**
		 * display the footer widget
		 */
		public function display_widget() {
			global $post;

			if ( ! wp_dark_mode_enabled() ) {
				return false;
			}

			if ( isset( $post->ID ) && in_array( $post->ID, wp_dark_mode_exclude_pages() ) ) {
				return;
			}

			$style = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_style', 1 );

			global $wp_dark_mode_license;
			if ( ! $wp_dark_mode_license || ! $wp_dark_mode_license->is_valid() ) {
				$style = $style > 2 ? 1 : $style;
			}

			echo do_shortcode( '[wp_dark_mode floating="yes" style="' . $style . '"]' );
		}

		/**
		 * Display promo popup to upgrade to PRO
		 *
		 * @param $section - setting section
		 */
		public function pro_promo( $section ) {

			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			$args = [];

			if ( ! empty( $section ) && in_array( $section['id'], [ 'wp_dark_mode_display', 'wp_dark_mode_style' ] ) ) {
				$args['is_hidden']    = true;
				$args['is_pro_promo'] = true;
			}

			wp_dark_mode()->get_template( 'admin/promo', $args );
		}

		/**
		 * Display promo popup to upgrade to Ultimate
		 *
		 * @param $section - setting section
		 */
		public function ultimate_promo( $section ) {

			if ( wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			$args = [];

			if ( ! empty( $section ) && in_array( $section['id'], [ 'wp_dark_mode_advanced', 'wp_dark_mode_display', 'wp_dark_mode_style' ] ) ) {
				$args['is_hidden'] = true;
			}

			wp_dark_mode()->get_template( 'admin/promo', $args );
		}

		/**
		 * Dark style scripts
		 */
		public function dark_styles() {

			if ( ! is_admin() && ! wp_dark_mode_enabled() ) {
				return false;
			}

			global $post;
			if ( isset( $post->ID ) && in_array( $post->ID, wp_dark_mode_exclude_pages() ) ) {
				return false;
			}

			$preset = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'color_preset', '0' );

			if ( is_admin() ) {
				$preset = 0;
			}

			$colors = wp_dark_mode_color_presets( $preset );

			$bg_color     = $colors['bg'];
			$text_color   = $colors['text'];
			$link_color   = $colors['link'];
			$border_color = wp_dark_mode_lighten( $bg_color, 30 );
			$btn_bg_color = wp_dark_mode_lighten( $bg_color, 20 );

			if ( ! is_admin() ) {
				$bg_color     = apply_filters( 'wp_dark_mode/bg_color', $bg_color );
				$text_color   = apply_filters( 'wp_dark_mode/text_color', $text_color );
				$link_color   = apply_filters( 'wp_dark_mode/link_color', $link_color );
				$border_color = apply_filters( 'wp_dark_mode/border_color', $border_color );
			}

			if ( is_admin() ) {
				$base_selector = 'html.wp-dark-mode-active #wpbody';
				$bg_color      = '#10161E';
				$border_color  = '#555';
			} else {
				$base_selector = apply_filters('wp_dark_mode/base_selectors', 'html.wp-dark-mode-active');
			}

			ob_start();

			/** declare css variables */
			printf( '
			    :root{
			        --wp-dark-mode-bg: %1$s;
			        --wp-dark-mode-text: %2$s;
			        --wp-dark-mode-link: %3$s;
			        --wp-dark-mode-btn: %4$s;
			        --wp-dark-mode-border: %5$s;
			    }
			', $bg_color, $text_color, $link_color, $btn_bg_color, $border_color );

			printf( '%1$s{:not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay)%2$s{
			     background-color: var(--wp-dark-mode-bg) !important;
			     color: var(--wp-dark-mode-text) !important;
                 border-color: var(--wp-dark-mode-border) !important;
			}}', $base_selector, apply_filters( 'wp_dark_mode/not', '' ) );

			printf( '%1$s {
                a,
                a *,
                a:active,
                a:active *,
                a:visited,
                a:visited * {
                    &:not(.wp-dark-mode-ignore){
                        background-color: transparent !important;
                        color: var(--wp-dark-mode-link) !important;
                        border-color: var(--wp-dark-mode-border) !important;
                    }
                }
			}', $base_selector );

			if ( ! is_admin() ) {
				printf( '%1$s {
				    button,
                    iframe,
                    iframe *,
                    input,
                    input[type="button"],
                    input[type="checkebox"],
                    input[type="date"],
                    input[type="datetime-local"],
                    input[type="email"],
                    input[type="image"],
                    input[type="month"],
                    input[type="number"],
                    input[type="range"],
                    input[type="reset"],
                    input[type="search"],
                    input[type="submit"],
                    input[type="tel"],
                    input[type="text"],
                    input[type="time"],
                    input[type="url"],
                    input[type="week"],
                    select,
                    textarea,
                    i {
                        &:not(.wp-dark-mode-ignore){
                            background-color: var(--wp-dark-mode-btn) !important;
                            color: var(--wp-dark-mode-text) !important;
                            border-color: var(--wp-dark-mode-border) !important;
                        }
                        
                       *:not(.wp-dark-mode-ignore) {
                          background: transparent !important;
                        }
                        
                    }
				}', $base_selector );
			}

			$scss = ob_get_clean();

			?>

            <script>

                // transfers sessionStorage from one tab to another
                var sessionStorage_transfer = function(event) {
                    if(!event) { event = window.event; } // ie suq
                    if(!event.newValue) return;          // do nothing if no value to work with
                    if (event.key == 'getSessionStorage') {
                        // another tab asked for the sessionStorage -> send it
                        localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
                        // the other tab should now have it, so we're done with it.
                        localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
                    } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
                        // another tab sent data <- get it
                        var data = JSON.parse(event.newValue);
                        for (var key in data) {
                            sessionStorage.setItem(key, data[key]);
                        }
                    }
                };

                // listen for changes to localStorage
                if(window.addEventListener) {
                    window.addEventListener("storage", sessionStorage_transfer, false);
                } else {
                    window.attachEvent("onstorage", sessionStorage_transfer);
                }

                // Ask other tabs for session storage (this is ONLY to trigger event)
                if (!sessionStorage.length) {
                    localStorage.setItem('getSessionStorage', 'foobar');
                    localStorage.removeItem('getSessionStorage', 'foobar');
                }

				<?php

				$js = '';
				$default_mode ='on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'default_mode', 'off' ) ? 1 : 0;

				if ( is_admin() ) {
					$js .= "var is_saved = sessionStorage.getItem('wp_dark_mode_admin'); var default_mode = false;";
				} else {
					$js .= "var is_saved = sessionStorage.getItem('wp_dark_mode_frontend'); var default_mode = $default_mode;";

					if(wp_dark_mode()->is_ultimate_active()){
					    $remember_darkmode = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'remember_darkmode', 'off' ) ? true : false;
					    if($remember_darkmode){
					        $js .= "is_saved = localStorage.getItem('wp_dark_mode_active');console.log(is_saved);";
                        }
                    }

				}

				echo $js;

				?>

                if ( (is_saved && is_saved != 0) || (!is_saved && default_mode) ) {
                    document.querySelector('html').classList.add('wp-dark-mode-active');
                }

				<?php

				/**-- check os aware mode --**/
				if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_os_mode', 'on' ) ) { ?>

                /**-- check OS aware mode if dark mode not changed by the switch --**/
                if (!is_saved || (is_saved && is_saved != 0)) {
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
                }

				<?php } ?>

            </script>

            <style>
                <?php
				if ( ! empty( $scss ) ) {
				    $scss_compiler = new scssc();

					echo $scss_compiler->compile( $scss );
				}
				?>
            </style>

			<?php
		}

		/**
		 * register rest api route for gutenberg editor switch style choose
		 */
		public function rest_api() {
			$namespace = 'wp-dark-mode/v1';

			register_rest_route( $namespace, '/switch/(?P<switch>\d+)', array(
				array(
					'methods'             => 'GET',
					'callback'            => array( $this, 'rest_api_get_switch_preview' ),
					'permission_callback' => '__return_true',
				),
			) );
		}

		/**
		 * Get the rest api switch preview
		 *
		 * @param $data
		 */
		public function rest_api_get_switch_preview( $data ) {
			$style = isset( $data['switch'] ) ? $data['switch'] : false;

			if ( $style === false ) {
				$style = 1;
			}

			wp_send_json_success( do_shortcode( '[wp_dark_mode style="' . $style . '"]' ) );
		}

		/**
		 * @return WP_Dark_Mode_Hooks|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}
}

WP_Dark_Mode_Hooks::instance();

