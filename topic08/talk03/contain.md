# Weather station
Smart Weather Station with the function of weather classification based on the images captured by the camera.

#### Student Name: *Julija Folic*   Student ID: *20104406*

This project aims to create a weather station that classifies weather conditions based on real-time images captured by a camera. The station will use a Raspberry Pi, Sense HAT, and a camera module to collect weather-related data such as temperature, humidity, pressure, and images of the sky and surrounding area. The system will process the data using Python and run an image classification algorithm to determine the current weather conditions.

The weather data collected will be stored in a database for future analysis, and the current weather conditions will be displayed in real-time on the LED matrix of the Sense HAT. The project will also include a website component developed in JavaScript for remote monitoring and analysis of the weather data.

Overall, this project will create a smart weather station that provides accurate and real-time weather information based on images captured by a camera.

## Tools, Technologies and Equipment

TODO: Write a list of things you propose to use in your work. This can be hardware, programming languages etc.

The following equipment will be used:
- Raspberry Pi 4 computer Model B 4GB RAM
- Raspberry Pi Sense HAT
- Raspberry Pi camera module V2

Sensor layer: This layer includes the Sense HAT board and the Raspberry Pi camera connected to the Raspberry Pi. The Sense HAT collects various weather-related data, such as temperature, humidity, and pressure, and sends it to the processing node for further processing. Raspberry Pi camera is used to capture images of the sky and the surrounding area. The sensor layer is programmed using Python.

Processing node layer: This layer consists of the Raspberry Pi board running the image classification algorithm and processing the data received from the Sense HAT. The processing node captures images from the Raspberry Pi camera and uses them as input to the weather condition classification algorithm to determine the current weather condition. The processing node also communicates with the Sense HAT to collect additional weather-related data and combines it with the results of the image classification algorithm. The processing node layer is programmed using Python.

Gateway layer: This layer includes the MQTT service, which serves as a message broker between the processing node and the Google IoT Cloud. The MQTT service receives data from the processing node and forwards it to the appropriate topic in the Google IoT Cloud. The Google IoT Cloud can then store and process the data, allowing users to monitor and analyze the weather conditions remotely. The gateway layer is programmed using Python.

Application layer: This layer includes two components: a website and a local display on the Sense HAT's LED matrix. The webpage provides a user interface for monitoring the weather data collected by the system. The local display on the Sense HAT's LED matrix provides a real-time display of the current weather conditions, making it easy to monitor the weather at a glance. 

Used programmimg languages:
- Python for Raspberry Pi
- Java Script for the webpage

Sources: 
https://pimylifeup.com/raspberry-pi-weather-station/


## Project Repository
https://github.com/julija-f/weather_station


