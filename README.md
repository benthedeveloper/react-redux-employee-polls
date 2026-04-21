# Employee Polls

A web application built using React + Redux that allows pretend "employees" to create polls, answer other employee's polls, and view a leaderboard. This app is built for the final project of Udacity's [React and Redux course](https://www.udacity.com/course/react-and-redux--cd0547).

## Prerequisites

* NodeJS and NPM. I recommend installing [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to be able to easily switch between different versions of Node.
  * This project has been verified to work with NodeJS v25.6.0 and NPM v11.8.0.

## How to get started

1. Clone the repo: `git clone https://github.com/benthedeveloper/react-redux-employee-polls.git`
2. Install dependencies: `npm install`
3. Run the app locally. Open a terminal:
    1. Preview: `npm start`, then open a browser and navigate to [http://localhost:3001/](http://localhost:3001/)
    2. Dev mode: `npm run dev`, then open a a browser and navigate to [http://localhost:5173/](http://localhost:5173/)
4. You should see a login screen. Log in as a user. The user accounts can be found in `src/utils/_DATA.js`.
    1. Example: username: `sarahedo`, password: `password123`
    2. Note that these usernames and passwords are just for testing purposes in this demo app. You should never store sensitive data in plain text.
5. To stop the local server, in the terminal type `q` then `Enter`. Or `Ctrl + C` to force quit.

## Testing

This project was built using [Vite](https://vite.dev/), and uses [Vitest](https://vitest.dev/) for testing. There are unit tests for the functions in `src/utils/_DATA.js`, a snapshot test for the NavBar component, and some browser tests for a few other components. Unit tests are located in `src/tests/unit`, and browser tests are located in `src/tests/browser`.

To run the tests, from the terminal, run `npm test`. This will show the results in the terminal, as well as open up a browser where you can see the tests an run individual tests.

## Notes

In the "Confirm completion" section for the project on Udacity, it says: _For files that include JSX, please do not use the .jsx extension (use .js instead)._ However, I could not get browser tests to work with Vitest when using .js files. As far as I could tell, the only way I could fix the problem was by renaming all my .js files to .jsx.
