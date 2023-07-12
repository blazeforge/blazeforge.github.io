const parallax=document.getElementById("txtlogo");
const MPLO=document.getElementById("MPL");
window.addEventListener('scroll',function() {
    let offset=window.scrollY;
    MPLO.style.opacity=(400-offset)*.003;
})