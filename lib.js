/*
	Name: html-boilerplate-generator
	Author: Alek Mugnozzo (info@mugnozzo.net)
	Version: 1.0.0
	File: lib.js (main JavaScript library)
	License: GPLv3 (see "LICENSE" file)
	Hosted at: https://github.com/mugnozzo/html-boilerplate-generator
*/

document.addEventListener("DOMContentLoaded", function(event) { 
	reload_result();
});

function reload_result(){
	
	var title=document.querySelector('#title').value; // TODO: check behavior with html tags and special chars
	var description=document.querySelector('#description').value;
	var charset=document.querySelector('#charset').value;

	boilerplate='\
<!DOCTYPE html>\n\
<html>\n\
	<head>\n\
		<title>'+title+'</title>\n\
		<meta charset="'+charset+'"/>\n\
		<meta name="viewport" content="width=device-width,initial-scale=1" />\n\
		<meta name="description" content="'+description+'"/>\n';
	
	if(document.querySelector('input#css:checked')){
		boilerplate+='\
		<link rel="stylesheet" type="text/css" href="./style.css"/>\n';
	}
	
	if(document.querySelector('input#favicon:checked')){
		boilerplate+='\
		<link rel="icon" href="./favicon.png">\n';
	}

	boilerplate+='\
	</head>\n\
	<body>\n\
		<div class="main-content">\n\
			<h1>'+title+'</h1>\n\
		</div>\n\
	</body>\n\
</html>';

	boilerplate=escapeHtmlEntities(boilerplate);

	boilerplate="<pre>"+boilerplate+"</pre>";

	document.getElementById("result").innerHTML=boilerplate;
}

if(document.querySelector('input#a:checked')){console.log('a')}else{console.log('non-a')}

function escapeHtmlEntities(str){
	return str
		.replace(/&/g,   '&amp;')
		.replace(/</g,   '&lt;')
		.replace(/>/g,   '&gt;')
		.replace(/"/g,   '&quot;')
		.replace(/'/g,   '&apos;');
}
