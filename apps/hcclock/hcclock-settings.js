(function(back) {
    function gb(j) {
      Bluetooth.println(JSON.stringify(j));
    }
    function settings() {
      let settings = require('Storage').readJSON("hcclock.json", true) || {};
      if (!("inverted" in settings)) {
        settings.inverted = true;
      }
      return settings
    }
    function updateSetting(setting, value) {
      let settings = require('Storage').readJSON("hcclock.json", true) || {};
      settings[setting] = value
      require('Storage').writeJSON('hcclock.json', settings);
    }
    function setScheme(inverted) {
      updateSetting('inverted', visible);
    }
    var hcclockmenu = {
      "" : { "title" : "Gadgetbridge" },
      "Scheme Icon" : {
        value: settings().inverted,
        format: v => v?"White/Black":"Black/White",
        onchange: setScheme
      },
      "< Back" : back,
    };
  
    E.showMenu(hcclockmenu);
  })
  