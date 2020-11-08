<?php

$is_hidden = isset( $is_hidden ) && $is_hidden;
$is_pro    = isset( $is_pro_promo ) && $is_pro_promo;

$data = [
	'pro_title'      => 'Upgrade to PRO to access the PRO features',
	'ultimate_title' => 'Upgrade to ULTIMATE to access the ULTIMATE features',
	'discount_text'  => 'GET <span class="percentage">50%</span> OFF',
	'limited_text'   => 'LIMITED TIME ONLY',
	'pro_text'       => 'GET PRO',
	'ultimate_text'  => 'GET ULTIMATE',
	'countdown_time' => '',
];

$url = 'https://wppool.dev/wp-dark-mode-promo-data.json';

if ( $json = file_get_contents( $url ) ) {
	$data = (array) json_decode( $json );
}

$title = $is_pro ? $data['pro_title'] : $data['ultimate_title'];

?>

<div class="promo <?php echo $is_hidden ? 'hidden' : ''; ?>">
    <div class="promo-inner">

		<?php if ( $is_hidden ) { ?>
            <span class="close-promo">&times;</span>
		<?php } ?>

        <img src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/crown.svg' ) ?>" class="promo-img">

		<?php

		if ( ! empty( $title ) ) {
			printf( '<h3>%s</h3>', $title );
		}

		if ( ! empty( $data['discount_text'] ) ) {
			printf( '<h3 class="discount">%s</h3>', $data['discount_text'] );
		}


		if ( ! empty( $data['limited_text'] ) ) {
			printf( '<h3 class="limited-title">%s</h3>', $data['limited_text'] );
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

            margin: 30px auto 0;
            padding: 0 0 10px;
        }

        .syotimer-cell {
            display: inline-block;
            margin: 0 5px;

            width: 79px;
            background: url(<?php echo wp_dark_mode()->plugin_url('assets/images/timer.png'); ?>) no-repeat 0 0;
        }

        .syotimer-cell__value {
            font-size: 35px;
            color: #80a3ca;

            height: 81px;
            line-height: 81px;

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

                    $(this).closest('table').next('.promo.hidden').removeClass('hidden');
                });

                //close promo
                $(document).on('click', '.close-promo', function () {
                    $(this).closest('.promo').addClass('hidden');
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