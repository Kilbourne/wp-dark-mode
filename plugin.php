<?php
/**
 * Plugin Name: WP Dark Mode
 * Plugin URI:  https://wppool.com/wp-dark-mode
 * Description: Lets your users  to switch web page between Night Mode and Normal Mode smoothly.
 * Version:     1.0.0
 * Author:      WPPOOL
 * Author URI:  http://wppool.com
 * Text Domain: wp-dark-mode
 * Domain Path: /languages/
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

/** don't call the file directly */
if ( ! defined( 'ABSPATH' ) ) {
	wp_die( __( 'You can\'t access this page', 'wp-dark-mode' ) );
}

/** if class `WP_Dark_Mode` doesn't exists yet. */
if ( ! class_exists( 'WP_Dark_Mode' ) ) {

	/**
	 * Sets up and initializes the plugin.
	 * Main initiation class
	 *
	 * @since 1.0.0
	 */
	final class WP_Dark_Mode {

		/**
		 * A reference to an instance of this class.
		 *
		 * @since  1.0.0
		 * @access private
		 * @var    object
		 */
		private static $instance = null;

		/**
		 * Plugin version.
		 *
		 * @since  1.0.0
		 * @access private
		 * @var string
		 */
		public $version = '1.0.0';

		/**
		 * Holder for base plugin URL
		 *
		 * @since  1.0.0
		 * @access private
		 * @var    string
		 */
		private $plugin_url = null;

		/**
		 * Holder for base plugin path
		 *
		 * @since  1.0.0
		 * @access private
		 * @var    string
		 */
		private $plugin_path = null;

		/**
		 * Minimum PHP version required
		 *
		 * @var string
		 */
		private static $min_php = '5.6.0';

		/**
		 * Sets up needed actions/filters for the plugin to initialize.
		 *
		 * @return void
		 * @since  1.0.0
		 * @access public
		 */
		public function __construct() {
			if ( $this->check_environment() ) {
				$this->load_files();

				// Load files.
				add_action( 'init', array( $this, 'init' ), - 999 );
			}
		}

		/**
		 * Ensure theme and server variable compatibility
		 *
		 * @return boolean
		 * @since  1.0.0
		 * @access private
		 */
		private function check_environment() {

			$return = true;

			/** Check the PHP version compatibility */
			if ( version_compare( PHP_VERSION, self::$min_php, '<=' ) ) {
				$return = false;

				$notice = sprintf( esc_html__( 'Unsupported PHP version Min required PHP Version: "%s"', 'wp-tv' ), self::$min_php );
			}

			/** Add notice and deactivate the plugin if the environment is not compatible */
			if ( ! $return ) {

				add_action( 'admin_notices', function () use ( $notice ) { ?>
                    <div class="notice is-dismissible notice-error">
                        <p><?php echo $notice; ?></p>
                    </div>
				<?php } );

				if ( ! function_exists( 'deactivate_plugins' ) ) {
					require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
				}

				deactivate_plugins( plugin_basename( __FILE__ ) );

				return $return;
			} else {
				return $return;
			}

		}

		/**
		 * Hook into actions and filters.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function init() {
			/** add admin notices */
			add_action( 'admin_notices', [ $this, 'print_notices' ], 15 );

			/** localize our plugin */
			add_action( 'init', [ $this, 'lang' ] );

			/** plugin action_links */
			add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );

			/** do the activation stuff */
			register_activation_hook( __FILE__, function () {
				require $this->plugin_path( 'includes/class-install.php' );
			} );
		}


		/**
		 * Include required core files used in admin and on the frontend.
		 *
		 * @return void
		 * @since 1.0.0
		 */
		function load_files() {

			//core includes
			require $this->plugin_path( 'includes/functions.php' );
			require $this->plugin_path( 'includes/class-hooks.php' );
			require $this->plugin_path( 'includes/class-form-handler.php' );
			require $this->plugin_path( 'includes/class-enqueue.php' );
			require $this->plugin_path( 'includes/class-shortcode.php' );
			require $this->plugin_path( 'includes/class-widget.php' );

			//admin includes
			if ( is_admin() ) {
				require $this->plugin_path( 'includes/admin/class-admin.php' );
				require $this->plugin_path( 'includes/admin/class-settings-api.php' );
				require $this->plugin_path( 'includes/admin/class-settings.php' );
			}

		}


		/**
		 * Initialize plugin for localization
		 *
		 * @return void
		 * @since 1.0.0
		 *
		 */
		function lang() {
			load_plugin_textdomain( 'wp-dark-mode', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
		}

		/**
		 * Plugin action links
		 *
		 * @param   array  $links
		 *
		 * @return array
		 */
		public function plugin_action_links( $links ) {
			$links[] = sprintf( '<a href="%1$s">%2$s</a>', admin_url( 'options-general.php?page=wp-dark-mode-settings' ),
				__( 'Settings', 'wp-dark-mode' ) );

			return $links;
		}

		/**
		 * Returns path to file or dir inside plugin folder
		 *
		 * @param   string  $path  Path inside plugin dir.
		 *
		 * @return string
		 */
		public function plugin_path( $path = null ) {

			if ( ! $this->plugin_path ) {
				$this->plugin_path = trailingslashit( plugin_dir_path( __FILE__ ) );
			}

			return $this->plugin_path . $path;
		}

		/**
		 * Returns url to file or dir inside plugin folder
		 *
		 * @param   string  $path  Path inside plugin dir.
		 *
		 * @return string
		 */
		public function plugin_url( $path = null ) {

			if ( ! $this->plugin_url ) {
				$this->plugin_url = trailingslashit( plugin_dir_url( __FILE__ ) );
			}

			return $this->plugin_url . $path;
		}

		/**
		 * Get the template path.
		 *
		 * @return string
		 * @since 1.0.0
		 */
		public function template_path() {
			return apply_filters( 'wp_dark_mode_template_path', 'wp-dark-mode/' );
		}

		/**
		 * Returns path to template file.
		 *
		 * @param null $name
		 * @param boolean|array $args
		 *
		 * @return bool|string
		 * @since 1.0.0
		 */
		public function get_template( $name = null, $args = false ) {
			if ( ! empty( $args ) && is_array( $args ) ) {
				extract( $args );
			}

			$template = locate_template( $this->template_path() . $name . '.php' );

			if ( ! $template ) {
				$template = $this->plugin_path( "templates/$name.php" );
			}

			if ( file_exists( $template ) ) {
				include $template;
			} else {
				return false;
			}
		}

		/**
		 * add admin notices
		 *
		 * @param           $class
		 * @param           $message
		 * @param   string  $only_admin
		 *
		 * @return void
		 */
		public function add_notice( $class, $message, $only_admin = '' ) {

			$notices = get_option( sanitize_key( 'wp_dark_mode_notices' ), [] );
			if ( is_string( $message ) && is_string( $class )
			     && ! wp_list_filter( $notices, array( 'message' => $message ) ) ) {

				$notices[] = array(
					'message'    => $message,
					'class'      => $class,
					'only_admin' => $only_admin,
				);

				update_option( sanitize_key( 'wp_dark_mode_notices' ), $notices );
			}

		}

		/**
		 * Print the admin notices
		 *
		 * @return void
		 * @since 1.0.0
		 */
		public function print_notices() {
			$notices = get_option( sanitize_key( 'wp_dark_mode_notices' ), [] );
			foreach ( $notices as $notice ) {

				if ( ! empty( $notice['only_admin'] ) && ! is_admin() ) {
					continue;
				}

				?>
                <div class="notice notice-<?php echo $notice['class']; ?>">
                    <p><?php echo $notice['message']; ?></p>
                </div>
				<?php
				update_option( sanitize_key( 'wp_dark_mode_notices' ), [] );
			}
		}

		/**
		 * Main WP_Dark_Mode Instance.
		 *
		 * Ensures only one instance of WP_Dark_Mode is loaded or can be loaded.
		 *
		 * @return WP_Dark_Mode - Main instance.
		 * @since 1.0.0
		 * @static
		 */
		public static function instance() {

			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}

}

/** if function `wp_tv` doesn't exists yet. */
if ( ! function_exists( 'wp_dark_mode' ) ) {
	function wp_dark_mode() {
		return WP_Dark_Mode::instance();
	}
}

/** fire off the plugin */
wp_dark_mode();