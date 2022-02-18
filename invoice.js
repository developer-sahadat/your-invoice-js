// Date Add
let date= new Date();

document.getElementById('show-date').innerText=date.toLocaleDateString();



//Invoice  data delets:
document.getElementById('detail-submit-btn').addEventListener('click', function(){
    const buyerDetailsInput=document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText=buyerDetailsInput.value;

    buyerDetailsInput.value='';
});


//item details
document.getElementById('add-details-btn').addEventListener('click', function(){
    let itemNameInput=document.getElementById('item-name-input');
    let itemPriceInput=document.getElementById('item-price-input');
    let itemQuantityInput=document.getElementById('item-quantity-input');

 
const tr=document.createElement('tr');
const th=document.createElement('th');
const td1=document.createElement('td');
const td2=document.createElement('td');
const td3=document.createElement('td');

th.innerText=itemNameInput.value;
td1.innerText=itemPriceInput.value;
td2.innerText=itemQuantityInput.value;
td3.innerText=parseFloat(itemPriceInput.value)*parseFloat(itemQuantityInput.value)

td3.classList.add('itemsTotatPrice')

tr.appendChild(th)
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
document.getElementById('info-table').appendChild(tr);

subsTotalsCalculations()
   
});




/* 

  <tr>

  <th >1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>

</tr> --

*/

function subsTotalsCalculations(){

   let  subsTotalPrice=SubTotalCalculator();

   document.getElementById('sub-total').innerText=subsTotalPrice;

   let tax=subsTotalPrice*0.2;
   document.getElementById('tax').innerText=tax.toFixed(3);
   let grandTotal=subsTotalPrice+tax;
   document.getElementById('grand-total').innerText=grandTotal;

   document.getElementById('grand-total-2').innerText=subsTotalPrice;


}


function SubTotalCalculator(){
let subsTotals=document.getElementsByClassName('itemsTotatPrice');

let subTotals=0;

for(let subsTotal of subsTotals ){

    subTotals=subTotals+parseFloat(subsTotal.innerText)
}

return subTotals;

}



