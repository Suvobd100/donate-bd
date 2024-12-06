// console.log('Js connect');


document.getElementById('IdBtnNkhali').addEventListener('click',function () {

    let nKhaliDonationAmtPrv=Number(document.getElementById('TxtNkhaliDonationAmt').innerText);
        alert(nKhaliDonationAmtPrv);

    // getting value from input 
    const nKhaliDonationAmt=Number(document.getElementById('valNkhaliAmt').value);
    if (nKhaliDonationAmt<0 || isNaN(nKhaliDonationAmt)){
            alert('Invalid Input');
            document.getElementById('valNkhaliAmt').value='';
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
    document.getElementById('TxtNkhaliDonationAmtModal').innerText = nKhaliDonationAmt;
    document.getElementById('myModal').classList.add('modal-open');

    
    // alert('Sucessful');


})

// Close modal functionality
document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('myModal').classList.remove('modal-open');
});