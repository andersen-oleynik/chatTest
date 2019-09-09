export default class SocketApi {
  constructor(url) {
    this.socketInstance = io(url);
  }

  sendMessage = (username, message) => {
    this.socketInstance.emit("message", {
      message: message,
      user: username
    });
  };

  addEventListener = (eventType, callback) => {
    this.socketInstance.on(eventType, callback);
  };
}
