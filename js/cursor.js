const ahuraCreateMouseFollow = function(x, y) {
    y += 25;
    x += 25;
    const star = document.createElement('div');
    star.className = 'mouse-follow';
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    document.body.appendChild(star);

    setTimeout(() => {
      const angle = Math.random() * 5 * Math.PI;
      const distance = Math.random() * 50 + 50;
      const moveX = distance * Math.cos(angle);
      const moveY = distance * Math.sin(angle);

      requestAnimationFrame(() => {
        star.style.transform = `translate(${moveX}px, ${moveY}px) scale(0)`;
        star.style.opacity = '0';
      });
    }, 200);

    setTimeout(() => {
      star.remove();
    }, 500);
  }

  document.addEventListener('mousemove', function(e) {
    ahuraCreateMouseFollow(e.pageX, e.pageY);
  });

  document.addEventListener('click', function(e) {
    for (let i = 0; i < 10; i++) {
      ahuraCreateMouseFollow(e.pageX, e.pageY);
    }
  });

/* Change Mouse Cursor */
const cursorDiv1 = document.createElement('div');
    cursorDiv1.className = 'mouse-cursor';
    document.body.appendChild(cursorDiv1);

    // ایجاد div با کلاس mouse-cursor2
    const cursorDiv2 = document.createElement('div');
    cursorDiv2.className = 'mouse-cursor2';
    document.body.appendChild(cursorDiv2);

const MCursor = document.querySelector('.mouse-cursor');
const MCursorinner = document.querySelector('.mouse-cursor2');

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  MCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  MCursorinner.style.left = x + 'px';
  MCursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  MCursor.classList.add('click');
  MCursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  MCursor.classList.remove('click')
  MCursorinner.classList.remove('cursorinnerhover')
});

