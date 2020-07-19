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

			/** display the dark mode switcher if the dark mode enabled on frontend */
			if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_frontend' ) ) {
				add_action( 'wp_footer', [ $this, 'display_widget' ] );
			}

			//add_filter( 'the_content', array( $this, 'render_post_page_switcher' ) );
			//add_action( 'rest_api_init', array( $this, 'rest_api' ) );

			//add_action( 'wp_footer', [ $this, 'custom_style' ] );
		}

		public function rest_api() {
			$namespace = 'wp-dark-mode/v1';

			register_rest_route( $namespace, '/switch/(?P<switch>\d+)', array(
				array(
					'methods'  => 'GET',
					'callback' => array( $this, 'rest_api_get_switch_preview' ),
				),
			) );
		}

		public function rest_api_get_switch_preview( $data ) {
			$style = isset( $data['switch'] ) ? $data['switch'] : false;

			if ( $style === false ) {
				$style = 1;
			}

			return wp_send_json_success( do_shortcode( '[wp_dark_mode style="' . $style . '"]' ) );
		}

		/**
		 * display the footer widget
		 */
		public function display_widget() {
			$style = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_style', 1 );
			echo do_shortcode( '[wp_dark_mode floating="yes" style="' . $style . '"]' );
		}

		/**
		 * @param $content
		 *
		 * @return string
		 */
		public function render_post_page_switcher( $content ) {

			$above_post = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_display', 'show_above_post' );
			$above_page = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_display', 'show_above_page' );

			if ($above_post && is_single() && in_the_loop() && is_main_query() ) {
				$content = do_shortcode( '[wp_dark_mode]' ) . $content;
			}

			if ($above_page && is_page() && in_the_loop() && is_main_query() ) {
				$content = do_shortcode( '[wp_dark_mode]' ) . $content;
			}

			return $content;
		}

		public function custom_style() {
			$is_custom   = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'customize_color' );
			$bg_color    = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'darkmode_bg_color' );
			$text_color  = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'darkmode_text_color' );
			$links_color = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'darkmode_links_color' );


			if ( $is_custom ) { ?>
				<style>

					html body{
						background: <?php echo $bg_color; ?> !important;

					}

					html body *:not('.wp-dark-mode-ignore') {
						background: inherit !important;
					}

					.darkmode-layer {
						background-color: <?php echo $bg_color; ?> !important;
						mix-blend-mode: normal !important;
					}

					.darkmode-text-color {
						color: <?php echo $text_color; ?> !important;
					}

					html .darkmode--activated a,
					html .darkmode--activated a:active,
					html .darkmode--activated a:active *,
					html .darkmode--activated a:visited,
					html .darkmode--activated a:visited * {
						color: <?php echo $links_color; ?> !important;
						border-color: <?php echo $links_color; ?> !important;
						position: relative;
						z-index: 999;
					}


				</style>
				<?php
			}

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

