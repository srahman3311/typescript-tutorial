const getTodos: Function = (): void => {

    const xhr: XMLHttpRequest = new XMLHttpRequest();

    // onload method is only called when request has successfully been sent and response received
    xhr.onload = () => {

        // To handle error we need to check the status code. if it's more than or equal to 200 and less 
        // 300 then we have an ok response. Otherwise, alert an error message
        if(xhr.status >= 200 && xhr.status < 300) {

            type Todo = {userId: number, id: number, title: string, completed: boolean}
            
            // xhr.response contains the response data in json format. We need to parse it
            const data: Todo [] = JSON.parse(xhr.response);

            data.forEach((item: Todo) => {
                
                const div: HTMLDivElement = document.createElement("div");
                const blogListItem: HTMLLIElement = document.createElement("li");

                div.innerHTML = `<h2>${item.title}</h2>`;
                blogListItem.appendChild(div);
                blogList.appendChild(blogListItem);

            })
        } else { // Else. an error has been sent from server, display it
            alert("Something went wrong");
        }
    }
    
    // Third parameter is true means request should be sent asynchronously. 
    xhr.open('get', 'https://jsonplaceholder.typicode.com/todos', true);
    xhr.send();
}

getTodos();