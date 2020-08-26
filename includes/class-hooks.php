<?php

/** Block direct access */
defined( 'ABSPATH' ) || exit();

/** check if class `WP_Dark_Mode_Hooks` not exists yet */
if ( ! class_exists( 'WP_Dark_Mode_Hooks' ) ) {
	class WP_Dark_Mode_Hooks {

		/**
		 * @var null
		 */
		private static $instance = null;

		/**
		 * WP_Dark_Mode_Hooks constructor.
		 */
		public function __construct() {
			add_action( 'rest_api_init', array( $this, 'rest_api' ) );

			add_action( 'wp_head', [ $this, 'dark_styles' ] );
			add_action( 'wp_footer', [ $this, 'dark_scripts' ] );
			add_action( 'elementor/editor/footer', [ $this, 'dark_scripts' ] );

			/** display the dark mode switcher if the dark mode enabled on frontend */
			if ( 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'show_switcher', 'on' ) ) {
				add_action( 'wp_footer', [ $this, 'display_widget' ] );
			}

			add_action( 'wsa_form_bottom_wp_dark_mode_advanced', [ $this, 'pro_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_display', [ $this, 'pro_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_style', [ $this, 'ultimate_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_style', [ $this, 'pro_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_image_settings', [ $this, 'ultimate_promo' ] );
			add_action( 'wsa_form_bottom_wp_dark_mode_custom_css', [ $this, 'ultimate_promo' ] );

			if ( is_admin() && 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'on' ) ) {
				add_action( 'admin_bar_menu', [ $this, 'render_admin_switcher_menu' ], 2000 );
				add_action( 'admin_head', [ $this, 'dark_styles' ] );
				add_action( 'admin_footer', [ $this, 'dark_scripts' ] );
			}

		}

		/**
		 * display dark mode switcher button on the admin bar menu
		 */
		public function render_admin_switcher_menu() {

			global $wp_admin_bar;
			$wp_admin_bar->add_menu( array(
				'id'    => 'wp-dark-mode',
				'title' => '<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
<div class="wp-dark-mode-switcher wp-dark-mode-ignore">

    <label for="wp-dark-mode-switch">
        <div class="toggle"></div>
        <div class="modes">
            <p class="light">Light</p>
            <p class="dark">Dark</p>
        </div>
    </label>

</div>',
				'href'  => '#',
			) );
		}

		/**
		 * display the footer widget
		 */
		public function display_widget() {
			$style = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_style', 1 );

			global $wp_dark_mode_license;
			if (!$wp_dark_mode_license || ! $wp_dark_mode_license->is_valid() ) {
				$style = 1;
			}

			echo do_shortcode( '[wp_dark_mode floating="yes" style="' . $style . '"]' );
		}

		public function pro_promo() {
			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			wp_dark_mode()->get_template( 'admin/promo' );
		}

		public function ultimate_promo( $section ) {

			if ( wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			$args = [];

			if ( ! empty( $section ) && 'wp_dark_mode_style' == $section['id'] ) {
				$args['is_hidden'] = true;
			}

			wp_dark_mode()->get_template( 'admin/promo-ultimate', $args );
		}

		public function dark_styles() {

			$preset = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'color_preset', '0' );

		    $colors = wp_dark_mode_color_presets($preset);

			$bg_color     = apply_filters( 'wp_dark_mode/bg_color', $colors['bg'] );
			$text_color   = apply_filters( 'wp_dark_mode/text_color', $colors['text'] );
			$link_color   = apply_filters( 'wp_dark_mode/link_color', $colors['link'] );
			$border_color = apply_filters( 'wp_dark_mode/border_color', $colors['link'] );

			if ( is_admin() ) {
				$base_selector = 'html.wp-dark-mode-active #wpbody';
				$bg_color      = '#10161E';
				$border_color  = '#555';
			} else {
				$base_selector = 'html.wp-dark-mode-active';
			}

			$scss_compiler = new scssc();

			ob_start();

			printf( '%1$s :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay):not(.elementor-element-overlay):not(.elementor-background-overlay){
			     background-color: %2$s !important;
			     color: %3$s !important;
                 border-color: %4$s !important;
			}', $base_selector, $bg_color, $text_color, $border_color );

			printf( '%1$s {
                a,
                a *,
                a:active,
                a:active *,
                a:visited,
                a:visited * {
                    &:not(.wp-dark-mode-ignore){
                        background-color: transparent !important;
                        color: %2$s !important;
                        border-color: %3$s !important;
                    }
                }
			}', $base_selector, $link_color, $border_color );

			if ( ! is_admin() ) {
				printf( 'html.wp-dark-mode-active{
				    button:not(#collapse-button):not(.search-toggle),
                    iframe,
                    iframe *,
                    input,
                    input[type="button"],
                    input[type="checkebox"],
                    input[type="date"],
                    input[type="datetime-local"],
                    input[type="email"],
                    input[type="image"],
                    input[type="month"],
                    input[type="number"],
                    input[type="range"],
                    input[type="reset"],
                    input[type="search"],
                    input[type="submit"],
                    input[type="tel"],
                    input[type="text"],
                    input[type="time"],
                    input[type="url"],
                    input[type="week"],
                    select,
                    textarea,
                    i {
                        &:not(.wp-dark-mode-ignore){
                            background-color: rgb(53, 66, 80) !important;
                            color: %1$s !important;
                            border-color: %2$s !important;
                        }
                        
                       * {
                          background: transparent !important;
                        }
                        
                    }
				}', $text_color, $border_color );
			}

			$scss = ob_get_clean();

		    ?>

            <script>
                <?php if(is_admin()){ ?>
                var is_saved = sessionStorage.getItem('wp_dark_mode_admin');
				<?php }else{ ?>
                var is_saved = sessionStorage.getItem('wp_dark_mode_frontend');
				<?php } ?>

                if (is_saved && is_saved != 0) {
                    document.getElementsByTagName('html')[0].classList.add('wp-dark-mode-active');
                }
            </script>

            <style><?php echo $scss_compiler->compile( $scss ); ?></style>



		<?php
		}

		/**
		 * darkmode scripts
		 */
		public function dark_scripts() {

			$selectors = '.wp-dark-mode-ignore';
			$excludes  = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'excludes' );

			if ( ! empty( $excludes ) ) {
				$selectors .= ", $excludes";
			}

			?>
            <script>
                (function ($) {
                    $(document).ready(function () {

                        handleExcludes();
                        $(window).on('darkmodeInit', handleExcludes);
                        $(document).on('change', '.wp-dark-mode-switch', handleExcludes);

                        function handleExcludes(){
                            $('<?php echo $selectors; ?>').addClass('wp-dark-mode-ignore').find('*').addClass('wp-dark-mode-ignore');
                        }

                    });
                })(jQuery)
            </script>
		<?php }

		/**
		 * register rest api route
		 */
		public function rest_api() {
			$namespace = 'wp-dark-mode/v1';

			register_rest_route( $namespace, '/switch/(?P<switch>\d+)', array(
				array(
					'methods'             => 'GET',
					'callback'            => array( $this, 'rest_api_get_switch_preview' ),
					'permission_callback' => '__return_true',
				),
			) );
		}

		/**
		 * Get the rest api switch preview
		 *
		 * @param $data
		 */
		public function rest_api_get_switch_preview( $data ) {
			$style = isset( $data['switch'] ) ? $data['switch'] : false;

			if ( $style === false ) {
				$style = 1;
			}

			return wp_send_json_success( do_shortcode( '[wp_dark_mode style="' . $style . '"]' ) );
		}

		/**
		 * @return WP_Dark_Mode_Hooks|null
		 */
		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}
}

WP_Dark_Mode_Hooks::instance();

