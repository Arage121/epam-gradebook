function visitLink(path) {
	let count = parseInt(localStorage.getItem(path)) || 0
	count++
	localStorage.setItem(path, count)
}
function viewResults() {
	const ul = document.createElement('ul')
	ul.setAttribute('id', 'res')
	document.body.appendChild(ul)
	const res = document.getElementById('res')
	res.innerHTML = ''
	for(let i=0;i<localStorage.length;i++){
		const path = localStorage.key(i)
		const count = localStorage.getItem(path)
		const li = document.createElement('li')
		li.setAttribute('style','margin-left:26em')
		li.textContent = `You visited ${path} ${count} time(s)`
		res.appendChild(li)
}
localStorage.clear()
}

