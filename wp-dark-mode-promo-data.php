<?php

include 'wp-blog-header.php';

$version = ! empty( $_GET['version'] ) ? wp_unslash( $_GET['version'] ) : '';

if ( $version >= '1.2.8' ) {

	$data = [
		'pro_title'       => 'Upgrade to PRO to access the PRO features',
		'ultimate_title'  => 'Upgrade to ULTIMATE to access the ULTIMATE features',
		'discount_text'   => '75% OFF',
		'pro_text'        => 'GET PRO',
		'ultimate_text'   => 'GET ULTIMATE',
		'countdown_time'  => '2020-11-27-20-00-00',
		'is_black_friday' => 'yes',
	];

	$transient_key  = 'wp_dark_mode_promo_time';
	$countdown_time = get_transient( $transient_key );

	if ( ! $countdown_time ) {
		$countdown_time = wp_date( 'Y-m-d-H-i-s', strtotime( ' + 8 hours' ) );
		set_transient( $transient_key, $countdown_time, 8 * HOUR_IN_SECONDS );
	}

	$data['countdown_time'] = $countdown_time;

	echo json_encode( $data );

}

die();