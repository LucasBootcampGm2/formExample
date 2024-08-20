let inputSearch = document.getElementById('input-search')
let filterInputs = document.querySelectorAll('.filter-inputs')

filterInputs.forEach(function(button){
    button.addEventListener('click', function(){
        inputSearch.value = button.value
    })
})