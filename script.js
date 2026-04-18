/* Cursor Logic */
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function anim(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim)})();
document.querySelectorAll('a,button,.pcard').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='18px';cur.style.height='18px';ring.style.width='52px';ring.style.height='52px';ring.style.opacity='.7'});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';ring.style.width='36px';ring.style.height='36px';ring.style.opacity='.4'});
});

/* Tab Switching */
function sw(btn,id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.proj-grid').forEach(g=>g.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(id).classList.add('on');
}

/* Count Up Animation */
function countUp(id,to){
  const el=document.getElementById(id);let s=null;
  (function step(ts){if(!s)s=ts;const p=Math.min((ts-s)/1400,1);el.textContent=Math.floor(p*to)+(p>=1?'+':'');if(p<1)requestAnimationFrame(step)})(performance.now());
}
setTimeout(()=>{countUp('cn1',4);countUp('cn2',8)},600);

/* Intersection Observer for Reveals */
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');obs.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* Skill Bars Animation */
const sobs=new IntersectionObserver(e=>e.forEach(x=>{
  if(x.isIntersecting){x.target.querySelectorAll('.sk-fill').forEach(f=>f.style.width=f.dataset.w+'%');sobs.unobserve(x.target)}
}),{threshold:.3});
document.querySelectorAll('#skill-list').forEach(el=>sobs.observe(el));