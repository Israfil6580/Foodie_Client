/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { FallingLines } from 'react-loader-spinner'
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <div className='min-h-[60vh] flex justify-center items-center'>
                <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                />

            </div>
        )
    }
    if (user) return children

    return <Navigate to='/login' state={location.pathname} replace={true} />
}

export default PrivateRoute