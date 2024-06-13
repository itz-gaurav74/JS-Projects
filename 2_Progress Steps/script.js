let progress = document.querySelector('.progress');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let circles = document.querySelectorAll('.circle');


let currentActive = 1

let cl = console.log.bind(console);

next.addEventListener('click',() => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})


let update = () => {
    circles.forEach((circle, index) => {
            if (index < currentActive) {
                cl(`Current Active Is ${currentActive}`)
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }

            let actives = document.querySelectorAll('.active')
            
            // cl(`Total Now Active ${actives}`)

            progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

            // ((1 - 1) / (4 - 1) ) * 100 

            cl(`Progress Width Is ${progress.style.width}`)

            if (currentActive === 1) {
                prev.disabled = true;
                
            } else if(currentActive === circles.length){
                next.disabled = true;
            }else{
                prev.disabled = false;
                next.disabled = false;
            }
        
    })
    cl('---------------')
}


update();
