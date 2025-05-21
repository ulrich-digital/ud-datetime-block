<?php
defined('ABSPATH') || exit;

/**
 * Fügt eine Spalte mit Start-/Enddatum hinzu, wenn der Datumsblock im Posttyp verwendet wird.
 */

// Spalte definieren
function ud_add_datetime_column($columns) {
    $new = [];
    foreach ($columns as $key => $label) {
        $new[$key] = $label;
        if ($key === 'title') {
            $new['ud_datetime'] = __('Start/End-Datum', 'ud-datetime-block');
        }
    }
    return $new;
}

// Spalteninhalt ausgeben
function ud_render_datetime_column($col, $post_id) {
    if ($col !== 'ud_datetime') return;

    $start = get_post_meta($post_id, 'ud_datetime_block_start', true);
    $end   = get_post_meta($post_id, 'ud_datetime_block_end', true);

    if (!$start && !$end) {
        return;
    }

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
}

// Spalte sortierbar machen
function ud_make_datetime_column_sortable($columns) {
    $columns['ud_datetime'] = 'ud_datetime_block_start';
    return $columns;
}

// Registrierung nur, wenn Block tatsächlich verwendet wird
add_action('admin_init', function () {
    $post_types = get_post_types(['public' => true], 'names');

    foreach ($post_types as $post_type) {
        if (!function_exists('ud_post_type_contains_datetime_block')) {
            continue;
        }

        if (!ud_post_type_contains_datetime_block($post_type)) {
            continue;
        }

        add_filter("manage_{$post_type}_posts_columns", 'ud_add_datetime_column');
        add_action("manage_{$post_type}_posts_custom_column", 'ud_render_datetime_column', 10, 2);
        add_filter("manage_edit-{$post_type}_sortable_columns", 'ud_make_datetime_column_sortable');
    }
});

