import rospy, sys
import time
from geometry_msgs.msg import Twist

pub = rospy.Publisher('cmd_vel', Twist, queue_size=10)
#rospy.init_node('circle_mode', anonymous=True)
rate = rospy.Rate(10) # 10Hz
twist = Twist()
start = time.time()
flag=True #time flag

twist.linear.z = 0.00
twist.linear.y = 0.00
twist.linear.x = 0.00

while not rospy.is_shutdown() and flag:
    sample_time=time.time()
    if ((sample_time - start) > 2):
      flag=False
    pub.publish(twist)
twist = Twist()
pub.publish(twist)
rate.sleep()
