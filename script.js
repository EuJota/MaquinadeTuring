let cond1 = 0;

function traduzir(){ //mudar para converter array
    let txtFita = document.getElementById("txtFita").value
    let txtInstrucoes = document.getElementById("txtInstrucoes").value

    let arrFita = txtFita.split(";")
    let arrInstrucoes = txtInstrucoes.split("=").toString().split(";")

    let stInicial = "qi";

    //cond1 = verificaInicioEFim(arrFita[0], arrFita[arrFita.length]) // isso aqui ta errado a posicao final
    //cond1 === 1 ? fazComparacoes(stInicial) : alert("sua fita não tem começo ou final, reveja") //passar no ok uma funcao de verificação 
    
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

    //console.log(newArr[newArr.length-1][4]) - converter parar a fita (pegar inicio e fim)

    fazComparacoes(arrFita, newArr);
}

function verificaInicioEFim(ini, fim){
    if(ini==="qi" && fim==="qf")
        return 1
    else 
        return 0;
}

function fazComparacoes(arrFita, newArr){
    console.log(arrFita)
    console.log(newArr)

    let ponteiroFita=0;
    let estadoAtual = "qi";
    let i=0, encontrou = 0;

    while(arrFita[ponteiroFita].toString()!="qf"){
        for(i;i<newArr.length;i++){
            if(arrFita[ponteiroFita].toString()==newArr[i][1].toString() && estadoAtual==newArr[i][0].toString()){
                estadoAtual = newArr[i][2].toString();
                arrFita[ponteiroFita] = newArr[i][3];
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
            alert("Sua instrucao nao existe")
            break;
        }
    }

    alert(arrFita)
    console.log(arrFita);
}

