<?php
defined('ABSPATH') || exit;

/**
 * Registriert die Meta-Felder für Start- und Endzeit
 * bei allen öffentlichen Post-Types.
 */
add_action('init', function () {
	foreach (get_post_types(['public' => true], 'names') as $post_type) {
		register_post_meta($post_type, 'ud_datetime_block_start', [
			'type'         => 'string',
			'single'       => true,
			'show_in_rest' => true,
			'auth_callback' => fn() => current_user_can('edit_posts'),
		]);

		register_post_meta($post_type, 'ud_datetime_block_end', [
			'type'         => 'string',
			'single'       => true,
			'show_in_rest' => true,
			'auth_callback' => fn() => current_user_can('edit_posts'),
		]);
	}
});
