import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { YearPage } from './pages/YearPage';
import { AboutPage } from './pages/AboutPage';
import { withScrollRestoration } from './utils/layout';
import InsightsPage from './pages/InsightsPage';



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
  },
  {
    path: "/insights",
    element: withScrollRestoration(<InsightsPage />)
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