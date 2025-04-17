const [open, view, del] = document.querySelectorAll("nav button");
const popup = document.querySelector("aside");
const ck = popup.querySelector("#ck");
const close = popup.querySelector('button');

// 기본 팝업 열고 닫기 이벤트
open.addEventListener('click', ()=>{
  popup.style.display = 'block';
})
close.addEventListener('click', ()=>{
  popup.style.display = 'none';
})