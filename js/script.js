const contactForm = document.querySelector('form'); 

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

      

        alert('Сообщение отправлено! '); 
        contactForm.reset(); 
    });
}


document.addEventListener('DOMContentLoaded', function() { 
   
       
        function displayReviews() {
            reviewsContainer.innerHTML = ''; 
            if (product.reviews && product.reviews.length > 0) {
                product.reviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.classList.add('review');
                    reviewElement.innerHTML = `<p>${review}</p>`;
                    reviewsContainer.appendChild(reviewElement);
                });
            } else {
                reviewsContainer.innerHTML = '<p>Пока нет отзывов.</p>';
            }
        }
        displayReviews(); 

        if (reviewForm) {
            reviewForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const reviewText = document.querySelector('#review-text').value;

                product.reviews.push(reviewText); 
                displayReviews();
                document.querySelector('#review-text').value = ''; 
            });
        }
    }
});
d