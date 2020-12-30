<div class="wrap">

    <div class="getting-started-wrap">
        <div class="tab-wrap">

            <div class="tab-links">

                <a href="gutenberg-block" class="tab-link active">
                    <i class="dashicons dashicons-screenoptions" ></i>
                    <?php _e( 'Gutenberg Block', 'wp-dark-mode' ); ?>
                </a>

                <a href="elementor-widget" class="tab-link">
                    <i class="dashicons dashicons-align-none" ></i>
                    <?php _e( 'Elementor Widget', 'wp-dark-mode' ); ?>
                </a>

                <a href="switch-widget" class="tab-link">
                    <i class="dashicons dashicons-align-full-width" ></i>
                    <?php _e( 'Switch Widget', 'wp-dark-mode' ); ?>
                </a>

                <a href="shortcodes" class="tab-link">
                    <i class="dashicons dashicons-shortcode" ></i>
                    <?php _e( 'Shortcodes', 'wp-dark-mode' ); ?>
                </a>

            </div>

            <div id="gutenberg-block" class="tab-content active">
                <?php wp_dark_mode()->get_template( '/admin/get-started/gutenberg-block'); ?>
            </div>

            <div id="elementor-widget" class="tab-content">
                <?php wp_dark_mode()->get_template( '/admin/get-started/elementor-widget'); ?>
            </div>

            <div id="switch-widget" class="tab-content">
                <?php wp_dark_mode()->get_template( '/admin/get-started/switch-widget'); ?>
            </div>

            <div id="shortcodes" class="tab-content">
                <?php wp_dark_mode()->get_template( '/admin/get-started/shortcodes'); ?>
            </div>

        </div>
    </div>
</div>