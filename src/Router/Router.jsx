import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Components/Home.jsx/Home";
import Works from "../Components/Works/Works";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/works",
                element: <Works />
            }
        ]
    },
]);


export default router;