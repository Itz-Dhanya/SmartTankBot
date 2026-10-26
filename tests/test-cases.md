# SmartTankBot – Test Cases

## 1. Overview
This document lists the planned test cases for SmartTankBot, a web-controlled municipal water tank surface-cleaning robot. The tests are intended to check Wi-Fi connectivity, web commands, robot movement, rotating-brush control, and basic safety behavior.

**Project Status:** Prototype testing  
**Note:** Test results must be updated only after each test is actually performed. Untested features should remain marked as `Not Run`.

## 2. Test Cases

| Test ID | Test Name | Test Procedure | Expected Result | Status |
|---|---|---|---|---|
| TC-01 | ESP32 Wi-Fi Connection | Power on the ESP32 and check the serial monitor for Wi-Fi connection status. | The ESP32 connects to the configured Wi-Fi network and reports the connection status. | Not Run |
| TC-02 | Website Connectivity | Open the SmartTankBot control website and check whether it can communicate with the ESP32. | The website displays the correct connection status when communication is implemented. | Not Run |
| TC-03 | Robot Start Command | Send the start command from the website in a controlled test area. | The robot starts moving only when the system is ready and safety conditions are satisfied. | Not Run |
| TC-04 | Robot Stop Command | Send the stop command from the website while the robot is moving in a controlled test area. | The robot stops moving after receiving the stop command. | Not Run |
| TC-05 | Rotating Brush Control | Activate and deactivate the brush using the intended control method. | The brush starts and stops as commanded, provided the brush hardware and control system are connected. | Not Run |
| TC-06 | Movement Control | Test the available forward, reverse, left, and right commands, if supported by the prototype. | The robot responds correctly to each implemented movement command. | Not Run |
| TC-07 | Cleaning Performance | Test the rotating brush on a suitable test surface using a safe, controlled setup. | The brush removes some surface dirt or deposits without damaging the test surface. | Not Run |
| TC-08 | Wi-Fi Disconnection | Disconnect Wi-Fi during a controlled test and observe the robot's behavior. | The robot enters a predefined safe state if communication is lost. This behavior must be implemented and verified. | Not Run |
| TC-09 | Invalid Command Handling | Send an unsupported or invalid command to the control system. | The system rejects the invalid command and does not perform an unintended action. | Not Run |
| TC-10 | Battery Status | Check whether battery-level monitoring hardware and software are available. | If battery monitoring is implemented, the displayed value matches the measured battery status within the system's specified accuracy. Otherwise, battery status is reported as unavailable. | Not Run |
| TC-11 | System Restart | Restart the ESP32 and check whether the system returns to its expected initial state. | The system starts correctly and does not unexpectedly activate the motors or brush. | Not Run |
| TC-12 | Emergency Stop and Safe Shutdown | Test the implemented emergency-stop or shutdown procedure in a controlled setup. | The robot and brush stop as specified by the implemented safety design. | Not Run |

## 3. Test Result Guidelines

Use the following status values:

- **Not Run:** The test has not been performed.
- **Pass:** The test was performed and the expected result was achieved.
- **Fail:** The test was performed and the expected result was not achieved.
- **Blocked:** The test cannot be performed because required hardware or software is not yet available.

## 4. Testing Limitations

Some tests depend on hardware and software that may still be under development. Website communication, battery monitoring, emergency-stop functionality, and Wi-Fi-loss handling must not be considered completed until they have been implemented and tested.

Initial testing should be conducted in a controlled environment. Do not test the prototype inside a municipal drinking-water tank until its electrical safety, waterproofing, cleaning performance, and suitability for that environment have been properly assessed.

## 5. Conclusion

These test cases provide a structured plan for evaluating the SmartTankBot prototype. Test results will be recorded as development progresses, and any failures will be used to identify improvements in the robot's hardware, firmware, website controls, and safety behavior.
