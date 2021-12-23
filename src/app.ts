const anchor: HTMLAnchorElement = document.querySelector("a")!;
const anchor2 = document.querySelector("a") as HTMLAnchorElement;


console.log(anchor.href);
console.log(anchor2.href);






const blogForm = document.querySelector(".blog_form") as HTMLFormElement;
const blogTitle = document.querySelector("#blog_title") as HTMLInputElement;
const blogContent = document.querySelector("#blog_content") as HTMLTextAreaElement;


const blogList = document.querySelector(".blog_list") as HTMLUListElement;

blogForm.addEventListener("submit", (event: Event) => {

    event.preventDefault();
    console.log(blogTitle.value, blogContent.value);

    const blogListItem: HTMLLIElement = document.createElement("li");
    const div: HTMLDivElement = document.createElement("div");

    div.innerHTML = `
    <h2>${blogTitle.value}</h2>
    <p>${blogContent.value}</p>
    <img src = "./images/DSC06018.jpg" alt="ABC" />
    `;

    blogListItem.appendChild(div);
    blogList.appendChild(blogListItem);

})


