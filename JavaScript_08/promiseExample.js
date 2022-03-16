var users = [
    {
        id: 1,
        name: "Trần Dũng"
    },
    {
        id: 2,
        name: "Sơn Đặng"
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Anh Sơn chưa ra thêm video mới ạ."
    },
    {
        id: 2,
        user_id: 2,
        content: "Vừa ra xong em ơi."
    },
    {
        id: 3,
        user_id: 1,
        content: "Em cảm ơn anh ❤️"
    }
]

//1, Lấy ra comments
//2, Từ comments lấy ra user_id
//3, Từ user_id lấy ra user

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000)
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        })
        setTimeout(function () {
            resolve(result);
        }, 1000)
    })
}


//promise hell
getComments()
    .then(function (comments) {
        var usersIds = comments.map(function (comment) {
            return comment.user_id;
        })
        return getUsersByIds(usersIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function (data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            })
            // console.log(user);
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = html;
        console.log(data)
    })

