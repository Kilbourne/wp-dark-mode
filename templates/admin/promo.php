<?php
$is_hidden = isset( $is_hidden ) && $is_hidden;

$transient_key  = 'wp_dark_mode_promo_time';
$countdown_time = get_transient( $transient_key );

if ( ! $countdown_time ) {

	$date = date( 'Y-m-d-H-i', strtotime( '+ 6 days' ) );

	$date_parts = explode( '-', $date );

	$countdown_time = [
		'year'   => $date_parts[0],
		'month'  => $date_parts[1],
		'day'    => $date_parts[2],
		'hour'   => $date_parts[3],
		'minute' => $date_parts[4],
	];

	set_transient( $transient_key, $countdown_time, 6 * 24 * HOUR_IN_SECONDS );

}

$url        = 'https://wppool.dev/wp-dark-mode-promo.json';
$promo_json = json_decode( file_get_contents( $url ) );

?>

<div class="promo <?php echo $is_hidden ? 'hidden' : ''; ?>">
    <div class="promo-inner">

	    <?php if ( $is_hidden ) { ?>
            <span class="close-promo">&times;</span>
	    <?php } ?>
        <img src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/crown.svg' ) ?>" class="promo-img">

        <h3>Upgrade to PRO to access the PRO features</h3>
        <h3 class="discount">GET <span class="percentage"><?php echo ! empty( $promo_json->discount ) ? $promo_json->discount : '63%'; ?></span> OFF
        </h3>
        <h3 class="limited-title">LIMITED TIME ONLY</h3>
        <div class="simple_timer"></div>
        <a href="https://wppool.dev/wp-dark-mode" target="_blank">GET PRO</a>
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

                if (typeof window.timer_set === 'undefined') {
                    window.timer_set = $('.simple_timer').syotimer({
                        year: <?php echo $countdown_time['year']; ?>,
                        month: <?php echo $countdown_time['month']; ?>,
                        day: <?php echo $countdown_time['day']; ?>,
                        hour: <?php echo $countdown_time['hour']; ?>,
                        minute: <?php echo $countdown_time['minute']; ?>
                    });
                }


            })
        })(jQuery);
    </script>

</div>