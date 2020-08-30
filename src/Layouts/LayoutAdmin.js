import React from 'react';
import {Route, } from 'react-router-dom';
import {Layout} from 'antd';

import './LayoutAdmin.scss';
import routes from '../config/routes';

export default function LayoutAdmin(props) {
    // console.log(props);

    const {routes} = props;
    const {Header, Content, Footer} = Layout;

    return (
        <Layout>
            <h2>Menu Sider Admin</h2>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>Raul R 2020</Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({routes}){
    // console.log(props);

    return routes.map((route, index) =>(
        <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}

        />
    ));
}
