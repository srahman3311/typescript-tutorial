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


const getTodos: Function = (): void => {

    const xhr = new XMLHttpRequest();

    xhr.onload = () => {

        type Todo = {userId: number, id: number, title: string, completed: boolean}
        
        const data: Todo [] = JSON.parse(xhr.response);

        data.forEach((item: Todo) => {
            
            const div: HTMLDivElement = document.createElement("div");
            const blogListItem: HTMLLIElement = document.createElement("li");

            div.innerHTML = `<h2>${item.title}</h2>`;
            blogListItem.appendChild(div);
            blogList.appendChild(blogListItem);

        })
    }
    
    xhr.open('get', 'https://jsonplaceholder.typicode.com/todos', true);
    xhr.send();
}

getTodos();