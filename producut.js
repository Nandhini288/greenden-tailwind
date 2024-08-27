//Selecting Side Navbar, MenuIcon
var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0%"
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//Product Search Functionality
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (let index = 0; index < productList.length; index++) {
        var productName = productList[index].querySelector("h1").textContent
        
        if (productName.toUpperCase().indexOf(enteredvalue) < 0) {
            productList[index].style.display = "none"
        }
        else {
            productList[index].style.display = "block"
        }
    }
})