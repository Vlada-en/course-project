import { renderPaintings } from '/js/pictures.js';

const initColorFilter = (paintings) => {
  const filterElements = document.querySelectorAll('.picture__color-element');

  filterElements.forEach(element => {
    element.addEventListener('click', () => {
      const colorId = element.getAttribute('data-color-id');

      if (colorId === '0') {
        renderPaintings(paintings);
        return; 
      }

      const filteredPaintings = paintings.filter(painting => 
        painting.color_id.toString() === colorId);
        
      renderPaintings(filteredPaintings);
    });
  });
};

export { initColorFilter };
