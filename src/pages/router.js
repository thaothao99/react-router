import React from 'react'
import NotFound from './notfound'
import routes from '../config/routes'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Layout from './layout'

function AppRouter(props) {
  const isAuth = () => {
    return localStorage.getItem('token') && localStorage.getItem('token') === '123'
  }
  const protectedRoutes = routes.filter(route => route.isProtected)
  const publicRoutes = routes.filter(route => !route.isProtected)
  // console.log(publicRoutes, protectedRoutes, isAuth())
  console.log(isAuth())
  return (
    <div>
      {isAuth() && <Layout {...props}></Layout>}
      <Switch>
        {
          publicRoutes.map((route, indx) =>
            <Route
              key={indx}
              exact
              path={route.path}
              render={(props) => {
                const Component = React.lazy(() => import(`./${route.component}`))
                return (
                  <React.Suspense fallback={null}>
                    {
                      isAuth() ? <Redirect to='/dashboard'></Redirect> : <Component {...props}></Component>
                    }
                  </React.Suspense>
                )
              }}
            ></Route>
          )
        }
        {
          protectedRoutes.map((route, indx) =>
            <Route
              key={indx}
              exact
              path={route.path}
              render={(props) => {
                const Component = React.lazy(() => import(`./${route.component}`))
                return (
                  <React.Suspense fallback={null}>
                    {
                      isAuth() ?
                        <Component {...props}></Component>
                        : <Redirect to='/login'></Redirect>
                    }
                  </React.Suspense>

                )
              }}
            ></Route>
          )
        }

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  )

}
export default withRouter(AppRouter)