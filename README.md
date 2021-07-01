# React-Express-Starter
Express Backend with React and React-Router-DOM setup

Basic template with a test API response.

## How To Use This Repo
```bash
git clone https://github.com/ttytango/React-Express-Starter.git
cd Express-React
```
Then install the the node-express dependencies:
```bash
cd express-server/
npm install
```
Once dependencies the server-side dependencies, install the React dependencies:
```bash
cd ..
cd client/
npm install
```
Launch the server using the nodemon command in the express-server/package.json, and then the client/package.json with "yarn start".
The development server should open in the browser on localhost:3000

If the browser window displays a react logo and a line that reads "Connected to Express", then React has connected to Express with a successful call to an API endpoint on localhost:9000/test.

The client port can also be edited to proxy to port 9000 should this setup not work by going to client/package.json and adding the following code before "dependencies" 
```
 "proxy": "http://localhost:9000",
 ```
 
