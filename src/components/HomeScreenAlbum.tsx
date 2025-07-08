import { SongData } from "../data/songData"
import { useState } from "react";


function HomeScreenAlbum() {
    const [songData, setSongData] = useState<SongData>(new SongData('/src/assets/music.flac'));

    return (
        <>
            <div className="homeScreenAlbum">
                <img src={songData?.AlbumArt}/>
                <p>{songData?.Album}</p>
                <p>{songData?.Artist}</p>
            </div>
        </>
    )
}

export default HomeScreenAlbum