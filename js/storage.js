const DB = {
books: JSON.parse(localStorage.getItem('books')||'[]'),
members: JSON.parse(localStorage.getItem('members')||'[]'),
borrow: JSON.parse(localStorage.getItem('borrow')||'[]')
};
function saveDB(){localStorage.setItem('books',JSON.stringify(DB.books));localStorage.setItem('members',JSON.stringify(DB.members));localStorage.setItem('borrow',JSON.stringify(DB.borrow));}
