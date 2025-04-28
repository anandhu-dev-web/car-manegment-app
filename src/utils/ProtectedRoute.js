import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const ProtectedRoute = ({requiredRole,children}) =>{
     const {isLogged,user} = useSelector(state=>state.auth);
    if(!isLogged)
    {
        toast.error("Please Login..!");
        return <Navigate to={"/login"} />

    }
    if(requiredRole && requiredRole.includes(user.role))
    {
        return <Navigate to={"/login"} />

    }
    return children
} 

export default ProtectedRoute;