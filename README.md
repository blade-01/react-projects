# ㉃ Todo App

This project is a simple Todo App built with React. It allows users to add, edit, and remove tasks, as well as mark them as completed. The app uses context and reducers for state management.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Project Structure

- `src/components`: Contains the React components used in the app.
- `src/context`: Contains the context and provider for managing the todo state.
- `src/data`: Contains the initial todo data.
- `src/reducer`: Contains the reducer for handling todo actions.
- `src/pages`: Contains the different pages of the app (Home, About).

## Features

- Add new todo items.
- Edit existing todo items.
- Remove todo items.
- Mark todo items as completed.
- Check all items as completed or incomplete.

## What I Learned

This is my first React project, and through this project, I learned how to use the following React hooks and concepts:

- `useState`: For managing local component state.
- `useContext`: For managing global state using context.
- `useReducer`: For managing complex state logic with reducers.
- `useEffect`: For performing side effects in functional components.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).