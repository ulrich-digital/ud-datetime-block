/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"ud/datetime-block","title":"Datum-Zeit Block","category":"widgets","icon":"calendar","description":"Block mit Start-/Endzeit und optionalem Anzeige-Label.","editorScript":"file:./build/editor-script.js","style":"file:./build/frontend-style.css","editorStyle":"file:./build/editor-style.css","attributes":{"startDate":{"type":"string"},"startTime":{"type":"string"},"endDate":{"type":"string"},"endTime":{"type":"string"},"customLabel":{"type":"string"},"showOptions":{"type":"boolean","default":false},"start":{"type":"string","source":"attribute","attribute":"data-start","selector":".wp-block-ud-datetime-block"},"end":{"type":"string","source":"attribute","attribute":"data-end","selector":".wp-block-ud-datetime-block"}},"supports":{"html":false}}');

/***/ }),

/***/ "./src/js/edit.js":
/*!************************!*\
  !*** ./src/js/edit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_formatDateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/formatDateRange */ "./src/js/utils/formatDateRange.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    startDate,
    startTime,
    endDate,
    endTime,
    customLabel,
    showOptions,
    start,
    end
  } = attributes;
  const toIsoDatetime = (date, time) => {
    if (!date) return '';
    return `${date}T${(time || '00:00').padEnd(5, '0')}:00`;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "datetime-main-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Startdatum', 'ud-datetime-block'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pflichtfeld', 'ud-datetime-block'),
        className: "startdatum",
        type: "date",
        value: startDate,
        onChange: value => {
          const iso = toIsoDatetime(value, startTime);
          setAttributes({
            startDate: value,
            start: iso
          });
        },
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Startzeit', 'ud-datetime-block'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Optional', 'ud-datetime-block'),
        className: "startzeit",
        type: "time",
        value: startTime,
        onChange: value => {
          const iso = toIsoDatetime(startDate, value);
          setAttributes({
            startTime: value,
            start: iso
          });
        },
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vorschau', 'ud-datetime-block'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ausgabe im Frontend', 'ud-datetime-block'),
        className: "preview",
        __nextHasNoMarginBottom: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "datetime-preview",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: customLabel || (0,_utils_formatDateRange__WEBPACK_IMPORTED_MODULE_3__.formatDateRange)(startDate, startTime, endDate, endTime)
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Optionen anzeigen', 'ud-datetime-block'),
      checked: showOptions,
      onChange: value => setAttributes({
        showOptions: value
      }),
      __nextHasNoMarginBottom: true
    }), showOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "datetime-options",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enddatum', 'ud-datetime-block'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Optional', 'ud-datetime-block'),
        className: "enddatum",
        type: "date",
        value: endDate,
        onChange: value => {
          const iso = toIsoDatetime(value, endTime);
          setAttributes({
            endDate: value,
            end: iso
          });
        },
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Endzeit', 'ud-datetime-block'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Optional', 'ud-datetime-block'),
        className: "endzeit",
        type: "time",
        value: endTime,
        onChange: value => {
          const iso = toIsoDatetime(endDate, value);
          setAttributes({
            endTime: value,
            end: iso
          });
        },
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Anzeigetext (optional)', 'ud-datetime-block'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Überschreibt die Anzeige', 'ud-datetime-block'),
        className: "anzeigetext",
        value: customLabel,
        onChange: value => setAttributes({
          customLabel: value
        }),
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      })]
    })]
  });
}

/***/ }),

/***/ "./src/js/save.js":
/*!************************!*\
  !*** ./src/js/save.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_formatDateRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/formatDateRange */ "./src/js/utils/formatDateRange.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  const {
    startDate,
    startTime,
    endDate,
    endTime,
    customLabel,
    start,
    end
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "wp-block-ud-datetime-block",
    "data-start": start,
    "data-end": end
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "datetime",
      children: customLabel || (0,_utils_formatDateRange__WEBPACK_IMPORTED_MODULE_1__.formatDateRange)(startDate, startTime, endDate, endTime)
    })
  });
}

/***/ }),

/***/ "./src/js/utils/formatDateRange.js":
/*!*****************************************!*\
  !*** ./src/js/utils/formatDateRange.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDateRange: () => (/* binding */ formatDateRange)
