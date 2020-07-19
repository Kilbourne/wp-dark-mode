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
			if ( 'off' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'disable_darkmode', 'off' ) ) {
				add_action( 'wp_enqueue_scripts', [ $this, 'frontend_scripts' ] );
			}

			add_action( 'admin_enqueue_scripts', [ $this, 'admin_scripts' ] );
//			if('on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'on' )) {
//				add_action( 'admin_enqueue_scripts', [ $this, 'frontend_scripts' ] );
//			}
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
			wp_enqueue_script( 'wp-dark-mode-frontend', wp_dark_mode()->plugin_url( 'assets/js/frontend.js' ),
				[ 'jquery', 'wp-util', 'darkmode-js' ],
				wp_dark_mode()->version, true );

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
				'pluginUrl' => wp_dark_mode()->plugin_url(),
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





