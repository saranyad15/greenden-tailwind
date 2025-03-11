//Selecting  Side Navbar and MenuIcon

var sideNav = document.getElementById("side-nav")
var menuIcon = document.getElementById("menuicon")

menuIcon.addEventListener("click",function()
{
    sideNav.style.right=0
})
var closeNav = document.getElementById("close-nav")

closeNav.addEventListener("click",function()
{
    sideNav.style.right="-50%"
})


// Product Search Function

var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count =0; count<productList.length; count=count+1)
        {
            var productname = productList[count].querySelector("h1").textContent

            if(productname.toUpperCase().indexOf(enteredValue)<0)
                {
                    productList[count].style.display = "none"
                }
                else{
                    productList[count].style.display = "block"
                }
    }
})