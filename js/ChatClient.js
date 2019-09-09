class ChatClient {
  constructor(dispatchMessage) {
    this.messagesList = document.getElementById("chat-messages");
    this.messageForm = document.getElementById("chat-form");

    this.usernameInput = document.getElementById("chat-input-name");
    this.messageInput = document.getElementById("chat-input-message");

    this.sendMsgButton = document.getElementById("chat-send-btn");

    this.messageForm.addEventListener("submit", e => e.preventDefault(), false);
    this.sendMsgButton.addEventListener("click", this.sendMessage);
    this.dispatchMessage = dispatchMessage;
  }

  sendMessage = () => {
    const message = this.messageInput.value;
    const username = this.usernameInput.value;
    if (username && message) {
      this.dispatchMessage(username, message);
      this.clearMessageInput();
    } else {
      this.messageInput.focus();
    }
  };

  addMessageToList = (user, message) => {
    const messageNode = document.createElement("div");
    const fromCurrentUser = user === this.usernameInput.value;
    messageNode.textContent = `${user}: ${message}`;
    messageNode.classList.add(`chat-message${fromCurrentUser && "-my"}`);
    this.messagesList.appendChild(messageNode);
    this.scrollToLastMessage();
  };

  clearMessageInput = () => (this.messageInput.value = "");

  scrollToLastMessage = () => {
    this.messagesList.scrollTop = this.messagesList.scrollHeight;
  };
}

export default ChatClient;
