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

if ( ! function_exists( 'wp_dark_mode_color_presets' ) ) {
	function wp_dark_mode_color_presets( $preset = '0' ) {
		$presets = apply_filters( 'wp_dark_mode/color_presets', [
			'1' => [
				'bg'   => '#1B2836',
				'text' => '#fff',
				'link' => '#459BE6',
			],
		] );

		return ! empty( $presets[ $preset ] ) ? $presets[ $preset ] : $presets['0'];
	}
}