import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/', 
          loader: async () => fetch('tshirts.json'),
          element:<Home></Home>
        },
        {path:'/orders', element:<Orders></Orders>}
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
