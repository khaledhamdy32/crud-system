var pNameInp = document.getElementById('pname');
var pCatInp = document.getElementById('pcategory');
var pPriceInp = document.getElementById('pprice');
var pDscInp = document.getElementById('pdescription');
var tbody = document.getElementById('tbody');
var searchInp = document.getElementById('searchInp');
var addbtn = document.getElementById('addbtn');
var updatebtn = document.getElementById('updatebtn');

// var productList=[]
//var productList=localStorage.getItem('allProducts');

if(localStorage.getItem('allProducts') == null){

    var productList =[];

}
else{
    var productList = JSON.parse(localStorage.getItem('allProducts'));

}

displayproduct();

//create

function addproduct(){

    if(validationProductName() == true && pCatInp.value!="" && pPriceInp.value!="" && pDscInp.value!="" ){

    var product ={

        productName : pNameInp.value ,
        productCat : pCatInp.value ,
        productPrice : pPriceInp.value ,
        productDesc : pDscInp.value 
    

    };

    productList.push(product);


   localStorage.setItem('allProducts',JSON.stringify(productList));


    displayproduct();


    clearForm();
    //console.log(product);
    //console.log(productList);
    
    
    }
}

//retrive

function displayproduct(){

    var trs ='';
     
    for(var i=0 ;i<productList.length;i++){
       
        trs +=` <tr>
              
    <td>${i}</td>
    <td>${productList[i].productName}</td>
    <td>${productList[i].productCat}</td>
    <td>${productList[i].productPrice}</td>
    <td>${productList[i].productDesc}</td>
    <td> <button onclick='updateProduct(${i})' class="btn btn-warning">edit<i class="fas fa-edit"></i></button></td>
    <td><button onclick='deleteProduct(${i})' class="btn btn-danger">delete <i class="fas fa-trash-alt    "></i></button></td>
</tr>
` ;
    }




   // console.log(trs)

    tbody.innerHTML=trs;

}

//clear form after click 

function clearForm(){
pNameInp.value="";
pCatInp.value="";
pPriceInp.value="";
pDscInp.value="";
}       

// search with hightlight function

function search(){
var trs="";
for (var i=0;i<productList.length;i++) {
    if ( productList[i].productName.toLowerCase().includes(searchInp.value.toLowerCase())) {

       trs+= ` <tr>
              
    <td>${i}</td>
    <td>${productList[i].productName.toLowerCase().replace(searchInp.value,`<span style="background-color:yellow">${searchInp.value}</span>`)}</td>
    <td>${productList[i].productCat}</td>
    <td>${productList[i].productPrice}</td>
    <td>${productList[i].productDesc}</td>
    <td> <button class="btn btn-warning">edit<i class="fas fa-edit"></i></button></td>
    <td><button class="btn btn-danger">delete <i class="fas fa-trash-alt"></i></button></td>
</tr>`;

    }



}

tbody.innerHTML = trs;






}

// delete function 

function deleteProduct(ind){
    productList.splice(ind,1);
    localStorage.setItem('allProducts',JSON.stringify(productList));

    displayproduct();


}   


// update function

var updatedindex ; 

function updateProduct(ind){

    updatedindex = ind ;
addbtn.classList.add('d-none');
updatebtn.classList.remove('d-none');

// console.log(productList[ind])

pNameInp.value = productList[ind].productName ;
pCatInp.value = productList[ind].productCat ;
pPriceInp.value = productList[ind].productPrice ;
pDscInp.value = productList[ind].productDesc ;



// function retriveProduct(){

//     productList[updatedindex].productName = pNameInp.value ;
//     productList[updatedindex].productCat = pCatInp.value ;
//     productList[updatedindex].productPrice = pPriceInp.value ;
//     productList[updatedindex].productDesc = pDscInp.value ; 

//     displayproduct();
//     localStorage.setItem('allProducts',JSON.stringify(productList));
//     clearForm();
// }



}

function retriveProduct(){

    productList[updatedindex].productName = pNameInp.value ;
    productList[updatedindex].productCat = pCatInp.value ;
    productList[updatedindex].productPrice = pPriceInp.value ;
    productList[updatedindex].productDesc = pDscInp.value ; 

    displayproduct();
    localStorage.setItem('allProducts',JSON.stringify(productList));
    clearForm();
    addbtn.classList.remove('d-none');
    updatebtn.classList.add('d-none');
}


//  validation  function

function validationProductName(){


    var str = pNameInp.value ;

    var regexName =/^[A-Z][a-z ]{3,15}$/;

    

    if(!regexName.test(str)){

        alert('lm nfsk!!')

    }
    else {
        return true ;
    }



}


var web = "web design";

console.log(web.replace('web','zep'));     