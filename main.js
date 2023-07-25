const parallax=document.getElementById("txtlogo");
const MPLO=document.getElementById("MPL");
window.addEventListener('scroll',function() {
    let offset=window.scrollY;
    MPLO.style.opacity=(400-offset)*.003;
})

function gtco(button){
  button.classList.add("active");
  
  setTimeout(function() { button.classList.remove("active");}, 700);

  setTimeout(function() {
  if(button.name == "c")
    window.location.href = "courses.html?icourse=c";
  else if(button.name == "cpp")
    window.location.href = "courses.html?icourse=cpp";
  else if(button.name == "python")
    window.location.href = "courses.html?icourse=python";
  },1000)
}