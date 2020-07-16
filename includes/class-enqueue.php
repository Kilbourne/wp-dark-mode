<?php

/** block direct access */
defined( 'ABSPATH' ) || exit();

/** check if class `WP_Dark_Mode_Enqueue` not exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Enqueue' ) ) {
	class WP_Dark_Mode_Enqueue {

		/**
		 * @var null
		 */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Enqueue constructor.
		 */
		public function __construct() {
			add_action( 'wp_enqueue_scripts', [ $this, 'frontend_scripts' ] );
			add_action( 'admin_enqueue_scripts', [ $this, 'admin_scripts' ] );
			add_action( 'admin_enqueue_scripts', [ $this, 'frontend_scripts' ] );
		}

		/**
		 * Frontend Scripts
		 *
		 * @param $hook
		 */
		public function frontend_scripts( $hook ) {

			/** wp-dark-mode frontend css */
			wp_enqueue_style( 'wp-dark-mode-frontend', wp_dark_mode()->plugin_url( 'assets/css/frontend.css' ), false,
				wp_dark_mode()->version );

			/** dark-mode-js library */
			wp_enqueue_script( 'darkmode-js', wp_dark_mode()->plugin_url( 'assets/vendor/darkmode-js.js' ), false, wp_dark_mode()->version, true );


			/** wp-dark-mode frontend js */
			wp_enqueue_script( 'wp-dark-mode-frontend', wp_dark_mode()->plugin_url( 'assets/js/frontend.js' ), [ 'jquery', 'wp-util' ],
				wp_dark_mode()->version, true );

			$custom_css  = '';
			$bg_color    = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'darkmode_bg_color' );
			$text_color  = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'darkmode_text_color' );
			$links_color = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'darkmode_links_color' );

			$global_selector
				= 'html body.dm-dark :not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path)';

			$link_selector = 'html a:active, html a:active *, html a:visited, html a:visited *';

			/** background color */
			if ( ! empty( $bg_color ) && '#1b2836' != $bg_color ) {
				$custom_css .= sprintf( '%1$s {background-color:  %2$s !important;}', $global_selector, $bg_color );
			}

			/** text color */
			if ( ! empty( $text_color && '#ffffff' != $text_color ) ) {
				$custom_css .= sprintf( '%1$s {color:  %2$s !important;}', $global_selector, $text_color );
			}

			/** linkd color */
			if ( ! empty( $links_color && '#459be6' != $links_color ) ) {
				$custom_css .= sprintf( '%1$s {color:  %2$s !important;border-color:  %2$s !important;}', $link_selector, $links_color );
			}

			/** add custom css to the frontend file */
			wp_add_inline_style( 'wp-dark-mode-frontend', $custom_css );

			/** frontend localize array */
			wp_localize_script( 'wp-dark-mode-frontend', 'wpDarkModeFrontend', [
				'pluginUrl'     => wp_dark_mode()->plugin_url(),
				'saveMode'      => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'remember_darkmode', 'on' ),
				'matchSystem'   => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'match_os_mode', 'on' ),
				'timeBasedMode' => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'time_based_mode', 'on' ),
				'startAt'       => wp_dark_mode_get_settings( 'wp_dark_mode_general', 'start_at' ),
				'endAt'         => wp_dark_mode_get_settings( 'wp_dark_mode_general', 'end_at' ),
			] );

		}

		/**
		 * Admin scripts
		 *
		 * @param $hook
		 */
		public function admin_scripts( $hook ) {

			/** wp-dark-mode admin css */
			wp_enqueue_style( 'wp-dark-mode-admin', wp_dark_mode()->plugin_url( '/assets/css/admin.css' ), false, wp_dark_mode()->version );

			/** wp-dark-mode admin js */
			wp_enqueue_script( 'wp-dark-mode-admin', wp_dark_mode()->plugin_url( '/assets/js/admin.js' ), [
				'jquery',
				'wp-util',
			], wp_dark_mode()->version, true );

			wp_localize_script( 'wp-dark-mode-admin', 'wpDarkModeAdmin', [

			] );

		}

		/**
		 * @return WP_Dark_Mode_Enqueue|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

	}
}

WP_Dark_Mode_Enqueue::instance();





