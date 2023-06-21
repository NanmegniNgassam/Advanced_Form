let sessionKey = 'logged';
let result = sessionStorage.getItem(sessionKey);

if(result == null) {
    window.location.href = '../../index.html';
}

document.write(result as string);