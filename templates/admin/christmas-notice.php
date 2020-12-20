<a href="https://wppool.dev/wp-dark-mode" target="_blank"></a>

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