
//Layout
import LayoutAdmin from '../Layouts/LayoutAdmin';
import LayoutBasic from '../Layouts/LayoutBasic';

//Admin Pages
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

//Pages 
import Home from '../pages/Home';
import Contact from '../pages/Contact';

//otros
import Error404 from '../pages/Error404';

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
            },
            {
                component: Error404
            }

        ]
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes:[
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;