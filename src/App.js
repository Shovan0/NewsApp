import './App.css';
import Navbar from './components/NavBar'
import React, {useState} from 'react'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App=()=> {
  const [progress, setProgress] = useState(0);

    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        />
            <Routes>
                <Route path="/" element={<News setProgress={setProgress} category="general" country="in" pagesize={5} />} />
                <Route path="/general" element={<News setProgress={setProgress} category="general" country="in" pagesize={5} />} />
                <Route path="/business" element={<News setProgress={setProgress} key="business" pagesize={5} country="in" category="business" />} />
                <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={5} country="in" category="entertainment" />} />
                <Route path="/health" element={<News setProgress={setProgress} key="health" pagesize={5} country="in" category="health" />} />
                <Route path="/science" element={<News setProgress={setProgress} key="science" pagesize={5} country="in" category="science" />} />
                <Route path="/sports" element={<News setProgress={setProgress} key="sports" pagesize={5} country="in" category="sports" />} />
                <Route path="/technology" element={<News setProgress={setProgress} key="technology" pagesize={5} country="in" category="technology" />} />
            </Routes>
      </Router>
         
      </>
    )
  }

  export default App

