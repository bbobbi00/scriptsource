//tab.js 수정

//세 개의 li,div 찾기: queryselectorAll()
const allLi = document.querySelectorAll(".tab-button");
const allDiv = document.querySelectorAll(".tab-content");

allLi.forEach((li,idx)=>{
    li.addEventListener("click",(e)=>{
        //모든 li에 orange 클래스명 제거
        allLi.forEach((item)=>{
            item.classList.remove("orange");
        });

        //현재 이벤트가 일어난 li orange 클래스명 추가
        e.target.classList.add("orange");

        //모든 div 의 show 제거
        allDiv.forEach((item)=>{
            item.classList.remove("show");
        });

        //현재 이벤트가 일어난 li 와 순서가 일치하는 div show 추가
        allDiv[idx].classList.add("show");
    });
});


firstLi.addEventListener("click", () => {
  //다른 li에 orange 클래스명 제거
  secondLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  //firstLi orange 클래스명 추가
  firstLi.classList.add("orange");

  //다른 div의 show 제거
  secondLi.classList.remove("show");
  thirdLi.classList.remove("show");

  //첫번째 div show 추가
  firstLi.classList.add("show");

  //다른 div의 show 제거
  secondLi.classList.remove("show");
  thirdLi.classList.remove("show");
  
 //첫번째 div show 추가
 firstLi.classList.add("show");


});




secondLi.addEventListener("click", () => {
  //다른 li에 orange 클래스명 제거
  thirdLi.classList.remove("orange");
  firstLi.classList.remove("orange");
  //secondLi orange 클래스명 추가
  secondLi.classList.add("orange");
});
thirdLi.addEventListener("click", () => {
  //다른 li 에 orange 클래스명 제거
  firstLi.classList.remove("orange");
  secondLi.classList.remove("orange");
  //thirdLi orange 클래스명 추가
  thirdLi.classList.add("orange");
});

  secondLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  //firstLi orange 클래스명 추가
  firstLi.classList.add("orange");

  //다른 div의 show 제거
  secondLi.classList.remove("show");
  thirdLi.classList.remove("show");

  //첫번째 div show 추가
  firstLi.classList.add("show");

  //다른 div의 show 제거
  secondLi.classList.remove("show");
  thirdLi.classList.remove("show");
  
 //첫번째 div show 추가
 firstLi.classList.add("show");


});




secondLi.addEventListener("click", () => {
  //다른 li에 orange 클래스명 제거
  thirdLi.classList.remove("orange");
  firstLi.classList.remove("orange");
  //secondLi orange 클래스명 추가
  secondLi.classList.add("orange");
});
thirdLi.addEventListener("click", () => {
  //다른 li 에 orange 클래스명 제거
  firstLi.classList.remove("orange");
  secondLi.classList.remove("orange");
  //thirdLi orange 클래스명 추가
  thirdLi.classList.add("orange");
});
