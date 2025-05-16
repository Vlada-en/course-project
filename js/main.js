import { getData } from '/js/api.js';
import { renderPaintings } from '/js/pictures.js';
import { initColorFilter } from '/js/filters.js';

document.addEventListener('DOMContentLoaded', () => {
  getData()
    .then(data => {
      const { paintings } = data;
      renderPaintings(paintings);
      initColorFilter(paintings);
    })
    .catch(console.error);
});

