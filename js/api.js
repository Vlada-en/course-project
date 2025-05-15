const getData = () => {
  return fetch('http://localhost:3000/data/')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки!');
    });
};

export { getData };