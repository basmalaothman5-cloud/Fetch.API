// Aysn Fetch
async function getApi(){
     var result = await fetch("https://dummyjson.com/products");
     var ali = await result.json();
     var bosy = ali.products;

      var basket = "" ;
            for(var i=0; i<bosy.length;i++){

                var cartoona = `<div class="md:col-4  text-center mb-12">
                                 <img src="${bosy[i].images[0]}" class="w-100" style="height:350px">
                                      <h4>${bosy[i].title}</h4>
                                       <h6>${bosy[i].brand}</h6>
                                       <h6>${bosy[i].description}</h6>
                                       <h6>${bosy[i].rating} of 5</h6>
                                       <h6>${bosy[i].price}$</h6>
                                       <h6>${bosy[i].id}</h6>
                                             </div>
                                            `;
               basket = basket +  cartoona ;                       
            }
            document.querySelector(".test").innerHTML = basket; 
}
getApi();

//====================================================================
//====================================================================

//fetch 
// fetch("https://dummyjson.com/products")
// .then(function(result){
//    return result.json()
// })
// .then(function(ali){
//     var bosy = ali.products;
//      var basket = "" ;
//             for(var i=0; i<bosy.length;i++){

//                 var cartoona = `<div class="md:col-4  text-center mb-12">
//                                  <img src="${bosy[i].images[0]}" class="w-100" style="height:350px">
//                                       <h4>${bosy[i].title}</h4>
//                                        <h6>${bosy[i].brand}</h6>
//                                        <h6>${bosy[i].description}</h6>
//                                        <h6>${bosy[i].rating} of 5</h6>
//                                        <h6>${bosy[i].price}$</h6>
//                                        <h6>${bosy[i].id}</h6>
//                                              </div>
//                                             `;
//                basket = basket +  cartoona ;                       
//             }
//             document.querySelector(".test").innerHTML = basket; 
// })


//====================================================================
//====================================================================



// API images [0]
// function getApi() {

//     var xhttp = new XMLHttpRequest;

//     xhttp.onreadystatechange = function () {
//         if(this.readyState==4 && this.status==200){ // this بتعود علي حاجه  الي شغال عليها 
//             var result = this.responseText; //string
//             var ali = JSON.parse(result);
//             var bosy = ali.products;
//             var basket = "" ;
//             for(var i=0; i<bosy.length;i++){

//                 var cartoona = `<div class="md:col-4  text-center mb-12">
//                                  <img src="${bosy[i].images[0]}" class="w-100" style="height:350px">
//                                       <h4>${bosy[i].title}</h4>
//                                        <h6>${bosy[i].brand}</h6>
//                                        <h6>${bosy[i].description}</h6>
//                                        <h6>${bosy[i].rating} of 5</h6>
//                                        <h6>${bosy[i].price}$</h6>
//                                        <h6>${bosy[i].id}</h6>
//                                              </div>
//                                             `;
//                basket = basket +  cartoona ;                       
//             }
//             document.querySelector(".test").innerHTML = basket;
//         }
//     }
    
//     xhttp.open("GET",'https://dummyjson.com/products',true); //عايز اجيب بيانات  GET , عايز احط بيانات post Method
//     xhttp.send();
// }

// getApi();


//====================================================================
//====================================================================



// API of object
// function getApi() {

//     var xhttp = new XMLHttpRequest;

//     xhttp.onreadystatechange = function () {
//         if(this.readyState==4 && this.status==200){ // this بتعود علي حاجه  الي شغال عليها 
//             var result = this.responseText; //string
//             var ali = JSON.parse(result);
//             var bosy = ali.data.recipes;
//             var basket = "" ;
//             for(var i=0; i<bosy.length;i++){

//                 var cartoona = `<div class="md:col-4  text-center mb-12">
//                                  <img src="${bosy[i].image_url}" class="w-100" style="height:350px">
//                                       <h4>${bosy[i].title}</h4>
//                                        <h6>${bosy[i].publisher}</h6>
//                                              </div>
//                                             `;
//                basket = basket +  cartoona ;                       
//             }
//             document.querySelector(".test").innerHTML = basket;
//         }
//     }
    
//     xhttp.open("GET",'https://forkify-api.jonas.io/api/v2/recipes?search=pizza',true); //عايز اجيب بيانات  GET , عايز احط بيانات post Method
//     xhttp.send();
// }

// getApi();v