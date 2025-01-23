import { Button } from '@/components/ui/button';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/ui/Navbar';
import MainLayout from './Layout/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroSection from './pages/student/HeroSection';
import Courses from './pages/student/Courses';
import MyLearning from './pages/student/MyLearning';
import Profile from './pages/student/Profile';

const appRoutes = createBrowserRouter([
         {
             path:"/",
             element:<MainLayout/>,
             children:[
                     {
                      path:"/",
                      element:(
                        <>
                               <HeroSection/>
                               <Courses/>
                        </>
                      )
                     },
                     {
                      path:"login",
                      element:<Login/>
                     },
                     {
                      path:"myLearning",
                      element:<MyLearning/>
                     },
                     {
                      path:"profile",
                      element:<Profile/>
                     }
             ]

         }
])

function App() {
  return (
    <RouterProvider router ={appRoutes}/>

   
  );
}

export default App;
