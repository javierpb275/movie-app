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

# INTERFACES FOLDER

Here we create the interfaces that represent the data that we get from our api.

# ABOUT COMPONENTS

LayoutComponent:

This component wraps all the different pages of our app and with it we can have certain components and styles
always present in our app, for example the TopNavbarComponent and set the background color to black.

TopNavbarComponent:

This is the navigation bar which will always be present in our app. With it, the user can navigate to
the diffreent pages of our app and search for some movie.

MovieCardComponent:

A card component that shows the poster and the title of some movie. This card receives props like the poster url, the title and the id
of a movie that we get from our api. When you click on the poster the user goes to movie/:movieId (movieId: the id property of that movie).

MovieCardListComponent:

This component displays a list of MovieCardComponent by looping through a list of movies from our api and for each one,
you display that component and pass the properties of some movie from the list.

# ABOUT PAGES

NotFoundPage:

It is the 404 Not Found page. If the user visits any route that does not exist in our app, this page will be shown.

HomePage:

This is the main page. Here we will show by default the most popular movies.

MyListPage:

In this page the user can see a list of the movies that they have rated or written some comment about.
