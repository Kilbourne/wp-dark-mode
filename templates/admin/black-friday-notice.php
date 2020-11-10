<div class="wp-dark-mode-notice-icon">
    <img src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/wp-dark-mode-orange.svg' ); ?>"
         alt="WP Dark Mode Icon">
</div>

<div class="wp-dark-mode-notice-text">
    <p><strong>Black Friday</strong> Sale Going On WP Dark Mode - Enjoy Upto <strong>75% OFF</strong></p>
</div>

<div class="wp-dark-mode-notice-actions">
    <a href="https://wppool.dev/wp-dark-mode" target="_blank"
       class="button"><?php _e( 'GRAB THE DEAL', 'wp-dark-mode' ); ?></a>
    <button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button>
</div>

<script>
    (function ($) {
        $(document).on('click', '.black-friday-notice .notice-dismiss', function () {


            wp.ajax.send('hide_black_friday_notice', {
               success: function (res){
                   console.log(res);
               },

                error: function (error){
                   console.log(error);
                },
            });
        })
    })(jQuery)
</script>