class img {
  static bg () { 
    return {
  width : 80, height : 80, bpp : 8,
  buffer : require("heatshrink").decompress(atob("nYA/AH4A/AH4A/AH4Aa6YACIf5NNKP5OSKGXXAAROZKF5NDKKBOLKFhNHKJxP1JhZQMJxoaHYh5OSjIADJ7ocIYZ5ORJogACihQPJA5NJOaIAQJo5PCKA5PLJKBPdJI4EEKBAuHJzBRXJw4AIJ9JQTdBBSJeJxPaKCJOHUBZQFERBQqJoxMMJ6BObJ5pOHJ55QEJ0hPMJQ5PHK5IpKJzpPPIA5XMKApPwToqiNKBTuzJIhKEKB5PlJxZPIeBIHDKBBPcCwpOMJ4Q9JAAwPKExCXgJ5RBMABonJIZBNcJ5QIDK6AoKIhJNaJ4pTFJg5ULGzBPhd7xPoSYxTFvN5J/7lIKAZOBKBpOxKAbxDeghODKBhP1d4gAD4xPOJ2bxJJ6BO1KASiGjPGKAhO/URJPMJ3QAGJ5hM/AAZPFKAZJ/J5hG/JxgDCI/6eOKH5PJTwpP/J5hO/ABZOGKH7v/JzBP/J6ROEJ5cUAHJPJCxkZAexOBJ5F5C5ae8J4yhJKIIB4TxKhEAIqf/J46f/ToJPET6KiDAeROCT6JOEAOpJJJxZsDUOxKKJopSFT+5QFJZjw9AIoANCIRO/ACBQ/J35Q/KF0ZAAID/Khqf/U5yd/AZKf/UKpZCAH4AIT/6hTSf6hQSf4BOAH6hQAP6f/UMQD/AZoA/Tv6d/AH4A/AH4ANA=="))
};}
  static star() { 
    return {
  width : 8, height : 8, bpp : 8,
  buffer : require("heatshrink").decompress(atob("oIAKx4GGAAIFFAAYIGC5IGCAQYtFAYI="))
};}
  static menuFrame() { 
    return {
  width : 66, height : 70, bpp : 8,
  transparent : 254,
  buffer : require("heatshrink").decompress(atob("/wAFlgACAggATEYwAdlmz2YqCAgQCBAAQNEAxJBnHohJFBI5BvPowxCBoxBolYACOIh2HZw5BHEAYAWIAvWAAQ5FHAo6JBogFBEAYAWIQZABEwouCAgYAScAwAVIQJAD1gA4HYTJBIIIECAG48EAgbMCAGhB/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B/IP5B3AHBBG2fWAHA7BYAUrAoIA6IARBBoOsAHRACIQQA7H4Q"))
};}
  static logo() {
    return {
  width : 51, height : 41, bpp : 8,
  transparent : 254,
  buffer : require("heatshrink").decompress(atob("/wAOlgQPAD0sAAPXGdYvDAAYzmFwQvF6+2GYQAODwoGGGBAuFF4IADBYwAJPo4GEGYpfHAAwyQIBwxGFw4zFBphDDAxQzDGIQiPGSwMGGSCiLCRgDFTAgyLVwwyYMgoyIcJQPJGRjLQERAyZAwoylCxgyKDaAyMS5T+NGRQ8OFQIGGGIIynRwgxFGTYPFRgYABFIYGFGRpbLCBYpFABD+KGX6eKGTQJFGVQADGRz+IGTKYMCBTLnGUK6KFA4yxMq4xQGWQoICJSYeGU6EIBJIyIGKAzEGJIylGYofJehBCHGKpRKGRIAGGKjoMGRxCBGMAyKFoIACGCAzMQYoyKFyYzLWo4yjEgjnKBwT2WGZrnLGYoxcEgbnMe7AzMED4AL"))};}
}

class beep {
  static select () {
    //b = Bangle.beep(20,880).then(()=>Bangle.beep(50,1200));
  }
  static move() {
    //b = Bangle.beep(20,440);
  }
  static deny() {
    //b = Bangle.beep(20,440).then(()=>Bangle.beep(50,220));
  }
}

const FRAMERATE = 20;
const DT = 1000/FRAMERATE;

function redraw(){
  Bangle.setLCDMode("80x80");
  setInterval(gameLoop, DT);
}

