import mongoose from 'mongoose';

export default {

   init() {
      // Connect to database
      mongoose.connect("mongodb://localhost:27017/contacts_db");
      const db = mongoose.connection;

      db.on('error', (err) => {
        console.log(`database connection error: ${err}`);
      });
      db.on('disconnected', () => {
        console.log('database disconnected');
      });
      db.once('open', () => {
        console.log(`database connected to ${db.name} on ${db.host}`);
      });
    }
  }
;
