const seatButton = document.getElementsByClassName('seat-btn');
let seatCount = 0;
let sum = 0;



for(const seat of seatButton){
    seat.addEventListener('click',function(){
        
        if(seatCount>3){
            alert('One person only can buy 4 seats');
            return;
        }
        
        seatCount++;

        seat.disabled = true;
        
        
        
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';

        const seatNumber = seat.innerText;

        seat.setAttribute('disabled',true);
        
        
        


        // set list 

        const listSetContainer = document.getElementById('list-add-container');


        
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';


        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        


        p.innerText= seatNumber;
        p2.innerText = "Economoy";
        p3.innerText = 550 ;


        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        listSetContainer.appendChild(div);
        // total Price 

        const totalPrice = document.getElementById('total-price').innerText;
        let convertedTotalPrice = parseInt(totalPrice);
        sum = convertedTotalPrice + 550;

        // seat left 

        
        const seatLeft = document.getElementById('seat-left').innerText;
        let convertedSeatLeft = parseInt(seatLeft);
        convertedSeatLeft--;

        // Grand Total 

        const grandTotal = document.getElementById('grand-total').innerText;
        let convertedGrandTotal = parseInt(grandTotal);
        convertedGrandTotal = sum;

        //btn disable
        
        


        setInnerText('grand-total',convertedGrandTotal);
        setInnerText('seat-left',convertedSeatLeft);
        setInnerText('total-price',sum);
        setInnerText('seat-count',seatCount);
    })
}



const applyButton = document.getElementById('apply-btn').addEventListener('click',function(){
    let couponField = document.getElementById('coupon-field');
    const grandPrice = document.getElementById('grand-total').innerText;
    let convertedTotalPrice = parseInt(grandPrice);

    const applyCouponSection = document.getElementById('apply-coupon-section');



    if(couponField.value==="NEW15" && seatCount>0){ 
        const discountPrice = convertedTotalPrice * .15;
        const discount = document.getElementById('discount');
        discount.classList.remove('hidden');
        setInnerText('total-discount',discountPrice);
        const newGrandTotal = grandPrice - discountPrice;
        setInnerText('grand-total',newGrandTotal);
        applyCouponSection.classList.add('hidden');
        
    }
    else if(couponField.value==="Coupon 20" && seatCount>0){ 
        const discountPrice = convertedTotalPrice * .20;
        const discount = document.getElementById('discount');
        discount.classList.remove('hidden');
        setInnerText('total-discount',discountPrice);
        const newGrandTotal = grandPrice - discountPrice;
        setInnerText('grand-total',newGrandTotal);
        applyCouponSection.classList.add('hidden');
    }
    
    else{
        couponField.value = '';
        alert("Wrong Coupon Code");
        
    }
});





// for modal 

const successButton = document.getElementById('next-btn').addEventListener('click',function(){
    const phoneField = document.getElementById('phone-field').value;
    const convertedPhoneField = parseInt(phoneField);

    console.log(typeof convertedPhoneField);
    console.log(convertedPhoneField);

    const modal = document.getElementById('my_modal_1');
    
    if(isNaN(convertedPhoneField)){
        alert("Number Not added ! Please add your number ");      
    }
    else if(convertedPhoneField<1){
        alert("Please added Correct Phone Number!")
    }
    else if(seatCount<1){
        alert("Please Select At least 1 Seat!")
    }
    else{
        modal.showModal();
    }

})










function setInnerText(id,value){
    document.getElementById(id).innerText = value;

}