import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true},
    password: {type: String, required: true },
    favourites: [{type: mongoose.Schema.Types.ObjectId, //NEW: ADD A FAVOURITES FIELD
                ref: 'Movie', unique: true}]
  });
  
  // NEW:A static funtion to find by username
  UserSchema.statics.findByUserName = function(username) { 
    return this.findOne({ username: username});
  };
  
  // NEW:A instance funtion to add a favourite movie.
  UserSchema.methods.addFavourite = function(movieId) {
    this.favourites.push(movieId);
    return this.save();
  };

export default mongoose.model('User', UserSchema);