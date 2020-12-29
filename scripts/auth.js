// Status 
auth.onAuthStateChanged(user=>{
    if(user){
        document.querySelector('.main').style.display = 'flex';
        document.querySelector('.table').style.display = 'flex';
        document.querySelector('.logout').style.display = 'block';
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.signup').style.display = 'none';
        console.log(user,'user logged in');
    }else{
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.table').style.display = 'none';
        document.querySelector('.logout').style.display = 'none';
        document.querySelector('.login').style.display = 'block';
        document.querySelector('.signup').style.display = 'block';
        console.log('user logged out');
    }
})


// signup
const singUpForm =  document.querySelector('#signupForm');
singUpForm.addEventListener('submit',(e)=>{
    const email = singUpForm['email'].value;
    const password = singUpForm['password'].value;

    auth.createUserWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred);
    });
    singUpForm.reset();
    document.querySelector('.modalSignup').style.display = 'none'; 
    console.log(email,password);
    e.preventDefault();
})

// logout
const signout = document.querySelector('#logout');
signout.addEventListener('click', (e)=>{
    auth.signOut().then(()=>{
        console.log('logged out');
    })
    e.preventDefault();
})

// login
const logInForm =  document.querySelector('#logInForm');
logInForm.addEventListener("submit",(e)=>{

    const email = logInForm['logInemail'].value;
    const password = logInForm['logInpassword'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred);
    })

    logInForm.reset();
    document.querySelector('.modalLogin').style.display = 'none';
    e.preventDefault();
})