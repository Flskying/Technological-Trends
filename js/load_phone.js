		// load-phone.js加载phone样式
		document.addEventListener("DOMContentLoaded", function() {
		    fetch('phone.html')
		        .then(response => response.text())
		        .then(data => {
		            document.getElementById('phone').innerHTML = data;
		        })
		        .catch(error => console.error('Error loading phone:', error));
		});