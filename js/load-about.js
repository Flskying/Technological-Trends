		// load-about.js加载about样式
		document.addEventListener("DOMContentLoaded", function() {
		    fetch('about.html')
		        .then(response => response.text())
		        .then(data => {
		            document.getElementById('about').innerHTML = data;
		        })
		        .catch(error => console.error('Error loading about:', error));
		});