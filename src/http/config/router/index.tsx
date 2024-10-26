import { createBrowserRouter } from 'react-router-dom';
import Login from '../../../Pages/Login/Login';
import App from '../../../App';

export const router = createBrowserRouter([
  {
    path: '/v1/poke-app',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'main',
        children: [
          {
            path: ':userId',
            element: <App />,
          },
        ],
      },
    ],
  },
]);
