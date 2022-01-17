#!/bin/bash
source ~/catkin_ws/devel/setup.bash
roscd arabot_blockly/frontend
python2 -m SimpleHTTPServer 1036
