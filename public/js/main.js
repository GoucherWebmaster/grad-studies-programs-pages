const maaa = document.querySelector('#maaa')
const maapa = document.querySelector('#maapa')
const select = document.getElementById('program-select')
const programs = document.querySelectorAll('.program')
const headings = document.querySelectorAll('.faq-question')

// faq funtionality
headings.forEach((heading) => {
	// 	get the button 
	let btn = heading.querySelector('button')
	// 	get the faq answer
	let target = heading.nextElementSibling
	
	btn.addEventListener('click', () => {
		// assign the aria-expanded value to 'expanded' variable 		
		let expanded = btn.getAttribute('aria-expanded') === 'true' || false
		// on the button, set aria-expanded to the opposite of the 'expanded' variable
		btn.setAttribute('aria-expanded', !expanded)
		// on the faq answer, set hidden to the 'expanded' variable - toggles answer visibility
      	target.hidden = expanded  
	})
})

// show program based on selection
function showSelected () {

    select.addEventListener('change', (e) => {
        let selected = e.target.value
        console.log(selected)
        selected === "maaa" ? maaa.classList.remove('hidden') : maaa.classList.add('hidden')
        
        programs.forEach((program) => {
            if(program.id === selected) {
                program.classList.remove('hidden')
            } else {
                program.classList.add('hidden')
            }
        })
    })
}

// show program based on URL path
function getURLPath () {

    // get url from browser
    const url = window.location.href;

    // check if the url is valid
    if (URL.canParse(url)) {
        // if valid url -> 
        // construct a new URL object
        let urlObj = new URL(url)
        let path = urlObj.pathname.split('/')[1]
       
        //loop through program list and find the one that matches the path
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

    // if invalid url -> send an invalid message
    } else {
        console.log("Invalid URL")
    }   
}


getURLPath()
showSelected()