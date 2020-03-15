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
	}

	window.addEventListener("popstate", () => {
		var pathname = window.location.hash.slice(1);		

		request(pathname, data => {
			showData(JSON.parse(data));
		})

	})

	window.addEventListener("load", () => {
		request("/", data => {
			showData(JSON.parse(data));
		})
	})
	
	function showData(data) {
		body.innerHTML = "";

		if(data.type === "products") {
			for(let i = 0; i < data[data.type].length; i++){
				let item = data[data.type][i];
				let card = document.createElement("div");
				let name = document.createElement("div");
				let image = document.createElement("img");
				let price = document.createElement("p");
				let button = document.createElement("button");

				card.classList.add("uk-card", "uk-card-default", "uk-card-body", "uk-width-1-5");
				name.classList.add("uk-card-title");
				button.classList.add("uk-button", "uk-button-primary");

				name.innerHTML = item.name;
				price.innerHTML = item.price;
				button.innerHTML = "Купить";
				image.src = item.image;

				//card.appendChild(...[name, price]);
				card.appendChild(name);
				card.appendChild(image);
				card.appendChild(price);
				card.appendChild(button);

				body.appendChild(card);

			}
		}

		if(data.type === "home") {
			var div = document.createElement("div");

			div.innerHTML = data.caption;
			body.appendChild(div);

		}

	}