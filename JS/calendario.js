now = new Date;
var y = (now.getFullYear());
var m = (now.getMonth());
var d = (now.getDate());

window.onload = function start(){
 
    //variaveis 
	var mes = document.getElementById("mes");
	var dia = document.getElementById("dias");

	//Arrays
	dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
	monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

	//insere HTML
	mes.innerHTML = "<h2> "+ monName[now.getMonth()]+"</h2>";
	mes.innerHTML += "<p>" + now.getFullYear() + "</p>";
	for(var i = 1; i <= diasNoMesAtual(); i++){
		if(i == now.getDate()){
			dia.innerHTML += '<div class="hoje" onclick="criarEvento('+i+')"> '+ i +'</div>';
		} else {
			dia.innerHTML += "<div onclick='criarEvento("+i+")'> "+ i +"</div>";
		}
	}

}

function next(){

	m++;

	if(m==13){
		m = 1;
		y++;

	}
	data = new Date(y, m);

	atualizaCalendario();
}

function prev(){

	m--;

	if(m==0){
		m = 12;
		y--;

	}
	data = new Date(y, m);

	atualizaCalendario();
}

function atualizaCalendario(){
	var mes = document.getElementById("mes");
	var dia = document.getElementById("dias");
	
	//Apaga HTML
	mes.innerHTML = "";
	dia.innerHTML = "";


	//Insere HTML
	mes.innerHTML = "<h2> "+ monName [data.getMonth() ]+"</h2>";
	mes.innerHTML += "<p>" + data.getFullYear() + "</p>";
	for(var i = 1; i <= diasNoMes(data.getFullYear(), data.getMonth()); i++){

		if(i == now.getDate() && now.getFullYear() == data.getFullYear() && now.getMonth() == data.getMonth()){

			dia.innerHTML += '<div class="hoje" onclick="criarEvento('+i+')"> '+ i +'</div>';
		} else {
			dia.innerHTML += "<div onclick='criarEvento("+i+")'> "+ i +"</div>";
		}
	}
}



function diasNoMesAtual() {
	var data = new Date(now.getFullYear (),(now.getMonth()+1), 0);
	return data.getDate();
}


function diasNoMes(ano, mes) {
	var data = new Date(ano,(mes+1), 0);
	return data.getDate();
}

function criarEvento(dia){
	
	data = new Date(y, m);

	console.log("dia:" +dia+" mes: "+(data.getMonth()+1)+" year: "+data.getFullYear());

	data.getFullYear();
	data.getMonth();

}
