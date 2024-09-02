import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import './index.css';
import { RecipeProvider } from './context/RecipeContext';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<PrivateRoute><RecipeForm /></PrivateRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  </React.StrictMode>
);