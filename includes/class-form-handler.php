<?php

/** prevent direct access */
defined( 'ABSPATH' ) || exit();

/** check if class `WP_Dark_Mode_Form_Handler` not exists yet */
if(!class_exists('WP_Dark_Mode_Form_Handler')) {
	/**
	 * Class Ajax
	 *
	 * Handle all Ajax requests
	 *
	 * @since 1.0.0
	 *
	 * @package Prince\WP_Radio
	 */
	class WP_Dark_Mode_Form_Handler {

		/**
		 * @var null
		 */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Form_Handler constructor.
		 */
		public function __construct() {
		}

		/**
		 * @return WP_Dark_Mode_Form_Handler|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

	}
}

WP_Dark_Mode_Form_Handler::instance();
