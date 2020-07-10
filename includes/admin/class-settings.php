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
						'name'    => 'text',
						'label'   => __( 'Text Input', 'wedevs' ),
						'desc'    => __( 'Text input description', 'wedevs' ),
						'type'    => 'text',
						'default' => 'Title',
					),
					array(
						'name'  => 'textarea',
						'label' => __( 'Textarea Input', 'wedevs' ),
						'desc'  => __( 'Textarea description', 'wedevs' ),
						'type'  => 'textarea',
					),
					array(
						'name'  => 'checkbox',
						'label' => __( 'Checkbox', 'wedevs' ),
						'desc'  => __( 'Checkbox Label', 'wedevs' ),
						'type'  => 'checkbox',
					),
					array(
						'name'    => 'radio',
						'label'   => __( 'Radio Button', 'wedevs' ),
						'desc'    => __( 'A radio button', 'wedevs' ),
						'type'    => 'radio',
						'options' => array(
							'yes' => 'Yes',
							'no'  => 'No',
						),
					),
					array(
						'name'    => 'multicheck',
						'label'   => __( 'Multile checkbox', 'wedevs' ),
						'desc'    => __( 'Multi checkbox description', 'wedevs' ),
						'type'    => 'multicheck',
						'options' => array(
							'one'   => 'One',
							'two'   => 'Two',
							'three' => 'Three',
							'four'  => 'Four',
						),
					),
					array(
						'name'    => 'selectbox',
						'label'   => __( 'A Dropdown', 'wedevs' ),
						'desc'    => __( 'Dropdown description', 'wedevs' ),
						'type'    => 'select',
						'default' => 'no',
						'options' => array(
							'yes' => 'Yes',
							'no'  => 'No',
						),
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