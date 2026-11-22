(function(){
  var th=document.getElementById('theme');
  if(!th) return;
  th.value=document.documentElement.getAttribute('data-theme')||'';
  th.addEventListener('change',function(){
    if(th.value) document.documentElement.setAttribute('data-theme',th.value);
    else document.documentElement.removeAttribute('data-theme');
    try{localStorage.setItem('os-theme',th.value)}catch(e){}
  });
})();
