import ChatClient from "./ChatClient.js";
import SocketApi from "./SocketApi.js";
import { SOCKET_SERVER_URL } from "./config.js";

const socketApi = new SocketApi(SOCKET_SERVER_URL);
const chat = new ChatClient(socketApi);

socketApi.addEventListener("message", ({ message, user }) =>
  chat.addMessageToList(user, message)
);
