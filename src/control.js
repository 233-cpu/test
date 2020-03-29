var btn = document.getElementsByTagName("button")[0];
var welc = document.getElementById("welc");
var desc = document.getElementById("desc");
var enter = document.getElementById("enter");
btn.onclick = function(){
	// alert("恭喜你打开了新世界的大门！！");
	welc.style.animation = "welc 3s";
	// welc.style.animationFillMode = "forwards";
	setTimeout(function(){
		welc.style.display = "none";
		desc.style.animation = "desc 3s";
		desc.style.animationFillMode = "forwards";
		enter.style.animation = "enter 1s";
		enter.style.animationDelay = "2s"
		enter.style.animationFillMode = "forwards";
	},3000)
	
};