/*
	Name: html-boilerplate-generator
	Author: Alek Mugnozzo (info@mugnozzo.net)
	Version: 1.1.1
	File: lib.js (main JavaScript library)
	License: GPLv3 (see "LICENSE" file)
	Hosted at: https://github.com/mugnozzo/html-boilerplate-generator
*/

document.addEventListener("DOMContentLoaded", function(event) { 
	reload_result();
});

var t=document.getElementById.bind(document);

function reload_result(){
	var title=t("title");
	var description=t("description");
	var charset=t("charset");
	var css=t("css");
	var css_dir=t("css-dir");
	var favicon=t("favicon");
	var bootstrap_css=t("bootstrap-css");
	var bootstrap_js=t("bootstrap-js");
	var bootstrap_columns=t("bootstrap-columns");

	// Check checkbox dependencies
	if(!css.checked){
		css_dir.checked=false;
		css_dir.disabled=true;
	}
	else{
		css_dir.disabled=false;
	}
	if(!bootstrap_css.checked){
		bootstrap_js.checked=false;
		bootstrap_js.disabled=true;
		bootstrap_columns.disabled=true;
	}
	else{
		bootstrap_js.disabled=false;
		bootstrap_columns.disabled=false;
	}

	boilerplate='\
<!DOCTYPE html>\n\
<html>\n\
	<head>\n\
		<title>'+title.value+'</title>\n\
		<meta charset="'+charset.value+'"/>\n\
		<meta name="viewport" content="width=device-width,initial-scale=1" />\n\
		<meta name="description" content="'+description.value+'"/>\n';
	
	if(css.checked){
		if(css_dir.checked){
			boilerplate+='		<link rel="stylesheet" type="text/css" href="./style/style.css"/>\n';
		}
		else{
			boilerplate+='		<link rel="stylesheet" type="text/css" href="./style.css"/>\n';
		}
	}
	if(favicon.checked){
		boilerplate+='		<link rel="icon" href="./favicon.png">\n';
	}
	if(bootstrap_css.checked){
		boilerplate+='\
		<link\n\
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"\n\
			rel="stylesheet"\n\
			integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"\n\
			crossorigin="anonymous"/>\n';
	}
	if(bootstrap_js.checked){
		boilerplate+='\
		<script\n\
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"\n\
			integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"\n\
			crossorigin="anonymous"></script>\n';
	}

	boilerplate+='\
	</head>\n\
	<body>\n\
		<div class="main-content">\n\
			<h1>'+title.value+'</h1>\n';
	var cols=bootstrap_columns.value;
	if(bootstrap_columns.disabled==false && cols!=0){
	boilerplate+='\
			<div class="row">\n';
		for(i=1;i<=cols;i++){
			boilerplate+='\
				<div class="col">\n\
					Column '+i+'\n\
				</div>\n';
		}
	boilerplate+='\
			</div>\n';
	}
	boilerplate+='\
		</div>\n\
	</body>\n\
</html>';

	boilerplate=escapeHtmlEntities(boilerplate);
	boilerplate="<pre>"+boilerplate+"</pre>";
	document.getElementById("result").innerHTML=boilerplate;
}

function escapeHtmlEntities(str){
	return str
		.replace(/&/g,   '&amp;')
		.replace(/</g,   '&lt;')
		.replace(/>/g,   '&gt;')
		.replace(/"/g,   '&quot;')
		.replace(/'/g,   '&apos;');
}

function copyResult(){
	const divToCopy=document.getElementById("result");

	const range=document.createRange();
	range.selectNode(divToCopy);

	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");

	window.getSelection().removeAllRanges();
	showPopup();
}

function showPopup(){
	document.getElementById("popup-container").classList.remove("hidden");
}

function hidePopup(){
	document.getElementById("popup-container").classList.add("hidden");
}
