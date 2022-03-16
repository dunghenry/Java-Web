//Get data
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(function (response){
        return response.json();
    })
    .then(function (posts) {
        var htmls = posts.map(function (post){
            return `
                <li>
                    <h2>${post.title}</h2>
                    <hp>${post.body}</hp>
                </li>
            `
        })
        var html = htmls.join('');
        document.getElementById('comment-block').innerHTML = html;
        console.log(htmls);
    });

//data initial
const data = {
    title: "Công việc 1",
    isCompleted: true,
};

// post data function
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

// post data to the backend
// postData("https://todos-app-2021.herokuapp.com/api/v1/add", data)
//     .then(data => console.log(data));
