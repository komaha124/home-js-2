var arr = [];
 
function instArr() { 
    let myNode = document.getElementById("stroka1");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    for(let i = 0; i < arr.length; i++) {
        let checkName = document.getElementById("stroka1");
        checkName.insertAdjacentHTML('beforeend', `<p>${arr[i].name} - ${arr[i].quantity} - ${arr[i].price} = ${arr[i].quantity * arr[i].price}</p>`);
    }

  
}
function summ() { 
    let mySum = 0;
    for(let i = 0; i < arr.length; i++) {
        mySum = mySum + arr[i].quantity * arr[i].price;
    }
    let checkName = document.getElementById("stroka2");
    document.getElementById("stroka2").innerHTML = ('beforeend', `<p> Всего: ${mySum} грн</p>`);
}

function Average() { 
    let allQuantity = 0;
    let allPrice = 0;
    let average = 0;
    for(let i = 0; i < arr.length; i++) {
        allQuantity = Number(allQuantity) + Number(arr[i].quantity);
        allPrice = Number(allPrice) + Number(arr[i].price);
    }
    average = allPrice / allQuantity;
    let checkName = document.getElementById("stroka3");
    document.getElementById("stroka3").innerHTML = ('beforeend', `<p> Среднее: ${average.toFixed(2)} грн</p>`);
}


function findExpensive() {
    let mostExpensive = 0;
    let indexAr = 0;
    for(let i = 0; i < arr.length; i++) {
        if (mostExpensive < arr[i].quantity * arr[i].price) {
            mostExpensive = arr[i].quantity * arr[i].price;
            indexAr = i;
        }
    }
    document.getElementById("stroka4").innerHTML = ('beforeend', `<p> Дорогой: ${arr[indexAr].name} - ${arr[indexAr].quantity} - ${arr[indexAr].price} = ${arr[indexAr].quantity * arr[indexAr].price}</p>`);
  
}




function addPlus() {
    let nameProduct = document.getElementById("Product").value;
        if(nameProduct == 0) {
        return; 
    }
    
    let quantProduct = Number(document.getElementById("Quantity").value);

    if(quantProduct <= 0) 
    alert("Количество не может быть меньше 0!");
    if(quantProduct <= 0)
    {
     return; 
    }

   
    let ProductPrice = document.getElementById("Price").value;
    if(ProductPrice <= 0) 
    alert("Цена не может быть меньше 0!") ; 
     
    
    if(ProductPrice <= 0) {
     return; 
    }

    
    
    let addPlusBlock = {
        name: nameProduct,
        quantity: quantProduct,
        price: ProductPrice,
    }
 


    arr.push(addPlusBlock); 
    instArr();
}
