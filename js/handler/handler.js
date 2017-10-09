var handlers = {
  setupEvents: function() {
    //controller.displayProfiles(); // set up to display
    var loginButton = document.getElementById('loginButton');
    var joinButton = document.getElementById('joinButton');
    var submitButton = document.getElementById('addButton');
    joinButton.addEventListener('click', function() {
      controller.displayJoinForm();
    });

    submitButton.onclick = function() {
      var userName = document.getElementById('name').value;
      var age = document.getElementById('age').value;
      var hobbies = document.getElementById('hobbies').value;
      var country = document.getElementById('password').value;
      var object = {
        Name: userName,
        Password: password,
        Hobbies: hobbies
      };
      controller.addUser(object);
      document.getElementById('myForm').reset();
    };
  }
};
