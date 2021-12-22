const blogForm = document.querySelector(".blog_form") as HTMLFormElement;
const blogTitle = document.querySelector("#blog_title") as HTMLInputElement;
const blogContent = document.querySelector("#blog_content") as HTMLInputElement;
const blogFormSubmitButton = document.querySelector("#blog_form_button") as HTMLButtonElement;

const blogList = document.querySelector(".blog_list") as HTMLUListElement;

blogForm.addEventListener("submit", (event: Event) => {

    event.preventDefault();

    console.log(blogTitle.value, blogContent.value);

    const blogListItem: HTMLLIElement = document.createElement("li");
    const div: HTMLDivElement = document.createElement("div");
    const blogTitleElement: HTMLParagraphElement = document.createElement("p");
    const blogContentElement: HTMLParagraphElement = document.createElement("p");

    blogTitleElement.textContent = blogTitle.value;
    blogContent.textContent = blogContent.value;

    div.appendChild(blogTitleElement);
    div.appendChild(blogContentElement);
    blogListItem.appendChild(div);
    blogList.appendChild(blogListItem);


})