import { useParams,useLocation,useNavigate } from "react-router-dom";


export const withRouter=(WrappedComponent:any)=>{

    const NewComponent=(props:any)=>{
        //this is a function based component
        //it can use hooks
        //console.log('New Component Rendered with ',WrappedComponent)
        const params=useParams();
        const history=useNavigate();
        const location=useLocation();
        const navigate=useNavigate();

        return <WrappedComponent {...props} 
                                params={params}
                                history={history}
                                navigate={navigate}  
                                location={location} />
    }

    return NewComponent;

}