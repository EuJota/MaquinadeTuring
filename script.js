let cond1 = 0;

function traduzir(){ //mudar para converter array
    let txtFita = document.getElementById("txtFita").value
    let txtInstrucoes = document.getElementById("txtInstrucoes").value

    let arrFita = txtFita.split(";")
    let arrInstrucoes = txtInstrucoes.split("=").toString().split(";")

    cond1 = verificaInicioEFim(arrFita[0], arrFita.length, arrFita) // isso aqui ta errado a posicao final
    //arrFita.forEach(escreverNaTela)

    re = /([^a-zA-Z0-9])+/g;
    let newArr = arrInstrucoes.map(function(item, index){
        return item.toString().replace(re," ").split(",").toString().split(" ");
    });

    let ind;

    for(let i=0; i<newArr.length;i++){
        for(let j=0;j<newArr[i].length;j++){
            ind =  newArr[i].indexOf("")
            if(ind >-1)
                newArr[i].splice(ind,1);
        }      
    }

    //newArr.forEach(tabelaInstrucoes)

    cond1 === 1 ? fazComparacoes(arrFita, newArr) : alert("POR FAVOR, REVEJA SUA FITA!!") //passar no ok uma funcao de verificação 
}

function verificaInicioEFim(ini, fim, arrFita){
    let cont=0
    parada = "qf"
    if(ini==="qi")
        while(cont<fim){
            if(arrFita[cont].toString() === parada)
                return 1
            else
                cont++
        }
    else 
        return 0;
}

function fazComparacoes(arrFita, newArr){

    let ponteiroFita=0;
    let estadoAtual = "qi";
    let i=0, encontrou = 0;


    while(arrFita[ponteiroFita].toString()!="qf"){
        for(i;i<newArr.length;i++){
            if(arrFita[ponteiroFita].toString()==newArr[i][1].toString() && estadoAtual==newArr[i][0].toString()){
                estadoAtual = newArr[i][2].toString();
                arrFita[ponteiroFita] = newArr[i][3];
                //ESSE CONSOLE LOG TA FAZENDO O QUE DEVE SER FEITO NAS TELA SÓ QUE SEM O TIME
                console.log(arrFita.toString(),( newArr[i]).toString())
                encontrou=1;

                if(newArr[i][4].toString()=="D"){ 
                    ponteiroFita+=1;
                    if(newArr[i][4].toString()=="D" && arrFita[ponteiroFita].toString()=="qf"){
                        ponteiroFita+=0
                        break
                    }
                }else if(newArr[i][4].toString()=="E" && ponteiroFita>0)
                    ponteiroFita-=1;
            }  
        }

        if(encontrou==1){
            i=0;
            encontrou=0
        }else{
            arrFita[ponteiroFita]="qf"
            alert("REVEJA SUA INSTRUÇÃO!!")
            break;
        }
    }

    //alert(arrFita)
    //console.log(arrFita);

    //arrFita.forEach(escreverNaTela);
    //arrFita.forEach(tabelaNovaFita)
}

// function escreverNaTela(item){
//     let td = document.createElement("td")
//     let texto=document.createTextNode(item);

//     document.getElementById('tb-fita-principal').appendChild(td)
//     document.getElementById('tb-fita-principal').appendChild(texto)
// }

// function tabelaInstrucoes(item){
//     let tr = document.createElement("tr")
//     let texto=document.createTextNode(item);

//     document.getElementById('tb-instrucoes').appendChild(tr)
//     document.getElementById('tb-instrucoes').appendChild(texto)
// }

// function tabelaNovaFita(item){
//     let td = document.createElement("td")
//     let texto=document.createTextNode(item);

//     document.getElementById('tb-traducao').appendChild(td)
//     document.getElementById('tb-traducao').appendChild(texto)
// }