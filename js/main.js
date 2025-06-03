// function getApi() {
//   var xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       var result = JSON.parse(this.responseText);
//       var value = result.products;
//       var mytext = "";

//       for (var i = 0; i < value.length; i++) {
//         var cartoona = `
//           <div class="col-md-4 text-center mb-5">
//             <img src="${value[i].images[0]}" alt="Photo" class="img-fluid" style="height: 350px; ">
//             <h4>${value[i].title}</h4>
//             <h5>${value[i].category}</h5>
//             <h5>${value[i].price}$</h5>
//           </div>
//         `;
//         mytext += cartoona;
//       }

//       document.querySelector(".test").innerHTML = mytext;
//     }
//   };

 
//   xhttp.open("GET", "https://dummyjson.com/products", true);
//   xhttp.send();
// }

// getApi();


function getApi() {
  fetch("https://dummyjson.com/carts")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      var carts = result.carts;
      var mytext = "";

    var products = carts[0].products;  

for (var i = 0; i < products.length; i++) {
  var product = products[i];

  var cartoona = `
    <div class="col-md-4 text-center mb-5">
      <img src="${product.thumbnail}" alt="${product.title}" class="img-fluid" style="height: 200px; width: 100%; object-fit: cover;">
      <h4>${product.title}</h4>
      <h5>Quantity: ${product.quantity}</h5>
      <h5>Price: $${product.price}</h5>
    </div>
  `;
  mytext += cartoona;
}

      

      document.querySelector(".test").innerHTML = mytext;
    });
}

getApi();



// async function getApi() {
//   var items = await fetch("https://fakestoreapi.com/products");
//   var value = await items.json();
  
//   var mytext = "";

//   for (var i = 0; i < value.length; i++) {
//     var cartoona = `
//       <div class="col-md-4 text-center mb-5">
//         <img src="${value[i].image} "alt="Photo" class="img-fluid" style="height: ">
//         <h4>${value[i].title}</h4>
//         <h5>${value[i].category}</h5>
//         <h5>${value[i].price}$</h5>
//       </div>
//     `;
//     mytext += cartoona;
//   }

//   document.querySelector(".test").innerHTML = mytext;
// }

// getApi();