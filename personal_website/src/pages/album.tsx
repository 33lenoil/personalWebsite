import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from "../components/nav";
import "./styles/album.css";
import albums from "../../public/assets/albums.json";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// the expected shape of the useParams result
type RouteParams = {
    albumId: string;
};

// the type of the album object
type AlbumType = {
    id: number;
    name: string;
    description: string;
    path: string;
    thumbnail_url: string;
}

const Album: React.FC = () => {
    // the ID of the album
    const { albumId } = useParams<RouteParams>();
    console.log(albumId);

    // the album object
    const [album, setAlbum] = useState<AlbumType>({} as AlbumType);
    const [photos, setPhotos] = useState<Array<string>>([]);

    // set the album
    useEffect(() => {
        let found: boolean = false;
        let foundId: number = 0;
        for (const albumObject of albums) {
            console.log(albumObject.id);
            if (albumObject.id === Number(albumId)) {
                setAlbum(albumObject);
                found = true;
                foundId = albumObject.id;
                break;
            }
        }

        console.log(album);
        // get photo paths
        if (found) {
            console.log("in");
            const importImages = () => {
                let imageModules;
                switch (foundId) {
                    case 1:
                        imageModules = import.meta.glob("../../public/assets/photos/balcony/*.jpg", { eager: true });
                        break;
                    case 2:
                        imageModules = import.meta.glob("../../public/assets/photos/canada/*.jpg", { eager: true });
                        break;
                    case 3:
                        imageModules = import.meta.glob("../../public/assets/photos/guangzhou/*.jpg", { eager: true });
                        break;
                    case 4: imageModules = import.meta.glob("../../public/assets/photos/nemours/*.jpg", { eager: true });
                        break;
                    case 5: imageModules = import.meta.glob("../../public/assets/photos/nj/*.jpg", { eager: true });
                        break;
                    case 6: imageModules = import.meta.glob("../../public/assets/photos/peru/*.jpg", { eager: true });
                        break;
                    case 7: imageModules = import.meta.glob("../../public/assets/photos/puerto_rico/*.jpg", { eager: true });
                        break;
                    case 8: imageModules = import.meta.glob("../../public/assets/photos/qinggan/*.jpg", { eager: true });
                        break;
                    case 9: imageModules = import.meta.glob("../../public/assets/photos/southeast/*.jpg", { eager: true });
                        break;
                }

                console.log(imageModules);
                const importedImages: Array<string> = Object.keys(imageModules as Record<string, string>);
                setPhotos(importedImages);
            };

            importImages();
        }
    }, []);

    console.log(album);
    console.log(photos);

    return (
        <div id="main">
            <Nav />
            {Object.keys(album).length !== 0 && (<div id="content">
                <h1>{album.name}</h1>
                <p>{album.description}</p>
                <ImageList variant="masonry" cols={4} gap={8}>
                    {photos.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item}?w=248&fit=crop&auto=format`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>)}
            {Object.keys(album).length === 0 && (<div id="content">
                <h1 id="textNotFound">Album not found.</h1>
            </div>)}
        </div>
    )
}

export default Album;