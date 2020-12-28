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

			add_filter( 'wp_dark_mode/not', [ $this, 'not_selectors' ] );
			add_filter( 'wp_dark_mode/excludes', [ $this, 'excludes' ] );

			add_action( 'admin_init', [ $this, 'init_update' ] );
			add_action( 'admin_footer', [$this, 'display_promo']);
			add_action( 'wppool_after_settings', [ $this, 'pro_promo' ] );

			/** display the dark mode switcher if the dark mode enabled on frontend */
			if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'show_switcher', 'on' ) ) {
				add_action( 'wp_footer', [ $this, 'display_widget' ] );
			}

			if ( is_admin() && 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'off' ) ) {
				add_action( 'admin_bar_menu', [ $this, 'render_admin_switcher_menu' ], 2000 );
			}

		}

		public function display_promo(){

			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

		    if(wp_dark_mode_is_gutenberg_page()){
			    wp_dark_mode()->get_template( 'admin/promo' );
		    }
        }

		/**
		 * Exclude elements
		 *
		 * @param $excludes
		 *
		 * @return string
		 */
		public function excludes( $excludes ) {

		    /** exclude rev slider */
		    if(class_exists('RevSliderFront')){
		        $excludes .= ', rs-fullwidth-wrap';
            }

			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				$selectors = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'excludes', '' );

				if ( ! empty( $selectors ) ) {
					$excludes .= ", $selectors";
				}
			}

			return $excludes;
		}

		public function init_update() {

			if ( class_exists( 'WP_Dark_Mode_Update' ) && current_user_can( 'manage_options' ) ) {
				$updater = new WP_Dark_Mode_Update();
				if ( $updater->needs_update() ) {
					$updater->perform_updates();
				}
			}
		}

		public function not_selectors( $selectors ) {

			$excludes = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'excludes', '' );

			$excludes = trim( $excludes, ',' );
			$excludes = explode( ',', $excludes );

			if ( ! empty( $excludes ) ) {
				foreach ( $excludes as $exclude ) {
				    $exclude = trim($exclude);
					$selectors .= ":not($exclude)";
				}
			}

			//elementor
			if ( defined( 'ELEMENTOR_VERSION' ) ) {
				$selectors .= ':not(.elementor-element-overlay):not(.elementor-background-overlay)';
			}

			//buddypress
			if ( class_exists( 'BuddyPress' ) ) {
				$selectors .= ':not(#item-header-cover-image):not(#item-header-avatar):not(.activity-content):not(.activity-header)';
			}

			return $selectors;
		}

		/**
		 * display dark mode switcher button on the admin bar menu
		 */
		public function render_admin_switcher_menu() {

			if ( class_exists( 'Dark_mode' ) ) {
				return;
			}

			$light_text = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_text_light', 'Light' );
			$dark_text  = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_text_dark', 'Dark' );

			global $wp_admin_bar;
			$wp_admin_bar->add_menu( array(
				'id'    => 'wp-dark-mode',
				'title' => sprintf( '<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
                            <div class="wp-dark-mode-switcher wp-dark-mode-ignore">
                            
                                <label for="wp-dark-mode-switch">
                                    <div class="toggle"></div>
                                    <div class="modes">
                                        <p class="light">%s</p>
                                        <p class="dark">%s</p>
                                    </div>
                                </label>
                            
                            </div>', $light_text, $dark_text ),
				'href'  => '#',
			) );
		}

		/**
		 * display the footer widget
		 */
		public function display_widget() {
			global $post;

			if ( ! wp_dark_mode_enabled() ) {
				return false;
			}

			if ( isset( $post->ID ) && in_array( $post->ID, wp_dark_mode_exclude_pages() ) ) {
				return false;
			}

			$style = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_style', 1 );

			global $wp_dark_mode_license;
			if ( ! $wp_dark_mode_license || ! $wp_dark_mode_license->is_valid() ) {
				$style = $style > 2 ? 1 : $style;
			}

			echo do_shortcode( '[wp_dark_mode floating="yes" style="' . $style . '"]' );
		}

		/**
		 * Display promo popup to upgrade to PRO
		 *
		 * @param $section - setting section
		 */
		public function pro_promo(  ) {

			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			wp_dark_mode()->get_template( 'admin/promo' );
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

