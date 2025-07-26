---
title: Autonomous AI-Powered Drone
slug: autonomous-drone
description: >-
  Designed and built a fully autonomous drone with custom control systems and
  computer vision powered by AI.
tags:
  - projects
added: 2024-05-05T06:00:00.000Z
---

## Project Overview

The goal of this project is to develop a **fixed-wing UAV** based on the **Eclipson Pathfinder** model for surveillance and reconnaissance missions. The system is designed to operate in a **fully autonomous** mode, respond to commands to navigate to specific locations, and either remain under manual control or continue autonomously while analyzing its surroundings.

This UAV is intended to be **cost-effective and efficient**, using only essential components to maximize flight autonomy and functionality.

***

## Key Features

### Autonomous Navigation

* Autonomous flight system powered by **Cube Orange + Here3 GPS**
* Ability to follow predefined routes with multiple waypoints
* Obstacle avoidance and dynamic rerouting algorithms

### Operating Modes

* **Autonomous Mode**: Navigates to a designated point without human intervention
* **Loiter Mode**: Holds position in an area of interest while monitoring the environment
* **Manual Control**: Pilot can take control using a **FrSky Taranis X9D** transmitter
* **Auto Return**: Automatically returns to home if no input is received or battery is low

### Transmission & Analysis

* Real-time FPV video feed via **DJI FPV Air Unit**
* Optional image analysis using **Raspberry Pi 4 + 4G/LTE module** for person/vehicle detection
* Bidirectional telemetry for live monitoring and real-time adjustments

***

## Essential Components

### 1. Frame and Propulsion

| Component    | Specification               | Function                                |
| ------------ | --------------------------- | --------------------------------------- |
| Airframe     | **Eclipson Pathfinder**     | Aerodynamic 3D-printed frame or kit     |
| Motor        | **T-Motor AT2312 KV1400**   | High-efficiency main propulsion         |
| Propeller    | **APC 7x4**                 | Optimized for thrust and efficiency     |
| ESC          | **T-Motor 30A**             | Motor speed control                     |
| Servos       | **2x SG90 or MG90S**        | Controls flight surfaces                |
| Battery      | **3S 2200mAh – 4S 3300mAh** | Power supply, 30–45 min flight autonomy |
| Power Module | **Holybro PM06**            | Power distribution and monitoring       |

### 2. Flight Controller & Navigation

| Component         | Specification                   | Function                            |
| ----------------- | ------------------------------- | ----------------------------------- |
| Flight Controller | **Cube Orange + Carrier Board** | Core system for flight control      |
| GPS Module        | **Here3 GPS**                   | Accurate positioning and navigation |
| Airspeed Sensor   | **Digital Airspeed Sensor**     | Measures air-relative velocity      |

### 3. Communication & Control

| Component      | Specification                                  | Function                         |
| -------------- | ---------------------------------------------- | -------------------------------- |
| RC Transmitter | **FrSky Taranis X9D + R9 Slim+ SBUS Receiver** | Backup manual control            |
| Telemetry      | **SiK Radio 915MHz or RFD900x**                | Bidirectional data communication |
| FPV System     | **DJI FPV Air Unit**                           | Real-time video transmission     |

### 4. Vision & Processing (Optional)

| Component    | Specification         | Function                     |
| ------------ | --------------------- | ---------------------------- |
| Computer     | **Raspberry Pi 4**    | Image and data processing    |
| Software     | **YOLOv8 Lite**       | Real-time object detection   |
| Connectivity | **4G/LTE USB Module** | Long-range data transmission |

***

## Detailed Operating Modes

### 1. Autonomous Mode

* UAV takes off and navigates to the target location via a predefined route
* Maintains constant altitude and speed
* Adjusts flight parameters based on environmental conditions

### 2. Loiter Mode

* Holds circular or stationary flight pattern in the area of interest
* Adjusts radius and speed for optimal surveillance
* Optimizes power consumption to maximize time on target

### 3. Manual Control

* Operator can take control at any time using the FrSky transmitter
* Smooth transition between manual and autonomous modes
* Telemetry alerts for critical system updates

### 4. FPV Mode

* Real-time video feed through DJI FPV system
* Low latency for precise control
* On-screen display with telemetry data

### 5. Auto Return

* Activated by command, low battery, or loss of signal
* Calculates optimal return path considering wind and obstacles
* Automatic landing at home point

***

## Implementation Plan

* **Phase 1: Assembly**
* Assemble the UAV with essential components
* Install propulsion and control systems
* Mount the flight controller and sensors
* **Phase 2: Configuration**
* Configure and calibrate Cube Orange using ArduPilot
* Program basic missions and flight parameters
* Tune PID values for optimal stability
* **Phase 3: Testing**
* Conduct controlled flight tests
* Validate autonomous navigation with waypoints
* Test safety and fail-safe systems
* **Phase 4: Optimization**
* Integrate DJI FPV system
* (Optional) Add image analysis module
* Optimize power consumption and flight autonomy

***

## Resources & References

* [Official ArduPilot Documentation](https://ardupilot.org/plane/)
* [Eclipson Pathfinder Specifications](https://www.eclipson-airplanes.com/)
* [Cube Orange Setup Guide](https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview)
* [YOLOv8 on Raspberry Pi – Ultralytics GitHub](https://github.com/ultralytics/ultralytics)
