const parallax=document.getElementById("txtlogo");
const MPLO=document.getElementById("MPL");
window.addEventListener('scroll',function() {
    let offset=window.scrollY;
    MPLO.style.opacity=(100-offset)*.009;
})