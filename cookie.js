const [open, view, del, create] = document.querySelectorAll("nav button");
const popup = document.querySelector("aside");
const ck = popup.querySelector("#ck");
const close = popup.querySelector('button');

// 기본 팝업 열고 닫기 이벤트
open.addEventListener('click', ()=>{
  popup.style.display = 'block';
});
close.addEventListener('click', ()=>{
  popup.style.display = 'none';
});

// 쿠키 생성 이벤트
create.addEventListener('click', ()=>{
  setCookie("popup", "done", 1);
  alert("오늘부터 1일동안 유지되는 쿠키 생성");
});

//쿠키 확인 이벤트
view.addEventListener('click', ()=>{
  console.log(document.cookie);
})

// 쿠키 삭제 이벤트
del.addEventListener('click', ()=>{
  setCookie("popup", "done", -1);
  alert("popup=done 쿠키 삭제");
});

//쿠키 생성 함수
function setCookie(name, value, expires){
  //오늘 날짜 기준으로 시간 정보값
  let today = new Date();
  //오늘 날짜에서 expires만큼 더해진 날짜 정보
  let duedate = today.getDate() + expires;
  //위에서 생성된 만료 기한을 today라는 시간 객체정보에 세팅
  today.setDate(duedate);

  //실제 브라우저에 파라미터 정보값을 조합해서 문자열 형태로 쿠키 생성해서 등록
  document.cookie = `${name}=${value};path=/;expires=${today.toString()}`
}