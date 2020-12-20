const inputs = document.querySelectorAll('input');

function activeFocus() {
    let element = this.parentNode.parentNode;

    if(this.value === "") {
        element.classList.add('input-block__focus');
    }
}

function removeFocus() {
    let element = this.parentNode.parentNode;

    if(this.value === "") {
        element.classList.remove('input-block__focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', activeFocus);
    input.addEventListener('blur', removeFocus);
})