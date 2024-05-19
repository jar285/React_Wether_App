import './App.css';
import { useEffect, useState } from 'react';
import Icons from './components/icons';
import './App2.css';

function App() {
  const [search, setSearch] = useState('la vega');
  const [values, setValues] = useState('');
  const [icon, setIcon] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(search)}&lang=en&units=metric&appid=92784799b9646cf5200829419759407c`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod >= 400) {
          setValues(false);
        } else {
          console.log(data);
          setIcon(data.weather[0].main);
          setValues(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [search]); // Effect will trigger whenever 'search' changes

  return (
    <>
      <div className="App">
        <h2>React Weather App</h2>
        <div className='row'>
          <input
            onKeyDown={handleSearch}
            type="text"
            autoFocus
          />
        </div>
      </div>

      <div className='card'>
        {values ? (
          <div className='card-container'>
            <h1 className='city-name'>{values.name}</h1>
            <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
            <img className='icon' src={Icons(icon)} alt="weather-icon" />
            <div className='card-footer'>
              <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg; | {values.main.temp_max.toFixed(0)}&deg;</p>
            </div>
          </div>
        ) : (
          <h1>{"City not found"}</h1>
        )}
      </div>
      <section className="Gokublue">
        <div className='air air1'></div>
        <div className='air air1'></div>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
    </>
  );
}

export default App;
