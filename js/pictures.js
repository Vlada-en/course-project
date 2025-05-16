const renderPaintings = (paintings) => {
		const container = document.querySelector('.pictures__container');
		container.innerHTML = ''; 

		paintings.forEach(painting => {
			const imgWrapper = document.createElement('div');
			imgWrapper.className = 'picture-element';

			const img = document.createElement('img');
			img.className = 'picture';
			img.src = painting.image_path;

			imgWrapper.appendChild(img);

			container.appendChild(imgWrapper);
		});
	};

	export { renderPaintings };
	