let sources = [
	"img/loadingUI/bg1.jpg",
	"img/loadingUI/cloud1.png",
	"img/loadingUI/cloud2.png",
	"img/loadingUI/flower1.png",
	"img/loadingUI/flower2.png",
	"img/loadingUI/flower3.png",
	"img/loadingUI/load_mak.png",
	"img/loadingUI/load_p1.png",
	"img/loadingUI/load_txt.png",
	"img/loadingUI/loadTxt.png",
	"img/ewm.jpg",
	"img/inputBg.png",
	"img/p1_1.jpg",
	"img/p1_2.jpg",
	"img/page_res.png",
	"img/peo2.png",
	"img/result_bg.png",
	"img/result_btn1.png",
	"img/result_btn2.png",
	"img/result_icon.png",
	"img/resultBg.jpg",
	"img/sign_bg.png",
	"img/signBg1.jpg",
];

let width = window.innerWidth;
let height = 2720 * width / 750;
let height2 = 4260 * width / 750;
let height3 = 6110 * width / 750;
let height4 = 8510 * width / 750;

function loadImages(sources, callback) {
	let loadedImages = 0;
	let numImages = 0;
	for (let src in sources) {
		numImages++;
	}

	for (let i = 0; i < sources.length; i++) {
		let image = new Image();
		image.src = sources[i];
		// image = new Image();
		//图片加载完成时执行    
		image.onload = function() {
			loadedImages++;
			let num = parseInt(loadedImages / numImages * 100) + "%";
			$("#percent").html(num);
			//当所有图片加载完成时，执行callback
			if (loadedImages >= numImages) {
				callback();
			}
		};
	}
}
//预加载
window.onload = function() {
	loadImages(sources, main);
};


function guodu() {
	let cvs = document.getElementById("guodu");
	let gd = cvs.getContext("2d");
	cvs.width = width;
	cvs.height = window.innerHeight * 3;

	drawHua(sources[0], 0, 0, width, window.innerHeight, gd);
	drawHua(sources[1], 420 * width / 750, 220 * width / 750, 441 * width / 750, 115 * width / 750, gd);
	drawHua(sources[2], 33 * width / 750, 700 * width / 750, 366 * width / 750, 118 * width / 750, gd);
	drawHua(sources[1], 420 * width / 750, 1100 * width / 750, 441 * width / 750, 115 * width / 750, gd);

	drawHua(sources[0], 0, window.innerHeight, width, window.innerHeight, gd);
	drawHua(sources[1], 420 * width / 750, 220 * width / 750 + window.innerHeight, 441 * width / 750, 115 * width / 750,
		gd);
	drawHua(sources[2], 33 * width / 750, 700 * width / 750 + window.innerHeight, 366 * width / 750, 118 * width / 750, gd);
	drawHua(sources[1], 420 * width / 750, 1100 * width / 750 + window.innerHeight, 441 * width / 750, 115 * width / 750,
		gd);

	drawHua(sources[0], 0, window.innerHeight * 2, width, window.innerHeight, gd);
	drawHua(sources[1], 420 * width / 750, 220 * width / 750 + window.innerHeight * 2, 441 * width / 750, 115 * width /
		750, gd);
	drawHua(sources[2], 33 * width / 750, 700 * width / 750 + window.innerHeight * 2, 366 * width / 750, 118 * width / 750,
		gd);
	drawHua(sources[1], 420 * width / 750, 1100 * width / 750 + window.innerHeight * 2, 441 * width / 750, 115 * width /
		750, gd);
	
// 	$(window).scroll(function() {
// 		var scrollTop = $(this).scrollTop();
// 		var scrollHeight = $(document).height();
// 		var windowHeight = $(this).height();
// 		if (scrollTop + windowHeight == scrollHeight) {
// 			$(".guodu").hide();
// 			$("#main").show();
// 		}
// 	});
}

function main() {
	setTimeout(function() {
		$(".preload").hide();
		$(".guodu").show();
		guodu();
	}, 2000);
	//画出第一个场景
	darwSou1();
}

