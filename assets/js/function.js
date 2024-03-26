
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





   