<?php
defined('ABSPATH') || exit;

/**
 * Prüft rekursiv, ob ein ud/datetime-block im Block-Inhalt vorhanden ist.
 */
function ud_post_contains_datetime_block(array $blocks): bool {
	foreach ($blocks as $block) {
		if ($block['blockName'] === 'ud/datetime-block') {
			return true;
		}
		if (!empty($block['innerBlocks']) && ud_post_contains_datetime_block($block['innerBlocks'])) {
			return true;
		}
	}
	return false;
}


/**
 * Extrahiert Start-/End-Datum aus einem ud/datetime-block (rekursiv).
 */
function ud_extract_datetime_block_data(array $blocks): array {
    $data = [
        'start' => '',
        'end'   => '',
    ];

    foreach ($blocks as $block) {
        if ($block['blockName'] === 'ud/datetime-block') {
            $attrs = $block['attrs'] ?? [];

            if (!$data['start'] && !empty($attrs['startDate'])) {
                $startTime = $attrs['startTime'] ?? '00:00:00';
                $data['start'] = $attrs['startDate'] . 'T' . $startTime;
            }

            if (!$data['end'] && !empty($attrs['endDate'])) {
                $endTime = $attrs['endTime'] ?? '00:00:00';
                $data['end'] = $attrs['endDate'] . 'T' . $endTime;
            }
        }

        if (!empty($block['innerBlocks'])) {
            $inner = ud_extract_datetime_block_data($block['innerBlocks']);

            if (!$data['start'] && $inner['start']) {
                $data['start'] = $inner['start'];
            }
            if (!$data['end'] && $inner['end']) {
                $data['end'] = $inner['end'];
            }
        }
    }

    return $data;
}





/**
 * Prüft, ob ein Beitragstyp mindestens einen Beitrag mit datetime-block enthält.
 */
function ud_post_type_contains_datetime_block($post_type) {
    $args = [
        'post_type' => $post_type,
        'post_status' => 'any',
        'posts_per_page' => 10,
    ];

    $query = new WP_Query($args);
    foreach ($query->posts as $post) {
        if (has_blocks($post->post_content)) {
            $blocks = parse_blocks($post->post_content);
            if (ud_blocks_contains_datetime_block($blocks)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Rekursive Prüfung aller Blöcke auf "ud/datetime-block"
 */
function ud_blocks_contains_datetime_block(array $blocks): bool {
    foreach ($blocks as $block) {
        if (!isset($block['blockName'])) {
            continue;
        }
//error_log($block['blockName']);

        if ($block['blockName'] === 'ud/datetime-block') {
            return true;
        }

        // Rekursiv prüfen: InnerBlocks?
        if (!empty($block['innerBlocks']) && ud_blocks_contains_datetime_block($block['innerBlocks'])) {
            return true;
        }

        // Falls innerBlocks nicht gesetzt, aber innerContent evtl. enthalten ist
        if (!empty($block['innerContent']) && is_array($block['innerContent'])) {
            foreach ($block['innerContent'] as $innerHtml) {
                if (is_string($innerHtml) && str_contains($innerHtml, 'ud/datetime-block')) {
                    return true;
                }
            }
        }
    }
    return false;
}

