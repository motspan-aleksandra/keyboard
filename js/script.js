let keyboard = document.querySelector('.keyboard');
const keyss = document.querySelectorAll('.key');
const keys = Array.prototype.slice.call(keyss);
const input = document.querySelector('.input__bar');




parent.addEventListener('click', (e) => {
    console.log(e);
    console.log('click');
    e.preventDefault();


    let targetBtn = e.target;

    console.log('button defined');

    if (targetBtn.getAttribute('class') == "key") {
        if (targetBtn.textContent == "Space") {
            input.textContent += " ";
        } else if (targetBtn.textContent == "Backspace") {
            console.log(input.textContent[input.textContent.length - 1]);
            input.textContent = input.textContent.replace(input.textContent[input.textContent.length - 1], '')
        } else {
            input.textContent += targetBtn.textContent;
    
        }
        console.log(targetBtn.textContent);
        console.log(input.textContent);

    }

})