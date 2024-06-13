import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', async function () {
    console.log("DOM fully loaded and parsed");

    // Ensure the global db variable is available
    if (typeof window.db === 'undefined') {
        console.error("Firestore has not been initialized. Make sure the db variable is correctly set in your HTML file.");
        return;
    }

    console.log("Firestore has been initialized", window.db);

    // Log the type and properties of db
    console.log("Type of db:", typeof window.db);
    console.dir(window.db);

    // Function to fetch and display products
    async function fetchProducts() {
        console.log("Fetching products from Firestore");

        // Check if collection method exists on db
        if (typeof collection !== 'function' || typeof getDocs !== 'function') {
            console.error("Firestore methods are not correctly imported. Ensure collection and getDocs are available.");
            return;
        }

        try {
            const querySnapshot = await getDocs(collection(window.db, "products"));
            const productsContainer = document.getElementById('trending-products');
            productsContainer.innerHTML = ''; // Clear existing content

            querySnapshot.forEach((doc) => {
                const product = doc.data();
                const productElement = document.createElement('div');
                productElement.innerHTML = `
                    <div style="border: 1px solid #ccc; padding: 16px; margin: 16px; border-radius: 8px;">
                        <img src="${product.imageURL}" alt="Product Image" style="width:100px;height:100px;">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                    </div>
                `;
                productsContainer.appendChild(productElement);
            });
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    }

    // Call the fetchProducts function to load products on page load
    fetchProducts();
});
