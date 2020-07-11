<?php

/** prevent direct access */
defined( 'ABSPATH' ) || exit();

/** check if not class `WP_Dark_Mode_Admin` exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Admin' ) ) {
	class WP_Dark_Mode_Admin {

		/**
		 * @var null
		 */
		private static $instance = null;

		/**
		 * Admin constructor.
		 */
		public function __construct() {
			if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend' ) ) {
				add_action( 'admin_bar_menu', [ $this, 'render_admin_switcher_menu' ], 2000 );
			}
		}

		/**
		 * display dark mode switcher button on the admin bar menu
		 */
		public function render_admin_switcher_menu() {
			global $wp_admin_bar;
			$wp_admin_bar->add_menu( array(
				'id'    => 'wp-dark-mode',
				'title' => '<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
<div class="wp-dark-mode-switcher">

    <i class="wp-dark-mode-moon-o wp-dark-mode-moon-icon-size-small"></i>
    <i class="wp-dark-mode-light-up wp-dark-mode-moon-icon-size-small"></i>

    <label for="wp-dark-mode-switch">
        <div class="toggle"></div>
        <div class="modes">
            <p class="light">Light</p>
            <p class="dark">Dark</p>
        </div>
    </label>

</div>',
				'href'  => '#',
			) );
		}

		/**
		 * @return WP_Dark_Mode_Admin|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

	}
}
WP_Dark_Mode_Admin::instance();