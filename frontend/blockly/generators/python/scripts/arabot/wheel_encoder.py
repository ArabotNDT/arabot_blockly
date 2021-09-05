
#-----------------------------START GET_DISTANCE---------------------------------
import rospy
from std_msgs.msg import Float64

msg_distance = rospy.wait_for_message('/arabot/get_' + dropdown_motor + '_wheel_encoder', Float64, timeout=1)

#-----------------------------END GET_DISTANCE---------------------------------