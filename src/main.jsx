import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Resume from './pages/Resume.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'homepage',
                element: <Home/>
            },
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'resume',
                element: <Resume/>
            },
            {
                path: 'aboutme',
                element: <AboutMe/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)