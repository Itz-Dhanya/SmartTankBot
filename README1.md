# SmartTankBot

## Project Overview

SmartTankBot is a student robotics project developing a web-controlled robot for municipal water tank surface cleaning.

The proposed system uses a rotating brush for surface cleaning and an ESP32 microcontroller for Wi-Fi communication. Operators will be able to start and stop the robot through a website.

**Project status:** Prototype development and testing.

## Objectives

- Develop a mobile robotic platform.
- Integrate a rotating-brush cleaning mechanism.
- Enable website-based start and stop controls.
- Test movement, cleaning performance, and communication reliability.
- Improve safety, waterproofing, and battery life.

## Hardware Requirements

- ESP32 development board
- Robot chassis
- Motors and motor driver
- Rotating brush and brush motor
- Suitable battery and power regulation
- Wiring, mounting components, and enclosure

## Software Requirements

- Arduino IDE or PlatformIO for ESP32 firmware
- A web browser for the control interface
- A suitable web development environment
- Wi-Fi network for communication

The exact software dependencies depend on the final implementation.

## Setup

1. Install the Arduino IDE or PlatformIO.
2. Install the appropriate ESP32 board support package.
3. Open the firmware project from the `firmware/` directory.
4. Configure Wi-Fi credentials using the project's environment configuration instructions.
5. Build and upload the firmware to the ESP32.
6. Start the web application using the instructions in `web/README.md`.
7. Test the interface and communication using a safe, unloaded test setup before operating the robot.

## Configuration

Keep credentials outside the source code. Use a local configuration file or the configuration method supported by your firmware and web framework.

Never publish Wi-Fi passwords, access tokens, or other secrets.

## Project Structure

- `firmware/` — ESP32 firmware
- `web/` — website and control interface
- `docs/` — architecture and technical design
- `sample-data/` — example status data
- `tests/` — test cases and results

## Testing

Refer to `tests/test-cases.md` for planned tests covering communication, motor control, brush operation, website controls, and error handling.

## Limitations

The system is under development. Cleaning performance, waterproofing, battery endurance, and operation in different tank shapes require validation.

## Future Improvements

- Improve movement and cleaning efficiency.
- Strengthen waterproofing and electrical protection.
- Improve status monitoring and error handling.
- Conduct controlled trials and collect user feedback.

## Team

- Hardware and Robotics
- Software and Web Development
- Business and Marketing

## License

This project is released under the license specified in the `LICENSE` file.
