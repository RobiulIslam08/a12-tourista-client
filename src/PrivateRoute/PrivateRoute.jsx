import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'

import useAuth from '../Pages/hooks/useAuth'
import Loading from '../Component/HomeComponent/Loading/Loading'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <Loading></Loading>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
}

export default PrivateRoute
