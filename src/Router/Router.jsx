import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Components/Home.jsx/Home";
import Check from "../Components/Check/Check";

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
                path: "/check",
                element: <Check />
            }
        ]
    },
]);


export default router;