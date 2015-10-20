/**
 * @license
 *
 * Copyright 2015 Erle Robotics
 * http://erlerobotics.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for Erle-Spider.
 * @author victor@erlerobot.com (Víctor Mayoral Vilches)
 */
'use strict';

goog.provide('Blockly.Python.spider');
goog.require('Blockly.Python');

Blockly.Python['spider_standup'] = function(block) {  
	// var code = 'print "standing up..."\n';
	var code = ""
	// code+="import time\n"
	// code+="\n"
	// code+="pub = rospy.Publisher('rosimple', String, queue_size=10)\n"
	// code+="time.sleep(1)\n"
	// code+="pub.publish('Spider spider_standup')\n"

	code+="import sys\n"
	code+="import time\n"
	code+="from crab_msgs.msg import *\n"
	code+="from sensor_msgs.msg import Joy\n"
	code+="\n"	 
	code+="standup_time=20\n"
	code+="walking_time=120\n"
	code+="turning_time=125\n"
	code+="\n"
	code+="################\n"
	code+="## INITIALIZE ##\n"
	code+="################ \n"
	code+="pub = rospy.Publisher('/joy', Joy, queue_size=10)\n"
	code+="msg = Joy()\n"
	code+="msg.header.stamp = rospy.Time.now()\n"
	code+="rate = rospy.Rate(10)\n"
	code+="\n"	 
	code+="valueAxe = 0.0\n"
	code+="valueButton = 0\n"
	code+="for i in range (0, 20):\n"
	code+="	msg.axes.append(valueAxe)\n"
	code+="for e in range (0, 17):\n"
	code+="	msg.buttons.append(valueButton)\n"
	code+="\n"
	code+="time.sleep(1)\n"
	code+="\n"
	code+="####################\n"
	code+="## STAND UP 	  ##\n"
	code+="####################\n"
	code+="msg.buttons[3] = 1\n"
	code+="i=0\n"
	code+="bo=True\n"
	code+="while not rospy.is_shutdown() and bo:\n"
	code+="	i=i+1\n"
	code+="	if (i>standup_time):\n"
	code+=" 	bo=False\n"
	code+="		msg.buttons[3] = 0\n"
	code+="	pub.publish(msg)\n"
	code+="	rate.sleep()\n"
	code+="time.sleep(2)\n"
	
	return code;
};


Blockly.Python['spider_forward'] = function(block) {
  var text_forward_secs = block.getFieldValue('FORWARD_SECS');
  var code = ""
  code+="import time\n"
  code+="\n"
  code+="pub = rospy.Publisher('rosimple', String, queue_size=10)\n"
  code+="time.sleep(1)\n"
  code+="pub.publish('Spider going forward for "+text_forward_secs.toString()+" seconds')\n"
  return code;
};