<?php

$is_floating = isset( $floating ) && 'yes' == $floating;
$position    = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switcher_position', 'right_bottom' );

$light_img = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_icon_light', WP_DARK_MODE_ASSETS.'/images/btn-7/moon.png' );
$dark_img  = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switch_icon_dark', WP_DARK_MODE_ASSETS.'/images/btn-7/sun.png' );

?>

<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
<div class="custom-switch wp-dark-mode-switcher wp-dark-mode-ignore <?php echo $is_floating ? "floating $position" : ''; ?>">
    <label for="wp-dark-mode-switch">
        <div class="modes">
            <img src="<?php echo $light_img; ?>" class="light wp-dark-mode-switch-icon wp-dark-mode-switch-icon__light">
            <img src="<?php echo $dark_img; ?>" class="dark wp-dark-mode-switch-icon wp-dark-mode-switch-icon__dark">
        </div>
    </label>
</div>