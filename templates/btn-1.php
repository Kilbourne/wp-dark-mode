<?php

$is_floating = isset( $floating ) && 'yes' == $floating;
$position    = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switcher_position', 'right_bottom' );

?>
<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
<div class="wp-dark-mode-switcher wp-dark-mode-ignore  <?php echo $is_floating ? "floating $position" : ''; ?>">

    <i class="wp-dark-mode-moon-o wp-dark-mode-moon-icon-size-small"></i>
    <i class="wp-dark-mode-light-up wp-dark-mode-moon-icon-size-small"></i>

    <label for="wp-dark-mode-switch">
        <div class="toggle"></div>
        <div class="modes">
            <p class="light"><?php esc_html_e( 'Light', 'wp-dark-mode-pro' ); ?></p>
            <p class="dark"><?php esc_html_e( 'Dark', 'wp-dark-mode-pro' ); ?></p>
        </div>
    </label>

</div>