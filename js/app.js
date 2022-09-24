window.onload = function () {
	var header = document.getElementById('header');
	var colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF'];

	function handleResize(e) {
		var width = window.innerWidth;

		if (width >= 1400) {
			header.innerHTML = 'Extra extra large (xxl)';
			header.style.backgroundColor = colors[5];
		} else if (width >= 1200) {
			header.innerHTML = 'Extra large (xl)';
			header.style.backgroundColor = colors[4];
		} else if (width >= 992) {
			header.innerHTML = 'Large (lg)';
			header.style.backgroundColor = colors[3];
		} else if (width >= 768) {
			header.innerHTML = 'Medium (md)';
			header.style.backgroundColor = colors[2];
		} else if (width >= 576) {
			header.innerHTML = 'Small (sm)';
			header.style.backgroundColor = colors[1];
		} else {
			header.innerHTML = 'Extra small (None)';
			header.style.backgroundColor = colors[0];
		}
	}

	window.onresize = handleResize;

	handleResize();
};