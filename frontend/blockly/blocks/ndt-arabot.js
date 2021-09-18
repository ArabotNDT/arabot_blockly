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

goog.provide('Blockly.Blocks.arabot');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.arabot.HUE = 260;


Blockly.Blocks['wheel_encoder'] = {
  init: function() {
    this.appendValueInput("get_distance_var")
        .appendField("Odometria")
    this.appendDummyInput()
        .appendField("Roda ")
        .appendField(new Blockly.FieldDropdown([["Esquerda", "left"], ["Direita", "right"]]), "motor")
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['wheel_velocity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Velocidade ")
        .appendField(new Blockly.FieldTextInput("1"), "speed")
        .appendField(" Roda ")
        .appendField(new Blockly.FieldDropdown([["Esquerda", "left"], ["Direita", "right"]]), "motor")
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};
/*
Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn_Left ")
        .appendField(new Blockly.FieldTextInput("1"), "TURN_SECS")
        .appendField("second(s) ")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "speed")
        .appendField("Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn_Right ")
        .appendField(new Blockly.FieldTextInput("1"), "TURN_SECS")
        .appendField("second(s) ")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "speed")
        .appendField("Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['turn_degrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")
        .appendField(new Blockly.FieldTextInput("1"), "TURN_DEGREES")
        .appendField("degree(s)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};
*/
Blockly.Blocks['camera_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Camera ")
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};
