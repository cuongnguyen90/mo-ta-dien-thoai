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

        return this.inboxMessage;
    }

    this.createMessage = function (mess) {
        this.newMessage = mess;
    }

    this.sendMessage = function () {

        //return this.newMessage;

        this.sentMessage.push(this.newMessage);


    }

    this.reviceMessage = function (mess) {

        this.inboxMessage.push(mess);

        return this.inboxMessage;
    }

}

function init() { //Khoi tao
    initIphone();
    initNokia()
}


// Iphone Init
let iphone = new MOBILE();
iphone.status = STATUS;
let pinIphone = new ENERGY();
pinIphone.setPower(POWER);
iphone.setPower(pinIphone);

// Nokia Init
let nokia = new MOBILE();
nokia.setPower(POWER);
nokia.status = STATUS;
let pinNokia = new ENERGY();
pinNokia.setPower(POWER);
nokia.setPower(pinNokia);



// IPHONE

function initIphone(){

        document.getElementById('iphone').innerHTML =
            "<div class=\"mobile1\">\n" +
            "<p id=\'pin_iphone\'>"+iphone.getBatteryInfo()+"<\/p>" +
            "<textarea name=\"\" id=\"display1\" cols=\"30\" rows=\"10\"></textarea>\n" +
            "            <input type=\"button\" onclick=\'sendMessenger()\'  value=\"SEND\">\n" +
            "            <input type=\"button\" value=\"CHECK INBOX\">\n" +
            "            <label class=\"switch\">\n" +
            "                <input id=\'on_off\' onclick=\'switchOnOff()\'  type=\"checkbox\" checked>\n" +
            "                <span class=\"slider round\"></span>\n" +
            "            </label>\n" +
            "        </div>"





}
function switchOnOff() {

    check = document.getElementById('on_off').checked;

    if (check){
        iphone.turnOn();

        console.log(iphone.checkStatusMobile());
    }else{
        iphone.turnOff();
        console.log(iphone.checkStatusMobile());
    }

}
function sendMessenger() {
    let new_mess = document.getElementById('display1').value;
    iphone.createMessage(new_mess);
    iphone.sendMessage();
    nokia.reviceMessage(new_mess);
    pinIphone.descrasePower();
    document.getElementById('display1').value = "";
    document.getElementById('pin_iphone').innerText = iphone.getBatteryInfo();

}

function checkInBox() {
    document.getElementById('display2').innerHTML = "";
    mess = nokia.showInbox();
    show = "";
    for (i = 0;i < mess.length;i++){
       show+= mess[i]+"\n";
    }
    document.getElementById('display2').innerHTML = show;
    pinNokia.descrasePower();
    document.getElementById('pin_nokia').innerText = nokia.getBatteryInfo();
}



//NOKIA


function initNokia() {


        document.getElementById('nokia').innerHTML =
            "<div class=\"mobile2\">\n" +
            "<p id=\'pin_nokia\'>"+nokia.getBatteryInfo()+"<\/p>" +
            "<textarea name=\"\" id=\"display2\" cols=\"30\" rows=\"10\"></textarea>\n" +
            "        <input type=\"button\" value=\"SEND\">\n" +
            "        <input type=\"button\" onclick=\'checkInBox()\' value=\"CHECK INBOX\">\n" +
            "\n" +
            "        <label class=\"switch\">\n" +
            "            <input type=\"checkbox\" checked>\n" +
            "            <span class=\"slider round\"></span>\n" +
            "        </label>\n" +
            "    </div>"

}


