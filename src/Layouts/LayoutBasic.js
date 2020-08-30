import React from 'react';
import {Route} from 'react-router-dom';
import { Layout } from 'antd';

import './LayoutBasic.scss';

export default function LayoutBasic(props) {
   // console.log(props);

    const{routes} = props;
    const {Content, Footer} = Layout;

    return (
    
            <Layout>
                <h2>Menu...</h2>
                <Layout>
                    <Content>
                        <LoadRoutes routes={routes} />
                    </Content>
                    <Footer>Raul R 2020</Footer> 
                </Layout>
            </Layout>
        
    )
}

function LoadRoutes({routes}){
    return routes.map((route,index) =>(
        <Route 
            key={index}
            path={route.path}
            exact = {route.exact}
            component={route.component}
        />
    ));
}
