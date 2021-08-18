// function casePlus(plus){
//     const plusInput=document.getElementById(plus);
//     const plusValue=plusInput.value
//     const plusparseint=parseInt(plusValue)+1;
//     plusInput.value=plusparseint;
//     return plusInput.value
// }
function caseupdateValue(updateValue,creasingNumber,price,janina){
    let caseInput=document.getElementById(updateValue);
    let caseValue=caseInput.value
    if(creasingNumber==true ){
     caseValue=parseInt(caseValue)+1;
        
    }else if(caseValue>0){
       
        caseValue=parseInt(caseValue)-1
       
    }
    caseInput.value=caseValue;
    let casePrice=document.getElementById(janina);

    casePrice.innerText=caseValue * price;


    
 

} 
function calculate(){
    let priceTotal=document.getElementById('phone-total');
    let priceTotalinner=priceTotal.innerText;
    let priceTotalFloat=parseFloat(priceTotalinner); 


    let caseTotal=document.getElementById('case-total');
    let caseTotalinner=caseTotal.innerText;
    let caseTotalFloat=parseFloat(caseTotalinner); 
   


    let sub=document.getElementById('sub-total');
    let subinner=sub.innerText;

    let subfloat=parseFloat(subinner);
    sub.innerText=parseFloat(priceTotalFloat)+ parseFloat(caseTotalFloat);


    let tax=document.getElementById('tax-amount');
    let taxinner=tax.innerText;
    let taxfloat=parseFloat(taxinner)+0;
    tax.innerText="5";
    




    


    
    let msain = document.getElementById('total-price');
    let maininner=msain.innerText;
    let maininnerfloat= parseFloat(maininner);

    msain.innerText=taxfloat+ parseFloat(sub.innerText)

}
document.getElementById('phone-plus').addEventListener('click',function(){

 caseupdateValue('phone-number',true,50,'phone-total');
 calculate()

   

})
document.getElementById('phone-minus').addEventListener('click',function(){

    caseupdateValue('phone-number',false,50,'phone-total');
    calculate()

   
      
   
   })


   document.getElementById('case-plus').addEventListener('click',function(){

    caseupdateValue('case-number',true,100,'case-total');
    calculate()
   
      
   
   })
   document.getElementById('case-minus').addEventListener('click',function(){
   
       caseupdateValue('case-number',false,100,'case-total');
       calculate()
      
         
      
      })   

