Blockly.JavaScript['blynk_begin'] = function(block) {
  var text_auth = block.getFieldValue('auth');
  var code = `
#EXTINC
#define BLYNK_PRINT Serial
#END
#EXTINC
#include <WiFi.h>
#END
#EXTINC
#include <WiFiClient.h>
#END
#EXTINC
#include <BlynkSimpleEsp32.h>
#END
Blynk.begin("${text_auth}");
`;
  return code;
};

Blockly.JavaScript['blynk_begin_wifi'] = function(block) {
  var text_auth = block.getFieldValue('auth');
  var text_ssid = block.getFieldValue('ssid');
  var text_password = block.getFieldValue('password');
  var code = `
#EXTINC
#define BLYNK_PRINT Serial
#END
#EXTINC
#include <WiFi.h>
#END
#EXTINC
#include <WiFiClient.h>
#END
#EXTINC
#include <BlynkSimpleEsp32.h>
#END
Blynk.begin("${text_auth}","${text_ssid}","${text_password}");
`;
  return code;
};

Blockly.JavaScript['blynk_begin_wifi_local_server'] = function(block) {
  var text_auth = block.getFieldValue('auth');
  var text_ssid = block.getFieldValue('ssid');
  var text_password = block.getFieldValue('password');
  var text_host = block.getFieldValue('host');
  var number_port = block.getFieldValue('port');
  var code = `
#EXTINC
#define BLYNK_PRINT Serial
#END
#EXTINC
#include <WiFi.h>
#END
#EXTINC
#include <WiFiClient.h>
#END
#EXTINC
#include <BlynkSimpleEsp32.h>
#END
Blynk.begin("${text_auth}","${text_ssid}","${text_password}","${text_host}",${number_port});
`;
  return code;
};

Blockly.JavaScript['blynk_run'] = function(block) {
  var code = `Blynk.run();\n`;
  return code;
};

Blockly.JavaScript['blynk_write'] = function(block) {
  var dropdown_vpin = block.getFieldValue('vpin');
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = `
#FUNCTION
BLYNK_WRITE(${dropdown_vpin})
{
  ${statements_statement}
}
#END
`;
  return code;
};

Blockly.JavaScript['blynk_param_int'] = function(block) {
  var code = `param.asInt()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['blynk_param_double'] = function(block) {
  var code = `param.asDouble()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['blynk_param_str'] = function(block) {
  var code = `param.asStr()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blynk_push_data'] = function(block) {
  var dropdown_vpin = block.getFieldValue('vpin');
  var value_name = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Blynk.virtualWrite(${dropdown_vpin},${value_name});\n`;
  return code;
};

Blockly.JavaScript['blynk_read'] = function(block) {
  var dropdown_vpin = block.getFieldValue('vpin');
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = `
#FUNCTION
BLYNK_READ(${dropdown_vpin})
{
  ${statements_statement}
}
#END
`;
  return code;
};