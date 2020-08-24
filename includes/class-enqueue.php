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
			//if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_darkmode', 'on' ) ) {
				add_action( 'wp_enqueue_scripts', [ $this, 'frontend_scripts' ] );
			//}

			add_action( 'admin_enqueue_scripts', [ $this, 'admin_scripts' ] );

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

			/** wp-dark-mode frontend js */
			wp_enqueue_script( 'wp-dark-mode-frontend', wp_dark_mode()->plugin_url( 'assets/js/frontend.js' ),
				[ 'jquery', 'wp-util' ],
				wp_dark_mode()->version, true );

			wp_localize_script( 'wp-dark-mode-frontend', 'wpDarkModeFrontend', [
				'is_elementor_editor' => class_exists( '\Elementor\Plugin' ) && Elementor\Plugin::$instance->editor->is_edit_mode(),
			] );

			$this->frontend_localize();

		}

		public function frontend_localize() {
			$selectors = '.wp-dark-mode-ignore *';
			$excludes  = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'excludes', '' );

			if ( ! empty( $excludes ) ) {
				$selectors .= ", $excludes";
			}

			wp_localize_script( 'wp-dark-mode-frontend', 'wpDarkModeFrontend', [
				'excludes'            => $selectors,
				'enable_darkmode'     => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_darkmode', 'on' ),
				'is_elementor_editor' => class_exists( '\Elementor\Plugin' ) && Elementor\Plugin::$instance->editor->is_edit_mode(),
				'is_pro_active'       => wp_dark_mode()->is_pro_active(),
				'is_ultimate_active'  => wp_dark_mode()->is_ultimate_active(),
			] );
		}

		/**
		 * Admin scripts
		 *
		 * @param $hook
		 */
		public function admin_scripts( $hook ) {

			/** wp-dark-mode admin css */
			wp_enqueue_style( 'wp-dark-mode-admin', wp_dark_mode()->plugin_url( 'assets/css/admin.css' ), false, wp_dark_mode()->version );

			/** countdown timer js */
			wp_enqueue_script( 'jquery.syotimer', wp_dark_mode()->plugin_url( 'assets/js/jquery.syotimer.min.js' ), [ 'jquery' ], '2.1.2',
				true );

			/** wp-dark-mode admin js */
			wp_enqueue_script( 'wp-dark-mode-admin', wp_dark_mode()->plugin_url( 'assets/js/admin.js' ), [
				'jquery',
				'wp-util',
			], wp_dark_mode()->version, true );

			wp_localize_script( 'wp-dark-mode-admin', 'wpDarkModeAdmin', [
				'pluginUrl'           => wp_dark_mode()->plugin_url(),
				'is_pro_active'       => wp_dark_mode()->is_pro_active(),
				'is_ultimate_active'  => wp_dark_mode()->is_ultimate_active(),
			] );


			/** frontend scripts for gutenberg */
			if ( 'post.php' == $hook ) {
				/** wp-dark-mode frontend css */
				wp_enqueue_style( 'wp-dark-mode-frontend', wp_dark_mode()->plugin_url( 'assets/css/frontend.css' ), false,
					wp_dark_mode()->version );

				/** wp-dark-mode frontend js */
				wp_enqueue_script( 'wp-dark-mode-frontend', wp_dark_mode()->plugin_url( 'assets/js/frontend.js' ), [ 'jquery', 'wp-util' ],
					wp_dark_mode()->version, true );

			}

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





