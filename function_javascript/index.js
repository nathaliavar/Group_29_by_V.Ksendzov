      const minAge = 18
      const maxAge = 60
      const inputButton = document.getElementById('show-button')
      
      function change(){
        inputButton.disabled = true
        inputButton.style.background = 'grey';
        inputButton.classList.remove("first");
        inputButton.disabled = true;
        inputButton.style.cursor = 'no-drop'
        inputButton.classList.remove('hover')
      }

      function age(arg){
        const age = +arg
        if (isNaN(age)) return "Не верный тип данных"
      
        if (arg.length == 0) return "Поле не может быть пустым"
      
        if (age < minAge) {
          change()
          return `You don’t have access cause your age is  ${age}.  It’s less then ${minAge}`
      } else if (age >=  minAge && age <  maxAge){
          inputButton.value = "Нажмите, чтобы войти"
          inputButton.style.width = "250px"
          return "Welcome  !"
      } else if (age  > maxAge){
          change()
          document.getElementById('show-button').disabled = true
          return "Keep calm and look Culture channel"
      } else{ 
          change()
          document.getElementById('show-button').disabled = true
          return 'Technical work'}
      } 

      function showCover() {
        let coverDiv = document.createElement('div');
        coverDiv.id = 'cover-div';
  
        // убираем возможность прокрутки страницы во время показа модального окна с формой
        document.body.style.overflowY = 'hidden';
  
        document.body.append(coverDiv);
      }
  
      function hideCover() {
        document.getElementById('cover-div').remove();
        document.body.style.overflowY = '';
      }
  
      function showPrompt(text, callback) {
        showCover();
        let form = document.getElementById('prompt-form');
        let container = document.getElementById('prompt-form-container');
        document.getElementById('prompt-message').innerHTML = text;
        form.text.value = '';
  
      function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
      }
  
      form.onsubmit = function() {
        let value = form.text.value;
        if (value == '') return false; // игнорируем отправку пустой формы

        complete(value);
        return false;
      };

      form.cancel.onclick = function() {
        complete(null);
      };

      document.onkeydown = function(e) {
        if (e.key == 'Escape') {
          complete(null);
        }
      };

      let lastElem = form.elements[form.elements.length - 1];
      let firstElem = form.elements[0];

      lastElem.onkeydown = function(e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
      };

      firstElem.onkeydown = function(e) {
        if (e.key == 'Tab' && e.shiftKey) {
          lastElem.focus();
          return false;
        }
      };

      container.style.display = 'block';
      form.elements.text.focus();
    }

document.getElementById('show-button').onclick = function() {
  showPrompt("Введите ваш возраст", function(value) {
  document.getElementById('age').innerHTML = age(value)
  });
};

