function toggleDropdown() {
	let list = document.querySelector('.dropdown').classList;
	list.toggle('active');
	// console.log(list)
	list = document.querySelector('a.view-more').classList;
	list.toggle('active');
	// console.log(list)
}