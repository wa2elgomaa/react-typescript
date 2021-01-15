# Github Search React Application

This application for searching github data.
 
 This application is using the following technologies : 
  - ReactJs
  - Typescript 
  - React Redux
  - Redux Saga
  - React Logger 
  - Styled-components 
  - Yarn - PKG control 
 
# Project Structure 

```
SERVER
│   README.md
│   package.json    
│   tsconfig.json    
│   tslint.json    
└───public
└───src
│   index.tsx
│   server.ts
│   └───assets
│       └───imgs
│   └───components
│   └───constants
│   └───containers
│   └───redux
│       └───actions
│       └───constants
│       └───reducers
│       └───sagas
│       └───stores
│       └───types
│   └───services
│   └───types
│   └───utils
```

### Solution Decisions 

* Using React-saga built in debounce feature, along with es6 generators. 
* Multiple reducers and persistor reducer to cache results in case of refresh the browser.
* Reusable dummy components library in order to be seperated later for monorepo architecture.  
* Using Yarn package manager to make use of its built in workspaces feature and ready integration with lerna to achieve monorepo architecture. 

### Installation

To start using the application follow the below steps: 

Clone the repo using the following command : 

```sh
$ git clone  <repo URL> 
$ cd client
```

Install the dependencies and devDependencies and start the server.

```sh
$ yarn
```

To Start the application, the application will start with 3000 port, if you want to change it use the ENV parameter

```sh
$ yarn start
```

You can view the application on http://localhost:3000. 
