<?php

/** prevent direct access */
defined( 'ABSPATH' ) || exit();

if ( ! function_exists( 'wp_dark_mode_get_settings' ) ) {
	/**
	 * Get setting database option
	 *
	 * @param           $section
	 * @param           $key
	 * @param   string  $default
	 *
	 * @return string
	 */
	function wp_dark_mode_get_settings( $section = 'wp_dark_mode_general', $key = '', $default = '' ) {
		$settings = get_option( $section );

		return ! empty( $settings[ $key ] ) ? $settings[ $key ] : $default;
	}
}