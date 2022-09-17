
const handleTable = (wich) => {

    two = document.getElementsByClassName('main--tables--container')
    if (wich) {
        two[1].style.display = 'grid'
        two[0].style.display = 'none'
    } else {
        two[0].style.display = 'grid'
        two[1].style.display = 'none'
    }
}