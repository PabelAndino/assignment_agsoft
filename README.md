## General description.

This project was developed with a template that has all the functionality to develop a project and is based on the [MIU](https://mui.com/material-ui/getting-started/overview/) library. Many of the dependencies are not really needed but are ready to use.

This project fetches a free API where a list of users is obtained, each of which has a list of posts.

```plaintext
https://jsonplaceholder.typicode.com/
```

---

The directory structure where the source code is located is as follows:  **src - pages - home.**

*   _In the home directory are the files._
*   _index.js which is the main container._
*   _description.jsx, which is a basic description of how the project works._
*   _table.jsx, is the main table where the api is fetched and receives a list of users where clicking will fill a state._
*   _table\_secondary.jsx, recibe los posts de un usuario de la tabla principal table.jsx._

## Recommendations

To be able to run this project locally, [_Yarn_](https://classic.yarnpkg.com/en/docs/install#mac-stable) it must be installed.

```plaintext
npm install --global yarn
```

To initialize the project and install all Node dependencies, run :

```plaintext
yarn
```

Or

```plaintext
yarn install
```

To local execute just type:

```plaintext
yarn dev
```
