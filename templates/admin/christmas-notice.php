<h4>Enjoy upto 75% OFF on WP Dark Mode. Get Your Merry Christmas <a href="https://wppool.dev/wp-dark-mode" target="_blank">Deals Now</a>
</h4>

<script>
    (function ($) {
        $(document).on('click', '.christmas_notice .notice-dismiss', function () {


            wp.ajax.send('hide_christmas_notice', {
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