
// Select the forms
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// ====================== SIGNUP =========================
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = signupForm.username.value;
    const password = signupForm.password.value;

    console.log('Signing up with:', { username, password });

    try {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        console.log(data);
        alert(data.message);

    } catch (error) {
        console.error('Error during signup:', error);
        alert('Signup failed!');
    }
});

// ====================== LOGIN =========================
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    console.log('Logging in with:', { username, password });

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            alert(data.message);
            // Redirect to dashboard or next page later
        } else {
            alert(data.message); // shows "Invalid credentials"
        }

    } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed!');
    }
});
