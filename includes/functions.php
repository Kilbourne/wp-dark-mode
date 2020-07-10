<?php

/** prevent direct access */
defined( 'ABSPATH' ) || exit();

if ( ! function_exists( 'wp_dark_mode_get_settings' ) ) {
	/**
	 * Get setting database option
	 *
	 * @param           $key
	 * @param   string  $default
	 *
	 * @return string
	 */
	function wp_dark_mode_get_settings( $key, $default = '' ) {
		$settings = get_option( 'wp_dark_mode_options' );

		return ! empty( $settings[ $key ] ) ? $settings[ $key ] : $default;
	}
}