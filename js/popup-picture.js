const body = document.body;
const popup = body.querySelector('.popup');
const popupContent = popup.querySelector('.popup__content');
const infoContainer = popup.querySelector('.popup__info');

const renderPictureInfo = (painting) => {
  infoContainer.innerHTML = '';

  infoContainer.innerHTML = `
    <h3>${painting.title}</h3>
    <p><strong>Год:</strong> ${painting.year}</p>
    <p>${painting.description}</p>
  `;
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('popup-open');
};

const removeEventListeners = () => {
  popup.removeEventListener('click', handleClickOutside);
};

function handleClickOutside(event) {
  if (!popupContent.contains(event.target)) {
    closePopup();
    removeEventListeners();
  }
}

const openPopup = (paintings) => {
  const pictureElements = body.querySelectorAll('.picture');
  const imageContainer = popup.querySelector('.popup__image-container');

  pictureElements.forEach(element => {
    element.addEventListener('click', () => {
      const id = element.getAttribute('data-id');
      const painting = paintings.find(p => p.id.toString() === id);
			
      imageContainer.innerHTML = '';

      const fullImg = document.createElement('img');
      fullImg.src = element.src;

      imageContainer.appendChild(fullImg);

      renderPictureInfo(painting);

      popup.classList.remove('hidden');
      body.classList.add('popup-open');

      popup.addEventListener('click', handleClickOutside);
    });
  });

  closePopup();
};

export { openPopup };





