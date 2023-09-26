import { lazy } from 'react';
// таким образом разбиваем бандл на маленькие кусочки из страниц,
// чтобы они подгружались только по необходимости
export const AboutPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    // искусственная задержка!!!
    setTimeout(() => res(import('./AboutPage')), 1500);
}));
