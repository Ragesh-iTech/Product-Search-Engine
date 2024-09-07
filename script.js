const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase(); // Corrected to 'value'
    const storeitems = document.getElementById("product-list");

    const products = document.querySelectorAll(".product"); // Corrected to 'products'
    const pname = storeitems.getElementsByTagName("h3");

    for (var i = 0; i < pname.length; i++) {
        let match = products[i].getElementsByTagName("h3")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
};

// Attach the function to an input or keyup event
document.getElementById("search-item").addEventListener("input", search);




// const search = () =>{
//     const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
//     const storeitems = document.getElementById("product-list");

//     const product = document.querySelectorAll(".product");
//     const pname = storeitems.getElementsByTagName("h2");

//     for(var i=0 ; i< pname.length;i++)
//         {
//             let match =product[i].getElementsByTagName("h2")[0];

//             if(match)
//                 {
//                    let textvalue = match.textContent || match.innerHTML ;

//                    if (textvalue.toUpperCase().indexOf(searchbox) > -1)
//                     {
//                         product[i].style.display = "";
//                     }
//                     else
//                     {
//                         product[i].style.display = "none";
//                     }
//                 }
//         }

// }