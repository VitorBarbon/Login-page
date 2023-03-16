function toggleButtonPassword (isVisible, classHtml, element) {
  const inputPassword = document.querySelector('#password-field')

  switch(isVisible) {
    case 'visible': 
      element.classList.remove(classHtml)
      element.classList.add(`${classHtml}-low-vision`)
      inputPassword.type = 'text'
      break 
    case 'hidden':
      element.classList.remove(classHtml)
      element.classList.add(classHtml.slice(0, -11))
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

    if(element.classList.contains('fa-eye')) return toggleButtonPassword('visible', 'fa-eye', element)

    if(element.classList.contains('fa-eye-low-vision')) return toggleButtonPassword('hidden', 'fa-eye-low-vision', element)
    
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



