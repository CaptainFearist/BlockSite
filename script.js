window.addEventListener('DOMContentLoaded', () => {
    const bannerContainer = document.querySelector('.banner-container');
    const banner = document.querySelector('.banner');
    const bannerWidth = banner.scrollWidth;
    const containerWidth = bannerContainer.offsetWidth;
    let scrollAmount = 0;

    const bannerContent = banner.innerHTML;
    banner.innerHTML += bannerContent;

    function scrollBanner() {
        if (scrollAmount < bannerWidth) {
            scrollAmount += 1;
        } else {
            scrollAmount = 0;
        }
        bannerContainer.scrollLeft = scrollAmount;
    }

    setInterval(scrollBanner, 35);

    });

document.getElementById('phone').addEventListener('input', function(evt) {
    let value = this.value;
    this.value = value.replace(/\D/g, ''); // Удаление всех символов, кроме цифр
});

document.getElementById('phone').addEventListener('keypress', function(evt) {
    let charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault(); // Остановка ввода, если введен символ, не являющийся цифрой
    }
});
        document.getElementById('registration').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission for validation
        
            var phone = document.getElementById('phone').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
        
            // Validate phone number
            var phoneRegex = /^\+?(\d{11}|\d{10})$/; // Allow optional "+" and 10 or 11 digits
            var phoneValid = phoneRegex.test(phone);
        
            // Validate passwords match
            var passwordsMatch = password === confirmPassword;
        
            if (!phoneValid) {
                alert('Номер телефона должен содержать только цифры и начинаться с +7, если вводится.');
                return false;
            }
        
            if (!passwordsMatch) {
                alert('Пароли не совпадают.');
                return false;
            }
        
            event.target.submit();
        });
        
        document.getElementById('phone').addEventListener('input', function(event) {
            var value = event.target.value;
    
            value = value.replace(/[^\d+]/g, '');
        
            if (value.startsWith('+')) {
                value = value.slice(0, 12);
            } else {
                value = value.slice(0, 11);
            }
        
            event.target.value = value;
        });
        
          