<?php
defined('ABSPATH') || exit;
/*
add_action('admin_init', function () {
	$post_types = get_post_types(['public' => true], 'names');

	foreach ($post_types as $post_type) {
		if (!ud_post_type_contains_datetime_block($post_type)) {
			continue;
		}

		// Neue Spalte hinzufügen
		add_filter("manage_{$post_type}_posts_columns", function($columns) {
			$new = [];
			foreach ($columns as $key => $label) {
				$new[$key] = $label;
				if ($key === 'title') {
					$new['ud_datetime'] = __('Start/End-Datum', 'ud-datetime-block');
				}
			}
			return $new;
		});

		// Spalteninhalt anzeigen
		add_action("manage_{$post_type}_posts_custom_column", function ($col, $post_id) {
			if ($col !== 'ud_datetime') return;

			$start = get_post_meta($post_id, 'ud_datetime_block_start', true);
			$end   = get_post_meta($post_id, 'ud_datetime_block_end', true);

			try {
				$start_fmt = $start ? (new DateTime($start))->format('d.m.Y') : __('kein Startdatum', 'ud-datetime-block');
			} catch (Exception) {
				$start_fmt = __('Startdatum ungültig', 'ud-datetime-block');
			}

			try {
				$end_fmt = $end ? (new DateTime($end))->format('d.m.Y') : __('kein Enddatum', 'ud-datetime-block');
			} catch (Exception) {
				$end_fmt = __('Enddatum ungültig', 'ud-datetime-block');
			}

			echo esc_html("{$start_fmt} – {$end_fmt}");
		}, 10, 2);

		// Spalte sortierbar machen
		add_filter("manage_edit-{$post_type}_sortable_columns", function ($columns) {
			$columns['ud_datetime'] = 'ud_datetime_block_start';
			return $columns;
		});
	}
});
*/