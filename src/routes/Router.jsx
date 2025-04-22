import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Stack from "@/pages/Stack";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/stack',
                element: <Stack/>
            }
            
        ]
    }
])