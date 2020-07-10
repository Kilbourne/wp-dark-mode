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