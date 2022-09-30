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

MovieDetailsCardComponent:

It is a similar to the MovieCardComponent but it is larger and has more information about the movie. You display this component in the
MovieDetailsPage where you pass an id in the url of the specific movie.

RateMovieFormComponent:

Form where you rate the movie shown on MovieDetailsPage and write some comment.

RatingCountComponent:

A star with the vote_average of the movie or the rate of some review.

ReviewCardComponent:

This component shows a specific review with the username, avatar, rate and comment.

ReviewCardListComponent:

This component shows a list of ReviewCardComponent.

SpinnerComponent:

It is used when loading data or any page.

# ABOUT PAGES

NotFoundPage:

It is the 404 Not Found page. If the user visits any route that does not exist in our app, this page will be shown.

HomePage:

This is the main page. Here we will show by default the most popular movies.

MyListPage:

In this page the user can see a list of the movies that they have rated or written some comment about.

MovieDetailsPage:

In this page we show all the details of an specific movie that we get from our api using the id that we get from the url of the page.
In this page we display the MovieDetailsCardComponent.
In this page we also show the list of reviews of that specific movie and also a form where you can create more reviews.

SearchMoviePage:

Here we get the list of movies searched by the text typed in the search input of the TopNavbarComponent.

# ABOUT REDUX:

store folder:

In this folder we configure our redux store and create all our reducers with their state and actions.
