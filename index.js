document.addEventListener('DOMContentLoaded', function() {
    var todoList = document.getElementById('todoList');
    var msgInput = document.getElementById('msgInput');
    var msgButton = document.getElementById('msgButton');
  
    msgButton.addEventListener('click', function() {
      var message = msgInput.value.trim();
  
      if (message !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = message;
        todoList.appendChild(listItem);
        msgInput.value = '';
      }
    });
  });