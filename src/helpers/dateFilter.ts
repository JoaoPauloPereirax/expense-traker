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