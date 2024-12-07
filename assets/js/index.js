//--------------------- Noakhali Donation
document.getElementById('IdBtnNkhali').addEventListener('click',function () {

    let nKhaliDonationAmtPrv=Number(document.getElementById('TxtNkhaliDonationAmt').innerText);
        // alert(nKhaliDonationAmtPrv);

    // getting value from input 
    // const nKhaliDonationAmt=Number(document.getElementById('valNkhaliAmt').value);
        const nKhaliDonationAmt=getInputValueById('valNkhaliAmt');

    if (nKhaliDonationAmt<0 || isNaN(nKhaliDonationAmt)){

            alert('Invalid Input');
            
            document.getElementById('valNkhaliAmt').value='';
            document.getElementById('valNkhaliAmt').focus();
            return;
    } else if(nKhaliDonationAmt<20 ){
        alert('Minemum Donation Amount 20 BDT');
            
            document.getElementById('valNkhaliAmt').value='';
            document.getElementById('valNkhaliAmt').focus();
            return;

    }
    

    // deduct from cash in hand section start
    const cashInHandAmt=Number(document.getElementById('TxtCashInHand').innerText);

    
    if (cashInHandAmt < nKhaliDonationAmt){
        alert('Insufficient cash in hand for transaction');
        document.getElementById('valNkhaliAmt').focus();

        return;

    }

    // alert(cashInHandAmt)

    let cashInhandDeductAmt= cashInHandAmt-nKhaliDonationAmt;

    document.getElementById('TxtCashInHand').innerText= cashInhandDeductAmt;

    // set text value

    let newTotalAmount= nKhaliDonationAmt+nKhaliDonationAmtPrv;
    // alert(newTotalAmount)

    document.getElementById('TxtNkhaliDonationAmt').innerText= newTotalAmount;
    
    // clear input value
    // document.getElementById('valNkhaliAmt').value='';


    // Show the modal and set the donation amount
    document.getElementById('txtDonationModal').innerText = nKhaliDonationAmt;

    
    // add modal
    document.getElementById('myModal').classList.add('modal-open');
    
    // alert('Sucessful');
})

// Close modal functionality
document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('myModal').classList.remove('modal-open');
    document.getElementById('IdBtnNkhali').focus();
});


// -------------------Feni donation part start-------------------

document.getElementById('btnFeniDonation').addEventListener('click',function () {
    // getting previous amount
    let feniDonationAmtPrv=Number(document.getElementById('txtFeniDonationAmt').innerText);

        // alert(feniDonationAmtPrv);

    // getting value from input by function
    
        const feniDonationAmt=getInputValueById('valFeniAmt');

    // chacking negative or other then number

    if (feniDonationAmt<0 || isNaN(feniDonationAmt)){

            alert('Invalid Input');
            
            document.getElementById('valFeniAmt').value='';
            document.getElementById('valFeniAmt').focus();
            return;
    } else if(feniDonationAmt<20 ){
        alert('Minemum Donation Amount 20 BDT');
            
            document.getElementById('valFeniAmt').value='';
            document.getElementById('valFeniAmt').focus();
            return;

    }
     

    // deduct from cash in hand
    const cashInHandAmt=Number(document.getElementById('TxtCashInHand').innerText);

    if (cashInHandAmt < feniDonationAmt){
        alert('Insufficient cash in hand for transaction');
        document.getElementById('valFeniAmt').focus();

        return;

    }

    // alert(cashInHandAmt)
    // deduct from cash in hand

    let cashInhandDeductAmt= cashInHandAmt-feniDonationAmt;

    document.getElementById('TxtCashInHand').innerText= cashInhandDeductAmt;

    
    // set text value

    let newTotalAmount= feniDonationAmt+feniDonationAmtPrv;
    // alert(newTotalAmount)

    document.getElementById('txtFeniDonationAmt').innerText= newTotalAmount;
   
   
    // clear input value
    // document.getElementById('valFeniAmt').value='';


  // Show the modal and set the donation amount
  document.getElementById('txtDonationModal').innerText = feniDonationAmt;

  // add modal
  document.getElementById('myModal').classList.add('modal-open');  
    

})

