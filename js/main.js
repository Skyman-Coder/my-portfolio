const container = document.querySelector('.container');


window.addEventListener('load', () => {
    container.style.opacity = "1";
    container.style.transform = "translate(-50%, -40%) scale(1)";

    const dots = document.querySelectorAll('.dots');

    dots.forEach(element => {
        const fill_count = element.attributes['fill'].value;
        let total = 4;
    
        for (let i = 0; i < fill_count; i++, total--) {
            const dot = document.createElement('span');
            dot.classList.add('dot'); //adding dots (filled)
            dot.classList.add('filled');
            element.appendChild(dot);
        }
        for(let i = 0; i < total; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot'); //adding empty dots (non-filled)
            element.appendChild(dot);
        }
    });
});