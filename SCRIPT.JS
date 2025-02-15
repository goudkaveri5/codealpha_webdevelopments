// Logout function
function logout() {
    alert("You have been logged out!");
    window.location.href = "login.html"; // Redirect to login page
}

// Edit Profile function
function editProfile() {
    let newName = prompt("Enter your new username:");
    if (newName && newName.trim() !== "") {
        document.getElementById("username").textContent = newName;
    } else {
        alert("Username cannot be empty!");
    }
}

// Accept Friend Request
function acceptRequest(button) {
    let friendName = button.parentElement.querySelector("p").textContent;
    let friendsList = document.querySelector(".friends-list");

    if (friendsList.innerHTML.includes("No friends added yet.")) {
        friendsList.innerHTML = ""; // Clear placeholder text
    }

    friendsList.innerHTML += <p>${friendName} ✔</p>;
    button.parentElement.remove();
}

// Decline Friend Request
function declineRequest(button) {
    button.parentElement.remove();
}

// Create Post Function
function createPost() {
    let postContent = document.getElementById("postContent").value;
    if (postContent.trim() === "") {
        alert("Post cannot be empty!");
        return;
    }

    let postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <p>${postContent}</p>
        <button class="like-btn" onclick="likePost(this)">👍 Like</button>
        <span class="like-count">0</span> Likes
        <div class="comment-section">
            <input type="text" placeholder="Write a comment..." class="comment-input">
            <button class="comment-btn" onclick="addComment(this)">💬 Comment</button>
            <div class="comments"></div>
        </div>
    `;

    document.getElementById("posts").prepend(postDiv);
    document.getElementById("postContent").value = "";
}

// Like Post Function
function likePost(button) {
    let likeCountSpan = button.nextElementSibling;
    let likes = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = likes + 1;
}

// Add Comment Function
function addComment(button) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();
    if (commentText === "") {
        alert("Comment cannot be empty!");
        return;
    }

    let commentsDiv = button.nextElementSibling;
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = <p>${commentText}</p>;
    commentsDiv.appendChild(commentDiv);

    commentInput.value = "";
}