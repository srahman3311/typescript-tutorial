"use strict";
const blogForm = document.querySelector(".blog_form");
const blogTitle = document.querySelector("#blog_title");
const blogContent = document.querySelector("#blog_content");
const blogList = document.querySelector(".blog_list");
blogForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(blogTitle.value, blogContent.value);
    const blogListItem = document.createElement("li");
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>${blogTitle.value}</h2>
    <p>${blogContent.value}</p>
    <img src = "./images/DSC06018.jpg" alt="ABC" />
    `;
    blogListItem.appendChild(div);
    blogList.appendChild(blogListItem);
});
