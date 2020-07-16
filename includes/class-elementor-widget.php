<?php

use Elementor\Controls_Manager;

defined( 'ABSPATH' ) || exit();

if ( ! class_exists( 'WP_Dark_Mode_Elementor_Widget' ) ) {
	class WP_Dark_Mode_Elementor_Widget extends \Elementor\Widget_Base {

		public function get_name() {
			return 'wp_dark_mode_switch';
		}

		public function get_title() {
			return __( 'Dark Mode Switch', 'wp-dark-mode' );
		}

		public function get_icon() {
			return 'eicon-adjust';
		}

		public function get_categories() {
			return [ 'basic' ];
		}

		public function get_keywords() {
			return [ 'wp dark mode', 'switch', 'night mode' ];
		}

		public function _register_controls() {

			$this->start_controls_section( '_section_alignment', [
				'label' => __( 'Alignment', 'wp-dark-mode' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			] );

			//switch style
			$this->add_control( '_switch_style_heading', [
				'label' => __( 'Layout', 'wp-dark-mode' ),
				'type'  => Controls_Manager::HEADING,
			] );

			//switch style
			$this->add_control( 'switch_style', [
				'label'     => __( 'Switch Style', 'wp-dark-mode' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => '1',
				'separator' => 'after',
				'options'   => [
					'1' => esc_html__( 'Style 1', 'wp-dark-mode' ),
					'2' => esc_html__( 'Style 2', 'wp-dark-mode' ),
					'3' => esc_html__( 'Style 3', 'wp-dark-mode' ),
					'4' => esc_html__( 'Style 4', 'wp-dark-mode' ),
					'5' => esc_html__( 'Style 5', 'wp-dark-mode' ),
				],
			] );

			$this->add_responsive_control( 'align', [
				'label'     => __( 'Alignment', 'wp-dark-mode' ),
				'type'      => Controls_Manager::CHOOSE,
				'options'   => [
					'left'   => [
						'title' => __( 'Left', 'wp-dark-mode' ),
						'icon'  => 'fa fa-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'wp-dark-mode' ),
						'icon'  => 'fa fa-align-center',
					],
					'right'  => [
						'title' => __( 'Right', 'wp-dark-mode' ),
						'icon'  => 'fa fa-align-right',
					],
				],
				'toggle'    => true,
				'default'   => 'left',
				'selectors' => [
					'{{WRAPPER}}' => 'text-align: {{VALUE}};',
				],
			] );

			$this->end_controls_section();
		}

		public function render() {
			$settings = $this->get_settings_for_display();
			extract( $settings );

			echo do_shortcode( "[wp_dark_mode style={$switch_style}]" );
		}

	}
}