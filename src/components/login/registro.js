import React from "react";
import loginImg from "../../../src/login.svg";
//<img src={loginImg} />
import Header from "../../components/HeaderSimple"


export class Registro extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <div className="base-container">
                    <div className="header">
                        <h1>Registro</h1>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Usuario</label>
                                <input type="text" name="username" placeholder="username"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <h1>Email</h1>
                                </label>
                                <input type="email" name="email" placeholder="email"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <h1>Contraseña</h1>
                                </label>
                                <input type="password" name="password" placeholder="password"></input>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">
                            <h1>Registrar</h1>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}