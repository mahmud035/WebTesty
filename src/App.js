import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllQuiz from './Components/AllQuiz/AllQuiz';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: '/quiz/:id',
          element: <AllQuiz></AllQuiz>,
          loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
