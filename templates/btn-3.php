<?php

$is_floating = isset( $floating ) && 'yes' == $floating;
$position    = wp_dark_mode_get_settings( 'wp_dark_mode_display', 'switcher_position', 'right_bottom' );

?>
<input type="checkbox" id="wp-dark-mode-switch" class="wp-dark-mode-switch">
<div class="wp-dark-mode-switcher style-3 <?php echo $is_floating ? "floating $position" : ''; ?>">

    <img class="light" src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/btn-2-sun.png' ); ?>">
    <label for="wp-dark-mode-switch"><div class="toggle"></div></label>
    <img class="dark" src="<?php echo wp_dark_mode()->plugin_url( 'assets/images/btn-2-moon.png' ); ?>">

</div>