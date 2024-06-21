import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', async function () {
    console.log("DOM fully loaded and parsed");

    // Ensure the global db variable is available
    if (typeof window.db === 'undefined') {
        console.error("Firestore has not been initialized. Make sure the db variable is correctly set in your HTML file.");
        return;
    }

    console.log("Firestore has been initialized", window.db);

    // Function to fetch and display products
    async function fetchProducts() {
        console.log("Fetching products from Firestore");

        try {
            const querySnapshot = await getDocs(collection(window.db, "products"));
            console.log("Query Snapshot:", querySnapshot);

            const productsContainer = document.getElementById('products-container');
            productsContainer.innerHTML = ''; // Clear existing content

            if (querySnapshot.empty) {
                console.log("No products found.");
                return;
            }

            querySnapshot.forEach((doc) => {
                const product = doc.data();
                console.log("Product:", product);

                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.id = `product-${doc.id}`; // Unique identifier for each product
                productElement.innerHTML = `
                    <img src="${product.imageURL}" alt="Product Image">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                `;

                // Add click event listener to each product
                productElement.addEventListener('click', () => {
                    // Handle click event, e.g., navigate to details page or perform action
                    console.log(`Clicked on product: ${doc.id}`);
                    // Example: Redirect to details page with product ID
                    window.location.href = `details.html?id=${doc.id}`;
                });

                productsContainer.appendChild(productElement);
            });
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    }

    // Call the fetchProducts function to load products on page load
    fetchProducts();
});
