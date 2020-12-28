<?php


if(!class_exists('WP_Dark_Mode_Admin')){
	class WP_Dark_Mode_Admin{
		/** @var null  */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Admin constructor.
		 */
		public function __construct() {
			add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		}

		public function admin_menu(){
			add_menu_page( __( 'WP Dark Mode', 'wp-dark-mode' ), __( 'WP Dark Mode', 'wp-dark-mode' ), 'manage_options',
				'wp-dark-mode', array( $this, 'getting_started' ), 'dashicons-admin-site-alt2', 40 );

		}

		public static function getting_started() {
			wp_dark_mode()->get_template('admin/get-started/index');
		}

		/**
		 * @return WP_Dark_Mode_Admin|null
		 */
		public static function instance(){
			if(is_null(self::$instance)){
				self::$instance = new self();
			}

			return self::$instance;
		}
	}

}

WP_Dark_Mode_Admin::instance();