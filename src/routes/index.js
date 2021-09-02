import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import es_ES from 'antd/lib/locale/es_ES';

import { _ROUTES } from '../utils/constants';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';

const Routes = () => {
  const [login]=React.useState(localStorage.getItem('access_token'));
  return <ConfigProvider locale={es_ES}>
    <Switch>
      {
        login ?
        <>
        <Route exact path={_ROUTES.home} component={Home} />
        </>
        :
        <>
        <Route exact path={_ROUTES.login} component={Login} />
        <Route exact path={_ROUTES.register} component={Register} />
        </>
      }
    </Switch>
  </ConfigProvider>;
};

export default Routes;