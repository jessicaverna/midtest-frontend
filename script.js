let id = "no";

check();
function addLocal() {
	localStorage.setItem("crud", listArtikel);
}

function check() {
	let arr = getCrudData();
	if (arr == null) {
		addLocal();
	}
}

selectData();

function manageData() {
	document.getElementById("msg").innerHTML = "";
	let input = document.getElementById("input").value;
	if (input == "") {
		window.alert("Data Kosong. Mohon isi data dengan benar");
	} else {
		if (id == "no") {
			let arr = getCrudData();
			arr.push({ listartikel: input });
			setCrudData(arr);
			window.alert("Data Masuk");
		} else {
			let arr = getCrudData();
			arr[id] = { listartikel: input };
			setCrudData(arr);
			window.alert("Data Terupdate");
		}
		document.getElementById("input").value = "";
		selectData();
		location.reload();
	}
}

function selectData() {
	let arr = getCrudData();
	if (arr != null) {
		let html = "";
		let no = 1;
		for (let k in arr) {
			html =
				html +
				`<tr><td>${no}</td><td>${arr[k].listartikel}</td><td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
			no++;
		}
		document.getElementById("root").innerHTML = html;
	}
}

function editData(rid) {
	id = rid;
	let arr = getCrudData();
	document.getElementById("input").value = arr[rid]["listartikel"];
}

function deleteData(rid) {
	let arr = getCrudData();
	arr.splice(rid, 1);
	setCrudData(arr);
	selectData();
	if (arr.length === 0) {
		localStorage.clear();
	}

	window.alert("Data Terhapus");
	location.reload();
}

function getCrudData() {
	let arr = JSON.parse(localStorage.getItem("crud"));
	return arr;
}

function setCrudData(arr) {
	localStorage.setItem("crud", JSON.stringify(arr));
}

var rubahArray = localStorage.getItem("crud");
var data = JSON.parse(rubahArray);

function updateNumberList(array) {
	var s = "";
	for (var i = 0; i < 3; i++) {
		s += "<br>" + array[i].listartikel;
	}
	document.getElementById("numberList").innerHTML = s;
}

function shuffleUsingRandomSwapping(array) {
	var j,
		x,
		i = 0,
		len = array.length;
	for (i; i < 3; i++) {
		j = Math.floor(Math.random() * len);
		x = array[i].listartikel;
		array[i].listartikel = array[j].listartikel;
		array[j].listartikel = x;
	}
}
