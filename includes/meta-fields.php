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

/*
add_action('init', function () {
    if (!current_user_can('manage_options')) {
        return; // Nur Admins
    }

    $debug_post_id = 800; // <<<<< DEINE POST-ID HIER EINTRAGEN

    if (!defined('WP_DEBUG') || !WP_DEBUG_LOG) {
        error_log('Bitte WP_DEBUG und WP_DEBUG_LOG in wp-config.php aktivieren.');
        return;
    }

    $meta = get_post_meta($debug_post_id);

    if (empty($meta)) {
        error_log("🔍 Post {$debug_post_id} hat keine Metafelder.");
        return;
    }

    error_log("🔍 Metafelder für Post {$debug_post_id}:");
    foreach ($meta as $key => $value) {
        // Wenn mehrere Werte, schön formatieren
        $formatted = is_array($value) ? json_encode($value) : $value;
        error_log("  {$key}: {$formatted}");
    }
});
*/