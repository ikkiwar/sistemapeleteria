import React from 'react';
import NavLogin from '../Components/NavLogin';
import Flogin from '../Components/Flogin';

class Login extends React.Component{

    render(){
        return(
            <div>
                <NavLogin/>
              <Flogin/>
            </div>
        )
    }

}

export default Login;