function addComment() {
    var name = document.getElementById("comment-name").value;
    var content = document.getElementById("comment-content").value;

    if (name.trim() !== "" && content.trim() !== "") {
        var comment = document.createElement("div");
        comment.classList.add("comment");

        var author = document.createElement("p");
        author.classList.add("comment-author");
        author.textContent = name + ":";

        var text = document.createElement("p");
        text.classList.add("comment-content");
        text.textContent = content;

        comment.appendChild(author);
        comment.appendChild(text);

        document.getElementById("comment-list").appendChild(comment);

        // Limpar os campos do formulário
        document.getElementById("comment-name").value = "";
        document.getElementById("comment-content").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}