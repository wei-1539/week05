"use strict";

var reply = document.querySelector("#reply");
var close = document.querySelector("#close");
var edit = document.querySelector("#edit");
var answer = document.querySelector("#answer");
var outBtn = document.querySelector("#outBtn"); // 打開文字編輯框

reply.addEventListener("click", function () {
  answer.classList.add("d-none");
  outBtn.classList.add("d-none");
  edit.classList.remove("d-none");
}); // 關閉文字編輯框

close.addEventListener("click", function () {
  edit.classList.add("d-none");
  answer.classList.remove("d-none");
  outBtn.classList.remove("d-none");
});
//# sourceMappingURL=all.js.map
