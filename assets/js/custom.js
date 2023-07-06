//header
function navMenuToggle(){
  const toggleBtn = document.querySelector('.header .navbar-toggler .navbar-toggler-icon')
  toggleBtn.innerHTML = '<i class="fas fa-bars"></i>'
}
navMenuToggle()

//banner 2 sticky
 function bannerToSticky(){
  const header = document.querySelector('.header');
  const wiggle = document.querySelector('.buy-wiggle');
  const banner2Content = document.querySelector('.hero-2 .hero-2-content');
  const banner2TopDsc = header.clientHeight + wiggle.clientHeight
  document.addEventListener('scroll',()=>{
    if(window.scrollY > banner2TopDsc){
      banner2Content.style.position='fixed';
    }else{
      banner2Content.style.position='absolute';
    }
  })
 }
 bannerToSticky()


//banner 
function bannerArea(){
  const hero1 = document.querySelector('.banner-wrapper .hero-1')
  const hero2 = document.querySelector('.banner-wrapper .hero-2')
  const hero3 = document.querySelector('.banner-wrapper .hero-3')
  document.addEventListener('scroll',(e)=>{
    let hero1TopDsc = hero1.getBoundingClientRect().top
    let hero2TopDsc = hero1.getBoundingClientRect().top
    let hero3TopDsc = hero1.getBoundingClientRect().top
    // if(hero1TopDsc <= 0){
    //   hero1.style.position = 'fixed';
    // }
    // if(hero2TopDsc <= 0){
    //   hero2.style.position = 'fixed';
    // }
    // if(hero3TopDsc <= 0){
    //   hero3.style.position = 'fixed';
    // }
  })
}
bannerArea()

//tab (roadMap area)==================
function roadMapTab() {
  const tabBtns = document.querySelectorAll(
    ".road-map-content .tab-buttons .tab-btn"
  );
  const tabContents = document.querySelectorAll(
    ".road-map-content .tab-img-area .fade-img"
  );
  const textContents = document.querySelectorAll(
    ".road-map-content .text-contents .text-content"
  );

  function removeActiveClass(items, cls) {
    items.forEach((item) => {
      item.classList.remove(cls);
    });
  }

  tabBtns.forEach((item) => {
    item.addEventListener("click", () => {
      let itemTab = item.getAttribute("data-tab");
      let tabContentItem = document.querySelectorAll(`.${itemTab}`);
      removeActiveClass(tabContents, "active-fade-img");
      removeActiveClass(textContents, "active-fade-img");

      tabContentItem.forEach((content) => {
        content.classList.add("active-fade-img");
      });
    });
  });
}
roadMapTab();

//faq (accordion)
function faqAccordion() {
  const faqItems = document.querySelectorAll(".faq .faq-item");

  function removeActiveClass(items, cls) {
    items.forEach((item) => {
      item.classList.remove(cls);
    });
  }
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      // removeActiveClass(faqItems, 'active-faq-text-expand', item)
      item.classList.toggle("active-faq-text-expand");
    });
  });
}
faqAccordion();
