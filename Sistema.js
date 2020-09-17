var senha_p = 'A';
var senha_g = 'A';



var queue = [];
queue.push(100);
var removed = queue.shift();
//contador para as senhas
var ct_p=[];
var ct_g=[];
//contador para chamada
var ct2=[];
//contador da prioridade
var ct3=0;




function clickBotao(value)
{
	document.getElementById('senha_balcao' + value);

	if(value==1)
	{
	//botao de senhas prioritarias
	ct_p++;

	if(ct_p<10)
	{
		document.getElementById('senha_princ').innerHTML = "P- "+senha_p+"0"+ct_p;
	}
	else
	{
		document.getElementById('senha_princ').innerHTML = "P- "+senha_p+ct_p;
	}
	

		if(ct_p==100)
		{

			var letra_p = senha_p.charCodeAt(0);
			senha_p = String.fromCharCode(letra_p+1);
			letra_p = senha;
			ct_p=0;
		}
	}

	if(value ==2)
	{	
		ct_g++;
		
		if(ct_g<10)
		{
			document.getElementById('senha_princ2').innerHTML = "G- "+senha_g+"0"+ct_g;
		}
		else
		{
			document.getElementById('senha_princ2').innerHTML = "G- "+senha_g+ct_g;
		}

		if(ct_g==100)
		{

			var letra_g = senha_g.charCodeAt(0);
			senha_g = String.fromCharCode(letra_p+1);
			letra_g = senha;
			ct_g=0;
		}
	}


}//fim funcao balcao

function clickBalcao(value)
{
	ct3++;//controlar as senhas prioritárias
	ct2++;//controlar o numero de senhas

	if(ct3%3==0)
		{//senha prioritária

		if(value==1)
		{
		
		document.getElementById('senha1').innerHTML = "Balcao1 <br>P- "+senha_p+ct2;
		queue.shift();

		}
		if(value==2)
		{
		
		document.getElementById('senha2').innerHTML = "Balcao2 <br>P- "+senha_p+ct2;
		queue.shift();

		}
		if(value==3)
		{
		
		document.getElementById('senha3').innerHTML = "Balcao3 <br>P- "+senha_p+ct2;
		queue.shift();

		}
		if(value==4)
		{
		
		document.getElementById('senha4').innerHTML = "Balcao4 <br>P- "+senha_p+ct2;
		queue.shift();

		}



		if(ct2==100)
		{

			var letra_p = senha_p.charCodeAt(0);
			senha_p = String.fromCharCode(letra_p+1);
			letra_p = senha;
			ct_p=0;
		}
	}//fim if ct3

	else
	{
		if(value==1)
		{
		
		document.getElementById('senha1').innerHTML = "Balcao1 <br>G- "+senha_g+ct2;
		queue.shift();

		}
		if(value==2)
		{
		
		document.getElementById('senha2').innerHTML = "Balcao2 <br>G- "+senha_g+ct2;
		queue.shift();

		}
		if(value==3)
		{
		
		document.getElementById('senha3').innerHTML = "Balcao3 <br>G- "+senha_g+ct2;
		queue.shift();

		}
		if(value==4)
		{
		
		document.getElementById('senha4').innerHTML = "Balcao4 <br>G- "+senha_g+ct2;
		queue.shift();

		}



		if(ct2==100)
		{

			var letra_g = senha_g.charCodeAt(0);
			senha_g = String.fromCharCode(letra_g+1);
			letra_g = senha;
			ct_p=0;
		}

	}

}






