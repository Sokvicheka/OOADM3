function login(){
let role=document.getElementById('role').value;
let user=document.getElementById('username').value;
let pass=document.getElementById('password').value;
if(role==='admin'){
if(user==='admin@admin.com' && pass==='admin123'){
localStorage.setItem('currentUser',user);location='dashboard.html';
}else alert('Invalid admin credentials');
}else{
if(!user)return alert('Enter username');
localStorage.setItem('currentUser',user);location='dashboard.html';
}
}