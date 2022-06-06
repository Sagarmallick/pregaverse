const mobileButton=document.getElementById('mobile-b');
const backendButton=document.getElementById('backend-b');
const frontendButton=document.getElementById('frontend-b');
const designButton=document.getElementById('design-b');
const developmentButton=document.getElementById('development-b');

const mobile=document.getElementById('mobile-t');
const backend=document.getElementById('backend-t');
const frontend=document.getElementById('frontend-t');
const design=document.getElementById('design-t');
const development=document.getElementById('development-t');

const x1_circle=document.getElementById('x1-circle');
const x2_circle=document.getElementById('x2-circle');
const x3_circle=document.getElementById('x3-circle');
const x4_circle=document.getElementById('x4-circle');
const x5_circle=document.getElementById('x5-circle');


mobileButton.onclick = function () {
    if (mobile.style.display !== "none" && x1_circle.style.display!== "none") {
      mobile.style.display = "none";
      x1_circle.style.display = "none"
    } else {
      mobile.style.display = "block";
      x1_circle.style.display = "block"
    }
  };
  backendButton.onclick = function () {
    if (backend.style.display !== "none" && x2_circle.style.display!== "none") {
      backend.style.display = "none";
      x2_circle.style.display = "none"
    } else {
      backend.style.display = "block";
      x2_circle.style.display = "block"
    }
  };
  frontendButton.onclick = function () {
    if (frontend.style.display !== "none" && x3_circle.style.display!== "none") {
      frontend.style.display = "none";
      x3_circle.style.display = "none"
    } else {
      frontend.style.display = "block";
      x3_circle.style.display = "block"
    }
  };

  designButton.onclick = function () {
    if (design.style.display !== "none" && x4_circle.style.display!== "none") {
      design.style.display = "none";
      x4_circle.style.display = "none"
    } else {
      design.style.display = "block";
      x4_circle.style.display = "block"
    }
  };
  developmentButton.onclick = function () {
    if (development.style.display !== "none" && x5_circle.style.display!== "none") {
      development.style.display = "none";
      x5_circle.style.display = "none"
    } else {
      development.style.display = "block";
      x5_circle.style.display = "block"
    }

  };





    function opendropdown() {
      var x = document.getElementById("dropdown");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  


    const getAndroidValue = document.getElementById('getAndroidVal');

    getAndroidValue.addEventListener('click',function getAndroidVal(){
        window.location.href = "./hire-talent.html";
    })


