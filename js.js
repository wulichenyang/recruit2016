var isSelected=[];

for (var i = 1 ; i < 6; i++) {
	isSelected[i] = false;
}

function on_hover_dir(seq){
	document.getElementById('dir_img_'+seq).style.opacity = "1";
	document.getElementById('dir_img_'+seq).className = "img_change_hover";
	document.getElementById('dir_under_'+seq).className = "under_bar_hover";
}
function on_out_dir(seq){
	document.getElementById('dir_under_'+seq).className = "under_bar";
	document.getElementById('dir_img_'+seq).className = "img_highlight";
	if(!isSelected[seq]){
		document.getElementById('dir_img_'+seq).style.opacity = ".7";	
	}
}
function on_click_dir(seq){
	for (var i = 1; i < 6; i++) {
		if(seq == i){
			isSelected[i] = true;
			document.getElementById('dir_img_'+seq).className = "img_change_hover";
			document.getElementById('dir_img_'+seq).style.opacity = "1";	
		}
		else{
			document.getElementById('dir_img_'+i).style.opacity = ".7";
			document.getElementById('dir_img_'+seq).className = "img_highlight";
			isSelected[i] = false;
		}
	}
}
function join_textArea_focus(who){
	if (who.value == '字数50~250') {
		who.value = '';
	}
}
function join_textArea_blur(who){
	if(who.value == ''){
		who.value = '字数50~250';
	}
}
function check_mail(field){
	with(field){
		var apos=value.indexOf("@");
		var dotpos=value.lastIndexOf(".");
		if (apos<1||dotpos-apos<2) {
			return false;
		}
		else {
			return true;
		}
	}
}
function check_tele(field){
	with(field){
		var telephone = value;
		if(telephone.charAt(0) == '0'){
			return false;
		}
		if(telephone.length !=11){
			return false;
		}
		else{
			return true;
		}
	}

}
function check_stuId(field){
	with(field){
		var stuId = value;
		if(stuId.length!=13){
			return false;
		}
		else{
			return true;
		}
	}

}
function join_onfocus_info(who){
	document.getElementById(who).innerHTML = '';
}
function join_onblur_mail(thismail){
	if(check_mail(thismail) == false){
		if(thismail.value == ''){}
		else{
			document.getElementById('check_mail').innerHTML = '邮箱格式不对->';	
		}
	}
}
function join_onblur_tele(thistele){
	if(check_tele(thistele) == false){
		if(thistele.value == ''){}
		else{
		document.getElementById('check_tele').innerHTML = '<-电话号码格式不对';
		}
	}
}
function join_onblur_stuId(thisstu){
	if(check_stuId(thisstu) == false){
		if(thisstu.value == ''){}
		else{
		document.getElementById('check_stuId').innerHTML = '<-学号应为13位';
		}
	}
}
function join_change_input() {
	document.getElementById('check_all').innerHTML = '';
}
function check_join_form(thisform){
	with(thisform){
		if(check_mail(email)==false){
			document.getElementById('check_all').innerHTML = '请规范填写完整“*”部分';
			return false;
		}
		if(check_tele(phone)==false){
			document.getElementById('check_all').innerHTML = '请规范填写完整“*”部分';
			return false;
		}
		if(check_stuId(stuNumber)==false){
			document.getElementById('check_all').innerHTML = '请规范填写完整“*”部分';
			return false;
		}
		if(name.value==''||email.value==''||phone.value==''||position.value==''||knowledge.value==''||experience.value==''||intro.value==''){
			document.getElementById('check_all').innerHTML = '请规范填写完整“*”部分';
			return false;
		}
		if(knowledge.value=='字数50~250'||experience.value=='字数50~250'||intro.value=='字数50~250'){
			document.getElementById('check_all').innerHTML = '请规范填写完整“*”部分';
			return false;
		}
		else{
			return true;
		}
	}
}