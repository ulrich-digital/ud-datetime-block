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
			$data['start'] = $block['attrs']['start'] ?? '';
			$data['end']   = $block['attrs']['end'] ?? '';
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
function ud_post_type_contains_datetime_block(string $post_type): bool {
	$posts = get_posts([
		'post_type'     => $post_type,
		'post_status'   => 'any',
		'meta_key'      => '_has_ud_datetime_block',
		'meta_value'    => '1',
		'numberposts'   => 1,
		'fields'        => 'ids',
	]);

	return !empty($posts);
}
