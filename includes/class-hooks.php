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

			add_filter( 'the_content', array( $this, 'render_post_page_switcher' ) );

		}

		public function display_widget() {
			echo do_shortcode( '[wp_dark_mode floating="yes"]' );
		}

		public function render_post_page_switcher( $content ) {

			$above_post = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'show_above_post' );
			$above_page = 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'show_above_page' );

			if ($above_post && is_single() && in_the_loop() && is_main_query() ) {
				$content = do_shortcode( '[wp_dark_mode]' ) . $content;
			}

			if ($above_page && is_page() && in_the_loop() && is_main_query() ) {
				$content = do_shortcode( '[wp_dark_mode]' ) . $content;
			}

			return $content;
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

