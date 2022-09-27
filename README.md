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

# ABOUT COMPONENTS

LayoutComponent:

This component wraps all the different pages of our app and with it we can have certain components and styles
always present in our app, for example the TopNavbarComponent and set the background color to black.

TopNavbarComponent:

This is the navigation bar which will always be present in our app. With it, the user can navigate to
the diffreent pages of our app and search for some movie.

# ABOUT PAGES

HomePage:

This is the main page. Here we will show by default the most popular movies.

MyListPage:

In this page the user can see a list of the movies that they have rated or written some comment about.
