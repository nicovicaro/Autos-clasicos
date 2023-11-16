const openMenu = document.querySelector("#open-menu");
const navbar = document.querySelector("#navbar");
const closeMenu = document.querySelector("#close-menu")
const navPhone = document.querySelector("#navbar")
openMenu.addEventListener("click", ()=> {
    navbar.classList.add("active");
})

closeMenu.addEventListener("click", ()=> {
	navbar.classList.add("closing");
	setTimeout (()=> {
		navbar.classList.remove("active");
		navbar.classList.remove("closing");
	}, 400);
})


navPhone.addEventListener("click", ()=> {
  setTimeout(()=> {
    navPhone.classList.remove("active");
  }, 200);
	
})
