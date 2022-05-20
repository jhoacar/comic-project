import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layouts'
import Card from '../../components/cards';

function Home() {
    return (
        <Layout>
            <Card>
                <div >
                    Bienvenidos a la aplicacion para personajes
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                    Registrate o Inicia Sesion
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <Link to={"login"} className="btn btn-primary">Iniciar Sesion</Link>
                        <Link to={"register"} className="btn btn-primary">Registrar</Link>
                    </div>
                </div>
            </Card>
        </Layout>
    )
}

export default Home
