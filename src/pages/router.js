import React from 'react'
import routers from '../config/routes'
import { Route, Redirect, BrowserRouter } from 'react-router-dom'

const checkPassword = () => localStorage.getItem('token') && localStorage.getItem('token') === '123'
// const PrivateRouter = ({ name, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       checkPassword() ? React.lazy(() => import(`./${name}`)) : <Redirect to='/login'></Redirect>
//     }
//   ></Route>
// )

function AppRouter() {
  return (
    <BrowserRouter>
      {
        routers.map((route, indx) =>
          route.isProtected ?
            (<React.Suspense key={indx} fallback={null}>

              <Route
                key={indx}
                path={route.path}
                render={props => {
                  const Component = React.lazy(() => import(`./${route.component}`))
                  return checkPassword() ? <Component></Component> : <Redirect to='/login'></Redirect>
                }}
              ></Route>
            </React.Suspense>
            )
            :
            (
              <Route
                key={indx}
                path={route.path}
                render={(props) => {
                  const Component = React.lazy(() => import(`./${route.component}`))
                  return <React.Suspense fallback={null}><Component {...props}></Component></React.Suspense>
                }}
              ></Route>
            )
        )

      }
    </BrowserRouter >
  )

}
export default AppRouter