
#-----------------------------START CAPTURE_IMAGE---------------------------------
import os
import cv2
import time
import rospy
import numpy as np
from sensor_msgs.msg import Image

rospy.init_node('blockly_node', anonymous=True)

msg_image = rospy.wait_for_message('/arabot/camera', Image, timeout=5)
np_arr = np.frombuffer(msg_image.data, np.uint8)
image_np = np.reshape(np_arr, (msg_image.height, msg_image.width, 4))

images_path = '/home/avelino/catkin_ws/src/arabot_blockly/frontend/pages/images/'
timestr = time.strftime("%d-%m-%Y_%H-%M-%S.png")
cv2.imwrite(images_path+ 'image_' + timestr, image_np)

files = len(os.listdir(images_path)) #amount of files in /frontend/images/ folder

if files > 7 : #allow 5 images max
    os.system("find "+images_path+" -name '*.png' | xargs ls -t | tail -n 1 | xargs rm")#remove oldest image
#-----------------------------END CAPTURE_IMAGE---------------------------------
