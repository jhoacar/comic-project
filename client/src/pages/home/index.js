import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layouts'
import Card from '../../components/cards';
import { AuthContext } from '../../context/auth';

function Home() {

    const [isLoggedIn] = useContext(AuthContext);

    return (
        <Layout>
            <Card>
                <h1>
                    Bienvenidos a la aplicacion para personajes
                </h1>
                {isLoggedIn &&
                    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                        Has iniciado sesion
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <Link to={"dashboard"} className="btn btn-primary">Dashboard</Link>
                        </div>
                    </div>
                }
                {!isLoggedIn &&
                    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                        Registrate o Inicia Sesion
                        <div className="d-flex align-items-center justify-content-center gap-3">

                            <Link to={"login"} className="btn btn-primary">Iniciar Sesion</Link>
                            <Link to={"register"} className="btn btn-primary">Registrar</Link>
                        </div>
                    </div>
                }
            </Card>
        </Layout>
    )
}

export default Home
