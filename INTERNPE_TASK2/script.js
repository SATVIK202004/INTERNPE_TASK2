function sendOTP(formType) {
    var email;
    if (formType === 'login') {
        email = document.getElementById('loginEmail').value;
    } else {
        email = document.getElementById('signupEmail').value;
    }
    
    
    var otp = Math.floor(1000 + Math.random() * 9000);
    alert("OTP sent to " + email + ": " + otp);
}

document.addEventListener('DOMContentLoaded', function() {
    
    var quotes = document.querySelectorAll('.quote');
    quotes.forEach(function(quote) {
        quote.style.display = 'none';
    });

    
    var currentQuoteIndex = 0;
    quotes[currentQuoteIndex].style.display = 'block';

    
    function changeQuote() {
        
        quotes[currentQuoteIndex].style.display = 'none';

        
        currentQuoteIndex++;
        if (currentQuoteIndex >= quotes.length) {
            currentQuoteIndex = 0; 
        }

        
        quotes[currentQuoteIndex].style.display = 'block';
    }

    
    setInterval(changeQuote, 5000);
});

document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('aboutContainer').style.display = 'none';
    document.getElementById('calculatorContainer').style.display = 'none';
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupContainer').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('aboutContainer').style.display = 'none';
    document.getElementById('calculatorContainer').style.display = 'none';
});

document.getElementById('aboutBtn').addEventListener('click', function() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('aboutContainer').style.display = 'block';
    document.getElementById('calculatorContainer').style.display = 'none';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('calculatorContainer').style.display = 'block';
});

document.querySelectorAll('.product input').forEach(function(input) {
    input.addEventListener('input', function() {
        calculateTotal();
    });
});

document.getElementById('quantity').addEventListener('input', function() {
    calculateTotal();
});

function calculateTotal() {
    var productPrice1 = parseFloat(document.getElementById('productPrice1').value) || 0;
    var productPrice2 = parseFloat(document.getElementById('productPrice2').value) || 0;
    var quantity = parseInt(document.getElementById('quantity').value) || 0;
    var totalPrice = (productPrice1 + productPrice2) * quantity;
    document.getElementById('totalPrice').innerHTML = "Total Price: ₹" + totalPrice.toFixed(2);
}


calculateTotal();


function displayRealTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById('realTime').innerText = "Real Time: " + hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
}


setInterval(displayRealTime, 1000);
displayRealTime(); 
