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

## Resumen del Proyecto

El objetivo de este proyecto es desarrollar un UAV (dron de ala fija) basado en el modelo **Eclipson Pathfinder** para misiones de vigilancia y reconocimiento. Se busca crear un sistema que pueda operar de forma **completamente autónoma**, responder a comandos para dirigirse a puntos específicos y, una vez en posición, permitir control manual o continuar en modo automático mientras analiza el entorno.

El sistema está diseñado para ser **eficiente y de bajo costo**, utilizando solo los componentes esenciales para maximizar la autonomía de vuelo y la funcionalidad.

***

## Características Principales

### Navegación Autónoma

* Sistema de vuelo autónomo mediante **Cube Orange + GPS Here3**
* Capacidad de seguir rutas predefinidas con múltiples waypoints
* Algoritmos de evasión de obstáculos y rutas alternativas

### Modos de Operación

* **Modo autónomo**: Navegación a un punto designado sin intervención humana
* **Modo de espera (Loiter Mode)**: Mantiene posición en la zona de interés mientras analiza el entorno
* **Control manual**: Posibilidad de tomar control con un radio FrSky Taranis X9D
* **Regreso automático**: Si no hay intervención o ante batería baja, regresa al punto de origen

### Transmisión y Análisis

* Transmisión de video FPV en tiempo real mediante el sistema **DJI FPV Air Unit**
* Análisis de imágenes (opcional) con **Raspberry Pi 4 + Módulo 4G/LTE** para detección de personas y vehículos
* Telemetría bidireccional para monitoreo de estado y ajustes en tiempo real

***

## Componentes Esenciales

### 1️⃣ Estructura y Propulsión

| Componente   | Especificación              | Función                                     |
| ------------ | --------------------------- | ------------------------------------------- |
| Chasis       | **Eclipson Pathfinder**     | Estructura aerodinámica impresa en 3D o kit |
| Motor        | **T-Motor AT2312 KV1400**   | Propulsión principal con alta eficiencia    |
| Hélice       | **APC 7x4**                 | Optimizada para eficiencia y empuje         |
| ESC          | **T-Motor 30A**             | Control preciso del motor                   |
| Servos       | **2x SG90 o MG90S**         | Control de superficies de vuelo             |
| Batería      | **3S 2200mAh - 4S 3300mAh** | Alimentación con autonomía de 30-45 min     |
| Power Module | **Holybro PM06**            | Distribución y monitoreo de energía         |

### 2️⃣ Controlador de Vuelo y Navegación

| Componente          | Especificación                  | Función                                     |
| ------------------- | ------------------------------- | ------------------------------------------- |
| Controlador         | **Cube Orange + Carrier Board** | Cerebro del sistema, procesamiento de vuelo |
| GPS                 | **Here3 GPS**                   | Posicionamiento preciso y navegación        |
| Sensor de velocidad | **Airspeed Sensor digital**     | Medición de velocidad relativa al aire      |

### 3️⃣ Comunicación y Control

| Componente    | Especificación                                 | Función                             |
| ------------- | ---------------------------------------------- | ----------------------------------- |
| Radio control | **FrSky Taranis X9D + Receptor R9 Slim+ SBUS** | Control manual de respaldo          |
| Telemetría    | **SiK Radio 915MHz o RFD900x**                 | Comunicación bidireccional de datos |
| Sistema FPV   | **DJI FPV Air Unit**                           | Transmisión de video en tiempo real |

### 4️⃣ Visión y Procesamiento (Opcional)

| Componente   | Especificación        | Función                                |
| ------------ | --------------------- | -------------------------------------- |
| Computadora  | **Raspberry Pi 4**    | Procesamiento de imágenes y datos      |
| Software     | **YOLOv8 ligero**     | Detección de objetos en tiempo real    |
| Conectividad | **Módulo 4G/LTE USB** | Transmisión de datos a larga distancia |

***

## Modos de Operación Detallados

1. **Modo Autónomo**:
   * El drone despega y vuela hasta el punto designado siguiendo una ruta predefinida
   * Mantiene altitud y velocidad constantes durante el trayecto
   * Ajusta parámetros de vuelo según condiciones ambientales
2. **Modo Loiter**:
   * Mantiene un patrón de vuelo circular o estacionario en la zona de interés
   * Ajusta radio y velocidad según necesidades de vigilancia
   * Optimiza consumo energético para maximizar tiempo en zona
3. **Control Manual**:
   * El operador puede tomar el control con el radio FrSky en cualquier momento
   * Transición suave entre modos autónomo y manual
   * Alertas de telemetría para el operador
4. **Modo FPV**:
   * Transmite video en tiempo real con DJI FPV
   * Baja latencia para control preciso
   * Superposición de datos de telemetría en pantalla
5. **Regreso Automático**:
   * Se activa por comando, batería baja o pérdida de señal
   * Calcula ruta óptima de regreso considerando viento y obstáculos
   * Aterrizaje automático en punto de origen

***

## Plan de Implementación

### Fase 1: Construcción

* Ensamblar el UAV con los componentes mínimos
* Integrar sistema de propulsión y control
* Instalar controlador de vuelo y sensores

### Fase 2: Configuración

* Configurar y calibrar Cube Orange con ArduPilot
* Programar misiones básicas y parámetros de vuelo
* Ajustar PID para estabilidad óptima

### Fase 3: Pruebas

* Realizar pruebas de vuelo controlado
* Validar navegación autónoma con waypoints
* Probar sistemas de seguridad y recuperación

### Fase 4: Optimización

* Integrar el sistema FPV de DJI
* Implementar análisis de imágenes (opcional)
* Optimizar consumo energético y autonomía

## Recursos y Referencias

* [Documentación oficial de ArduPilot](https://ardupilot.org/plane/)
* [Especificaciones del Eclipson Pathfinder](https://www.eclipson-airplanes.com/)
* [Guía de configuración de Cube Orange](https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview)
* [Tutorial de implementación de YOLOv8 en Raspberry Pi](https://github.com/ultralytics/ultralytics)
