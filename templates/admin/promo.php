<?php

$is_hidden = isset( $is_hidden ) && $is_hidden;
$is_pro    = isset( $is_pro_promo ) && $is_pro_promo;

$data_transient_key = 'wp_dark_mode_promo_data';

$data = [
	'pro_title'       => 'Upgrade to PRO to access the PRO features',
	'ultimate_title'  => 'Upgrade to ULTIMATE to access the ULTIMATE features',
	'discount_text'   => '50% OFF',
	'pro_text'        => 'GET PRO',
	'ultimate_text'   => 'GET ULTIMATE',
	'countdown_time'  => '2020-11-12',
	'is_black_friday' => 'no',
];

if ( get_transient( $data_transient_key ) ) {
	$data = get_transient( $data_transient_key );
} else {
	$url = 'https://wppool.dev/wp-dark-mode-promo-black-friday.json';

	$res = wp_remote_get($url);

	if(!is_wp_error($res)){
		$json = wp_remote_retrieve_body($res);
		$data = (array) json_decode( $json );

		set_transient( $data_transient_key, $data, DAY_IN_SECONDS );
	}
}

$title = $is_pro ? $data['pro_title'] : $data['ultimate_title'];

?>

<div class="wp-dark-mode-promo <?php echo $is_hidden ? 'hidden' : ''; ?>">
    <div class="wp-dark-mode-promo-inner <?php echo $data['is_black_friday'] == 'yes' ? 'black-friday' : ''; ?>">

		<?php if ( $is_hidden ) { ?>
            <span class="close-promo">&times;</span>
		<?php } ?>

        <img src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/gift-box.svg' ) ?>" class="promo-img">

		<?php if ( $data['is_black_friday'] == 'yes' ) { ?>
            <div class="black-friday-wrap">
                <h3>Biggest sale of the year.</h3>

                <div class="ribbon">
                    <div class="ribbon-stitches-top"></div>
                    <strong class="ribbon-content"><h1>BLACK FRIDAY</h1></strong>
                    <div class="ribbon-stitches-bottom"></div>
                </div>

            </div>
		<?php } ?>

		<?php

		if ( ! empty( $title ) ) {
			printf( '<h3 class="promo-title">%s</h3>', $title );
		}

		if ( ! empty( $data['discount_text'] ) ) {
			printf( '<div class="discount"> <span class="discount-special">SPECIAL</span> <span class="discount-text">%s</span></div>', $data['discount_text'] );
		}


		if ( ! empty( $data['countdown_time'] ) ) {
			if ( $data['countdown_time'] > date( 'Y-m-d-H-i' ) ) {
				echo '<div class="simple_timer"></div>';
			}
		}

		?>

        <a href="https://wppool.dev/wp-dark-mode"
           target="_blank"><?php echo $is_pro ? $data['pro_text'] : $data['ultimate_text']; ?></a>

    </div>

    <style>
        .syotimer {
            text-align: center;
            padding: 0 0 10px;
        }

        .syotimer-cell {
            display: inline-block;
            margin: 0 14px;

            width: 50px;
            background: url(<?php echo wp_dark_mode()->plugin_url('assets/images/timer.svg'); ?>) no-repeat 0 0;
            background-size: contain;
        }

        .syotimer-cell__value {
            font-size: 28px;
            color: #fff;

            height: 54px;
            line-height: 54px;

            margin: 0 0 5px;
        }

        .syotimer-cell__unit {
            font-family: Arial, serif;
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
        }
    </style>


    <script>
        (function ($) {
            $(document).ready(function () {

                //show popup
                $(document).on('click', '.image-choose-opt.disabled, .form-table tr.disabled', function (e) {
                    e.preventDefault();

                    $(this).closest('table').next('.wp-dark-mode-promo.hidden').removeClass('hidden');
                });

                //close promo
                $(document).on('click', '.close-promo', function () {
                    $(this).closest('.wp-dark-mode-promo').addClass('hidden');
                });

				<?php
				if ( ! empty( $date = $data['countdown_time'] ) ) {

				$date_parts = explode( '-', $date );

				$countdown_time = [
					'year'  => $date_parts[0],
					'month' => $date_parts[1],
					'day'   => $date_parts[2],
				];

				?>

                if (typeof window.timer_set === 'undefined') {
                    window.timer_set = $('.simple_timer').syotimer({
                        year: <?php echo $countdown_time['year']; ?>,
                        month: <?php echo $countdown_time['month']; ?>,
                        day: <?php echo $countdown_time['day']; ?>,
                    });
                }
				<?php } ?>

            })
        })(jQuery);
    </script>

</div>