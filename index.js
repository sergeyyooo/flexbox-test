const submitButton = document.getElementById('submitButton')
submitButton.onclick = (e) => {
    const className = document.getElementById('classNameInput').value
    const background = document.getElementById('stylesInput').value
    applyStyleToEveryInputByClassName(className, background)
}

const applyStyleToEveryInputByClassName = (className,color) => {
    const newClassName = '.' + className
    const elements = [...document.querySelectorAll(newClassName)]
    for(let element of elements){
        element.style.backgroundColor = color
    }
}