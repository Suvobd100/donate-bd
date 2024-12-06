// console.log('Js connect');


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
  
    
    // set text value

    let newTotalAmount= nKhaliDonationAmt+nKhaliDonationAmtPrv;
    alert(newTotalAmount)

    document.getElementById('TxtNkhaliDonationAmt').innerText= newTotalAmount;
   
   
    // clear input value
    document.getElementById('valNkhaliAmt').value='';
    


    // deduct from cash in hand
    const cashInHandAmt=Number(document.getElementById('TxtCashInHand').innerText);

    // alert(cashInHandAmt)

    let cashInhandDeductAmt= cashInHandAmt-nKhaliDonationAmt;

    document.getElementById('TxtCashInHand').innerText= cashInhandDeductAmt;

    // Show the modal and set the donation amount
    document.getElementById('txtDonationModal').innerText = nKhaliDonationAmt;
    // add modal
    document.getElementById('myModal').classList.add('modal-open');
    
    // alert('Sucessful');
})

// Close modal functionality
document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('myModal').classList.remove('modal-open');
    document.getElementById('valNkhaliAmt').focus();
});


// Feni donation part start-------------------

document.getElementById('btnFeniDonation').addEventListener('click',function () {
    // getting previous amount
    let feniDonationAmtPrv=Number(document.getElementById('txtFeniDonationAmt').innerText);

        alert(feniDonationAmtPrv);

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
  
    
    // set text value

    let newTotalAmount= feniDonationAmt+feniDonationAmtPrv;
    alert(newTotalAmount)

    document.getElementById('txtFeniDonationAmt').innerText= newTotalAmount;
   
   
    // clear input value
    document.getElementById('valFeniAmt').value='';
    


    // deduct from cash in hand
    const cashInHandAmt=Number(document.getElementById('TxtCashInHand').innerText);

    // alert(cashInHandAmt)
    // deduct from cash in hand

    let cashInhandDeductAmt= cashInHandAmt-feniDonationAmt;

    document.getElementById('TxtCashInHand').innerText= cashInhandDeductAmt;

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