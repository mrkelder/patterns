class ServerMediator {
  static messages = [];

  static addMessage(text) {
    ServerMediator.messages.push(text);
  }

  static pullMessages() {
    return ServerMediator.messages;
  }
}

class ChatUser {
  constructor(userName) {
    this.userName = userName;
  }

  sendMessage(messageText) {
    ServerMediator.addMessage(`${this.userName}: ${messageText}`);
  }
}

const user1 = new ChatUser('George');
const user2 = new ChatUser('Jack');

user1.sendMessage('Does anybody want to throw a party?');
user2.sendMessage('Maybe next weekend?');

console.log(ServerMediator.pullMessages());
