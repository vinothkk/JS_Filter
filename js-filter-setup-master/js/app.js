//filter button
(function(){
 //select all button

 const filterBtn = document.querySelectorAll('.filter-btn');
	//console.log(filterBtn);
	filterBtn.forEach(function(btn){
		btn.addEventListener('click', function(event){
			// prevent default action
			event.preventDefault();
			const value = event.target.dataset.filter;
				// console.log(value);

			const items = document.querySelectorAll('.store-item')
			// console.log(items);

			items.forEach(function(item){
				if(value === 'all'){
					item.style.display = "block"
				}else{
					if(item.classList.contains(value)){
						item.style.display = "block"
					}else{
						item.style.display = "none"
					}
				}
			});
		});
	});

})();

	
//search input

(function(){
	// traget search box;
	const search = document.getElementById('search-item');
	search.addEventListener('keyup', function(){
		let value = search.value.toLowerCase().trim();
		// console.log(value);
		const items = document.querySelectorAll('.store-item');
		items.forEach(function(item){
			let type = item.dataset.item;
			// console.log(type);

			// if(type.includes(value)){
			// 	item.style.display='block';
			// }
			// else{
			// 	item.style.display='none';
			// }
			
			let length = value.length;
			let match = type.slice(0,length);
			 // console.log(match);
			if(value === match){
				item.style.display='block';
			}
			else{
				item.style.display='none';
			}
		});
	})


})();