
/**
 * increase dicrease button
 */

   // Get references to the decrease and increase buttons and the input field
   const decreaseBtn = document.getElementById('decreaseBtn');
   const increaseBtn = document.getElementById('increaseBtn');
   const quantityInput = document.getElementById('qty_feature_88021');

   // Decrease button click event listener
   decreaseBtn.addEventListener('click', function() {
       // Get the current value of the input field as a number
       let currentValue = parseInt(quantityInput.value);

       // Decrease the value if it's greater than 0
       if (currentValue > 0) {
           quantityInput.value = currentValue - 1;
       }
   });

   // Increase button click event listener
   increaseBtn.addEventListener('click', function() {
       // Get the current value of the input field as a number
       let currentValue = parseInt(quantityInput.value);

       // Increase the value
       quantityInput.value = currentValue + 1;
   });



//    header

   // jQuery code for toggling nested accordion
        $('.nested-accordion').find('.comment').slideUp();
        $('.nested-accordion').find('h2').click(function () {
            $(this).next('.comment').slideToggle(100);
            $(this).toggleClass('selected');
        });
        // Get the menu icon
        const menuIcon = document.querySelector('.menu-icon');
        // Get the popup
        const popup = document.getElementById('popup');

        // Function to open the popup
        function openPopup() {
            popup.classList.remove('hidden'); // Remove 'hidden' class
            popup.classList.add('animate-slide-down'); // Add animation class
        }

        // Function to close the popup
        function closePopup() {
            popup.classList.add('hidden'); // Add 'hidden' class
            popup.classList.remove('animate-slide-down'); // Remove animation class
        }

        // Add click event listener to the menu icon
        menuIcon.addEventListener('click', openPopup);



   