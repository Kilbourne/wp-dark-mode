<?php

/** if class `WP_Dark_Mode_Settings` not exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Settings' ) ) {

	class WP_Dark_Mode_Settings {
		private static $instance = null;
		private static $settings_api = null;

		public function __construct() {
			add_action( 'admin_init', array( $this, 'settings_fields' ) );
			add_action( 'admin_menu', array( $this, 'settings_menu' ) );
		}

		/**
		 * Registers settings section and fields
		 */
		public function settings_fields() {

			$sections = array(
				array(
					'id'    => 'wp_dark_mode_general',
					'title' => sprintf( __( '%s <span>General Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-admin-generic" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_display',
					'title' => sprintf( __( '%s <span>Display Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-welcome-view-site" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_style',
					'title' => sprintf( __( '%s Style <span>Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-admin-customizer" ></i>' ),
				),
			);

			$fields = array(
				'wp_dark_mode_general' => array(
					array(
						'name'    => 'enable_frontend',
						'default' => 'on',
						'label'   => __( 'Enable Frontend', 'wp-dark-mode' ),
						'desc'    => __( 'Enable the dark mode for the users on the frontend.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
					array(
						'name'    => 'enable_backend',
						'default' => 'on',
						'label'   => __( 'Enable Backend', 'wp-dark-mode' ),
						'desc'    => __( 'Enable the dark mode for the admins on the backend.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
					array(
						'name'    => 'show_above_post',
						'default' => 'off',
						'label'   => __( 'Show Above Posts', 'wp-dark-mode' ),
						'desc'    => __( 'Show the dark mode switcher button above the post.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
					array(
						'name'    => 'show_above_page',
						'default' => 'off',
						'label'   => __( 'Show Above Pages', 'wp-dark-mode' ),
						'desc'    => __( 'Show the dark mode switcher button above the page.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
				),
			);

			self::$settings_api = new WPPOOL_Settings_API();

			//set sections and fields
			self::$settings_api->set_sections( $sections );
			self::$settings_api->set_fields( $fields );

			//initialize them
			self::$settings_api->admin_init();
		}

		/**
		 * Register the plugin page
		 */
		public function settings_menu() {
			add_options_page( __( 'WP Dark Mode Settings', 'wp-dark-mode' ), __( 'WP Dark Mode', 'wp-dark-mode' ), 'manage_options',
				'wp-dark-mode-settings', array( $this, 'settings_page' ) );
		}

		/**
		 * Display the plugin settings options page
		 */
		public function settings_page() {
			echo '<div class="wrap">';
			settings_errors();

			echo '<div class="wrap">';
			echo sprintf( "<h2>%s</h2>", __( 'WP Dark Mode Settings', 'wp-dark-mode' ) );
			self::$settings_api->show_settings();
			echo '</div>';

			echo '</div>';
		}

		/**
		 * @return WP_Dark_Mode_Settings|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

	}
}

WP_Dark_Mode_Settings::instance();