// Graphic Resources
let bg = null;
let logo = null;
let menuBG = null;
let menuFrame = null;

// Menu Items
let menuItems = [];
let menuIdx = -1;

const states = {
/* State template (copypaste this)
  SOMESTATE : {
    begin: () => {},
    end: () => {},
    update: () => {},
    onB1: () => {},
    onB3: () => {},
    onB2: () => {}
  },
*/
  STARTMENU : {
    begin: () => {
      g.setColor(-1);
      bg = img.bg();
      logo = img.logo();
    },
    end: () => {
    bg = null;
    logo = null;
    },
    update: () => {
      let s = Math.sin(time * 3);
      g.drawImage(bg,0,0);
      g.drawImage(logo, 16, Math.abs(s) * -4 + 12);
      g.setFont("6x8",1);
      g.setFontAlign(0,0,0);
      g.drawString("2021 peeweek", 40, 72);
      g.drawString("PRESS BTN2", 40, 56);
      g.flip();
    },
    onB1: () => {},
    onB3: () => {},
    onB2: () => {
      beep.select();
      setState(states.GAMEMENU);
    }
  },
  GAME : {
    begin: () => {},
    end: () => {},
    update: () => {},
    onB1: () => {},
    onB3: () => {},
    onB2: () => {}
  },
  GAMEMENU : {
    begin: () => {
      g.setColor(0.1,0.9,1.0);
      g.fillRect(0,0,80,80);
      menuBG = img.star();
      menuFrame = img.menuFrame();
      menuItems = [
        { name: "EGG", func: () => {} },
        { name: "PET", func: () => {} },
        { name: "FEED", func: () => {} },
        { name: "PLAY", func: () => {} },
        { name: "HIKE", func: () => {} },
        { name: "RETURN", func: () => {setState(states.STARTMENU);} },
      ];
    },
    end: () => {
      menuBG = null;
      menuFrame = null;
    },
    update: () => {
      let f = frame%20;
      // Draw BG
      for(let i = 0; i<25; i+=2)
      {
        g.drawImage(menuBG, (i%5 -1)*20 + f, Math.floor(i/5 -1)*20 + f);
      }
      g.setColor(0.1,0.1,0.1);
      g.fillRect(12,12,68,68);
      g.drawImage(menuFrame, 8,4);
      menuDraw();
      g.flip();
    },
    onB1: () => {menuUp();},
    onB3: () => {menuDown();},
    onB2: () => {menuSelect();}
  }
};

function menuDraw() {
  if(menuItems == null)
    return;
  let len = menuItems.length;
  menuIdx = clamp(menuIdx, 0, len-1);
  
  for(let i = 0; i < len; i++)
  {
    if(i == menuIdx){
      g.setColor(0.9,0.6,0.1);
      g.fillRect(14,14+(i*9), 67, 22+(i*9));
    }
    g.setFontAlign(-1,-1,0);
    
    g.setColor(0,0,0);
    g.drawString(menuItems[i].name, 16, 15+(i*9));
    g.setColor(-1);
    g.drawString(menuItems[i].name, 16, 14+(i*9));
  }
}

function menuUp() {
  beep.move();
  menuIdx --;
}

function menuDown() {
  beep.move();
  menuIdx ++;
}

function menuSelect() {
  beep.select();
  menuItems[menuIdx].func();
}

///////////////////////////////////////
// STATE MACHINES

let state = null;

function setState(newState){
  if(newState == null)
    return;
  
  if(state != null)
    state.end();
  
  state = newState;
  state.begin();
  
}  

//////////////////////////////////////
// UTILITIES

function clamp(value, min, max)
{
  return Math.min(Math.max(value, min),max);
}

//////////////////////////////////////
// GAME LOOP

let frame = 0;
let time = 0;

function gameLoop() {
  frame++;
  time = frame * (DT / 1000.0);
  state.update();
}

function onB1(){
  state.onB1();
}

function onB2(){
  state.onB2();
}

function onB3(){
  state.onB3();
}

// Initialize
g.clear();
setState(states.STARTMENU);
redraw();

// Handle Button Press
setWatch(onB1, BTN1, true);
setWatch(onB2, BTN2, true);
setWatch(onB3, BTN3, true);

// Handle redraw on LCD on
Bangle.on('lcdPower', (on) => { if(on) redraw(); });
