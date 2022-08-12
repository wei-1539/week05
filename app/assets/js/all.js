const reply =document.querySelector(`#reply`);
const close = document.querySelector(`#close`);
const edit  = document.querySelector(`#edit`);
const answer = document.querySelector(`#answer`);
const outBtn = document.querySelector(`#outBtn`);
// 打開文字編輯框
reply.addEventListener(`click`,() =>{
  answer.classList.add("d-none");
  outBtn.classList.add("d-none");
  edit.classList.remove("d-none");
})
// 關閉文字編輯框
close.addEventListener(`click`,() =>{
  edit.classList.add(`d-none`);
  answer.classList.remove("d-none");
  outBtn.classList.remove("d-none");
})