
//Layout
import LayoutAdmin from '../Layouts/LayoutAdmin';

//Admin Pages
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

const routes = [
    {
        path: "/admin", //cuando el path sea este
        component: LayoutAdmin, //cargue el componente Layout
        exact: false, //para que siempre me cargue el layout
        routes:[
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path:"/admin/login",
                component: AdminSignIn,
                exact: true
            }
        ]
    }
];

export default routes;