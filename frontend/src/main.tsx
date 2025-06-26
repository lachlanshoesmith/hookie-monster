import { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Level0 from './components/Level0.tsx';
import Level1 from './components/Level1.tsx';
import Level2 from './components/Level2.tsx';
import Level3 from './components/Level3.tsx';
import Level4 from './components/Level4/Level4.tsx';
import Level5 from './components/Level5/Level5.tsx';
import Level0Default from './components/Level0Default.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element:
          /*
            Returns Level0 if it's defined (ie. returns something).
            Otherwise, renders the largely-empty Level0Default to
            maintain correct spacing.
          */
          Level0() !== undefined ? (
            (Level0() as unknown as ReactNode)
          ) : (
            <Level0Default />
          ),
      },
      {
        path: 'level0',
        element:
          /*
            Returns Level0 if it's defined (ie. returns something).
            Otherwise, renders the largely-empty Level0Default to
            maintain correct spacing.
          */
          Level0() !== undefined ? (
            (Level0() as unknown as ReactNode)
          ) : (
            <Level0Default />
          ),
      },
      {
        path: 'level1',
        element: <Level1 />,
      },
      {
        path: 'level2',
        element: <Level2 />,
      },
      {
        path: 'level3',
        element: <Level3 />,
      },
      {
        path: 'level4',
        element: <Level4 />,
      },
      {
        path: 'level5',
        element: <Level5 />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
