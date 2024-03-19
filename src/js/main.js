document.addEventListener("DOMContentLoaded", ready())

function ready () {
    const maaa = document.querySelector('#maaa') 
    const select = document.getElementById('program-select')
    const programs = document.querySelectorAll('.program')
    const headings = document.querySelectorAll('.faq-question')

    headings.forEach((heading) => {
        let btn = heading.querySelector('button')
        let target = heading.nextElementSibling
        
        btn.addEventListener('click', () => {
            let expanded = btn.getAttribute('aria-expanded') === 'true' || false
            btn.setAttribute('aria-expanded', !expanded)
            target.hidden = expanded  
        })
    })

    select.addEventListener('change', (e) => {
        let selected = e.target.value
        selected === "maaa" ? maaa.classList.remove('hidden') : maaa.classList.add('hidden')
        
        programs.forEach((program) => {
            if(program.id === selected) {
                program.classList.remove('hidden')
            } else {
                program.classList.add('hidden')
            }
        })
    })
    
    function getURLPath () {
        
        const url = window.location.href;
        
        if (url) {
            let urlObj = new URL(url)
            let path = urlObj.pathname.split('/')[1]
            
            programs.forEach(program => {
                if ( path === "") {
                    maaa.classList.remove('hidden')
                } else if (program.id === path) {
                    program.classList.remove('hidden')
                    select.value = program.id
                } else {
                    program.classList.add('hidden')
                }
            })
            
        } else {
            console.log("Invalid URL")
        }   
    }
    
    getURLPath()
    
}









