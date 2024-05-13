/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
// import { FallingLines } from 'react-loader-spinner'
const PrivateRoute = ({ children }) => {
    const { user, customLoading } = useContext(AuthContext)
    const location = useLocation()

    if (customLoading) {
        return <div className='min-h-[70vh] flex justify-center items-center'>
            <span className="loading loading-spinner loading-lg bg-green-400"></span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname} replace={true} />
}

export default PrivateRoute