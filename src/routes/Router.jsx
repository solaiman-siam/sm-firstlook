import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Stack from "@/pages/Stack";
import ProjectDetails from "@/pages/ProjectDetails";



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
            },
            {
                path: '/project-details/:id',
                element: <ProjectDetails/>
            }
            
        ]
    }
])