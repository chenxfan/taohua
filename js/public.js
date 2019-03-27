function drawImg(src,souX,souY,souWidth,souHeight,x,y,width,heigt,ctx){
	let img = new Image();
	img.src = src;
// 	img.onload = function(){
// 		ctx.drawImage(img,souX,souY,souWidth,souHeight,x,y,width,heigt);
// 	}
	ctx.beginPath();
	ctx.drawImage(img,souX,souY,souWidth,souHeight,x,y,width,heigt);
}

// function drawMoveImg(){
// 	
// }

// function drawImg2(src,souX,souY,souWidth,souHeight,x,y,width.heigt)
function drawHua(src,x,y,width,height,ctx){
	let img = new Image();
	img.src = src;
	ctx.beginPath();
	ctx.drawImage(img,x,y,width,height);
}