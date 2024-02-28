const socket = io("/");

$(function () {
    $("#send").click(function () {
        if ($("#chat_message").val().length !== 0) {
            socket.emit("message", $("#chat_message").val());
            $("#chat_message").val("");
        }
    })

    $("#chat_message").keydown(function (e) {
        if (e.key == "Enter" && $("#chat_message").val().length !== 0) {
            socket.emit("message", $("#chat_message").val());
            $("#chat_message").val("");
        }
    })
})

socket.on("createMessage", (message,userName) => {
    $(".messages").append(`
        <div class="message">
        <b>
            <i class="far fa-user-circle"></i>
            <span>${userName==user?"me":userName}</span>
        </b>
            <span>${message}</span>
        </div>
    `)
});