//第一个场景
function sou1(width, height) {
	drawImg(sources[12], 0, 0, 750, 2720, 0, 0, width, height, ctx);
	//画出背景图中的小图片
	//花盘
	drawImg(sources[14], 248, 1115, 80, 48, 313 * width / 750, 2315 * height / 2720, 80 * width / 750, 48 * height / 2720,
		ctx);
	drawImg(sources[14], 170, 1115, 80, 48, 403 * width / 750, 2315 * height / 2720, 80 * width / 750, 48 * height / 2720,
		ctx);
	drawImg(sources[14], 754, 998, 82, 54, 500 * width / 750, 2302 * height / 2720, 82 * width / 750, 54 * height / 2720,
		ctx);
	//旗子
	drawImg(sources[14], 1955, 747, 74, 95, 253 * width / 750, 2161 * height / 2720, 74 * width / 750, 95 * height / 2720,
		ctx);
	//对话框
	drawImg(sources[14], 1586, 618, 245, 134, 483 * width / 750, 2055 * height / 2720, 245 * width / 750, 134 * height /
		2720, ctx);
	drawImg(sources[14], 989, 619, 60, 69, 333 * width / 750, 2365 * height / 2720, 60 * width / 750, 69 * height / 2720,
		ctx);
	//手
	drawImg(sources[14], 1074, 231, 188, 103, 325 * width / 750, 2585 * height / 2720, 188 * width / 750, 103 * height /
		2720, ctx);
}
//第二个场景
function sou2(width, height2) {
	drawImg(sources[12], 0, 2720, 750, 4260, 0, 2720 * width / 750, width, height2, ctx);
	//细节图片  饮料
	drawImg(sources[14], 810, 1109, 46, 82, 448 * width / 750, 3623 * height2 / 4260, 46 * width / 750, 82 * height2 /
		4260, ctx);
	drawImg(sources[14], 1158, 1059, 46, 82, 488 * width / 750, 3649 * height2 / 4260, 46 * width / 750, 82 * height2 /
		4260, ctx);
	drawImg(sources[14], 500, 727, 46, 82, 537 * width / 750, 3697 * height2 / 4260, 46 * width / 750, 82 * height2 / 4260,
		ctx);
	//对话框
	drawImg(sources[14], 1298, 617, 252, 131, 230 * width / 750, 3340 * height2 / 4260, 252 * width / 750, 131 * height2 /
		4260, ctx);
	drawImg(sources[14], 1944, 1021, 97, 150, 479 * width / 750, 3345 * height2 / 4260, 97 * width / 750, 150 * height2 /
		4260, ctx);
	drawImg(sources[14], 1944, 1021, 97, 150, 715 * width / 750, 3521 * height2 / 4260, 97 * width / 750, 150 * height2 /
		4260, ctx);
	//手
	drawImg(sources[14], 989, 619, 60, 69, 431 * width / 750, 3765 * height2 / 4260, 60 * width / 750, 69 * height2 / 4260,
		ctx);
}
//第三个场景
function sou3(width, height2, height3) {
	drawImg(sources[13], 0, 0, 750, 1850, 0, height2, width, 1850 * width / 750, ctx);
	//细节图
	drawImg(sources[14], 1933, 842, 112, 179, 285 * width / 750, 1100 * height3 / 6110 + height2, 112 * width / 750, 179 *
		height3 / 6110, ctx);
	drawImg(sources[14], 1057, 426, 219, 280, 279 * width / 750, 545 * height3 / 6110 + height2, 219 * width / 750, 280 *
		height3 / 6110, ctx);
	drawImg(sources[14], 1579, 444, 254, 134, 380 * width / 750, 960 * height3 / 6110 + height2, 254 * width / 750, 134 *
		height3 / 6110, ctx);
	//旗子
	drawImg(sources[14], 1813, 841, 123, 170, 120 * width / 750, 1018 * height3 / 6110 + height2, 123 * width / 750, 170 *
		height3 / 6110, ctx);
}

function darwSou1() {
	canvas.width = width;
	canvas.height = height;
	sou1(width, height);
	canvas.addEventListener('click', aaa);
}

function drawSou2() {
	canvas.width = width;
	canvas.height = height2;
	sou1(width, height);
	sou2(width, height2);

	canvas.removeEventListener('click', aaa);
	canvas.addEventListener('click', bbb);
}

function drawSou3() {
	canvas.width = width;
	canvas.height = height3;
	sou1(width, height);
	sou2(width, height2);
	sou3(width, height2, height3);

	canvas.removeEventListener('click', bbb);
	canvas.addEventListener('click', ccc);
}

function drawSou4() {
	canvas.width = width;
	canvas.height = height4;
	sou1(width, height);
	sou2(width, height2);
	sou3(width, height2, height3);

	drawImg(sources[13], 0, 1850, 750, 2400, 0, height3, width, 2400 * width / 750, ctx);
	//树上挂的物件
	drawImg(sources[14], 1955, 439, 92, 305, 295 * width / 750, 3190 * height3 / 6110 + height2, 92 * width / 750, 305 *
		height3 / 6110, ctx); //中间
	drawImg(sources[14], 101, 787, 113, 257, 427 * width / 750, 3056 * height3 / 6110 + height2, 113 * width / 750, 257 *
		height3 / 6110, ctx); //右边
	drawImg(sources[14], 471, 820, 94, 235, 129 * width / 750, 2930 * height3 / 6110 + height2, 94 * width / 750, 235 *
		height3 / 6110, ctx); //左上
	drawImg(sources[14], 849, 805, 114, 248, 505 * width / 750, 3386 * height3 / 6110 + height2, 114 * width / 750, 248 *
		height3 / 6110, ctx); //右下
	//对话框
	drawImg(sources[14], 1294, 445, 252, 131, 217 * width / 750, 3522 * height3 / 6110 + height2, 252 * width / 750, 131 *
		height3 / 6110, ctx);
	canvas.removeEventListener('click', ccc);
}

var aaa = function(e) {
	let x = event.clientX - canvas.getBoundingClientRect().left;
	let y = event.clientY - canvas.getBoundingClientRect().top;
	console.log(x, y);
	if (x > 313 * width / 750 && x < (313 * width / 750 + 80 * width / 750)) {
		if (y > 2315 * height / 2720 && y < (2315 * height / 2720 + 48 * height / 2720)) {
			drawSou2();
		}
	}
};

var bbb = function(e) {
	let x = event.clientX - canvas.getBoundingClientRect().left;
	let y = event.clientY - canvas.getBoundingClientRect().top;
	console.log(x, y);
	if (x > 448 * width / 750 && x < (448 * width / 750 + 46 * width / 750)) {
		if (y > 3623 * height2 / 4260 && y < (3623 * height2 / 4260 + 82 * height2 / 4260)) {
			drawSou3();
		}
	}
};

var ccc = function(e) {
	let x = event.clientX - canvas.getBoundingClientRect().left;
	let y = event.clientY - canvas.getBoundingClientRect().top;
	console.log(x, y);
	if (x > 285 * width / 750 && x < (285 * width / 750 + 112 * width / 750)) {
		if (y > (1100 * height3 / 6110 + height2) && y < (1100 * height3 / 6110 + height2 + 179 * height3 / 6110)) {
			drawSou4();
		}
	}
};