/* harmony export */ });
/* =============================================================== *\ 
   Gibt einen lokalisierten, lesbaren Zeitraum als String zurück
   auf Basis von Start-/Enddatum und optionaler Uhrzeit.
 
   Beispiel-Ausgaben:
   - "10. Mai 2025 • 9 Uhr"
   - "10. – 12. Mai 2025 • 9 – 11 Uhr"
   - "10. Mai – 5. Juni 2025"
   - "10. Mai 2024 – 5. Juni 2025"

   Besonderheiten:
   - Bei gleichem Monat oder Jahr: Kürzere Darstellung
   - Ohne Enddatum/-zeit: Nur Startdatum (mit Uhrzeit)
   - Wenn Start- und Enddatum identisch sind: zeigt Zeitintervall (z. B. 9 – 11 Uhr)

   Alle Datumsangaben werden im "de-DE"-Format ausgegeben.
\* =============================================================== */

function formatDateRange(startDate, startTime, endDate, endTime) {
  if (!startDate) return '';
  const sDate = new Date(`${startDate}T${startTime || '00:00'}`);
  const eDate = endDate || endTime ? new Date(`${endDate || startDate}T${endTime || '00:00'}`) : null;
  const sameDay = eDate && sDate.getFullYear() === eDate.getFullYear() && sDate.getMonth() === eDate.getMonth() && sDate.getDate() === eDate.getDate();
  const sameMonth = eDate && sDate.getFullYear() === eDate.getFullYear() && sDate.getMonth() === eDate.getMonth();
  const sameYear = eDate && sDate.getFullYear() === eDate.getFullYear();
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  const shortOptions = {
    day: 'numeric',
    month: 'long'
  };
  function timeToStr(time, includeUhr = true) {
    if (!time) return '';
    const [h, m] = time.split(':').map(n => parseInt(n, 10));
    if (isNaN(h)) return '';
    const formatted = m === 0 ? `${h}` : `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    return includeUhr ? `${formatted} Uhr` : formatted;
  }

  // Nur Startdatum vorhanden
  if (!eDate) {
    return `${sDate.toLocaleDateString('de-DE', options)}${startTime ? ` • ${timeToStr(startTime)}` : ''}`;
  }

  // Verschiedene Jahre
  if (!sameYear) {
    return `${sDate.toLocaleDateString('de-DE', options)}${startTime ? ` ${timeToStr(startTime)}` : ''} – ${eDate.toLocaleDateString('de-DE', options)}${endTime ? ` ${timeToStr(endTime)}` : ''}`;
  }

  // Gleiches Jahr, unterschiedliche Monate
  if (!sameMonth) {
    const timePart = startTime ? ` • ${timeToStr(startTime, !endTime)}${endTime ? ` – ${timeToStr(endTime)}` : ''}` : '';
    return `${sDate.toLocaleDateString('de-DE', shortOptions)} – ${eDate.toLocaleDateString('de-DE', options)}${timePart}`;
  }

  // Gleiches Jahr & Monat, unterschiedliche Tage
  if (!sameDay) {
    const timePart = startTime ? ` • ${timeToStr(startTime, !endTime)}${endTime ? ` – ${timeToStr(endTime)}` : ''}` : '';
    return `${sDate.getDate()}. – ${eDate.toLocaleDateString('de-DE', options)}${timePart}`;
  }

  // Exakt gleicher Tag
  const timePart = startTime ? ` • ${timeToStr(startTime, !endTime)}${endTime ? ` – ${timeToStr(endTime)}` : ''}` : '';
  return `${sDate.toLocaleDateString('de-DE', options)}${timePart}`;
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/js/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block.json */ "./block.json");
/**
 * editor.js
 *
 * JavaScript für den Block-Editor (Gutenberg).
 * Wird ausschließlich im Backend geladen.
 *
 * Hinweis:
 * Diese Datei enthält editor-spezifische Interaktionen oder React-Komponenten.
 * Wird über webpack zu editor.js gebündelt und in block.json oder enqueue.php eingebunden.
 */




wp.blocks.registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=editor-script.js.map