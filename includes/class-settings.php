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
			$time_range = [
				'00:00' => '12:00 AM',
				'01:00' => '01:00 AM',
				'02:00' => '02:00 AM',
				'03:00' => '03:00 AM',
				'04:00' => '04:00 AM',
				'05:00' => '05:00 AM',
				'06:00' => '06:00 AM',
				'07:00' => '07:00 AM',
				'08:00' => '08:00 AM',
				'09:00' => '09:00 AM',
				'10:00' => '10:00 AM',
				'11:00' => '11:00 AM',
				'12:00' => '12:00 PM',
				'13:00' => '01:00 PM',
				'14:00' => '02:00 PM',
				'15:00' => '03:00 PM',
				'16:00' => '04:00 PM',
				'17:00' => '05:00 PM',
				'18:00' => '06:00 PM',
				'19:00' => '07:00 PM',
				'20:00' => '08:00 PM',
				'21:00' => '09:00 PM',
				'22:00' => '10:00 PM',
				'23:00' => '11:00 PM',
			];

			$sections = array(
				array(
					'id'    => 'wp_dark_mode_general',
					'title' => sprintf( __( '%s <span>General Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-admin-tools" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_advanced',
					'title' => sprintf( __( '%s <span>Advanced Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-admin-generic" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_display',
					'title' => sprintf( __( '%s <span>Display Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-welcome-view-site" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_style',
					'title' => sprintf( __( '%s <span>Style Settings</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-admin-customizer" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_gutenberg',
					'title' => sprintf( __( '%s <span>Gutenberg Block</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-screenoptions" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_elementor',
					'title' => sprintf( __( '%s <span>Elementor Widget</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-align-none" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_license',
					'title' => sprintf( __( '%s <span>Activate License</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-admin-network" ></i>' ),
				),
				array(
					'id'    => 'wp_dark_mode_start',
					'title' => sprintf( __( '%s <span>Get Started</span>', 'wp-dark-mode' ),
						'<i class="dashicons dashicons-location" ></i>' ),
				),
			);


			if ( ! is_plugin_active( 'wp-dark-mode-pro/plugin.php' ) && ! is_plugin_active( 'wp-dark-mode-ultimate/plugin.php' ) ) {
				$key = array_search( 'wp_dark_mode_license', array_column( $sections, 'id' ) );

				unset( $sections[ $key ] );
			}

			$fields = array(

				'wp_dark_mode_general' => apply_filters( 'wp_dark_mode/general', array(
					'enable_darkmode' => array(
						'name'    => 'enable_darkmode',
						'default' => 'on',
						'label'   => __( 'Enable OS aware Dark Mode', 'wp-dark-mode' ),
						'desc'    => __( 'Dark Mode has been activated in the frontend. Now, your users will be served a dark mode of your website when their device preference is set to Dark Mode or by switching the darkmode switch button.<br>
<a href="#">Learn More How This Works</a> ',
							'wp-dark-mode' ) . '<br><br> <img src="'.wp_dark_mode()->plugin_url('assets/images/os-theme.gif').'" alt="">',
						'type'    => 'switcher',
					),
				) ),

				'wp_dark_mode_advanced' => apply_filters( 'wp_dark_mode/advanced_settings', array(

					'match_os_mode'     => array(
						'name'    => 'match_os_mode',
						'default' => 'on',
						'label'   => __( 'Match OS Mode', 'wp-dark-mode' ),
						'desc'    => __( 'Automatically shows Darkmode if the OS prefered theme is dark.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'time_based_mode'   => array(
						'name'    => 'time_based_mode',
						'default' => 'off',
						'label'   => __( 'Time Based Dark Mode', 'wp-dark-mode' ),
						'desc'    => __( 'Automatically turn on the dark mode between a given time range.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'start_at'          => array(
						'name'    => 'start_at',
						'default' => '17:00',
						'label'   => __( 'Dark Mode Start Time', 'wp-dark-mode' ),
						'desc'    => __( 'Time to start Dark mode.', 'wp-dark-mode' ),
						'type'    => 'select',
						'options' => $time_range,
					),

					'end_at'            => array(
						'name'    => 'end_at',
						'default' => '06:00',
						'label'   => __( 'Dark Mode End Time', 'wp-dark-mode' ),
						'desc'    => __( 'Time to end Dark mode.', 'wp-dark-mode' ),
						'type'    => 'select',
						'options' => $time_range,
					),

					'remember_darkmode' => array(
						'name'    => 'remember_darkmode',
						'default' => 'on',
						'label'   => __( 'Remember Dark Mode', 'wp-dark-mode' ),
						'desc'    => __( 'Check ON to remember the darkmode status, if darkmode mode status "ON" will start automatically when visiting website again.',
							'wp-dark-mode' ),
						'type'    => 'switcher',
					),
				) ),

				'wp_dark_mode_display'  => apply_filters( 'wp_dark_mode/display_settings', array(
					'show_switcher' => array(
						'name'    => 'show_switcher',
						'default' => 'on',
						'label'   => __( 'Show Floating Switch', 'wp-dark-mode' ),
						'desc'    => __( 'Show the floating dark mode switcher button on the frontend for the users.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'switch_style'      => array(
						'name'    => 'switch_style',
						'default' => '1',
						'label'   => __( 'Floating Switch Style', 'wp-dark-mode' ),
						'desc'    => __( 'Select the switcher button style for the frontend.', 'wp-dark-mode' ),
						'type'    => 'image_choose',
						'options' => [
							'1' => wp_dark_mode()->plugin_url( 'assets/images/button-presets/btn-1-light.png' ),
							'2' => wp_dark_mode()->plugin_url( 'assets/images/button-presets/btn-2-light.png' ),
							'3' => wp_dark_mode()->plugin_url( 'assets/images/button-presets/btn-3-light.png' ),
							'4' => wp_dark_mode()->plugin_url( 'assets/images/button-presets/btn-4-light.png' ),
							'5' => wp_dark_mode()->plugin_url( 'assets/images/button-presets/btn-5-light.png' ),
							'6' => wp_dark_mode()->plugin_url( 'assets/images/button-presets/btn-6-light.png' ),
						],
					),

					'switcher_position' => array(
						'name'    => 'switcher_position',
						'default' => 'right_bottom',
						'label'   => __( 'Floating Switch Position', 'wp-dark-mode' ),
						'desc'    => __( 'Select the position of the floating dark mode switcher button on the frontend.',
							'wp-dark-mode' ),
						'type'    => 'select',
						'options' => [
							'left_bottom'  => __( 'Left Bottom', 'wp-dark-mode' ),
							'right_bottom' => __( 'Right Bottom', 'wp-dark-mode' ),
						],
					),

					'show_above_post'   => array(
						'name'    => 'show_above_post',
						'default' => 'off',
						'label'   => __( 'Show Above Posts', 'wp-dark-mode' ),
						'desc'    => __( 'Show the dark mode switcher button above of all the post.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'show_above_page'   => array(
						'name'    => 'show_above_page',
						'default' => 'off',
						'label'   => __( 'Show Above Pages', 'wp-dark-mode' ),
						'desc'    => __( 'Show the dark mode switcher button above of all the pages.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'excludes'   => array(
						'name'    => 'excludes',
						'default' => '',
						'label'   => __( 'Excludes Elements', 'wp-dark-mode' ),
						'desc'    => __( 'Add comma separated (classes, ids) to ignore the darkmode. ex: .class1, #hero-area', 'wp-dark-mode' ),
						'type'    => 'textarea',
					),
				) ),

				'wp_dark_mode_style'    => apply_filters( 'wp_dark_mode/style_settings', array(
					'color_preset'         => array(
						'name'    => 'color_preset',
						'default' => '1',
						'label'   => __( 'Darkmode Color Preset:', 'wp-dark-mode' ),
						'desc'    => __( 'Select the predefined darkmode background, text and link preset color.', 'wp-dark-mode' ),
						'type'    => 'image_choose',
						'options' => [
							'0' => wp_dark_mode()->plugin_url( 'assets/images/color-presets/preset-1.png' ),
							'1' => wp_dark_mode()->plugin_url( 'assets/images/color-presets/preset-2.png' ),
							'2' => wp_dark_mode()->plugin_url( 'assets/images/color-presets/preset-3.png' ),
							'3' => wp_dark_mode()->plugin_url( 'assets/images/color-presets/preset-4.png' ),
							'4' => wp_dark_mode()->plugin_url( 'assets/images/color-presets/preset-5.png' ),
							'5' => wp_dark_mode()->plugin_url( 'assets/images/color-presets/preset-6.png' ),
						],
					),

					'customize_colors' => array(
						'name'    => 'customize_colors',
						'default' => 'off',
						'label'   => __( 'Want to customize colors?', 'wp-dark-mode' ),
						'desc'    => __( 'Customize the darkmode background, text and link colors.', 'wp-dark-mode' ),
						'type'    => 'switcher',
					),

					'darkmode_bg_color'    => array(
						'name'    => 'darkmode_bg_color',
						'default' => '',
						'label'   => __( 'Darkmode Background Color', 'wp-dark-mode' ),
						'desc'    => __( 'Select the background color when the dark mode is on.', 'wp-dark-mode' ),
						'type'    => 'color',
					),

					'darkmode_text_color'  => array(
						'name'    => 'darkmode_text_color',
						'default' => '',
						'label'   => __( 'Darkmode Text Color', 'wp-dark-mode' ),
						'desc'    => __( 'Select the text color when the dark mode is on.', 'wp-dark-mode' ),
						'type'    => 'color',
					),

					'darkmode_links_color' => array(
						'name'    => 'darkmode_link_color',
						'default' => '',
						'label'   => __( 'Darkmode Links Color', 'wp-dark-mode' ),
						'desc'    => __( 'Select the links color when the dark mode is on.', 'wp-dark-mode' ),
						'type'    => 'color',
					),
				) ),

				'wp_dark_mode_license' => apply_filters( 'wp_dark_mode/license_settings', array(
					'license_settings' => array(
						'name'    => 'license',
						'default' => [ 'WP_Dark_Mode_Settings', 'license_output' ],
						'type'    => 'cb_function',
					),
				) ),

				'wp_dark_mode_start' => apply_filters( 'wp_dark_mode/getting_start', array(
					'getting_started' => array(
						'name'    => 'getting_started',
						'default' => [ 'WP_Dark_Mode_Settings', 'getting_started' ],
						'type'    => 'cb_function',
					),
				) ),

				'wp_dark_mode_gutenberg' => apply_filters( 'wp_dark_mode/settings_gutenberg', array(
					array(
						'name'    => 'enable_gutenberg',
						'default' => 'on',
						'label'   => __( 'Enable Gutenberg Block', 'wp-dark-mode' ),
						'desc'    => __( 'Enable/ Disable `Dark Mode Switch` gutenberg block to display the dark mode switch button.',
							'wp-dark-mode' ),
						'type'    => 'switcher',
					),
				) ),

				'wp_dark_mode_elementor' => apply_filters( 'wp_dark_mode/settings_elementor', array(
					array(
						'name'    => 'enable_elementor',
						'default' => 'on',
						'label'   => __( 'Enable Elementor Widget', 'wp-dark-mode' ),
						'desc'    => __( 'Enable/ Disable `Dark Mode Switch` elementor widget to display the dark mode switch button.',
							'wp-dark-mode' ),
						'type'    => 'switcher',
					),
				) ),
			);

			if ( ! is_plugin_active( 'wp-dark-mode-pro/plugin.php' ) && ! is_plugin_active( 'wp-dark-mode-ultimate/plugin.php' ) ) {
				$key = array_search( 'wp_dark_mode_license', array_column( $fields, 'id' ) );

				unset( $fields[ $key ] );
			}

			self::$settings_api = new WPPOOL_Settings_API();

			//set sections and fields
			self::$settings_api->set_sections( $sections );
			self::$settings_api->set_fields( $fields );

			//initialize them
			self::$settings_api->admin_init();
		}

		public static function license_output() {
			global $wp_dark_mode_license;
			$wp_dark_mode_license->menu_output();
		}

		public static function getting_started() { ?>
            <div class="getting-started-wrap">
                <div class="getting-started-section">
                    <h2>How to display Dark Mode Switch Button using Gutenberg block</h2>
                    <p>You can place the switch button into any page/post by using the (Dark Mode Switch) gutenberg block , for your users to switch between the dark and normal mode.
                        <br> For displaying the Darkmode Switch button in Gutenberg use the (Dark Mode Switch) Block.</p>
					<?php echo do_shortcode( '[video width="640" src="https://www.youtube.com/watch?v=TPKa-Xg9w5c"]' ); ?>
                </div>

                <div class="getting-started-section">
                    <h2>How to display Dark Mode Switch Button using Elementor Widget</h2>
                    <p>Also, You can place the Dark Mode switch button into any page/post by using the (Dark Mode Switch) elementor widget.
                        <br> For displaying the Darkmode Switch button in Elementor use the (Dark Mode Switch) Widget.
                    </p>
					<?php echo do_shortcode( '[video src="https://www.youtube.com/watch?v=5Y8XawJg4pw"]' ); ?>
                </div>

                <div class="getting-started-section">
                    <h2>How to deactivate the Dark Mode</h2>
                    <p>If you want to disable the darkmode functionality, Then go to your
                        <code>Admin Dashboard > Settings > WP Dark Mode</code> Then, turn off the enable frontend darkmode switch button.
                    </p>
					<?php echo do_shortcode( '[video src="https://www.youtube.com/watch?v=y7-XPXuF0-g"]' ); ?>
                </div>

            </div>
		<?php }

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