import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Home from './components/Home/Home';
import Policy from './components/Policy/Policy';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import Shop from './components/Shop/Shop';
import UserDetails from './components/UserDetails/UserDetails';
import Users from './components/Users/Users';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'shop', element: <Shop></Shop> },
        { path: 'products', element: <Products></Products> },
        {
          path: 'users',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users></Users>
        },
        {
          path: 'posts',
          loader: async() => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        },
        {
          path: '/users/:userId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          },
          element: <UserDetails></UserDetails>
        },
        { path: '*', element: <ErrorMessage></ErrorMessage> }
      ]
    },
    { path: 'policy', element: <Policy></Policy> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;