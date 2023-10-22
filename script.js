
const codeInput = document.querySelector('.code-input');
const copyButton = document.querySelector('.copy-button');
const saveButton = document.querySelector('.save-button');
const lockButton = document.querySelector('.lock-button');
const changeThemeButton = document.querySelector('.change-theme-button');
const codeEditor = document.querySelector('.code-editor');

let isLocked = false;
let isDarkTheme = false;

//handling lock button

lockButton.addEventListener('click', () => {
    isLocked = !isLocked;
    codeInput.readOnly = isLocked;
    lockButton.textContent = isLocked ? 'Unlock' : 'Lock';
});


//implementing copy button logic
copyButton.addEventListener('click', () => {
    codeInput.select();
    document.execCommand('copy');
});


//implementing save button logic

saveButton.addEventListener('click', () => {
    let textArea=document.getElementById("text-area");
    let savedData=textArea.value;
    localStorage.setItem("data",savedData);
    alert('Code saved!');
});


//implementing change theme button logic
changeThemeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        codeInput.classList.add('dark-theme');
        codeInput.classList.remove('light-theme');
    } else {
        codeInput.classList.add('light-theme');
        codeInput.classList.remove('dark-theme');
    }
});
