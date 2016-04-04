db.users.insert({_id: '111-222', name: 'John', age: 16, date_of_birth: ISODate("1990-05-09T00:00:00.000Z")});
db.users.insert({_id: '111-333', name: 'Jay', age: 16, date_of_birth: ISODate("1995-03-01T00:00:00.000Z")});

db.users.find();

db.users.createIndex({date_of_birth: 1, name: 1}, {unique: true});
// would have to do a schema migration if duplicates

db.cars.insert({make: 'Telsa', model: 'Model 3', year: '2017', color: 'red', _id: 'TEL-33R', available: true});
db.cars.insert({make: 'Telsa', model: 'Model 3', year: '2017', color: 'blue', _id: 'TEL-33B', available: false});
db.cars.insert({make: 'Telsa', model: 'Model 3', year: '2017', color: 'green', _id: 'TEL-33G', available: true});

db.cars.find().pretty();

db.booking.insert({
  _id: 'BOOKING-1',
  state: 'pending',
  user_id: '111-222',
  days: 2,
  start_date: new Date(),
  car_id: 'TEL-33R'
});

db.cars.update({_id: 'TEL-33R', available: true}, {available: false, booking_id: 'BOOKING-1'});
db.booking.update({_id: 'BOOKING-1'}, {$set: {state: 'active'}});

// find all cars which are available
db.cars.find({available: true});

// find all cars which are booked
db.cars.find({available: false});

// find all cars which are by first user
db.bookings.find({state: 'active', user_id: '111-222'});

// find all cars which are by second user
db.bookings.find({state: 'active', user_id: '111-333'});


// simple metrics


// count of active bookings
db.bookings.find({state: 'active'}).count();

// count of completed bookings
db.bookings.find({state: 'completed'}).count();

// count of users
db.users.count();


// average, min, max bookings per month etc.


// regex
db.users.find({name: $regex: /J/}});