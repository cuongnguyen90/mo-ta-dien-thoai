const POWER = 100;
const STATUS = true;

let ENERGY = function () {
    this.setPower = function (enegry) {
        this.power = enegry;
    }
    this.getPower = function () {
        return this.power;
    }

    this.getCharge = function () {

        if (this.power < POWER){
            this.power++;
        }
    }

    this.descrasePower = function () {
        if (this.power > 0){
            this.power--;
        }
    }
}

let MOBILE = function () {

    this.newMessage = undefined;
    this.inboxMessage = new Array();
    this.sentMessage = new Array();

    this.setPower = function (power) {
        this.pin = power;
    }

    this.getBatteryInfo = function () {
        return this.pin.getPower();
    }

    this.turnOff = function () {
        return this.status = false;
    }
    this.turnOn = function () {
        return this.status = true;
    }

    this.chargeMobile = function () {
        this.getBatteryInfo++;
    }
    this.checkStatusMobile = function () {
        if (this.status){
            return " This mobile is online !"
        }else {
            return "This mobile is offline !"
        }
    }
    this.showInbox = function () {
        mess =""
        for (i = 0;i <= inboxMessage.length;i++){
            mess+=inboxMessage[i];
        }
        return mess;
    }

    this.createMessage = function (mess) {
        this.newMessage = mess;
    }

    this.sendMessage = function () {

        return this.newMessage;
        this.sentMessage.push(this.newMessage);

    }

    this.reviceMessage = function (mess) {

        this.inboxMessage.push(mess);

        return this.inboxMessage;
    }

}


// IPHONE
function init() {
    initIphone();
    initNokia()
}


function initIphone(){
        let iphone = new MOBILE();
        iphone.setPower(POWER);
        iphone.status = STATUS;
        document.getElementById('iphone').innerHTML =
            "<div class=\"mobile1\">\n" +
            "            <textarea name=\"\" id=\"display1\" cols=\"30\" rows=\"10\"></textarea>\n" +
            "            <input type=\"button\" onclick=\'sendMessenger()\'  value=\"SEND\">\n" +
            "            <input type=\"button\" value=\"CHECK INBOX\">\n" +
            "            <label class=\"switch\">\n" +
            "                <input id=\'on_off\' onclick=\'switchOnOff()\'  type=\"checkbox\" checked>\n" +
            "                <span class=\"slider round\"></span>\n" +
            "            </label>\n" +
            "        </div>"





}
function switchOnOff() {
    let iphone = new MOBILE();
    check = document.getElementById('on_off').checked;

    if (check){
        iphone.turnOn();

        console.log(iphone.status);
    }else{
        iphone.turnOff();
        console.log(iphone.status);
    }

}
function sendMessenger() {
    new_mess = document.getElementById('display1').value;


}





//NOKIA

function initNokia() {
        let nokia = new MOBILE();
        nokia.setPower(POWER);
        nokia.status = STATUS;

        document.getElementById('nokia').innerHTML =
            "<div class=\"mobile2\">\n" +
            "        <textarea name=\"\" id=\"display2\" cols=\"30\" rows=\"10\"></textarea>\n" +
            "        <input type=\"button\" value=\"SEND\">\n" +
            "        <input type=\"button\" value=\"CHECK INBOX\">\n" +
            "\n" +
            "        <label class=\"switch\">\n" +
            "            <input type=\"checkbox\" checked>\n" +
            "            <span class=\"slider round\"></span>\n" +
            "        </label>\n" +
            "    </div>"

}


