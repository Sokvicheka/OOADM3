function showPage(id){
document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));
document.getElementById(id).classList.remove('hidden');
renderAll();
}
function logout(){localStorage.removeItem('currentUser');location='index.html';}
function renderAll(){document.getElementById('statBooks').innerText=DB.books.length;
document.getElementById('statMembers').innerText=DB.members.length;
document.getElementById('statBorrow').innerText=DB.borrow.filter(x=>!x.returned).length;
renderBooks();renderMembers();renderBorrow();}
function renderBooks(){
let q=document.getElementById('search').value.toLowerCase();
let wrap=document.getElementById('booksList');
wrap.innerHTML=DB.books.filter(b=>b.title.toLowerCase().includes(q)).map(b=>`<div class='bg-white p-4 rounded shadow'><h3 class='font-bold'>${b.title}</h3><p>${b.author}</p></div>`).join('');
}
function renderMembers(){
document.getElementById('membersList').innerHTML=DB.members.map(m=>`<div class='bg-white p-3 rounded shadow'>${m.name}</div>`).join('');
}
function renderBorrow(){
document.getElementById('borrowList').innerHTML=DB.borrow.map(b=>`<div class='bg-white p-3 rounded shadow'>${b.book}</div>`).join('');
}
renderAll();
