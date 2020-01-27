cimport React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { CategoriaComponent } from './modules/categoria/categoria-component';
import { HomeComponent } from './modules/home/home-component';
import { ProdutoComponent } from './modules/produto/produto-component';

import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';

const routes = [
  {
    icon: <HomeIcon />,
    name: 'Home',
    path: '/',
    exact: true,
    main: <HomeComponent />,
  },
  {
    icon: <CategoryIcon />,
    name: 'Categorias',
    path: '/categoria',
    main: <CategoriaComponent />,
  },
  {
    icon: <CategoryIcon />,
    name: 'Produtos',
    path: '/produto',
    main: <ProdutoComponent />,
  },
];

export const AppRoutes = routes;

export function SidebarExample() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '10px',
            width: '40%',
            background: '#f0f0f0',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categoria">categoria</Link>
            </li>
            <li>
              <Link to="/produto">produto</Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
