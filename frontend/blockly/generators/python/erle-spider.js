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
  code+="import time\n"
  code+="\n"
  code+="pub = rospy.Publisher('rosimple', String, queue_size=10)\n"
  code+="time.sleep(1)\n"
  code+="pub.publish('Spider spider_standup')\n"
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