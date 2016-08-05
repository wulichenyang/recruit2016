var data = {
	maintenance:{
		menu:["网络管理员","系统管理员"],
		content:["网络管理员长期担负教育网内近万名学生宿舍网络运行的保障工作。负责管理网络设备及相关权限。排查网络链路故障，监控网络运行状况，并于异常时采取措施。保障网络安全，排查网络病毒，与信息中心积极交流，协同保障网络运行正常",
				"为研发部架设Web开发环境；管理并维护网管会所属服务器的正常运行；保障服务器安全，定期完善和更新服务器漏洞，检查预防并处理网络病毒。"
		]
	},
	codeMonkey:{
		menu:["UI/视觉","前端工程师","PHP工程师"],
		content:["参与研发部Web开发策划工作，完成网站项目的网页设计；参与策划并制作招新宣传各类平面海报；参与策划换届纪念衫设计。",
				"负责开源镜像站点的开发与维护；网管会内部信息系统(NUIS)的开发与维护；栋力无限站点的应用开发与更新维护；完成信息中心不定期下达的其他Web开发项目。",
				"负责开源镜像站点的开发与维护；网管会内部信息系统(NUIS)的开发与维护；栋力无限站点的应用开发与更新维护；完成信息中心不定期下达的其他Web开发项目。"
		]
	}
}

m_content = document.getElementById("m-content");
m_title = document.getElementById("m-title");
c_content = document.getElementById("c-content");
c_title = document.getElementById("c-title");


function setInfo(type,number){
	if(type == 'maintenance'){
		var content = m_content;
		var title = m_title;
	}
	else if(type == 'codeMonkey'){
		var content = c_content;
		var title = c_title;
	}
	else{
		console.log("type error");
		return;
	}
	content.innerHTML = "<p class = 'animated fadeIn'>" + data[type].content[number] + "</p>";
	
	var occupy = document.createElement('span');
	occupy.className = "ocp";
	occupy.innerText = data[type].menu[number];
	title.replaceChild(occupy,title.childNodes[1]);
	
	var lis = title.nextElementSibling.children;
	[].forEach.call(lis,function(li){
		if(li.dataset.num === number+''){
			li.className = "animated fadeIn active";
		}
		else{
			li.className = "";
		}
	})
}


function clickDot( type, str ) {
	var dept = document.getElementsByClassName(str)[0];
	var aLi = dept.getElementsByTagName('li');
	for(var i=0; i<aLi.length; i++){
		aLi[i].onclick = function(){
			var _this = this;
			setInfo( type, _this.getAttribute('data-num') )
		}
	}
}

function mObject(m_title,m_content,n){
	this.title = m_title;
	this.content = m_content;
	this.counter = 0;
	this.N = n || 2;
	this.N === 2?this.type = "maintenance":this.type = "codeMonkey";
}
mObject.prototype.setInfo = function(){
	// console.log(this.number);
	if(this.number >= 0){
		return setInfo(this.type,this.number);
		}
	else{
		return setInfo(this.type,0);
	}
}
mObject.prototype.init = function(){
	var that = this;
	this.spans = this.title.children;
	

	
	[].forEach.call(this.spans,function(each){
			// console.log(each.innerText);
			var txt = each.innerText;
			if(txt === '<'){
				each.addEventListener('click',function(){
					that.counter--;
					that.number = Math.abs(that.counter%that.N);
					// console.log(that.number);
					that.setInfo();
					});
			}
			else if(txt === '>'){
				each.addEventListener('click',function(){
					that.counter++;
					that.number = Math.abs(that.counter%that.N);
					// console.log(that.number);
					that.setInfo();
					});
			}
			else{return;}
	})
	
}