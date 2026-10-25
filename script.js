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

// Netlify Forms AJAX submission. The HTML form still contains the required
// data-netlify and form-name attributes so Netlify detects it at build time.
const quote=document.getElementById("quote");
if(quote){
  quote.addEventListener("submit",async event=>{
    event.preventDefault();
    const submit=quote.querySelector('button[type="submit"]');
    const original=submit ? submit.innerHTML : "Send enquiry →";
    if(submit){ submit.disabled=true; submit.innerHTML="Sending…"; }
    try{
      const formData=new FormData(quote);
      const body=new URLSearchParams(formData).toString();
      const response=await fetch("/",{
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body
      });
      if(!response.ok) throw new Error("Netlify form submission failed");
      window.location.href="/thank-you.html";
    }catch(error){
      if(submit){ submit.disabled=false; submit.innerHTML=original; }
      let notice=quote.querySelector(".form-error");
      if(!notice){
        notice=document.createElement("div");
        notice.className="form-error";
        notice.setAttribute("role","alert");
        quote.appendChild(notice);
      }
      notice.textContent="Sorry, the enquiry could not be sent. Please call George on 07988 150927 or email gmheatingplumbing@gmail.com.";
    }
  });
}

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
