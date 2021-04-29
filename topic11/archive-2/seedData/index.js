import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import { movies } from './movies';
import { users } from './users';


// deletes all user documents in collection and inserts test data
async function loadUsers() {
  try {

    await userModel.deleteMany();
    await userModel.collection.insertMany(users);
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
async function loadMovies() {
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

if (process.env.seedDb) {
  loadUsers();
  loadMovies();
}