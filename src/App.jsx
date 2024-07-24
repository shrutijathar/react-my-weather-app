import './assets/css/style.css'
import Weather from './Weather'

function App() {

  return (
    <>
      <div className="container-fluid h-100">
      <div className="row h-100">
      <div className="col"></div>
      <div className="col-md-4 weather-container p-5 h-100">
          <Weather />
      </div>
      <div className="col"></div>
      </div>
    </div>
    </>
  )
}

export default App
