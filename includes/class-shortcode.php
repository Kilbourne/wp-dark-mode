<?php

namespace WPDM\includes;

/** Block direct access */
defined('ABSPATH') || exit();

/** check if class `WP_Dark_Mode_Shortcode` not exists yet */
if (!class_exists('WP_Dark_Mode_Shortcode')) {
	class WP_Dark_Mode_Shortcode {

		/**
		 * WP_Dark_Mode_Shortcode constructor.
		 */
		public function __construct() {
			add_shortcode('wp_dark_mode', [$this, 'render_dark_mode_btn']);
		}

		/**
		 * render the dark mode switcher button
		 */
		public function render_dark_mode_btn($atts) {

			$atts = shortcode_atts([
				'floating' => 'no',
				'style'    => 1,
			], $atts);

			ob_start();
			if (file_exists(WPDM_BASE_PATH . "templates/btn-{$atts['style']}.php")) {
				wp_dark_mode()->get_template("btn-{$atts['style']}", $atts);
			} else {
				wp_dark_mode()->get_template("btn-1", $atts);
			}

			return ob_get_clean();
		}
	}
}
