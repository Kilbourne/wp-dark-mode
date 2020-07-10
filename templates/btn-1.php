<?php
$uid = uniqid();

$is_floating = isset( $floating ) && 'yes' == $floating;

?>
<input type="checkbox" id="wp-dark-mode-switch-<?php echo $uid; ?>" class="wp-dark-mode-switch">
<div class="wp-dark-mode-switcher <?php echo $is_floating ? 'floating' : ''; ?>">

    <i class="wp-dark-mode-moon-o wp-dark-mode-moon-icon-size-small"></i>
    <i class="wp-dark-mode-light-up wp-dark-mode-moon-icon-size-small"></i>

    <label for="wp-dark-mode-switch-<?php echo $uid; ?>">
        <div class="toggle"></div>
        <div class="modes">
            <p class="light"><?php esc_html_e( 'Light', 'wp-dark-mode' ); ?></p>
            <p class="dark"><?php esc_html_e( 'Dark', 'wp-dark-mode' ); ?></p>
        </div>
    </label>

</div>