import rospy

from webots_ros.srv import set_float

def set_wheel_velocity(motor_speed, motor_side):
    rospy.wait_for_service('/arabot/set_' + motor_side + '_wheel_velocity')
    try:
        setWheelVelocityService = rospy.ServiceProxy('/arabot/set_' + motor_side + '_wheel_velocity', set_float)
        setWheelVelocityService(motor_speed)
    except rospy.ServiceException as e:
        print("Service call failed: ")


set_wheel_velocity(float(speed), dropdown_motor)
