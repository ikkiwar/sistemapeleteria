import React from 'react';
import '../Components/Style/Flogin.css';
import {Form} from 'react-bootstrap';


class Flogin extends React.Component{

    render(){
       return( 
       <div className="loginform" >
        <Form onSubmit="">
                <div class="form-group">
                    <label for="exampleInputEmail1">Usuario</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="usuario"
                        onChange=""
                        value=""
                    />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" class="form-control"
                        id="exampleInputPassword1"
                        name="contrasena"
                        onChange=""
                        value=""
                    />
                </div>
                <br />

                <button type="submit" class="btn btn-primary btn-block" >Iniciar Sesión</button>
            </Form>
    </div>)
    }

}
export default Flogin;