	var body = document.querySelector(".body");

	function request(pathname, callback) {
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4 && xhr.status === 200){
				callback(xhr.responseText);
			}
		}

		xhr.open("GET", `http://localhost:666${pathname}`);
		xhr.send();

		// xhr.open("POST", "http://localhost:666/products");
		// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		// xhr.send("name=obj7&price=5000");
	}

	window.addEventListener("popstate", () => {
		var pathname = window.location.hash.slice(1);		

		request(pathname, data => {
			body.innerHTML = data;
		})
	})