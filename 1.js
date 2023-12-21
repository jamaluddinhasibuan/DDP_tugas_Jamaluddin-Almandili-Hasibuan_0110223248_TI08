
function login() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    // !==
    if(username !== 'ahmad2017' && password !== 'integrity') {
        return alert('login error')
    }
    document.querySelector('body').innerHTML = '<h1> login success </h1>'
}

