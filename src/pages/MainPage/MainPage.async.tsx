import { lazy } from 'react';

export const MainPageAsync = lazy(() =>new Promise(res => {
  // @ts-ignore
  // искусственная задержка!!!
  setTimeout(() => res(import('./MainPage')), 1500)
}))