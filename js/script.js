//Entrada dos dados
const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

//Array com todas as teclas da calculadora
const allowedKeys = ["(", ")", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", " "];

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
    charKeyBtn.addEventListener('click', () => {
       const value = charKeyBtn.dataset.value;
       input.value += value;
    });
});

document.getElementById('clear').addEventListener('click', () => {
    input.value = '';
    input.focus();
});

document.getElementById('equal').addEventListener('click', calculate);

input.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (allowedKeys.includes(e.key)) {
        input.value += e.key;
        return;
    }
    if (e.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
    }
    if (e.key === 'Enter') {
        calculate();
    }
});

function calculate() {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');
}

document.getElementById('themeSwitcher').addEventListener('click', () =>  {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#26834a');
        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        main.dataset.theme = 'dark';
    }
});

document.getElementById('copyToClipboard').addEventListener('click', (e) => {
    const button = e.currentTarget;
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!';
        button.classList.add('success');
        navigator.clipboard.writeText(resultInput.value); // Isso faz com que de um ctrl + c no valor do input
    } else {
        button.innerText = 'Copy';
        button.classList.remove('success');
    }
})

