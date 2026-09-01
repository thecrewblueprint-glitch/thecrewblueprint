(function(){
  function text(selector,fallback){var node=document.querySelector(selector);return node&&node.textContent.trim()||fallback}
  function start(){
    if(document.querySelector('.cb-course-shell-header'))return;
    var oldTop=document.querySelector('body > header.top, body > header.site-header, body > .site-header');
    var oldProgress=document.querySelector('.progbox');
    var oldExit=document.querySelector('header a[href*="dashboard"], header a[href*="courses"]');
    var title=text('#topTitle',text('#courseContext',document.title.replace(/\s*[|—-].*$/,'')));
    var context=text('#courseContext',document.title);
    var header=document.createElement('header');header.className='cb-course-shell-header';
    var brand=document.createElement('div');brand.className='cb-course-shell-brand';brand.innerHTML='<a class="cb-course-shell-logo" href="../index.html" aria-label="The Crew Blueprint home"></a><div class="cb-course-shell-context"></div>';brand.querySelector('.cb-course-shell-context').textContent=context||title;
    var progress=document.createElement('div');progress.className='cb-course-shell-progress';if(oldProgress)progress.appendChild(oldProgress);
    var exit=document.createElement('a');exit.className='cb-course-shell-exit';exit.href=oldExit?oldExit.getAttribute('href'):'../lms-dashboard.html';exit.textContent=oldExit?oldExit.textContent.trim():'← Exit Course';
    header.append(brand,progress,exit);document.body.prepend(header);document.body.classList.add('cb-course-shell-ready');
    document.querySelectorAll('body > footer, body > .site-footer').forEach(function(node){node.remove()});
    var footer=document.createElement('footer');footer.className='cb-course-shell-footer';footer.innerHTML='<div class="cb-course-footer-brand"><span class="cb-course-footer-mark" aria-hidden="true"></span><span>The Crew <span>Blueprint</span></span></div><nav class="cb-course-footer-links" aria-label="Footer"><a href="../about.html">About</a><a href="../courses.html">Courses</a><a href="../terms-and-conditions.html">Terms</a><a href="../privacy-policy.html">Privacy</a><a href="../contact.html">Contact</a></nav><p>&copy; 2026 The Crew Blueprint, a brand of Deadhang Labor LLC. All rights reserved.</p>';document.body.appendChild(footer);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
