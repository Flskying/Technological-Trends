		// load-harmony.js加载harmony样式
		document.addEventListener("DOMContentLoaded", function() {
		    fetch('harmony.html')
		        .then(response => response.text())
		        .then(data => {
		            document.getElementById('harmony').innerHTML = data;
		        })
		        .catch(error => console.error('Error loading harmony:', error));
		});