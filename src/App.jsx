import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PhotoProvider } from './components/photoContext/PhotoContext'; 
import Home from './home';
import Footer from './components/footer/Footer';
import PhotoDetails from './components/photoDetails/PhotoDetails';
import Navbar from './components/navbar/Navbar';
import SearchResult from './components/searchResult/SearchResult';
import VideoDetails from './components/videoDetails/VideoDetails';

const App = () => {
  return (
    <PhotoProvider>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image/:id" element={<PhotoDetails />} /> 
          <Route path="/video/:id" element={<VideoDetails />} /> 
          <Route path='/search/:query' element={<SearchResult/>}/>
        </Routes>
        <Footer/>
      </Router>
    </PhotoProvider>
  );
};

export default App;
