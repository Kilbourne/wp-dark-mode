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

			add_action( 'admin_head', [ $this, 'dark_styles' ] );
			add_action( 'admin_footer', [ $this, 'dark_scripts' ] );
			add_action( 'elementor/editor/footer', [ $this, 'dark_scripts' ] );
		}

		public function dark_styles() { ?>

            <style>
                html body.wp-dark-mode-active :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path) {
                    background-color: #1B2836 !important;
                    color: rgb(255, 255, 255) !important;
                    border-color: rgb(69, 155, 230) !important;
                }

                html body.wp-dark-mode-active a:not(.wp-dark-mode-ignore),
                html body.wp-dark-mode-active a *:not(.wp-dark-mode-ignore) {
                    background-color: transparent !important;
                    color: rgb(69, 155, 230) !important;
                }

                body.wp-dark-mode-active a:active,
                html body.wp-dark-mode-active a:active *,
                html body.wp-dark-mode-active a:visited,
                html body.wp-dark-mode-active a:visited * {
                    color: rgb(69, 155, 230) !important;
                    border-color: rgb(69, 155, 230) !important;
                }

                html body.wp-dark-mode-active button, html body.wp-dark-mode-active iframe, html body.wp-dark-mode-active iframe *, html body.wp-dark-mode-active input, html body.wp-dark-mode-active input[type="button"], html body.wp-dark-mode-active input[type="checkebox"], html body.wp-dark-mode-active input[type="date"], html body.wp-dark-mode-active input[type="datetime-local"], html body.wp-dark-mode-active input[type="email"], html body.wp-dark-mode-active input[type="image"], html body.wp-dark-mode-active input[type="month"], html body.wp-dark-mode-active input[type="number"], html body.wp-dark-mode-active input[type="range"], html body.wp-dark-mode-active input[type="reset"], html body.wp-dark-mode-active input[type="search"], html body.wp-dark-mode-active input[type="submit"], html body.wp-dark-mode-active input[type="tel"], html body.wp-dark-mode-active input[type="text"], html body.wp-dark-mode-active input[type="time"], html body.wp-dark-mode-active input[type="url"], html body.wp-dark-mode-active input[type="week"], html body.wp-dark-mode-active select, html body.wp-dark-mode-active textarea, html body.wp-dark-mode-active [class*="button"], html body.wp-dark-mode-active [class*="btn"], html body.wp-dark-mode-active [role="button"], html body.wp-dark-mode-active [role="icon"], html body.wp-dark-mode-active i:not(.wp-dark-mode-ignore) {
                    background-color: rgb(53, 66, 80) !important;
                    color: rgb(255, 255, 255) !important;
                    border-color: rgb(53, 66, 80) !important;
                }

            </style>

		<?php }

		function dark_scripts() { ?>
            <script>
                (function ($) {
                    $(document).ready(function () {
                        $('.wp-dark-mode-ignore *').addClass('wp-dark-mode-ignore');

                        $(document).on('change', '.wp-dark-mode-switch', function () {
                            $('.wp-dark-mode-ignore *').addClass('wp-dark-mode-ignore');
                        });

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
					'methods'  => 'GET',
					'callback' => array( $this, 'rest_api_get_switch_preview' ),
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

