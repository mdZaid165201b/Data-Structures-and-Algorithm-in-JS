/*----------------- Sorry for Ugly Code---------------  */ 

// Image Slider

let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

let imagesArray = [
  "https://images.unsplash.com/photo-1662283804757-ef81acd5471e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  
  "https://images.unsplash.com/photo-1662237393050-1de97c4b0506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  
  "https://images.unsplash.com/photo-1662123618425-f2aa02eb623d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  
];

let activeIndex = 0

nextBtn.addEventListener("click",()=>{
  activeIndex++;
  if(activeIndex <= imagesArray.length-1){
    document.querySelector('.displayImg').src = imagesArray[activeIndex];
    console.log(activeIndex);
  }
  else{activeIndex--;}
})

prevBtn.addEventListener("click",()=>{
  activeIndex--;
  if(activeIndex >= 0){
    document.querySelector('.displayImg').src = imagesArray[activeIndex];
    console.log(activeIndex);
  }
  else{ activeIndex++; }
})

setInterval(()=>{
  if(activeIndex < imagesArray.length-1){
    activeIndex++;
    document.querySelector('.displayImg').src = imagesArray[activeIndex];
  }
  else if(activeIndex == imagesArray.length-1){
    activeIndex = 0;
    document.querySelector('.displayImg').src = imagesArray[activeIndex];
  }
},2000)

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector(".displayImg").src = imagesArray[activeIndex];  
})
