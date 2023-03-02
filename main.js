const container = document.querySelector('.container')
const colors = ['89a1d4cc', '#0073BC', '#38B75E', '#DE365C']

const figures = () => {
    for(let i = 0; i <= 25; i++){
        let figure = document.createElement('span')
        let select = Math.round(colors.length * Math.random())

        figure.style.top = innerHeight * Math.random() + 'px'
        figure.style.left = innerWidth * Math.random() + 'px'
        figure.style.background = colors[select >= colors.length ? select - 1 : select]

        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px'
            figure.style.left = innerWidth * Math.random() + 'px'
        }, 5000)
    }
}

figures()