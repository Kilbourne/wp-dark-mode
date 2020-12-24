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
		}

		/**
		 * Frontend Scripts
		 *
		 * @param $hook
		 *
		 * @return boolean|void
		 */
		public function frontend_scripts( $hook ) {

			if ( ! wp_dark_mode_enabled() ) {
				return false;
			}

			/** wp-dark-mode frontend css */
			wp_enqueue_style( 'wp-dark-mode-frontend', WP_DARK_MODE_ASSETS . '/css/frontend.css', false, WP_DARK_MODE_VERSION );

			/** wp-dark-mode frontend js */
			wp_enqueue_script( 'wp-dark-mode-frontend', WP_DARK_MODE_ASSETS . '/js/frontend.min.js', [ 'jquery', 'wp-util' ],
				WP_DARK_MODE_VERSION, true );

			/** woocommerce style*/
			if ( class_exists( 'WooCommerce' ) ) {
				wp_enqueue_style( 'wp-dark-mode-woocommerce', WP_DARK_MODE_ASSETS . '/css/woocommerce.css' );
			}

			/** buddypress style*/
			if ( class_exists( 'BuddyPress' ) ) {
				wp_enqueue_style( 'wp-dark-mode-buddypress', WP_DARK_MODE_ASSETS . '/css/buddypress.css' );
			}

			$this->frontend_localize();

		}

		public function frontend_localize() {
			global $post, $current_screen;

			$is_excluded = isset( $post->ID ) && in_array( $post->ID, wp_dark_mode_exclude_pages() );

			$excludes = '.wp-dark-mode-ignore, .wp-dark-mode-ignore *, .video-js, .select2, .owl-nav, .owl-dots, .google-map';

			$pro_version = 0;

			if ( defined( 'WP_DARK_MODE_ULTIMATE_VERSION' ) ) {
				$pro_version = WP_DARK_MODE_ULTIMATE_VERSION;
			} elseif ( defined( 'WP_DARK_MODE_PRO_VERSION' ) ) {
				$pro_version = WP_DARK_MODE_PRO_VERSION;
			}

			wp_localize_script( 'wp-dark-mode-frontend', 'wpDarkModeFrontend', [
				'excludes'            => apply_filters( 'wp_dark_mode/excludes', trim( $excludes, ',' ) ),
				'is_excluded'         => $is_excluded,
				'enable_frontend'     => wp_dark_mode_enabled(),
				'enable_os_mode'      => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_os_mode', 'on' ),
				'remember_darkmode'   => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'remember_darkmode', 'off' ),
				'is_elementor_editor' => class_exists( '\Elementor\Plugin' ) && Elementor\Plugin::$instance->editor->is_edit_mode(),
				'is_pro_active'       => wp_dark_mode()->is_pro_active(),
				'is_ultimate_active'  => wp_dark_mode()->is_ultimate_active(),
				'enable_backend'      => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'off' ),
				'default_mode'        => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_advanced', 'default_mode', 'off' ),
				'is_block_editor'     => method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor(),
				'pro_version'         => $pro_version,

				'images' => get_option( 'wp_dark_mode_image_settings' ),
			] );
		}

		/**
		 * Admin scripts
		 *
		 * @param $hook
		 */
		public function admin_scripts( $hook ) {

			wp_enqueue_script( 'jquery.syotimer', WP_DARK_MODE_ASSETS . '/vendor/jquery.syotimer.min.js', [ 'jquery' ],
				'2.1.2', true );

			if ( 'settings_page_wp-dark-mode-settings' == $hook ) {

				wp_enqueue_style( 'select2', WP_DARK_MODE_ASSETS . '/vendor/select2.css' );

				wp_enqueue_script( 'select2', WP_DARK_MODE_ASSETS . '/vendor/select2.min.js', [ 'jquery' ], false, true );
			}

			wp_enqueue_style( 'wp-dark-mode-admin', WP_DARK_MODE_ASSETS . '/css/admin.css', false, WP_DARK_MODE_VERSION );


			/** wp-dark-mode admin js */
			wp_enqueue_script( 'wp-dark-mode-admin', WP_DARK_MODE_ASSETS . '/js/admin.min.js', [ 'wp-util' ], WP_DARK_MODE_VERSION, true );


			/** frontend scripts for gutenberg */
			if ( 'post.php' == $hook
			     || 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'off' ) ) {
				/** wp-dark-mode frontend css */
				wp_enqueue_style( 'wp-dark-mode-frontend', WP_DARK_MODE_ASSETS . '/css/frontend.css', false, WP_DARK_MODE_VERSION );

				/** wp-dark-mode frontend js */
				wp_enqueue_script( 'wp-dark-mode-frontend', WP_DARK_MODE_ASSETS . '/js/frontend.min.js',
					[ 'jquery', 'wp-util' ], WP_DARK_MODE_VERSION, true );

			}

			$cm_settings = [];
			if ( 'settings_page_wp-dark-mode-settings' == $hook ) {
				$cm_settings['codeEditor'] = wp_enqueue_code_editor( array( 'type' => 'text/css' ) );

				wp_enqueue_script( 'wp-theme-plugin-editor' );
				wp_enqueue_style( 'wp-codemirror' );
			}

			wp_localize_script( 'wp-dark-mode-admin', 'wpDarkModeAdmin', [
				'pluginUrl'          => WP_DARK_MODE_URL,
				'is_pro_active'      => wp_dark_mode()->is_pro_active(),
				'is_ultimate_active' => wp_dark_mode()->is_ultimate_active(),
				'cm_settings'        => $cm_settings,
				'is_settings_page'   => 'settings_page_wp-dark-mode-settings' == $hook,
				'enable_backend'     => 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'off' ),

				'pro_version' => defined( 'WP_DARK_MODE_PRO_VERSION' ) ? WP_DARK_MODE_PRO_VERSION : 0,
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





