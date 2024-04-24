class Mobile {
    constructor(battery, draft, inbox, sentMessage, status, phone) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sentMessage = sentMessage;
        this.status = status;
        this.phone = phone;
    }
    isTurnOn() {
        return this.status;
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
    chargeBattery() {
        while (this.battery <= 100) {
            this.battery = this.battery + 0.01;
        }
    }
    writeMessage() {
        this.draft = prompt("Soạn tin nhắn");
        this.battery = this.battery - 0.1;
    }
    receivedMessage(message, mobile) {
        this.inbox.unshift(message + "~" + mobile.phone);
        this.battery = this.battery - 0.1;
    }
    sentMessage(mobile) {
        this.writeMessage();
        this.sentMessage.unshift(this.draft);
        mobile.receivedMessage(this.draft, this);
        this.draft = "";
        this.battery = this.battery - 0.1;
    }
    viewSentMessage() {
        for (let i = 0; i < this.sentMessage.length; i++) {
            
        }
        this.battery = this.battery - 0.1;
    }


}