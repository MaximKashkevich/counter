import { useState } from 'react';
import './index.scss';

function App() {

  // Определяем состояние count с помощью хука useState
  // Инициализируем его значением 0
  const [count, setCount] = useState(0)

  // Создаем обработчик события для кнопки "Плюс"
  // При нажатии увеличивает значение счетчика на 1
  const plusBtn = () => setCount((prevCount) => prevCount + 1);

  // Создаем обработчик события для кнопки "Минус"
  // При нажатии уменьшает значение счетчика на 1
  const minusBtn = () =>  setCount((prevCount) => prevCount - 1); 

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={minusBtn} className="minus">- Минус</button>
        <button onClick={plusBtn} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
