import { CustomRoutes, RouteWithoutLayout, RoutesWithLayout } from "react-admin";
import AdminPanel from "./AdminPanel";
import { BrowserRouter as Router } from 'react-router-dom';
import * as React from "react";
import { Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";

const routes: CustomRoutes = [
  <Route exact path="/" component={Dashboard} />,
  <RouteWithoutLayout exact path="/client" component={() => <div>Home</div>} />,
]

const App = (): React.ReactElement => {
  return (
    <Router history={history}>
      <AdminPanel routes={routes} />
    </Router>
  )
}

export default App;