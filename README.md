## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run server`

Runs the server in the development mode using Nodemon.<br>
This currently is set-up to post data to Firebase and live data to client via websockets.

Alternatively, you can run 'node server/index' from terminal.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `scripts/StandardFirmata`

After correctly setting up your Arduino Uno as per the relevant Docs and having connected it to your computer via a USB cable, please ensure that you have downlaoded and installed the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
On Arduino IDE, go to Tools > Port and ensure that the correct board (Arduino Uno) is connected to the correct port - tty.usbmodem… for Mac, cu.usbmodem…for Windows.

1. On the IDE, copy the StandardFirmata.cpp script from the project directory 'scripts folder' and run in the IDE
2. lternatively, on the IDE. Open File > Example > Firmata > StandardFirmata
3. Click the upload (right arrow) button and wait for a message from the IDE displaying "Done uploading"
4. Close the IDE


- - - -

## Components


### contianers                    
* UseCasesCardsList              
* UseCase        
* HistoricData
* TemperatureData

### components                   
* UseCaseCard            
* Navigation   
* Toolbar

### store
* actions
* reducers

### shared

* serverUtility

### hoc                
* Layout             
* asyncComponent

