<?php


/** prevent direct access */
defined('ABSPATH') || exit();

if (!function_exists('wp_dark_mode_get_settings')) {
	/**
	 * Get setting database option
	 *
	 * @param           $section
	 * @param           $key
	 * @param   string  $default
	 *
	 * @return string
	 */
	function wp_dark_mode_get_settings($section = 'wp_dark_mode_general', $key = '', $default = '') {
		$settings = get_option($section);

		return !empty($settings[$key]) ? $settings[$key] : $default;
	}
}

if (!function_exists('wp_dark_mode_color_presets')) {
	function wp_dark_mode_color_presets($preset = '0') {
		$presets = apply_filters('wp_dark_mode/color_presets', [
			[
				'bg'   => '#000',
				'text' => '#dfdedb',
				'link' => '#e58c17',
			],
			[
				'bg'   => '#1B2836',
				'text' => '#fff',
				'link' => '#459BE6',
			],
			[
				'bg'   => '#1E0024',
				'text' => '#fff',
				'link' => '#E251FF',
			],
		]);

		return !empty($presets[$preset]) ? $presets[$preset] : $presets['0'];
	}
}

if (!function_exists('wp_dark_mode_exclude_pages')) {
	/**
	 * @return string|array
	 */
	function wp_dark_mode_exclude_pages() {
		return  wp_dark_mode_get_settings('wp_dark_mode_display', 'exclude_pages', []);
	}
}

if (!function_exists('wp_dark_mode_lighten')) {
	function wp_dark_mode_lighten($hex, $steps) {
		// Steps should be between -255 and 255. Negative = darker, positive = lighter
		$steps = max(-255, min(255, $steps));

		// Normalize into a six character long hex string
		$hex = str_replace('#', '', $hex);
		if (strlen($hex) == 3) {
			$hex = str_repeat(substr($hex, 0, 1), 2) . str_repeat(substr($hex, 1, 1), 2) . str_repeat(substr($hex, 2, 1), 2);
		}

		// Split into three parts: R, G and B
		$color_parts = str_split($hex, 2);
		$return      = '#';

		foreach ($color_parts as $color) {
			$color  = hexdec($color);                                   // Convert to decimal
			$color  = max(0, min(255, $color + $steps));              // Adjust color
			$return .= str_pad(dechex($color), 2, '0', STR_PAD_LEFT); // Make two char hex code
		}

		return $return;
	}
}

if (!function_exists('wp_dark_mode_enabled')) {
	function wp_dark_mode_enabled() {
		return 'on' == wp_dark_mode_get_settings('wp_dark_mode_general', 'enable_frontend', 'on');
	}
}
