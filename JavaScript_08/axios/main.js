const courseAPI = "http://localhost:3000/courses";

function app() {
    getCourses(renderCourses);
    handleCreateCourse();
}
//Run app
app();

//?Get courses
function getCourses(callback) {
    axios.get(courseAPI)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(callback);
}

//?Create courses
function createCourse(data, callback) {
    axios.post(courseAPI, data)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(callback);
}

//?Handle courses
function handleCreateCourse() {
    var btn = document.querySelector("#create");
    btn.onclick = function () {
        // console.log("succ")
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

//!Delete courses
function handleDeleteCourse(id) {
    axios.delete(courseAPI + `/${id}`)
        .then(function (response) {
            return response.data
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
    axios.put(courseAPI + `/${id}`, data)
        .then(function (response) {
            return response.data;
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

    axios.get(courseAPI + `/${id}`)
        .then(function (response) {
            return response.data;
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
//!Render courses
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