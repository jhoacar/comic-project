import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';
import Card from '../../components/cards';
import Layout from '../../components/layouts';
import { getProfile } from '../../services/profile';
import { toast } from 'react-hot-toast';

function Dashboard() {

  const [profile, setProfile] = useState({ loading: true });

  useEffect(() => {
    getProfile()
      .then(profile => setProfile(profile))
      .catch(error => {
        console.log(error);
        toast.error("Has ocurred an error obtain profile");
      });
  }, []);

  return (
    <Layout>
      <Card>
        {
          profile?.loading &&
          <h1>Cargando informacion</h1>
        }
        {
          profile?.image?.length > 0 &&
          <Image src={profile?.image} width="100px" height="100px"></Image>
        }
        <h2>{profile?.avatar}</h2>
        <h2>{profile?.name}</h2>
        <h2>{profile?.email}</h2>
      </Card>
    </Layout>
  );
}

export default Dashboard
