const box = document.getElementById('box');

// function to move the box randomly within the viewport
box.addEventListener('mouseover', function(){
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;
  const maxX = viewportWidth - box.offsetWidth;
  const maxY = viewportHeight - box.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  box.style.left = newX + 'px';
  box.style.top = newY + 'px';
})

box.addEventListener('mouseover', (()=> {
  box.textContent = `YOU CAN'T`
}))

box.addEventListener('mouseout', (()=> {
  setTimeout(()=>{
    box.textContent = 'Catch Me'
  }, 1000)
}))
