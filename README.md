# ST_GIS_Bus_Locator
Develop a GIS function that loads all the routes associated with a Singapore bus number


## Setup
git config --global core.autocrlf true

## Docker build command
docker build -t bl_client:v100 . (custom version number in sequence)

## Docker run command
docker run -p 3000:3000 bl_client:v100
