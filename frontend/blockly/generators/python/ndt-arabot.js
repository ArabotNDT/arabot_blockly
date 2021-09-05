/**
 * This work is licensed under the Creative Commons 
 * Attribution-ShareAlike 3.0 Unported License. To 
 * view a copy of this license, 
 * visit http://creativecommons.org/licenses/by-sa/3.0/ 
 * or send a letter to Creative Commons, PO Box 1866, 
 * Mountain View, CA 94042, USA.
*/

/**
 * @fileoverview Blocks for NDT-arabot.
 * @author avelino.forechi@ifes.edu.br (Avelino Forechi)
*/
'use strict';

goog.provide('Blockly.Python.arabot');
goog.require('Blockly.Python');

Blockly.Python['wheel_encoder'] = function(block) {

  var varName = Blockly.Python.valueToCode(block, 'get_distance_var', Blockly.Python.ORDER_ATOMIC);
  var dropdown_motor = block.getFieldValue('motor');
  
  var code = "";
  code += "dropdown_motor = \"" + dropdown_motor.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/arabot/wheel_encoder.py");
  return code + '\n' + varName + "=msg_distance.data \n";

};

Blockly.Python['wheel_velocity'] = function(block) {

  var speed = block.getFieldValue('speed');
  var dropdown_motor = block.getFieldValue('motor');

  var code = "";
  code += "speed = \"" + speed.toString() + "\"\n";
  code += "dropdown_motor = \"" + dropdown_motor.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/arabot/wheel_velocity.py");
  return code;

};
/*
Blockly.Python['turn_left'] = function(block) {

  var seconds = block.getFieldValue('TURN_SECS');
  var dropdown_speed = block.getFieldValue('speed');

  var code = "";
  code += "seconds = \"" + seconds.toString() + "\"\n";
  code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/arabot/turn_left.py");
  return code;

};

Blockly.Python['turn_right'] = function(block) {

  var seconds = block.getFieldValue('TURN_SECS');
  var dropdown_speed = block.getFieldValue('speed');

  var code = "";
  code += "seconds = \"" + seconds.toString() + "\"\n";
  code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/arabot/turn_right.py");
  return code;

};

Blockly.Python['turn_degrees'] = function(block) {
    var degrees = block.getFieldValue('TURN_DEGREES');
    var dropdown_direction = block.getFieldValue('direction');
    var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
    code += "degrees = \"" + degrees.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/arabot/turn_degrees.py");
    return code;

};

Blockly.Python['stop'] = function(block) {
    
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/arabot/stop.py");
    return code;

};
*/