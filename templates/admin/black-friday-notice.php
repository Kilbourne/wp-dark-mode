<div class="wp-dark-mode-notice-icon">
    <a href="https://wppool.dev/wp-dark-mode" target="_blank" data-caption-trans="banner_offer">
        <img src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/notices/logo-orange.svg' ); ?>"
             alt="WP Dark Mode Icon">
    </a>
</div>

<div class="wp-dark-mode-notice-text">
    <a href="https://wppool.dev/wp-dark-mode" target="_blank" data-caption-trans="banner_offer">
        <strong>Black Friday</strong> Sale Going On WP Dark Mode
    </a>
</div>

<div class="wp-dark-mode-notice-actions">

    <a href="https://wppool.dev/wp-dark-mode" target="_blank" class="banner_offer">
        <img src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/notices/banner-offer.svg' ); ?>" alt="">
    </a>

    <a href="https://wppool.dev/wp-dark-mode" target="_blank"
       class="button"><?php _e( 'GRAB THE DEAL', 'wp-dark-mode' ); ?>
    </a>
    <button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button>
</div>

<script>
    (function ($) {
        $(document).on('click', '.black-friday-notice .notice-dismiss', function () {


            wp.ajax.send('hide_black_friday_notice', {
                success: function (res) {
                    console.log(res);
                },

                error: function (error) {
                    console.log(error);
                },
            });
        })
    })(jQuery)
</script>