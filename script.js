const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

function togglenav(){
    // to make the bars as a x sign
    menuBars.classList.toggle('change')
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')) {

        overlay.classList.remove('overlay-slide-left')
        overlay.classList.add('overlay-slide-right')
        

        nav1.classList.remove('slide-out-1')
        nav1.classList.add('slide-in-1')
        nav2.classList.remove('slide-out-2')
        nav2.classList.add('slide-in-2')
        nav3.classList.remove('slide-out-3')
        nav3.classList.add('slide-in-3')
        nav4.classList.remove('slide-out-4')
        nav4.classList.add('slide-in-4')
        nav5.classList.remove('slide-out-5')
        nav5.classList.add('slide-in-5')

        // animate in
        // for (let i = 1; i < 6; i++) {
        //     `nav${i}`.classList.remove(`slide-out-${i}`)
        //     `nav${i}`.classList.add(`slide-in-${i}`)
            
        // }

    } else {
        overlay.classList.remove('overlay-slide-right')
        overlay.classList.add('overlay-slide-left')
        
        // for (let i = 1; i < 6; i++) {
        //    `nav${i}`.classList.remove(`slide-in-${i}`)
        //     `nav${i}`.classList.add(`slide-out-${i}`)
            
        // }
        nav1.classList.remove('slide-in-1')
        nav1.classList.add('slide-out-1')
        nav2.classList.remove('slide-in-2')
        nav2.classList.add('slide-out-2')
        nav3.classList.remove('slide-in-3')
        nav3.classList.add('slide-out-3')
        nav4.classList.remove('slide-in-4')
        nav4.classList.add('slide-out-4')
        nav5.classList.remove('slide-in-5')
        nav5.classList.add('slide-out-5')
    } 

}

menuBars.addEventListener('click',togglenav)
nav1.addEventListener('click',togglenav)
nav2.addEventListener('click',togglenav)
nav3.addEventListener('click',togglenav)
nav4.addEventListener('click',togglenav)
nav5.addEventListener('click',togglenav)
