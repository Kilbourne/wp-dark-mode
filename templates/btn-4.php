<?php

$is_floating = isset( $floating ) && 'yes' == $floating;
$position    = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switcher_position', 'right_bottom' );

?>
<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
<div class="wp-dark-mode-switcher style-4 <?php echo $is_floating ? "floating $position" : ''; ?>">

    <p>Light</p>
    <label for="wp-dark-mode-switch">
        <div class="modes">
            <img class="light" src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/sun-2.png' ); ?>">
            <img class="dark" src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/moon-2.png' ); ?>">
        </div>
    </label>
    <p>Dark</p>

</div>