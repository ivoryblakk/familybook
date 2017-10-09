var model = {
  db: {
    0: {
      id: 0,
      userName: 'ivoryblakk',
      age: 32,
      hobbies: 'guitar'
    },
    1: {
      id: 1,
      userName: 'ssesun',
      age: 32,
      hobbies: 'simon says'
    },
    2: {
      id: 2,
      userName: 'Fil',
      age: 32,
      hobbies: '420'
    },
    3: {
      id: 3,
      userName: 'Rein',
      age: 32,
      hobbies: 'American Football'
    }
  },
  id: 3,
  create(new_object, callback) {
    var result = '';
    var err = null;
    var ID = this.id;
    // assigns a unique ID to each ob
    if (typeof new_object == 'object') {
      // You have to put "object" in quotes for it work ... same with "number" when comparing in a if statement
      this.db[this.id] = new_object;
      this.db[this.id].id = ID;
      result = this.db[this.id];
      callback(null, result);
    } else {
      err = 'This is not an object!';
      callback(err, null);
    }
    this.id++;
  },
  read(entry_id, callback) {
    var err = null;
    var result = null;
    if (typeof entry_id == 'number') {
      result = this.db[entry_id];
    } else {
      err = ' not a number ';
    }
    callback(err, result);
    // pass said object into callback
  },
  update(entry_id, new_value, callback) {
    var result = '';
    var err = null;
    if (typeof new_value == 'object') {
      var ID = entry_id;
      this.db[entry_id] = new_value;
      this.db[entry_id].id = ID; // this add the ID number back to the updated object
      result = 'Updated: ' + this.db[entry_id];
    } else {
      err = 'this is not an object';
    }
    callback(err, this.db[entry_id]);
    // replace said entry with said value
  },
  remove(entry_id, callback) {
    var err = null;
    delete this.db[entry_id];
    callback(err);
    // remove object with said id
    // this operation must not change other objects' id's
  }
};

model.create(
  {
    name: 'eraer'
  },
  function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  }
);

model.read(1, function(err, results) {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
  }
});

model.update(
  1,
  {
    name: 'george'
  },
  function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  }
);

module.exports = model;
