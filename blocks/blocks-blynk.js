Blockly.Blocks['blynk_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk begin")
        .appendField(new Blockly.FieldTextInput("-auth token-"), "auth");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("start using blynk with token provided");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_begin_wifi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk begin")
        .appendField(new Blockly.FieldTextInput("-auth token-"), "auth")
        .appendField("ssid")
        .appendField(new Blockly.FieldTextInput(""), "ssid")
        .appendField("password")
        .appendField(new Blockly.FieldTextInput(""), "password");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("start using blynk and connect wifi");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_begin_wifi_local_server'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk begin (private server)")
        .appendField(new Blockly.FieldTextInput("-auth token-"), "auth")
        .appendField("ssid")
        .appendField(new Blockly.FieldTextInput(""), "ssid")
        .appendField("password")
        .appendField(new Blockly.FieldTextInput(""), "password")
        .appendField("host")
        .appendField(new Blockly.FieldTextInput(""), "host")
        .appendField("port")
        .appendField(new Blockly.FieldNumber(8080, 1, 99999), "port");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("start using private blynk server and connect wifi");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk run");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("run blynk (put inside loop)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk on Virtual Pin")
        .appendField(new Blockly.FieldDropdown([
          ["V0","V0"], ["V1","V1"], ["V2","V2"],["V3","V3"], ["V4","V4"], ["V5","V5"],["V6","V6"], ["V7","V7"], ["V8","V8"], ["V9","V9"],["V10","V10"],
          ["V11","V11"], ["V12","V12"],["V13","V13"], ["V14","V14"], ["V15","V15"],["V16","V16"], ["V17","V17"], ["V18","V18"], ["V19","V19"], ["V20","V20"],
          ["V21","V21"], ["V22","V22"],["V23","V23"], ["V24","V24"], ["V25","V25"],["V26","V26"], ["V27","V27"], ["V28","V28"], ["V29","V29"], ["V30","V30"],
          ["V31","V31"], ["V32","V32"],["V33","V33"], ["V34","V34"], ["V35","V35"],["V36","V36"], ["V37","V37"], ["V38","V38"], ["V39","V39"], ["V40","V40"],
          ["V41","V41"], ["V42","V42"],["V43","V43"], ["V44","V44"], ["V45","V45"],["V46","V46"], ["V47","V47"], ["V48","V48"], ["V49","V49"], ["V50","V50"]
        ]), "vpin")
        .appendField("data received");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setColour(315);
 this.setTooltip("Call when client write virtual pin (aka BLYNK_WRITE)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_param_int'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk get received integer data");
    this.setOutput(true, ["int", "Number"]);
    this.setColour(315);
 this.setTooltip("use this block inside on data received to get the params");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_param_double'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk get received decimal data");
    this.setOutput(true, ["double", "Number"]);
    this.setColour(315);
 this.setTooltip("use this block inside on data received to get the params");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_param_str'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk get received string data");
    this.setOutput(true, "String");
    this.setColour(315);
 this.setTooltip("use this block inside on data received to get the params");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_push_data'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(["Boolean", "String", "Number"])
        .appendField("Blynk write Virtual Pin")
        .appendField(new Blockly.FieldDropdown([
          ["V0","V0"], ["V1","V1"], ["V2","V2"],["V3","V3"], ["V4","V4"], ["V5","V5"],["V6","V6"], ["V7","V7"], ["V8","V8"], ["V9","V9"],["V10","V10"],
          ["V11","V11"], ["V12","V12"],["V13","V13"], ["V14","V14"], ["V15","V15"],["V16","V16"], ["V17","V17"], ["V18","V18"], ["V19","V19"], ["V20","V20"],
          ["V21","V21"], ["V22","V22"],["V23","V23"], ["V24","V24"], ["V25","V25"],["V26","V26"], ["V27","V27"], ["V28","V28"], ["V29","V29"], ["V30","V30"],
          ["V31","V31"], ["V32","V32"],["V33","V33"], ["V34","V34"], ["V35","V35"],["V36","V36"], ["V37","V37"], ["V38","V38"], ["V39","V39"], ["V40","V40"],
          ["V41","V41"], ["V42","V42"],["V43","V43"], ["V44","V44"], ["V45","V45"],["V46","V46"], ["V47","V47"], ["V48","V48"], ["V49","V49"], ["V50","V50"]
        ]), "vpin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("write data to virtual pin (please delay >100 ms between call)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blynk_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk on Virtual Pin")
        .appendField(new Blockly.FieldDropdown([
          ["V0","V0"], ["V1","V1"], ["V2","V2"],["V3","V3"], ["V4","V4"], ["V5","V5"],["V6","V6"], ["V7","V7"], ["V8","V8"], ["V9","V9"],["V10","V10"],
          ["V11","V11"], ["V12","V12"],["V13","V13"], ["V14","V14"], ["V15","V15"],["V16","V16"], ["V17","V17"], ["V18","V18"], ["V19","V19"], ["V20","V20"],
          ["V21","V21"], ["V22","V22"],["V23","V23"], ["V24","V24"], ["V25","V25"],["V26","V26"], ["V27","V27"], ["V28","V28"], ["V29","V29"], ["V30","V30"],
          ["V31","V31"], ["V32","V32"],["V33","V33"], ["V34","V34"], ["V35","V35"],["V36","V36"], ["V37","V37"], ["V38","V38"], ["V39","V39"], ["V40","V40"],
          ["V41","V41"], ["V42","V42"],["V43","V43"], ["V44","V44"], ["V45","V45"],["V46","V46"], ["V47","V47"], ["V48","V48"], ["V49","V49"], ["V50","V50"]
        ]), "vpin")
        .appendField("data request");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setColour(315);
 this.setTooltip("Call when client request data on virtual pin (aka BLYNK_READ)");
 this.setHelpUrl("");
  }
};