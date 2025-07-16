import { useEffect, useState } from "react";
import { SongData, loadSongData } from "../data/songData";

function HomeScreenAlbum() {
    const [songData, setSongData] = useState<SongData | null>(null);

    useEffect(() => {
        const fetchSong = async () => {
            const data = await loadSongData('/src/assets/music.flac');
            setSongData(data);
        };
        fetchSong();
    }, []);

    return (
        <div className="homeScreenAlbum">
            {songData ? (
                <>
                    <img src={songData.AlbumArt} alt="Album art" />
                    <p>{songData.Album}</p>
                    <p>{songData.Artist}</p>
                </>
            ) : (
                <>
                    <img src="./src/assets/blank_cd.jpg" alt="Default art" />
                    <p>Loading Album...</p>
                    <p>Loading Artist...</p>
                </>
            )}
        </div>
    );
}

export default HomeScreenAlbum;


// import { SongData } from "../data/songData"
// import { useState } from "react";


// function HomeScreenAlbum() {
//     const [songData, setSongData] = useState<SongData>(new SongData('/src/assets/music.flac'));

//     return (
//         <>
//             <div className="homeScreenAlbum">
//                 <img src={songData?.AlbumArt}/>
//                 <p>{songData?.Album}</p>
//                 <p>{songData?.Artist}</p>
//             </div>
//         </>
//     )
// }

// export default HomeScreenAlbum