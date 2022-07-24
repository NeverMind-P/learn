var userName = prompt('What\'s your name?', '');
if (userName === null) {
    alert('error');
    document.body.innerHTML = "";
}
else {
    alert('Welcome ' + userName);
}