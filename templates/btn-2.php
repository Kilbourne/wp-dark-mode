<?php

$is_floating = isset( $floating ) && 'yes' == $floating;
$position    = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switcher_position', 'right_bottom' );
$light_text  = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_text_light', 'Light' );
$dark_text   = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_text_dark', 'Dark' );
?>
<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
<div class="wp-dark-mode-switcher wp-dark-mode-ignore style-2 <?php echo $is_floating ? "floating $position" : ''; ?>">

    <label for="wp-dark-mode-switch">
        <div class="toggle"></div>
        <div class="modes">
            <p class="light"><?php echo $light_text; ?></p>
            <p class="dark"><?php echo $dark_text; ?></p>
        </div>
    </label>

</div>