import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SideBarProvider } from './context/sidebarContext';
import { MealContextProvider } from './context/mealContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideBarProvider>
    <MealContextProvider>
      <App />
    </MealContextProvider>
  </SideBarProvider>
);


