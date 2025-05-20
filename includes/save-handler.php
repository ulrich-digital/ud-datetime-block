<?php
defined('ABSPATH') || exit;

add_action('save_post', function($post_id) {
	if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

	$post = get_post($post_id);
	if (!$post) return;

	$blocks = parse_blocks($post->post_content);
	$data = ud_extract_datetime_block_data($blocks);

	if (!empty($data['start'])) {
		update_post_meta($post_id, 'ud_datetime_block_start', $data['start']);
	} else {
		delete_post_meta($post_id, 'ud_datetime_block_start');
	}

	if (!empty($data['end'])) {
		update_post_meta($post_id, 'ud_datetime_block_end', $data['end']);
	} else {
		delete_post_meta($post_id, 'ud_datetime_block_end');
	}

	if (ud_post_contains_datetime_block($blocks)) {
		update_post_meta($post_id, '_has_ud_datetime_block', '1');
	} else {
		delete_post_meta($post_id, '_has_ud_datetime_block');
	}
}, 20);
