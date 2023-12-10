const $ = (str, ...params) => {
    const all = params.find(el => typeof el === 'boolean')
    const parent = params.find(el => typeof el === 'object') || document

    return all ? [...parent.querySelectorAll(str)] : parent.querySelector(str)
}

const openCardModal = e => {

}

const createModal = () => {
    const element = document.createElement('div')
    element.classList.add('modal-container')
    return element
}

const cloneAndPosition = element => {
    const clone = element.cloneNode(true)
    clone.style.opacity = 0
    clone.style.position = 'fixed'
    // clone.style.top = 0 // `${coords.y}px`
    // clone.style.left = 0 // `${coords.x}px`

    const setShow = () => {
        document.body.appendChild(clone)
        clone.style.opacity = 1
    }

    return { clone, setShow }
}

const cardModal = ({ title, content, img }) => {
    const element = document.createElement('div')
    element.classList.add('modal-card')

    element.innerHTML = /* html */ `
        <div class="card">
            <img src="img/img1.jpg" alt="">
            <h4>${title}</h4>
            <div class="content">

            </div>
        </div>
    `

    $('h4', element).addEventListener('click', e => {
        
    })

    return element
}





const setModal = parent => {
    const { clone, setShow } = cloneAndPosition(parent)
    setShow()
    setTimeout(()=>goToCenter(clone), 1000)
    
    // centerConvention(clone)
}


const getCenterScreen = () => {
    return {
        x: screen.width/2,
        y: screen.height/2
    }
}
const getPosition = el => {
    const coords = el.getBoundingClientRect()
    return {
        x: coords.x + coords.width/2,
        y: coords.y + coords.height/2
    }
}
const getLengthToCenter = el => {
    const elSizes = getPosition(el)
    const end = getCenterScreen()
    return {
        x: end.x - elSizes.x,
        y: end.y - elSizes.y
    }
}
const getLengthTransformToCenter = el => {
    const elSizes = el.getBoundingClientRect()
    const width = elSizes.width
    const height = elSizes.height
    
    const { x, y } = getLengthToCenter(el)
    const translateX = 100 * x / width
    const translateY = 100 * y / height
    console.log(x,y)
    return {
        x: translateX,
        y: translateY
    }
}
const goToCenter = el => {
    const { x, y } = getLengthTransformToCenter(el)
    el.style.transition = 'all 3s'
    el.style.transform = `translateX(${x}%) translateY(${y}%)`
}
const centerConvention = el => {
    el.style.top = '50%'
    el.style.left = '50%'
    el.style.transform = 'translateX(-50%) translateY(-50%)'
}

const card = cardModal({ title: 'React' })
$('#root').appendChild(card)
setModal(card)