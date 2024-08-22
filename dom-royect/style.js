let inputSearch = document.getElementById('input-search')
let filterInputs = document.querySelectorAll('.filter-inputs')

let cards = document.querySelectorAll('.card')
let types = document.querySelectorAll('.card-type-p')

filterInputs.forEach(function(button){
    button.addEventListener('click', function(){
        inputSearch.value = button.value
        types.forEach(function(type,idx){
            if (!(types[idx].innerHTML === inputSearch.value)){
                cards[idx].classList.add('hidden')
            } 
            else {
                cards[idx].classList.remove('hidden')
            }
                
        })    
    })
})


inputSearch.addEventListener('input', function(){
    types.forEach(function(type,idx){
        if (type.innerHTML === inputSearch.value){
            cards[idx].classList.remove('hidden')
        } 
        else {
            cards[idx].classList.add('hidden')
        }
            
    })
})


console.log(inputSearch)

inputSearch.addEventListener('load', function(){
    if (inputSearch.value === 'null') {
        cards[idx].classList.remove('hidden')
    } 
})