// ---------------end feni-------------------


// Close modal functionality
document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('myModal').classList.remove('modal-open');
    document.getElementById('valFeniAmt').focus();
});

// ---------------Quota Movement Card start----------------

document.getElementById('btnQmovmentDonation').addEventListener('click',function () {
    // getting previous amount
    let qMovementDonationAmtPrv=Number(document.getElementById('txtQmovementAmt').innerText);

        // alert(qMovementDonationAmtPrv);

    // getting value from input by function
    
        const qMovementDonationAmt=getInputValueById('valQmovementAmt');

    // chacking negative or other then number

    if (qMovementDonationAmt<0 || isNaN(qMovementDonationAmt)){

            alert('Invalid Input');
            
            document.getElementById('valQmovementAmt').value='';
            document.getElementById('valQmovementAmt').focus();

            return;

    } else if(qMovementDonationAmt<20 ){

            alert('Minimum Donation Amount 20 BDT');
            
            document.getElementById('valQmovementAmt').value='';
            document.getElementById('valQmovementAmt').focus();

            return;

    }
    
    
    // deduct from cash in hand
    
    const cashInHandAmt = Number(document.getElementById('TxtCashInHand').innerText);

    //  check sufficient cash in hand

    if (cashInHandAmt < qMovementDonationAmt){
        alert('Insufficient cash in hand for transaction');

        return;

    }

    // alert(cashInHandAmt)
    // deduct from cash in hand

    let cashInhandDeductAmt= (cashInHandAmt - qMovementDonationAmt);

    document.getElementById('TxtCashInHand').innerText= cashInhandDeductAmt;

    // set text value

    let newTotalAmount= (qMovementDonationAmt + qMovementDonationAmtPrv);
    alert(newTotalAmount)

    document.getElementById('txtQmovementAmt').innerText= newTotalAmount;
   
   
    // clear input value
    // document.getElementById('valQmovementAmt').value='';


  // Show the modal and set the donation amount
  document.getElementById('txtDonationModal').innerText = qMovementDonationAmt;

  // add modal
  document.getElementById('myModal').classList.add('modal-open');  
    

})

// ----------------------------------end Qmovment


// Close modal functionality
document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('myModal').classList.remove('modal-open');
    document.getElementById('valQmovementAmt').focus();
});

//--------------- history btn------

document.getElementById('btnHistoryTab').addEventListener('click',function () {
    
    const inputs=document.getElementsByTagName('input');

    const h2Elements = document.getElementsByTagName('h2');
    
    const historyContainer= document.getElementById('history-section'); 

    historyContainer.innerHTML = '';

//    console.log(inputs)
      // Get current date and time in British format
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    const formattedDateTime = now.toLocaleString('en-GB', options).replace(',', ''); 

    for (let i = 0; i < inputs.length; i++) {
        const userInput = inputs[i].value; 
        // Check if userInput is not empty
        if (userInput) {
            const cardHeading = h2Elements[i].innerText ; 
            console.log(cardHeading);
            // alert(cardHeading);

    //   console.log(userInput);
   
                const row = `
                <div class="grid grid-cols-1 max-w-full mx-auto my-4 p-6 bg-white rounded-lg shadow-lg">
                <p class="text-2xl font-semibold">${userInput} Taka is Donated for ${cardHeading}</p>
                <p>Date and Time: ${formattedDateTime}</p>
                 </div> `
                 historyContainer.innerHTML += row;
               
        }
        
    }
        // empty all input box value
        document.getElementById('valQmovementAmt').value='';
        document.getElementById('valFeniAmt').value='';
        document.getElementById('valNkhaliAmt').value='';
        
    
});