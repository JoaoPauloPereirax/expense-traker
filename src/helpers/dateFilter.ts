import {Item} from '../types/Item'

/*
Lista de funções que fará a manipulação de datas

*/ 

//Mês atual 
export const getCurrentMonth = () =>{
       let now = new Date();
       //Queremos que retorne o ano e o mês
       //Colocamos o +1 pois o mês começa em zero
       return `${now.getFullYear()}-${now.getMonth()+1}`;
}

//Lista filtrada pelo mês
export const filterListByMonth = (list: Item[], date: string):Item[]=>{
 let newList: Item[]=[];
 let dateSplit = date.split('-');;
 let year = dateSplit[0];
 let month = dateSplit[1];
 //Para substituir essas duas linhas posemos usar:..
 //let [year,month]=date.split('-');

for(let i in list){
       if(
              list[i].date.getFullYear() === parseInt(year) &&
              (list[i].date.getMonth()+1) === parseInt(month)
       ){
              newList.push(list[i]);
       }
}

 return newList;
}
