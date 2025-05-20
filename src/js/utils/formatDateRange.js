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



export function formatDateRange(startDate, startTime, endDate, endTime) {
    if (!startDate) return '';

    const sDate = new Date(`${startDate}T${startTime || '00:00'}`);
	const eDate = (endDate || endTime)
    	? new Date(`${endDate || startDate}T${endTime || '00:00'}`)
    	: null;

    const sameDay =
        eDate &&
        sDate.getFullYear() === eDate.getFullYear() &&
        sDate.getMonth() === eDate.getMonth() &&
        sDate.getDate() === eDate.getDate();

    const sameMonth =
        eDate &&
        sDate.getFullYear() === eDate.getFullYear() &&
        sDate.getMonth() === eDate.getMonth();

    const sameYear =
        eDate &&
        sDate.getFullYear() === eDate.getFullYear();

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const shortOptions = { day: 'numeric', month: 'long' };

    function timeToStr(time, includeUhr = true) {
        if (!time) return '';
        const [h, m] = time.split(':').map(n => parseInt(n, 10));
        if (isNaN(h)) return '';

        const formatted = m === 0
            ? `${h}`
            : `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

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
        const timePart = startTime
            ? ` • ${timeToStr(startTime, !endTime)}${endTime ? ` – ${timeToStr(endTime)}` : ''}`
            : '';
        return `${sDate.toLocaleDateString('de-DE', shortOptions)} – ${eDate.toLocaleDateString('de-DE', options)}${timePart}`;
    }

    // Gleiches Jahr & Monat, unterschiedliche Tage
    if (!sameDay) {
        const timePart = startTime
            ? ` • ${timeToStr(startTime, !endTime)}${endTime ? ` – ${timeToStr(endTime)}` : ''}`
            : '';
        return `${sDate.getDate()}. – ${eDate.toLocaleDateString('de-DE', options)}${timePart}`;
    }

    // Exakt gleicher Tag
    const timePart = startTime
        ? ` • ${timeToStr(startTime, !endTime)}${endTime ? ` – ${timeToStr(endTime)}` : ''}`
        : '';
    return `${sDate.toLocaleDateString('de-DE', options)}${timePart}`;
}
