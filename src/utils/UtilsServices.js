const formValidation = (e) => {
  const requiredFields = document.querySelectorAll('input[required]')

  let valid = true
  requiredFields.forEach((field) => {
    if (!field.checkValidity()) {
      e.stopPropagation()
      e.target.classList.add('was-validated')
      setTimeout(() => {
        e.target.classList.remove('was-validated')
      }, 5000)
      valid = false
    }
  })

  return valid
}

const UtilsServices = {
  formValidation,
}

export default UtilsServices;
