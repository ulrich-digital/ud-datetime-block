<?php
/**
 * Plugin Name:       DateTime Block
 * Description:       Block zur Eingabe von Start-/Enddatum und optionalem Anzeigetext.
 * Version:           1.1
 * Author: ulrich.digital gmbh
 * Author URI: https://ulrich.digital/
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ud-datetime-block
 */


defined('ABSPATH') || exit;

/**
 * Hinweis:
 * Diese Datei dient ausschliesslich als Einstiegspunkt für das Plugin.
 */

// Alle PHP-Dateien im includes/-Ordner laden
/*
foreach ([
	'helpers.php',
	'block-register.php',
	'meta-fields.php',
	'save-handler.php',
	'admin-columns.php',
	'sort-order.php',
] as $file) {
	require_once __DIR__ . '/includes/' . $file;
}
*/


// Reihenfolge ist wichtig wegen Funktionsabhängigkeiten
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/includes/block-register.php';
require_once __DIR__ . '/includes/meta-fields.php';
require_once __DIR__ . '/includes/save-handler.php';
require_once __DIR__ . '/includes/admin-columns.php';
require_once __DIR__ . '/includes/sort-order.php';
