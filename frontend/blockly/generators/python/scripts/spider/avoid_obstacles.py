import rospy

import numpy as np
import math

import sys
import time
from crab_msgs.msg import apm_imu
from crab_msgs.msg import BodyCommand
from crab_msgs.msg import BodyState
from crab_msgs.msg import GaitCommand
from crab_msgs.msg import LegIKRequest
from crab_msgs.msg import LegJointsState
from crab_msgs.msg import LegPositionState
from crab_msgs.msg import LegsJointsState

from sensor_msgs.msg import Joy
from sensor_msgs.msg import LaserScan

################
## INITIALIZE ##
################ 
pub = rospy.Publisher('/joy', Joy, queue_size=10)
msg = Joy()
msg.header.stamp = rospy.Time.now()
rate = rospy.Rate(10)
valueAxe = 0.0
valueButton = 0
for i in range (0, 20):
 msg.axes.append(valueAxe)
for e in range (0, 17):
 msg.buttons.append(valueButton)

rad_to_deg = 57.2958
###################
## LASER PARAMS. ##
###################
laser = rospy.wait_for_message('/scan', LaserScan, timeout=3)

range_min = laser.range_min #hokuyo 0.019, sick 0.05
range_max = laser.range_max #hoyuko 60, sick 25
angle_increment = laser.angle_increment #hokuyo 0.0043, sick 0.005817 
mid_angle = laser.angle_max*rad_to_deg #hokuyo 135, sick 135

################
## AVOID OBS. ##
################
#while not rospy.is_shutdown():

laser = rospy.wait_for_message('/scan', LaserScan, timeout=3)

path_distance = 1.2
obstacle_distance = 0.2

path_size = 0
path_beg = 0
path_end = 0
MAX_path_size = 0
MAX_path_beg = 0
MAX_path_end = 0

#range_min = laser.range_min #0.05
###range_min = 0.2
###range_max = laser.range_max #25.0


#create a list of tuples with valid values
valid_ranges = []
stop = 0
for (i,r) in enumerate(laser.ranges):
    if (r >= range_min) and (r <= range_max):
        tup = [i,r]
        valid_ranges.append(tup)

for (j,w) in enumerate(valid_ranges): #w is a tuple of [i,r]
    if w[1] > path_distance:
        if valid_ranges[j-1][1] > path_distance:
            path_size += w[0] - valid_ranges[j-1][0]
            path_end = j
            if path_size > MAX_path_size:
                MAX_path_size = path_size
                MAX_path_beg = path_beg
                MAX_path_end = path_end
        else:
            path_beg = j
            path_size = 0
    '''elif w[1] <= obstacle_distance:
        stop = 1
        print("STOP - "+str(j)+" "+str(w[1]))'''


path_center = (MAX_path_end+MAX_path_beg)/2
path_center_degrees = path_center*angle_increment*rad_to_deg

'''
print("NEW ITERATION")
print("MAX_path_size="+str(MAX_path_size))
print("MAX_path_beg="+str(MAX_path_beg))
print("MAX_path_end="+str(MAX_path_end))
print("Path center="+str(path_center))
print("DEGREES path_center="+str(path_center_degrees))
print("\n")

if stop == 0:
    if path_center_degrees > (mid_angle -25) and path_center_degrees < (mid_angle +25):
        print("GOING FORWARD")
        msg.axes[2] = 0
        msg.axes[3] = 1
    elif path_center_degrees > mid_angle: #left
        print("GOING LEFT")
        msg.axes[3] = 1
        msg.axes[2] = 1 #turn left
    else: #right
        print("GOING RIGHT")
        msg.axes[3] = 1
        msg.axes[2] = -1 #turn right
else: #stop == 1
    msg.axes[2] = 0
    msg.axes[3] = 0

pub.publish(msg)
rate.sleep()'''
