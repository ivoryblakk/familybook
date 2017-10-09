var view = {
  /* showAllProfiles: function(profileDB) {
    for (var i = 0; i < profileDB.length; i++) {
      var ul = document.createElement('ul');
      ul.setAttribute('class', 'profiles');
      document.body.appendChild(ul);
      ul.innerHTML = 'money';
    } // this code is not finished
  }, */
  joinForm: function () {
    var joinButton = document.getElementById('joinForm');
    if (joinButton.style.display === 'none') {
      joinButton.style.display = 'block';
    } else {
      joinButton.style.display = 'none';
    }
  }
};