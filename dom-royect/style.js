let inputSearch = document.getElementById('input-search')
let filterInputs = document.querySelectorAll('.filter-inputs')

filterInputs.forEach(function(button){
    button.addEventListener('click', function(){
        inputSearch.value = button.value
    })
})

let cards = document.querySelectorAll('.card')
let types = document.querySelectorAll('.card-type-p')
console.log(cards)
console.log(types)
inputSearch.addEventListener('input', function(){
    types.forEach(function(type,idx){
        if (!(type.innerHTML === inputSearch.value)){
            cards[idx].classList.add('hidden')
        } else {
            cards[idx].classList.remove('hidden')
        }
            
    })
    
})