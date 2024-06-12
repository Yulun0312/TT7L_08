<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

    // Firebase configuration
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase app and get database and auth instances
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const auth = getAuth(app);

    // Wait for DOM content to load before attaching event listeners
    document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.getElementById('loginForm');

        // Add submit event listener to login form
        loginForm.addEventListener('submit', (evt) => {
            evt.preventDefault(); // Prevent default form submission
            login(); // Call login function when form is submitted
        });

        // Add click event listener to register button
        document.getElementById('registerButton').addEventListener('click', (evt) => {
            evt.preventDefault(); // Prevent default link behavior
            register(); // Call register function when register button is clicked
        });
    });

    // Function to handle login process
    function login() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Validate email and password
        if (!validate_email(email) || !validate_password(password)) {
            alert('Email or Password is Incorrect!!');
            return;
        }

        // Sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                let userRef = ref(db, 'users/' + user.uid);

                // Update last login timestamp in user record
                update(userRef, { last_login: Date.now() })
                    .then(() => {
                        alert('User Logged In!!');
                        // Redirect to dashboard or another page
                        window.location.href = 'dashboard.html';
                    })
                    .catch((error) => {
                        alert('Failed to update last login:', error.message);
                    });
            })
            .catch((error) => {
                alert('Login failed:', error.message);
            });
    }

    // Function to validate email format
    function validate_email(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Function to validate password length
    function validate_password(password) {
        return password.length >= 6; // Adjust as needed for your password policy
    }

    // Function to handle user registration
    function register() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                let userRef = ref(db, 'users/' + user.uid);

                // Set initial user data in the database
                set(userRef, {
                    email: email,
                    last_login: Date.now()
                }).then(() => {
                    alert('Account successfully created!');
                    // Optionally redirect to login page after successful registration
                    window.location.href = 'loginPage.html';
                });
            })
            .catch((error) => {
                alert('Registration failed:', error.message);
            });
    }
</script>
