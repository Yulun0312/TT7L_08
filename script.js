document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(products => {
        const productContainer = document.getElementById('product-container');
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          `;
          productContainer.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching the products:', error));
  });
