import { lazy } from 'react';
import { Route } from 'react-router-dom';


const routes = [
    {
        path: "home",
        element: lazy(() => import("../templates/HomeTemplate/HomeTemplate")),
        nested: [
            {
                path: "contact",
                element: lazy(() => import("../pages/Contact/Contact")),
            },
            {
                path: "about",
                element: lazy(() => import("../pages/About/About")),
            },
            {
                path: "dragdrop",
                element: lazy(() => import("../pages/DemoDragDrop/DemoDragDrop")),
            },

            {
                path: "detail/:id",
                element: lazy(() => import("../pages/Detail/Detail")),
            },
        ]
    },

    {
        path: "login",
        element: lazy(() => import("../templates/HomeTemplate/UserLoginTemplate")),
    },

    {
        path: "",
        element: lazy(() => import("../templates/HomeTemplate/JirabugsTemplate")),
        nested: [
            {
                path: "jirabugs",
                element: lazy(() => import("../pages/JiraBugs/ProjectDetail/indexJiraBugs")),
            },
            {
                path: "createproject",
                element: lazy(() => import("../pages/JiraBugs/CreateProject/CreateProject")),
            },
            {
                path: "projectmanagement",
                element: lazy(() => import("../pages/JiraBugs/ProjectManagement/ProjectManagement")),
            },
            {
                path: "/projectdetail/:projectId",
                element: lazy(() => import("../pages/JiraBugs/ProjectDetail/indexJiraBugs")),
            },
            
        ]
    }
];

const renderRoutes = () => {
    //map duyệt mảng, nhớ return để trả về mảng mới
    return routes.map((route) => {
        if (route.nested) {
            return <Route key={route.path} path={route.path} element={<route.element />}>
                {/* Giấu ngoặc nhọn là renderingElement */}
                {route.nested.map((item) => {
                    return <Route key={item.path} path={item.path} element={<item.element />} />
                })}
            </Route>

        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}

export default renderRoutes