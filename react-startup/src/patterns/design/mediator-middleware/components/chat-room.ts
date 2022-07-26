export class ChatRoom {
    logMessage(user: User, message: string) {
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} [${sender}]: ${message}`);
    }
}

export class User {
    name: any;
    chatRoom: ChatRoom;

    constructor(name: string, chatRoom: ChatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
    }

    getName() {
        return this.name;
    }

    send(message: string) {
        this.chatRoom.logMessage(this, message);
    }
}