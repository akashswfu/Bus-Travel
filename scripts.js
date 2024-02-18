const seatButton = document.getElementsByClassName('seat-btn');
let seatCount = 0;
let sum = 0;



for(const seat of seatButton){
    seat.addEventListener('click',function(e){
        seatCount++;
        
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';

        const seatNumber = seat.innerText;


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


        setInnerText('grand-total',convertedGrandTotal);
        setInnerText('seat-left',convertedSeatLeft);
        setInnerText('total-price',sum);
        setInnerText('seat-count',seatCount);
    })
}


const applyButton = document.getElementById('apply-btn').addEventListener('click',function(){
    const couponField = document.getElementById('coupon-field').value;
    const grandPrice = document.getElementById('grand-total').innerText;
    let convertedTotalPrice = parseInt(grandPrice);
    if(couponField==="Akash"){ 
        const newPrice = convertedTotalPrice - 100;
        setInnerText('grand-total',newPrice);
        const discount = document.getElementById('discount');
        discount.classList.remove('hidden');
        setInnerText('total-discount',100);
    }
    else if(couponField === "Bijoy"){
        const newPrice = convertedTotalPrice - 200;
        setInnerText('grand-total',newPrice);
        setInnerText('total-discount',100);
    }
    else{
        alert("Wrong Coupon Code");
    }
});





// for modal 

const successButton = document.getElementById('next-btn').addEventListener('click',function(){

})










function setInnerText(id,value){
    document.getElementById(id).innerText = value;

}