let output = document.getElementById('output');

let arr = [1, 2, 3, 4];

function myPromise() {
	return new Promise((res,rej) => {
		setTimeout(()=>{
			res(arr);
		}, 3000);
	})
}

function myPromise1(arr2) {
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(arr2);
		}, 1000);
	})
}

function myPromise2(arr3){
	return new Promise((res,rej) => {
		setTimeout(()=>{
			res(arr3);
		},2000);
	})
}

myPromise().then((data) => {
	output.textContent = data;
	arr2 = data.filter(ele => ele%2 === 0);
	return myPromise1(arr2);
}).then((data) => {
	output.textContent = data;
	arr3 = data.map((ele) => ele*2);
	return myPromise2(arr3);
}).then((data) => {
	output.textContent = data;
})
