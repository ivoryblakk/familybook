var model = require('../model/model');

var controller = {
  DB: {},
  displayProfile: function(entry_id, callback) {
    model.read(entry_id, callback);
  },
  add: function(new_object, callback) {
    model.create(new_object, callback);
  },
  update: function(entry_id, new_value, callback) {
    model.update(entry_id, new_value, callback);
  },
  delete: function(entry_id, callback) {
    model.remove(entry_id, callback);
  },
  /* displayProfiles: function(profileDB) {
    view.showAllProfiles(profileDB);
  }, */
  setModel: function(model_obj) {
    this.model = model_obj;
  },
  displayJoinForm: function() {
    view.joinForm();
  },

  home: function() {
    view;
  }
};
controller.add({ name: 'Gee' }, function() {});
console.log(model.db);
