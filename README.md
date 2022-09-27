# MOVIE-APP

Before executing the app locally:

- run: npm install
- create an .env file at the root level of the project.
- In the .env file create an environment variable called REACT_APP_API_KEY={Here you write your api key}

Execute the app locally:

- run: npm start

# DEPENDENCIES

Extra dependencies installed:

- @reduxjs/toolkit
- react-redux
- redux-persist
- react-router-dom
- tailwindcss

Extra devDependencies installed:

- autoprefixer
- postcss

# CONFIGURATION FILES ADDED

For tailwindcss:

- tailwind.config.js
- postcss.config.js
- Also added @tailwind base; @tailwind components; @tailwind utilities; in index.css file

# SERVICES FOLDER

Here we create Services which are Classes with static methods that help us make api calls to our api.

# CONFIG FOLDER

constants.ts file: Here we create and export constant variables that we might use in any place of the project.
