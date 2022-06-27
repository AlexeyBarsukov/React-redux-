import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const stateCash = useSelector(state => state.cash.cash)
  const customerState = useSelector(state => state.customers.customer)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))

  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{ fontWeight: 'Bold', fontFamily: 'Roboto', fontSize: '50px', }}>{stateCash}</div>
      <div style={{ margin: '20px' }}>
        <Button style={{ marginRight: '10px' }} onClick={() => addCash(Number(prompt()))}>Пополнить счёт</Button>
        <Button onClick={() => getCash(Number(prompt()))}>Снять со счёта</Button>
        <div style={{ margin: '20px' }}>
          <Button variant="secondary" style={{ marginRight: '10px' }} onClick={() => addCustomer(prompt())}>Добавить клиента</Button>
          <Button variant="secondary" onClick={null}>Удалить клиента</Button>
        </div>
      </div>
      <div>
        {customerState.length > 0 ?
          <div>
            {customerState.map(customer => <div onClick={() => removeCustomer(customer)} style={{ fontWeight: 'Bold', fontFamily: 'Roboto', fontSize: '50px', }}>{customer.name}</div>)}
          </div> :
          <div>
            Клиенты отсутствуют
          </div>}
      </div>
    </div>
  );
}

export default App;
