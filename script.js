document.addEventListener('DOMContentLoaded',()=>{
  const searchInput= document.getElementById('searchInput');
  const cards= document.querySelectorAll('.mes-card');

  searchInput.addEventListener('input',(event)=>{
    const query= event.target.value.toLowerCase();
    cards.forEach ((card)=>{
      const month= card.getAttribute('data-month').toLowerCase();
      if (month.includes(query)){
        card.style.display = '';
      } else {
          card.style.display = 'none';
      }
    });
  });
});