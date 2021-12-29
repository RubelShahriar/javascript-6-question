// traversing dom
// const btns = document.querySelectorAll('button')

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const item = e.currentTarget.parentElement.parentElement.parentElement
//         item.classList.toggle('show-text')
//     })
// })


// using selector inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(function(ques){
    btn = ques.querySelector('.icon')
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== ques){
                item.classList.remove('show-text')
            }
        })
        ques.classList.toggle('show-text')
    })
})