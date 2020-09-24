<?php

class WP_Dark_Mode_Update_1_0_9 {

	private static $instance = null;

	public function __construct() {
		$this->update_color_scheme();
	}

	private function update_color_scheme() {
		$settings = get_option( 'wp_dark_mode_style', 0 );

		if ( 0 != $settings['color_preset'] ) {
			$settings['color_preset'] += 1;
		}

		update_option( 'wp_dark_mode_style', $settings );
	}

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}


WP_Dark_Mode_Update_1_0_9::instance();