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
Launch the server with the npdemon command in the express-server/package.json, and then the client/package.json with "yarn start".
The development server should open in the browser on localhost:3000

If the browser window displays a react logo and a line that reads "Connected to Express", then React has connected to Express with a successful call to an API endpoint on localhost:9000/test.
