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

			$time_range = [];
			for ( $i = 0; $i < 24; $i ++ ) {
				$time_range["$i:00"] = "$i:00";
			}

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
						'name'    => 'match_os_mode',
						'default' => 'on',
						'label'   => __( 'Match OS Mode', 'wp-dark-mode' ),
						'desc'    => __( 'Automatically shows Darkmode if the OS prefered theme is dark.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
					array(
						'name'    => 'time_based_mode',
						'default' => 'off',
						'label'   => __( 'Time Based Dark Mode', 'wp-dark-mode' ),
						'desc'    => __( 'Automatically turn on the dark mode between a given time range.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
					array(
						'name'    => 'start_at',
						'default' => '21:00',
						'label'   => __( 'Dark Mode Start Time', 'wp-dark-mode' ),
						'desc'    => __( 'Time to start Dark mode.', 'wp-dark-mode' ),
						'type'    => 'select',
						'options' => $time_range,
					),
					array(
						'name'    => 'end_at',
						'default' => '6:00',
						'label'   => __( 'Dark Mode End Time', 'wp-dark-mode' ),
						'desc'    => __( 'Time to end Dark mode.', 'wp-dark-mode' ),
						'type'    => 'select',
						'options' => $time_range,
					),
					array(
						'name'    => 'remember_darkmode',
						'default' => 'on',
						'label'   => __( 'Remember Dark Mode', 'wp-dark-mode' ),
						'desc'    => __( 'Check ON to remember the darkmode status, if darkmode mode status "ON" will start automatically when visiting website again.',
							'wp-dark-mode' ),
						'type'    => 'switcher',
					),

				),

				'wp_dark_mode_display' => array(
					array(
						'name'    => 'show_switcher',
						'default' => 'off',
						'label'   => __( 'Show Floating Switcher', 'wp-dark-mode' ),
						'desc'    => __( 'Show the floating dark mode switcher button on the frontend for the users.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
					array(
						'name'    => 'switcher_position',
						'default' => 'right_bottom',
						'label'   => __( 'Floating Switcher Position', 'wp-dark-mode' ),
						'desc'    => __( 'Select the position of the floating dark mode switcher button on the frontend.', 'wp-dark-mode' ),
						'type'    => 'select',
						'options' => [
							'left_bottom'  => __( 'Left Bottom', 'wp-dark-mode' ),
							'right_bottom' => __( 'Right Bottom', 'wp-dark-mode' ),
						],
					),
					array(
						'name'    => 'show_above_post',
						'default' => 'off',
						'label'   => __( 'Show Above Posts', 'wp-dark-mode' ),
						'desc'    => __( 'Show the dark mode switcher button above of all the post.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
					array(
						'name'    => 'show_above_page',
						'default' => 'off',
						'label'   => __( 'Show Above Pages', 'wp-dark-mode' ),
						'desc'    => __( 'Show the dark mode switcher button above of all the pages.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),
				),

				'wp_dark_mode_style' => array(
					array(
						'name'    => 'darkmode_bg_color',
						'default' => '#1b2836',
						'label'   => __( 'Darkmode Background Color', 'wp-dark-mode' ),
						'desc'    => __( 'Select the background color when the dark mode is on.', 'wp-dark-mode' ),
						'type'    => 'color',
					),
					array(
						'name'    => 'darkmode_text_color',
						'default' => '#fff',
						'label'   => __( 'Darkmode Text Color', 'wp-dark-mode' ),
						'desc'    => __( 'Select the text color when the dark mode is on.', 'wp-dark-mode' ),
						'type'    => 'color',
					),
					array(
						'name'    => 'darkmode_links_color',
						'default' => '#459BE6',
						'label'   => __( 'Darkmode Links Color', 'wp-dark-mode' ),
						'desc'    => __( 'Select the links color when the dark mode is on.', 'wp-dark-mode' ),
						'type'    => 'color',
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
		public function settings_page() { ?>
            <div class="wrap">

                <div class="wrap">
                    <h2><?php _e( 'WP Dark Mode Settings', 'wp-dark-mode' ) ?></h2>
                    <p> - You can use Dark mode as <a href="<?php echo admin_url( 'widgets.php' ); ?>">Widget</a>. </p>
                    <p> - Or can check "Add Dark Mode before posts/ pages" in below to add Dark mode button automatically before posts/ pages. </p>
                    <p> - Also you can copy this
                        <code>[wp_dark_mode]</code> shortcode and paste in any post/page to show the dark mode button. </p>

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