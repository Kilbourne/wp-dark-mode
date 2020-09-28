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

			if ( is_admin() && 'on' == wp_dark_mode_get_settings( 'wp_dark_mode_general', 'enable_backend', 'off' ) ) {
				add_action( 'admin_bar_menu', [ $this, 'render_admin_switcher_menu' ], 2000 );
				add_action( 'admin_head', [ $this, 'dark_styles' ] );
			}

			add_filter( 'wp_dark_mode/not', [ $this, 'not_selectors' ] );

			add_action( 'admin_init', [ $this, 'init_update' ] );
			add_action( 'wp_footer', [ $this, 'replace_image' ] );


		}

		public function init_update() {

			if ( class_exists( 'WP_Dark_Mode_update' ) && current_user_can( 'manage_options' ) ) {
				$updater = new WP_Dark_Mode_update();
				if ( $updater->needs_update() ) {
					$updater->perform_updates();
				}
			}
		}

		public function not_selectors( $selectors ) {
			//elementor
			if ( defined( 'ELEMENTOR_VERSION' ) ) {
				$selectors = ':not(.elementor-element-overlay):not(.elementor-background-overlay)';
			}

			//buddypress
			if ( class_exists( 'BuddyPress' ) ) {
				$selectors .= ':not(#item-header-cover-image):not(#item-header-avatar):not(.activity-content):not(.activity-header)';
			}

			return $selectors;
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
			global $post;

			if ( ! wp_dark_mode_enabled() ) {
				return;
			}

			if ( isset( $post->ID ) && in_array( $post->ID, wp_dark_mode_exclude_pages() ) ) {
				return;
			}

			$style = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_style', 1 );

			global $wp_dark_mode_license;
			if (!$wp_dark_mode_license || ! $wp_dark_mode_license->is_valid() ) {
				$style = $style > 2 ? 1 : $style;
			}

			echo do_shortcode( '[wp_dark_mode floating="yes" style="' . $style . '"]' );
		}

		public function pro_promo( $section ) {
			if ( wp_dark_mode()->is_pro_active() || wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			$args = [];

			if ( ! empty( $section ) && in_array( $section['id'], [ 'wp_dark_mode_display', 'wp_dark_mode_style' ] ) ) {
				$args['is_hidden'] = true;
			}

			wp_dark_mode()->get_template( 'admin/promo', $args );
		}

		public function ultimate_promo( $section ) {

			if ( wp_dark_mode()->is_ultimate_active() ) {
				return;
			}

			$args = [];

			if ( ! empty( $section ) && in_array($section['id'], ['wp_dark_mode_style', 'wp_dark_mode_image_settings']) ) {
				$args['is_hidden'] = true;
			}

			wp_dark_mode()->get_template( 'admin/promo-ultimate', $args );

			add_action( 'wp_footer', [ $this, 'replace_image' ] );

		}

		public function replace_image() {

			if ( ! wp_dark_mode_enabled() ) {
				return;
			}


			global $post;
			if ( isset( $post->ID ) && in_array( $post->ID, wp_dark_mode_exclude_pages() ) ) {
				return;
			}

			$images       = get_option( 'wp_dark_mode_image_settings' );
			$light_images = ! empty( $images['light_images'] ) ? array_filter( (array) $images['light_images'] ) : [];
			$dark_images  = ! empty( $images['dark_images'] ) ? array_filter( (array) $images['dark_images'] ) : [];

			?>
            <script>
                (function ($) {
                    $(document).ready(function () {
                        console.log('a')
						<?php

						foreach ($light_images as $key => $light_image){ ?>
                        var image = $("img[src$='<?php echo $light_image ?>']");

                        image.each(function () {
                            var display = $(this).css('display');

                            $(this).clone().attr({
                                src: '<?php echo $dark_images[ $key ]; ?>',
                                srcset: '<?php echo $dark_images[ $key ]; ?>',
                            }).addClass(`wp-dark-mode-dark-image wp-dark-mode-dark-image-${display}`).insertAfter($(this));

                            $(this).addClass('wp-dark-mode-light-image');
                        });


						<?php } ?>
                    });
                })(jQuery);
            </script>
			<?php
		}


		public function dark_styles() {

			if ( ! is_admin() && ! wp_dark_mode_enabled() ) {
				return;
			}

			global $post;
			if ( isset( $post->ID ) && in_array( $post->ID, wp_dark_mode_exclude_pages() ) ) {
				return;
			}

			$preset = wp_dark_mode_get_settings( 'wp_dark_mode_style', 'color_preset', '0' );

			if ( is_admin() ) {
				$preset = 0;
			}

		    $colors = wp_dark_mode_color_presets($preset);

			$bg_color     = $colors['bg'];
			$text_color   = $colors['text'];
			$link_color   = $colors['link'];
			$border_color = wp_dark_mode_lighten( $bg_color, 30 );
			$btn_bg_color = wp_dark_mode_lighten( $bg_color, 20 );

			if ( ! is_admin() ) {
				$bg_color     = apply_filters( 'wp_dark_mode/bg_color', $bg_color );
				$text_color   = apply_filters( 'wp_dark_mode/text_color', $text_color );
				$link_color   = apply_filters( 'wp_dark_mode/link_color', $link_color );
				$border_color = apply_filters( 'wp_dark_mode/border_color', $border_color );
			}

			if ( is_admin() ) {
				$base_selector = 'html.wp-dark-mode-active #wpbody';
				$bg_color      = '#10161E';
				$border_color  = '#555';
			} else {
				$base_selector = 'html.wp-dark-mode-active';
			}

			ob_start();

			/** declare css variables */
			printf( '
			    :root{
			        --wp-dark-mode-bg: %1$s;
			        --wp-dark-mode-text: %2$s;
			        --wp-dark-mode-link: %3$s;
			        --wp-dark-mode-btn: %4$s;
			        --wp-dark-mode-border: %5$s;
			    }
			', $bg_color, $text_color, $link_color, $btn_bg_color, $border_color );

			printf( '%1$s :not(.wp-dark-mode-ignore):not(mark):not(code):not(pre):not(ins):not(option):not(input):not(select):not(textarea):not(button):not(a):not(video):not(canvas):not(progress):not(iframe):not(svg):not(path):not(.mejs-iframe-overlay)%2$s{
			     background-color: var(--wp-dark-mode-bg) !important;
			     color: var(--wp-dark-mode-text) !important;
                 border-color: var(--wp-dark-mode-border) !important;
			}', $base_selector, apply_filters( 'wp_dark_mode/not', '' ) );


			printf( '%1$s {
                a,
                a *,
                a:active,
                a:active *,
                a:visited,
                a:visited * {
                    &:not(.wp-dark-mode-ignore){
                        background-color: transparent !important;
                        color: var(--wp-dark-mode-link) !important;
                        border-color: var(--wp-dark-mode-border) !important;
                    }
                }
			}', $base_selector );

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
                            background-color: var(--wp-dark-mode-btn) !important;
                            color: var(--wp-dark-mode-text) !important;
                            border-color: var(--wp-dark-mode-border) !important;
                        }
                        
                       * {
                          background: transparent !important;
                        }
                        
                    }
				}' );
			}

			$scss = ob_get_clean();

		    ?>

            <script>
                <?php

                if(is_admin()){ ?>
                var is_saved = sessionStorage.getItem('wp_dark_mode_admin');
				<?php }else{ ?>
                var is_saved = sessionStorage.getItem('wp_dark_mode_frontend');
				<?php }

                ?>
                if (is_saved && is_saved != 0) {
                    document.querySelector('html').classList.add('wp-dark-mode-active');
                }
            </script>

            <style>
                <?php
				if ( ! empty( $scss ) ) {
				    $scss_compiler = new scssc();
					echo $scss_compiler->compile( $scss );
				}
				?>
            </style>



		<?php
		}

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

			wp_send_json_success( do_shortcode( '[wp_dark_mode style="' . $style . '"]' ) );
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

