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
