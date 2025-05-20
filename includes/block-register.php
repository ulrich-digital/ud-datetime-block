<?php
defined('ABSPATH') || exit;

/**
 * Registriert den Block `ud/datetime-block` über block.json.
 */
add_action('init', function () {
	register_block_type(__DIR__ . '/../');
});
