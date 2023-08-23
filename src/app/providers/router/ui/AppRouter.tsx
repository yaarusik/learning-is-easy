import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  {/* для ленивой подгрузки страниц*/}
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({element, path}) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  </Suspense>
  );
};