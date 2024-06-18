# Welcome To ST Engineering Bus Rapid Transit GIS 
Develop a GIS function that loads all the routes associated with a Singapore bus number

## Project Overview
ST Engineering BRT GIS prototype web application that aims to simulate the functions required to control and survey a BRT system based in Singapore.

## Developers:
Management : Grishi Gupta <br/>
Development Team : Luo Maoyuan <br/>
Design Team : <br/>

## About:
The purpose of this file is to provide overview, setup instructions and background information of the project. <br/>
If you have joined this project as a part of the development team, please ensure this file is up to date.

This client side code is developed with [React JS](https://react.dev/) and tested on [Visual Studio Code](https://code.visualstudio.com/). <br/>

**Note : Any dependencies added / modified to this project which affect the running of the code in this git repository must be listed in this file. All developers must ensure that the instructions mentioned in this file are sufficient to enable a new developer to obtain a executable copy of the lastest code in this repository, without invlvement from any other human assistance.**

## Local Environment Installation & Setup

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/LuoMaoyuan01/bl_client
    ```
2. Create a .env file in the server folder. The file should contain a **GOOGLE MAPS API KEY** & **GOOGLE MAPS MAP ID**.

    ```javascript
    REACT_APP_GOOGLE_MAPS_API_KEY='1234GOOGLEMAPSAPIKEY'
    REACT_APP_MAP_ID='1234GOOGLEMAPSID'
    ```

3. Navigate to the server directory:

    ```bash
    cd bl_client
    ```

4. Install frontend dependencies:

    ```bash
    npm install
    ```

5. Start the backend server

6. Start the frontend development server:

    ```bash
    npm start
    ```

7. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Docker Installation & Setup
- docker build -t bl_client:v100 . (custom version number in sequence) <br/>
- docker run -p 3000:3000 bl_client:v100 (custom version number in sequence) <br/>

## Technology Stacks Used

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces. <br/>
- [Bootstrap](https://getbootstrap.com/) - A popular CSS framework for building responsive and mobile-first websites. <br/>
- [Express.js](https://expressjs.com/) - A minimal and flexible Node.js web application framework. <br/>
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine. <br/>
- [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) - A React renderer for the three.js library to interact with 3D Models<br/>

## Notes

## References
