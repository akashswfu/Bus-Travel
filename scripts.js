const seatButton = document.getElementsByClassName('seat-btn');
let seatCount = 0;
let sum = 0;

const applyBtn = document.getElementById('apply-btn');
applyBtn.disabled = true;
applyBtn.style.backgroundColor = 'gray';


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
        
        
        if(seatCount===4) {
            applyBtn.disabled = false;
            applyBtn.style.backgroundColor = '#1DD100';
        }
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
    else if(couponField.value==="Couple 20" && seatCount>0){ 
        const discountPrice = convertedTotalPrice * .20;
        const discount = document.getElementById('discount');
        discount.classList.remove('hidden');
        setInnerText('total-discount',discountPrice);
        const newGrandTotal = grandPrice - discountPrice;
        setInnerText('grand-total',newGrandTotal);
        applyCouponSection.classList.add('hidden');
    }
    
    else{       
        alert("Wrong Coupon Code");
    }
});





// for modal 

const successButton = document.getElementById('next-btn').addEventListener('click',function(){
    const phoneField = document.getElementById('phone-field');
    const inputValue = phoneField.value;

    const mixedPattern = /^(?=.*\d)(?=.*[a-zA-Z])/;

    if(mixedPattern.test(inputValue)){
        alert("Wrong Phone Number!");
        return;
    }


    const convertedPhoneField = parseInt(phoneField.value);
    console.log(convertedPhoneField);

    const modal = document.getElementById('my_modal_1');
    
    if(isNaN(convertedPhoneField)){
        alert("Please Add Your Number!");      
    }
    else if(convertedPhoneField<1){
        alert("Wrong Phone Number!")
    }
    else if(seatCount<1){
        alert("Please Select At least 1 Seat!");
    }
    else{
        modal.showModal();
    }  
})

const closeButton = document.getElementById('close').addEventListener('click',function(){
    const close = document.getElementById('close');
    clickClose();
})

function clickClose(){
    location.reload();
}



function setInnerText(id,value){
    document.getElementById(id).innerText = value;

}