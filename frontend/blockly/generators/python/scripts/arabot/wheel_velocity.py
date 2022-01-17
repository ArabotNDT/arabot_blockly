import rospy

from std_msgs.msg import Float64

def set_wheel_velocity(motor_speed, motor_side):
    pub = rospy.Publisher('/arabot/set_' + motor_side + '_wheel_velocity', Float64, queue_size=1)
    pub.publish(Float64(motor_speed))

set_wheel_velocity(float(speed), dropdown_motor)
