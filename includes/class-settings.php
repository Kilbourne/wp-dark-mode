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

			$sections = apply_filters( 'wp_dark_mode/settings_sections', array(
				array(
					'id'    => 'wp_dark_mode_general',
					'title' => sprintf( __( '%s <span>General Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-admin-generic" ></i>' ),
				),

			) );

			$fields = array(
				'wp_dark_mode_general' => apply_filters( 'wp_dark_mode/general_settings', array(
						array(
							'name'    => 'enable_darkmode',
							'default' => 'off',
							'label'   => __( 'Enable Darkmode', 'wp-dark-mode' ),
							'desc'    => __( 'Dark Mode has been activated. Your users will be served a dark mode of your website when their device preference is set to Dark Mode.', 'wp-dark-mode' ),
							'type'    => 'switcher',
					),
					)
				),

				'wp_dark_mode_display' => apply_filters( 'wp_dark_mode/display_settings', array() ),

				'wp_dark_mode_style' => apply_filters( 'wp_dark_mode/style_settings', array() ),
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
		public function settings_page() { ?>
            <div class="wrap">

                <div class="wrap">
                    <h2><?php _e( 'WP Dark Mode Settings', 'wp-dark-mode' ) ?></h2>
                    <p> - <?php _e( 'You can use the `Dark Mode Switch` gutenberg block to display the dark mode switch button.',
			                'wp-dark-mode' ); ?> </p>
                    <p> - <?php _e( 'Also you can use the `Dark Mode Switch` elementor widget to display the dark mode switch button.',
			                'wp-dark-mode' ); ?> </p>

                    <!--                    <p> - You can use Dark mode as <a href="--><?php //echo admin_url( 'widgets.php' ); ?><!--">Widget</a>. </p>-->
<!--                    <p> - Or can check "Add Dark Mode before posts/ pages" in below to add Dark mode button automatically before posts/ pages. </p>-->
<!--                    <p> - Also you can copy this-->
<!--                        <code>[wp_dark_mode]</code> shortcode and paste in any post/page to show the dark mode button. </p>-->

					<?php self::$settings_api->show_settings(); ?>
                </div>

            </div>
		<?php }

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