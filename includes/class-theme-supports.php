<?php

defined( 'ABSPATH' ) || exit();

class WP_Dark_Mode_Theme_Supports {
	private static $instance = null;

	public function __construct() {
		add_action( 'wp_head', [ $this, 'theme_css' ] );
		//add_action( 'wp_footer', [ $this, 'theme_js' ] );
		add_filter('wp_dark_mode/not', [$this, 'not_selectors']);

		add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
		//add_filter( 'wp_dark_mode/excludes', [ $this, 'excludes' ] );
	}

	public function excludes( $excludes ) {

		if ($this->is_theme('Jannah')) {
			$excludes .= ", .post-thumb-overlay-wrap, .post-thumb-overlay";
		}

		return $excludes;
	}

	public function is_theme($theme){
		$theme = wp_get_theme();

		$theme_name        = $theme->name;
		$theme_parent_name = !empty($theme->parent()->name) ? $theme->parent()->name : '';

		return in_array( $theme, [ $theme_name, $theme_parent_name ] ) ;

	}

	public function theme_css() {
		if ( $this->is_theme('Astra')) {
			$this->astra_css();
		}

		if ($this->is_theme('Jannah')) {

		}

	}

	public function not_selectors($selectors){
		if ($this->is_theme('Jannah')) {
			$selectors = ':not(.breaking-title-text):not(.shopping-cart-icon):not(.menu-counter-bubble-outer):not(.menu-counter-bubble)';
		}

		return $selectors;
    }

    public function enqueue_scripts(){
	    if ($this->is_theme('Jannah')) {
	        wp_enqueue_style('wp-dark-mode-jannah', wp_dark_mode()->plugin_url('assets/css/themes/jannah.css'));
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