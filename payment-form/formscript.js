let closeBtn = document.querySelector('.close')
let closeBtnReg = document.querySelector('#closeReg')
let loginModal = document.querySelector('.login-modal')
let registerModal = document.querySelector('#register')
closeBtn.addEventListener('click', function() {
        loginModal.style.top = "-1000px";
    })

let explore = document.getElementById('purchase-btn')
explore.addEventListener('click', function(e) {
        e.preventDefault()
        loginModal.style.top = "-420px";
        loginModal.style.left ="20px"
    })
    
closeBtnReg.addEventListener('click', function() {
    registerModal.style.top = "-1000px";
})