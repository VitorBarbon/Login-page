function toggleButtonPassword (isVisible) {
  const inputPassword = document.querySelector('#password-field')
  const buttonVisible = document.querySelector('.eye-solid') 
  const buttonHidden = document.querySelector('.eye-low-vision')

  switch(isVisible) {
    case 'visible': 
      buttonVisible.classList.add('hidden')
      buttonHidden.classList.remove('hidden')  
      inputPassword.type = 'text'
      break 
    case 'hidden':
      buttonHidden.classList.add('hidden')
      buttonVisible.classList.remove('hidden')
      inputPassword.type = 'password'
      break
  }
}

function handleValidate(element) {
  const errors = []
  const errorPassword = document.querySelector('.error-password')
  const errorEmail = document.querySelector('.error-email')
  const inputs = document.querySelectorAll('input')
  let isValid = true;

  inputs.forEach((item) => {
    
    if(item.type === 'email') {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      errorEmail.innerHTML = ''
      
      if(!regex.test(item.value)) {
        errorEmail.innerHTML = 'O email informado não é válido.'
        item.value = ''
        isValid = false;  
      }
    }

    if(item.type === 'password' || item.type === 'text') {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
      errorPassword.innerHTML = ''
      
      if(!regex.test(item.value)) {
        errorPassword.innerHTML = 'A senha informada não é válida.'
        item.value = ''
        isValid = false;
      }
    }
  })
  return isValid
}

(() => {
  document.addEventListener('click', (event) => {
    event.preventDefault()
    const element = event.target
    console.log(element)

    if(element.classList.contains('eye-solid')) return toggleButtonPassword('visible')

    if(element.classList.contains('eye-low-vision')) return toggleButtonPassword('hidden')
    
    if(element.classList.contains('btn-submit')) {
      if(!handleValidate(element)) return
      const button = document.querySelector('.btn-submit')
      console.log(button)
      button.innerHTML = '<div class="lds-dual-ring"></div>'

      setTimeout(() => {
        button.style.cssText = 'font-size: 32px; padding: 0px;'
        button.innerHTML = '&#10003'
      }, 1000);
    }
  })
})()



