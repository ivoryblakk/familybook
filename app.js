function init() {
  //controller.displayProfiles(profileDB);
  //controller.displayJoinForm();
  // controller.displayProfiles(profileDB);
  handlers.setupEvents();
  controller.displayJoinForm();
  model.setDb(profileDB);
  controller.setModel(model);
}