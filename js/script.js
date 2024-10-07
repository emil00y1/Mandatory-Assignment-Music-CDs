"use strict";

document.querySelector("#cd_form").addEventListener("submit", addCd);

document.querySelector("table").addEventListener("click", deleteCd);

function addCd(e) {
  e.preventDefault();

  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const year = document.querySelector("#year").value;

  const template = document.querySelector("template");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".author").textContent = author;
  clone.querySelector(".title").textContent = title;
  clone.querySelector(".year").textContent = year;

  document.querySelector("table").appendChild(clone);

  document.querySelector("#author").value = "";
  document.querySelector("#title").value = "";
  document.querySelector("#year").value = "";
}

function deleteCd(e) {
  if (e.target.classList.contains("delete")) {
    const row = e.target.closest("tr");
    row.remove();
  }
}
