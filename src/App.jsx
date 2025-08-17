import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import logo from "./assets/weather-logo.svg";

function App() {
  return (
    <Router>
      <div className="h-screeen w-screen flex flex-col">
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-20">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Weather Logo" className="h-8 w-8" />
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/search" className="text-white hover:text-gray-300">
              Search
            </Link>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div
                className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/assets/weather1.jpg')" }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                  Weather Forecast App
                </h1>
              </div>
            }
          />
          <Route path="/search" element={<WeatherCard />} />
        </Routes>
        <footer className='bg-[#0a0a23] text-white-300 text-center py-3 text-sm'>
            <p>Weather Dashboard</p>
            <p>© 2025 WeatherAI. All rights reserved.</p>

        </footer>
      </div>
      
      
    </Router>
  );
}

export default App;
