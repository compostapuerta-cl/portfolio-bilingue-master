const $ = (str, ...params) => {
    const all = params.find(el => typeof el === 'boolean')
    const parent = params.find(el => typeof el === 'object') || document

    return all ? [...parent.querySelectorAll(str)] : parent.querySelector(str)
}
const cardModal = ({ title, content, img }) => {
    const element = document.createElement('div')
    element.classList.add('modal-card', 'card')

    element.innerHTML = /* html */ `
        <img src="img/img1.jpg" alt="">
        <h4>${title}</h4>
        <div class="content">

        </div>
    `

    $('h4', element).addEventListener('click', e => {
        
    })

    return element
}
const createModalContainer = () => {
    const element = document.createElement('div')
    element.style.position = 'fixed'
    element.style.width = '100%'
    element.style.height = '100vh'
    element.style.top = 0
    element.style.left = 0
    element.style.background = 'rgba(0,0,0,.2)'
    return element
}

const setModal = card => {
    const cloneCard = card.cloneNode(true)
    const styles = getComputedStyle(card)
    const _ = parseFloat(styles.padding)

    cloneCard.style.background = 'rgba(0,0,60,.2)'
    cloneCard.style.position = 'absolute'
    
    modalContainer.appendChild(cloneCard)
    
    const coords = card.getBoundingClientRect()
    
    const translateX = coords.left-_*3.5
    const translateY = coords.top-_*4
    cloneCard.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
    
    const centerView = { x: window.innerWidth/2, y: window.innerHeight/2 }
    const centerCard = { x: coords.left + coords.width/2, y: coords.top + coords.height/2 }
    
    setTimeout(()=>{
        console.log(centerView, centerCard)
        cloneCard.style.width = 'auto'
        cloneCard.style.height = 'auto'
        cloneCard.style.transformOrigin = 'center'
        cloneCard.style.transition = 'all 1s'
        const newTranslateX = translateX + centerView.x-centerCard.x
        const newTranslateY = translateY + centerView.y-centerCard.y
        cloneCard.style.transform = `scale(1) translateX(${newTranslateX}px) translateY(${newTranslateY}px)`
        // cloneCard.style.width = '50%'
        // cloneCard.style.height = '50%'
    }, 0)
}

const card = cardModal({ title: 'React' })
const modalContainer = createModalContainer()
// $('body').appendChild(modalContainer)
$('#root').appendChild(card)
// setModal(card)