import React from 'react';
import Nav from "../components/nav";
import "./styles/photography.css";
import albums from "../../public/assets/albums.json";
import { Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Photography: React.FC = () => {
    return (
        <div id="main">
            <Nav />
            <div id="content">
                <h1>My Photos</h1>
                <p>To remember what I saw and to see what I remember.</p>
                <Container id="photoContainer">
                    {albums.map((album) =>
                        <Box
                            key={album.id}
                            p={2}
                            m={2}
                            style={{ background: '#000000', borderRadius: '6px', border: '2px solid #000' }}
                        >
                            <h4><NavLink to={`/album/${album.id}`}
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                {album.name}
                                <img className="albumThumbnail"
                                    key={album.id}
                                    src={`${album.thumbnail_url}`}
                                    alt={`${album.name}`}
                                />
                            </NavLink></h4>
                        </Box>
                    )}
                </Container>
            </div>
        </div>
    )
}

export default Photography;