const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector(' .closeMenu');
const openMenu = document.querySelector(' .openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show() {
    mainMenu.style.display ='flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top ='-100%';
}



//Regular hamburger navigation

const header = document.querySelector("header");
const sectionOne = document.querySelector("main");

const sectionOneOptions = {
	rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
	entries,
	sectionOneObserver
) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			header.classList.add("nav-scrolled");
		} else {
			header.classList.remove("nav-scrolled");
		}	
	});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);