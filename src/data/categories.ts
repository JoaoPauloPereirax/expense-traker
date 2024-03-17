import {Category} from '../types/Category';


//Aqui notamos que o objeto categories é di tipo Category
export const categories: Category = {
       food: { title: "Alimentação", color: 'blue', expense: true},
       rent: {title: "Aluguel", color: 'brown', expense: true},
       salary: {title: "Salário", color: 'green', expense: false}
}