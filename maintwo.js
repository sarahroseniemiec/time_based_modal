console.log('hello');

var modaloverlay = document.getElementById('modaloverlay')
modaloverlay.style.display = 'none'

var modal = document.getElementById('modal')
modal.style.display = 'none'

setTimeout (function () {
  modal.style.display = 'block'
  modaloverlay.style.display = 'block'
}, 3000)

var closebutton = document.getElementById('closebutton')

closebutton.addEventListener('click', function (event) {
  modal.style.display = 'none'
  modaloverlay.style.display = 'none'
})

var submit = document.getElementById('submit')

submit.addEventListener('click', function (event) {
  var congrats = document.getElementById('congrats')
  congrats.innerHTML = "Congrats you're on your way to happier home full of plants!"
})
