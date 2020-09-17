<?php

defined( 'ABSPATH' ) || exit();

class WP_Dark_Mode_Theme_Supports {
	private static $instance = null;

	public function __construct() {
		add_action( 'wp_head', [ $this, 'theme_css' ] );
	}

	public function theme_css() {
		$theme = wp_get_theme();

		$theme_name        = $theme->name;
		$theme_parent_name = !empty($theme->parent()->name) ? $theme->parent()->name : '';

		if ( in_array( 'Astra', [ $theme_name, $theme_parent_name ] ) ) {
			$this->astra_css();
		}


	}

	public function astra_css() { ?>
        <style>
           .wp-dark-mode-active .widget.widget_search .search-submit {
                opacity: 0;
            }
        </style>
	<?php }

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}

WP_Dark_Mode_Theme_Supports::instance();