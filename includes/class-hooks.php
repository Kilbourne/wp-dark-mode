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
			add_action( 'wp_footer', [ $this, 'dark_scripts' ] );
			add_action( 'elementor/editor/footer', [ $this, 'dark_scripts' ] );

			if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'on' ) ) {
				add_action( 'admin_head', [ $this, 'dark_styles' ] );
				add_action( 'admin_footer', [ $this, 'dark_scripts' ] );
			}

			/** display the dark mode switcher if the dark mode enabled on frontend */
			if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'show_switcher', 'on' ) ) {
				add_action( 'wp_footer', [ $this, 'display_widget' ] );
			}

			add_action( 'wsa_form_bottom_wp_dark_mode_advanced', [ $this, 'pro_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_display', [ $this, 'pro_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_style', [ $this, 'ultimate_promo' ] );
		}

		/**
		 * display the footer widget
		 */
		public function display_widget() {
			$style = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_style', 1 );

			global $wp_dark_mode_license;
			if (!$wp_dark_mode_license || ! $wp_dark_mode_license->is_valid() ) {
				$style = 1;
			}

			echo do_shortcode( '[wp_dark_mode floating="yes" style="' . $style . '"]' );
		}

		public function pro_promo() {
			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			wp_dark_mode()->get_template( 'admin/promo' );
		}

		public function ultimate_promo() {
			if ( wp_dark_mode()->is_ultimate_active() ) {
				return;
			}
			wp_dark_mode()->get_template( 'admin/promo-ultimate' );
		}

		public function dark_styles() {

			if ( is_admin() && ! wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			$preset = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'color_preset', '0' );

		    $colors = wp_dark_mode_color_presets($preset);

			$bg_color   = apply_filters( 'wp_dark_mode/bg_color', $colors['bg'] );
			$text_color = apply_filters( 'wp_dark_mode/text_color', $colors['text'] );
			$link_color = apply_filters( 'wp_dark_mode/link_color', $colors['link'] );

			if ( is_admin() ) {
				$bg_color      = '#10161E';
				$base_selector = 'html.wp-dark-mode-active #wpbody';
			} else {
				$base_selector = 'html.wp-dark-mode-active';
			}

		    ?>

            <script>
	            <?php if('off' != wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_darkmode', 'on' )){ ?>

                <?php if(is_admin()){ ?>
                var is_saved = sessionStorage.getItem('wp_dark_mode_admin');
				<?php }else{ ?>
                var is_saved = sessionStorage.getItem('wp_dark_mode_frontend');
				<?php } ?>

                if (is_saved != 0) {

                    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        document.getElementsByTagName('html')[0].classList.add('wp-dark-mode-active');
                    }
                }

				<?php } ?>
            </script>

            <style>
                <?php echo $base_selector; ?>
                :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.mejs-time-slider):not(.mejs-overlay-play) {
                    background-color: <?php echo $bg_color; ?> !important;
                    color: <?php echo $text_color; ?> !important;
                    border-color: <?php echo $link_color; ?> !important;
                }

                <?php echo $base_selector; ?>
                a:not(.wp-dark-mode-ignore),
                <?php echo $base_selector; ?> a *:not(.wp-dark-mode-ignore) {
                    background-color: transparent !important;
                    color: <?php echo $link_color; ?> !important;
                }

                <?php echo $base_selector; ?>
                a:active,
                <?php echo $base_selector; ?> a:active *,
                <?php echo $base_selector; ?> a:visited,
                <?php echo $base_selector; ?> a:visited * {
                    color: <?php echo $link_color; ?> !important;
                    border-color: <?php echo $link_color; ?> !important;
                }


                <?php if(!is_admin()){ ?>

                html.wp-dark-mode-active button:not(#collapse-button),
                html.wp-dark-mode-active iframe,
                html.wp-dark-mode-active iframe *,
                html.wp-dark-mode-active input,
                html.wp-dark-mode-active input[type="button"],
                html.wp-dark-mode-active input[type="checkebox"],
                html.wp-dark-mode-active input[type="date"],
                html.wp-dark-mode-active input[type="datetime-local"],
                html.wp-dark-mode-active input[type="email"],
                html.wp-dark-mode-active input[type="image"],
                html.wp-dark-mode-active input[type="month"],
                html.wp-dark-mode-active input[type="number"],
                html.wp-dark-mode-active input[type="range"],
                html.wp-dark-mode-active input[type="reset"],
                html.wp-dark-mode-active input[type="search"],
                html.wp-dark-mode-active input[type="submit"],
                html.wp-dark-mode-active input[type="tel"],
                html.wp-dark-mode-active input[type="text"],
                html.wp-dark-mode-active input[type="time"],
                html.wp-dark-mode-active input[type="url"],
                html.wp-dark-mode-active input[type="week"],
                html.wp-dark-mode-active select,
                html.wp-dark-mode-active textarea,
                html.wp-dark-mode-active i:not(.wp-dark-mode-ignore) {
                    background-color: rgb(53, 66, 80) !important;
                    color: <?php echo $text_color; ?> !important;
                    border-color: rgb(53, 66, 80) !important;
                }

                <?php } ?>

            </style>

		<?php }

		/**
		 * darkmode scripts
		 */
		public function dark_scripts() {
			if ( is_admin() && ! wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			$selectors = '.wp-dark-mode-ignore';
			$excludes  = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'excludes' );

			if ( ! empty( $excludes ) ) {
				$selectors .= ", $excludes";
			}

			?>
            <script>
                (function ($) {
                    $(document).ready(function () {

                        handleExcludes();
                        $(window).on('darkmodeInit', handleExcludes);
                        $(document).on('change', '.wp-dark-mode-switch', handleExcludes);

                        function handleExcludes(){
                            $('<?php echo $selectors; ?>').find('*').addClass('wp-dark-mode-ignore');
                        }

                    });
                })(jQuery)
            </script>
		<?php }

		/**
		 * register rest api route
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

			return wp_send_json_success( do_shortcode( '[wp_dark_mode style="' . $style . '"]' ) );
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

