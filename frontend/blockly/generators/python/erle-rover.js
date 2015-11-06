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
 * @author inigo@erlerobot.com (Iñigo Muguruza Goenaga)
 */
'use strict';

goog.provide('Blockly.Python.spider');
goog.require('Blockly.Python');



Blockly.Python['rover_mode'] = function(block) {
  var dropdown_mode = block.getFieldValue('MODE');
  // var code = 'print "Changing mode..."\n';
	var code = ""
	code+="import rospy\n"
	code+="from mavros_msgs.srv import SetMode\n"
	code+="def talker():\n"
    code+="rospy.init_node('rover_mode')\n"
    code+="rospy.wait_for_service('/mavros/set_mode')\n"
    code+="try:\n"
    code+="change_mode = rospy.ServiceProxy('/mavros/set_mode', SetMode)\n"
    code+="resp1 = change_mode(custom_mode=dropdown_mode)\n"
    code+="return resp1.success\n"
    code+="except rospy.ServiceException, e:\n"
    code+="print "Service call failed: %s"%e\n"
	code+="print talker()\n"

  return code;
};