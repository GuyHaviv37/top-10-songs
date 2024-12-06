import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { YearPage } from './pages/YearPage';
import { AboutPage } from './pages/AboutPage';
import { withScrollRestoration } from './utils/layout';



const router = createBrowserRouter([
  {
    path: "/",
    element: withScrollRestoration(<HomePage />)
  },
  {
    path: "/year/:year",
    element: withScrollRestoration(<YearPage />)
  },
  {
    path: "/about",
    element: withScrollRestoration(<AboutPage />)
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;