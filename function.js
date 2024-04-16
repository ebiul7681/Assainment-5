document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buy-ticket").addEventListener("click", function() {
       
        window.location.href = "select-ticket.html"; 
    });

   
    const selectedSeats = []; 
    const seatPrice = 100; 

    function updateSelectedSeats() {
        
        const selectedSeatsElement = document.getElementById("selected-seats");
        selectedSeatsElement.innerText = selectedSeats.join(", ");
        
      
        const totalPrice = selectedSeats.length * seatPrice;
        document.getElementById("total-price").innerText = "BDT " + totalPrice;
    }


    function handleSeatClick(seatId) {
        const index = selectedSeats.indexOf(seatId);
        if (index === -1) {
       
            if (selectedSeats.length < 4) {
                selectedSeats.push(seatId);
            } else {
                
                alert("You can select only up to 4 seats.");
            }
        } else {
            
            selectedSeats.splice(index, 1);
        }
       
        updateSelectedSeats();
    }

   
    const seatButtons = document.querySelectorAll(".btn-seat");
    seatButtons.forEach(function(seatButton) {
        seatButton.addEventListener("click", function() {
            const seatId = this.getAttribute("id");
            handleSeatClick(seatId);
        });
    });

    
    document.getElementById("apply").addEventListener("click", function() {
        const couponCode = document.querySelector("input[type='text']").value;
       
    });

   
    document.getElementById("next-btn").addEventListener("click", function() {
       
    });
});
