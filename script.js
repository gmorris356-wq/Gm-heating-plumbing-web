const nav=document.querySelector(".nav");
const menuButton=document.querySelector(".hamb");
const year=document.getElementById("year");

if(menuButton){
  menuButton.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded",String(open));
    document.body.classList.toggle("menu-open",open);
  });
}
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded","false");
  document.body.classList.remove("menu-open");
}));
if(year) year.textContent=new Date().getFullYear();

// Reliable same-page enquiry navigation, including the fixed mobile CTA.
document.querySelectorAll(".js-contact-link").forEach(link=>{
  link.addEventListener("click",event=>{
    const target=document.getElementById("contact");
    if(!target) return;
    event.preventDefault();
    nav?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded","false");
    document.body.classList.remove("menu-open");
    target.scrollIntoView({behavior:"smooth",block:"start"});
    history.replaceState(null,"","#contact");
  });
});

// Enquiry form uses a normal HTML POST so Netlify Forms can process it reliably.
// Keep the form-name hidden field and data-netlify attributes in index.html.

const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  revealItems.forEach(el=>observer.observe(el));
}else revealItems.forEach(el=>el.classList.add("visible"));
