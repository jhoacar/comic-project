import React from 'react'
import { Image } from 'react-bootstrap';
import Card from '../../components/cards';
import Layout from '../../components/layouts';

function Dashboard() {
    return (
      <Layout>
          <Card>
            {/* <Image src={"https://rickandmortyapi.com/api/character/avatar/11.jpeg"} width="100px" height="100px"></Image> */}
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"} width="100px" height="100px"></Image>
            {/* <h2>Albert Einstein</h2> */}
            <h2>Charizard</h2>
            <h2>Nombre del Usuario</h2>
            <h2>Correo del Usuario</h2>
          </Card>
      </Layout>
    );
}

export default Dashboard
