
//Importando os estilos
import * as C from './App.styles';

//Importando os tipos (types)
import {Category} from './types/Category';
import {Item} from './types/Item';

//Importando os dados
import {categories} from './data/categories';
import {items} from './data/items';

//Para manipular os dados (useState)
//Para monitorar dados (useEffect)
import {useState,useEffect} from 'react';

//Importando funções
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter';

//Componentes da página
import {TableArea} from './components/TableArea'


const App = () => {

  const [list,setList] = useState(items);
  //Aqui ainda poderiamos adicionar o type
  //const [list,setList] = useState<Item[]>(items);
  const [filteredList,setFilteredList]= useState<Item[]>();
  const [currentMonth,setCurrentMonth] = useState(getCurrentMonth());


  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));

  },[list,currentMonth])
  
  return (
    <C.Container>{/* C.AlgumaCoisa é usado como se fosse uma classe. É uma classe que está sendo configurada em App.styles*/}
      <C.Header>{/* É uma classe que está sendo configurada em App.styles*/}
        <C.HeaderText>Sistema financeiro</C.HeaderText>
        
      </C.Header>
      <C.Body>
          
          {/*Área de informações */}

          {/*Área de inserções */}
          
          {/*Tabela de itens*/}
          <TableArea/>

      </C.Body>
    </C.Container>
  );
}

export default App;