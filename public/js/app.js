// btn
const signUpBtn = document.querySelector('.sign-up-btn');
const mainBtn = document.querySelector('.ham-btn');
const passcheck = document.querySelector('.passwordcheck')
const search = document.querySelector('.search')
// modal
const modalSignUp = document.querySelector('.modal-signup');
const modalLogIn = document.querySelector('.modal-login');

// event listeners
window.addEventListener('click', function(e) {
    if (e.target === modalLogIn || e.target === modalSignUp) {
         modalLogIn.style.display = 'none';
         modalSignUp.style.display = 'none';
     }
 });

mainBtn.addEventListener('click', function() {
    modalLogIn.style.display = 'block';
});

if(signUpBtn){
  signUpBtn.addEventListener('click', function() {
    modalSignUp.style.display = 'block';
  });
}

  search.addEventListener('keyup', function() {
    const title = document.querySelectorAll('.title')
    const autoComplete = document.querySelector(".autocomplete")
    let input = document.querySelector('.search')
    const filter = input.value.toUpperCase()

  // remove autocomplete list
    while(autoComplete.hasChildNodes()){
      autoComplete.removeChild(autoComplete.firstChild)
    }
  //if input value exists, repopulate the autocomplete list
    if(input.value){
      for(let i = 0; i < title.length; i++){
        if(title[i].innerText.toUpperCase().includes(filter)){
          const list = document.createElement("li")
          const tag = document.createElement("a")
          tag.setAttribute("href", title[i].getAttribute("href"))
          list.innerText = title[i].innerText
          tag.appendChild(list)
          autoComplete.appendChild(tag)
        }
      }
    }
  })

  passcheck.addEventListener('keyup', function() {
    const password = document.querySelector('.password').value
    const passwordCheck = document.querySelector('.passwordcheck').value
    const mismatch = document.querySelector('.mismatch')
    const click = document.querySelector(".sign-up-modal-btn")
    if (password === passwordCheck) {
      mismatch.innerText = ''
      click.disabled = false

    } else {
      mismatch.innerText = "Passwords don't match. Please re-enter"
      click.disabled = true
    }
  });
