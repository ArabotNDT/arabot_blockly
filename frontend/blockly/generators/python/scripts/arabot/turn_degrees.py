import rospy, sys
import time
from geometry_msgs.msg import Twist
from sensor_msgs.msg import Imu
import math

#diameter = 0.2 # meters
#radius = diameter/2;
#isFirst = True
#rotateRadians = rotateAngle * 0.0174533 # value to convert degrees to radians

msg_imu = rospy.wait_for_message('/imu', Imu, timeout=3)

quaternion = (
msg_imu.orientation.w,
msg_imu.orientation.x,
msg_imu.orientation.y,
msg_imu.orientation.z)

euler = euler_from_quaternion(quaternion)
initial_yaw = abs(math.degrees(euler[2]))

#rospy.init_node('turn_left', anonymous=True)
#rospy.Subscriber('/imu', Imu, handleImu)
pub = rospy.Publisher('cmd_vel', Twist, queue_size=10)
rate = rospy.Rate(10) # 10Hz

twist = Twist()
flag=True
previous_yaw = initial_yaw
#loop = 0
degrees_change = 0


if "left" is dropdown_direction:
    direction = 1 # the factor that decides the turning left or right
    target = float(degrees)*0.95
elif "right" is dropdown_direction:
    direction = -1 # the factor that decides the turning left or right
    target = float(degrees)*1.05

while not rospy.is_shutdown() and flag:
    msg_imu = rospy.wait_for_message('/imu', Imu, timeout=5)
    quaternion = (
    msg_imu.orientation.w,
    msg_imu.orientation.x,
    msg_imu.orientation.y,
    msg_imu.orientation.z)

    euler = euler_from_quaternion(quaternion)
    yaw = euler[2]
    yaw = math.degrees(yaw)
    yaw = abs(yaw)

    degrees_change += abs(previous_yaw - yaw)

    if (degrees_change < target):
        twist.angular.z = 0.5 * direction 
    
    else:
        flag=False
        twist.angular.z = 0.0

    previous_yaw = yaw
    pub.publish(twist)

twist = Twist()
pub.publish(twist)
rate.sleep()
