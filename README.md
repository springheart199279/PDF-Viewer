# WebViewer UI 

![WebViewer UI](https://www.pdftron.com/downloads/pl/webviewer-ui.png)



## Install

```
npm install
```

### Install WebViewer Core Dependencies

Once installed, copy the Core folder into the path being used by the viewer for its dependencies (/lib by default).

## Run

```
npm start
```

## Build

```
npm run build
```

## Troubleshooting

If you are using NPM version 7 or higher, you may get an error indicating an issue with the dependency tree. There are two possible solutions for this:
- Downgrade your version of Node to v14, which uses NPM version 6. 

## Project structure

```
src/
  apis/            - APIs exposed in myWebViewer.getInstance()
  components/      - React components
  constants/       - JavaScript or CSS constants
  core/            - APIs from the Core
  event-listeners/ - Listeners for the Core events
  helpers/         - Reused functions
  redux/           - Redux files for state managing
  lib/             - Lib folder created upon npm install, used for dev testing only
```
