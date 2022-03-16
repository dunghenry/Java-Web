const courseAPI = "http://localhost:3000/courses";

function start() {
    //C1
    // getCourses(function (courses) {
    //     renderCourses(courses);
    // })

    //C2
    getCourses(renderCourses); //render courses
    handleCreateCourse();
}

////!Start app
start();

//!Get courses
function getCourses(callback) {
    fetch(courseAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

//!Create course
function createCourse(data, callback) {
    var options = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(courseAPI, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

//!Delete course
function handleDeleteCourse(id) {
    var options = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "content-type": "application/json",
        },
    };
    fetch(courseAPI + `/${id}`, options)
        .then(function (response) {
            response.json();
        })
        .then(function () {
            //C1
            // getCourses(renderCourses); //Tranh goi lai api nhieu lan

            //C2
            var courseItem = document.querySelector(`.course-item-${id}`);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

//!Update course

function updateCourse(id, data, callback) {
    var options = {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(courseAPI + `/${id}`, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

function handleUpdateCourse(id) {
    var createBtn = document.querySelector("#create");
    if (createBtn) {
        createBtn.style.display = 'none';
    }

    var boxBtn = document.querySelector("#box-btn");
    const btn = document.createElement("button");
    btn.innerText = "Save course";
    boxBtn.appendChild(btn);

    var saveBtn = document.querySelectorAll("button");
    saveBtn[2].remove();

    fetch(courseAPI + `/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.querySelector('input[name="name"]').value = data.name;
            document.querySelector('input[name="image"]').value = data.image;
            document.querySelector('input[name="description"]').value =
                data.description;
        });

    saveBtn[1].onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var image = document.querySelector('input[name="image"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var data = {
            name: name,
            image: image,
            description: description,
        };
        // console.log(data);
        updateCourse(id, data, function () {
            getCourses(renderCourses);
        });

        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="image"]').value = "";
        document.querySelector('input[name="description"]').value = "";
        saveBtn[1].remove();
        createBtn.style.display = 'block';
    };
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <img src=${course.image} alt=${course.name}>
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Delete course</button>
                <br>
                <br>
                <button onclick="handleUpdateCourse(${course.id})">Update course</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateCourse() {
    var btn = document.querySelector("#create");
    btn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var image = document.querySelector('input[name="image"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var data = {
            name: name,
            image: image,
            description: description,
        };
        if(name === '' || image === '' || description === ''){
            alert('Dữ liệu không được để trống');
        }
        else{
            createCourse(data, function () {
                getCourses(renderCourses);
            });
        }
    
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="image"]').value = "";
        document.querySelector('input[name="description"]').value = "";
    };
}
