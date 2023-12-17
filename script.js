document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.contact__form');
    var nameInput = document.querySelector('.contact__form-el--name');
    var phoneInput = document.querySelector('.contact__form-el--phone');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
        var emailInput = document.querySelector('.contact__form-el--email');
        var emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            alert('Please enter a valid email address.');
            return;
        }

        
        var nameValue = nameInput.value.trim();
        if (!isValidName(nameValue)) {
            alert('Please enter a valid name (only characters and spaces).');
            return;
        }

       
        var phoneValue = phoneInput.value.trim();
        if (!isValidPhoneNumber(phoneValue)) {
            alert('Please enter a valid phone number (only integers).');
            return;
        }

       
        alert('Form submitted successfully!'); // Replace this with your actual form submission logic
    });

    
    nameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    
    phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    function isValidEmail(email) {
        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidName(name) {
        
        return /^[a-zA-Z\s]+$/.test(name);
    }

    function isValidPhoneNumber(phone) {
        
        return /^[0-9]+$/.test(phone);
    }
});
