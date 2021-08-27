# arabot_blockly
This is a modified version of the [erlerobot/robot_blockly](https://github.com/erlerobot/robot_blockly.git) repo. 
You can now control arabot using Blockly - drag and drop software developed by Google.

![](img/launchCode.png)

### GIF showing drag-drop of blocks

![](img/simpCode.gif)

### Installation

```
mkdir -p ~/blockly_ws/src
cd ~/blockly_ws/src
git clone https://github.com/dabit-industries/arabot_blockly
cd arabot_blockly/frontend/
git submodule add https://github.com/dabit-industries/ace-builds.git ace-builds
git submodule init
git submodule update
git submodule add https://github.com/dabit-industries/blockly.git blockly
git submodule init
git submodule update
cd ~/blockly_ws/
catkin_make_isolated -j2 --pkg arabot_blockly --install
```

or you may try this

```
mkdir -p ~/blockly_ws/src
cd ~/blockly_ws/src
git clone --recurse-submodules https://github.com/dabit-industries/arabot_blockly

cd ~/blockly_ws
catkin_make_isolated -j2 --pkg arabot_blockly --install
```

### Launch

```
cd ~/blockly_ws
source devel_isolated/arabot_blockly/setup.bash
roslaunch arabot_blockly arabot_blockly.launch
```

### Bugs/Issues

![Report here](https://github.com/aravindk2604/arabot_blockly/issues)

### Documentation
- [arabot Blockly Getting Started](http://turtlebot-3-blockly-wiki.rtfd.io/)
- [arabot setup](http://arabot.robotis.com/en/latest/hardware.html)
- [ROS Wiki](http://www.ros.org) 
