const signInPage= document.getElementById('signIn')
const signUpPage = document.getElementById('signUp')
const signUpBtn = document.getElementById('signUpBtn')
const createSignUp = document.getElementById('createSignUp')
const loadSignIn = document.getElementById('loadSignIn')

const handleSignUp = ()=>{
    signUpPage.style.display = 'block'
    signInPage.style.display = 'none'
    createSignUp.style.display = 'none'
}

const handleSignIn =  ()=>{
    signUpPage.style.display = 'none'
    signInPage.style.display = 'block'
    createSignUp.style.display = 'block'
}

loadSignIn.addEventListener('click', handleSignIn)
createSignUp.addEventListener('click', handleSignUp)
signUpBtn.addEventListener('click', handleSignUp)
signInBtn.addEventListener('click', handleSignIn)