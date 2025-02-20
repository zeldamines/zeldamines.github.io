const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{ loginsec.classList.add('active') })
loginlink.addEventListener('click',()=>{ loginsec.classList.remove('active') })

document.addEventListener("DOMContentLoaded", function () {
    // Selecting the email and password input fields
    var emailInput = document.querySelector('input[type="email"]');
    var passwordInput = document.querySelector('input[type="password"]');

    // Function to validate email format
    function validateEmail(email) {
        var emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    // Function to validate password length
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Event listener for email input
    emailInput.addEventListener("input", function () {
        var email = emailInput.value.trim();
        var emailValid = validateEmail(email);
        if (emailValid || email.length === 0) {
            emailInput.classList.remove("error");
        } else {
            emailInput.classList.add("error");
        }
    });

    // Event listener for password input
    passwordInput.addEventListener("input", function () {
        var password = passwordInput.value;
        var passwordValid = validatePassword(password);
        if (passwordValid || password.length === 0) {
            passwordInput.classList.remove("error");
        } else {
            passwordInput.classList.add("error");
        }
    });
});

// Sign In Form Submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    };

    // Use EmailJS to send the email
    emailjs.send("service_sp0btrq", "template_7bruzxm", data)
    .then((response) => {
        console.log('Success:', response);
        alert('Sign In data sent successfully!');
        document.getElementById('signInForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending data.');
    });
});

// Sign Up Form Submission
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    // Use EmailJS to send the email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
    .then((response) => {
        console.log('Success:', response);
        alert('Sign Up data sent successfully!');
        document.getElementById('signUpForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending data.');
    });
});
