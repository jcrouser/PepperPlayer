import { parseBlob, IAudioMetadata } from 'music-metadata';

export interface SongData {
  Title: string;
  Artist: string;
  Album: string;
  AlbumArt: string;
  FileBlob: IAudioMetadata | null;
}

export async function loadSongData(filePath: string): Promise<SongData> {
  const response = await fetch(filePath);
  const blob = await response.blob();
  const metadata = await parseBlob(blob);

  const picture = metadata.common.picture?.[0];
  const albumArt = picture
    ? URL.createObjectURL(new Blob([picture.data], { type: picture.format }))
    : "./src/assets/blank_cd.jpg";

  return {
    Title: metadata.common.title || filePath,
    Artist: metadata.common.artist || "Unknown Artist",
    Album: metadata.common.album || "Unknown Album",
    AlbumArt: albumArt,
    FileBlob: metadata,
  };
}


// import { IAudioMetadata, parseBlob, type IPicture } from 'music-metadata';

// class SongData {
// 	public Title:string = "Loading Title...";
// 	public Artist:string = "Loading Artist...";
// 	public Album:string = "Loading Album..."
// 	public AlbumArt:string = "./src/assets/blank_cd.jpg";
// 	public FilePath:string;
// 	public FileBlob:IAudioMetadata|null = null;

// 	constructor(filePath : string) {
// 		this.FilePath = filePath;
// 		console.log(this.FilePath);
// 		GetSongData(this);
// 	}

// 	public UpdateTrackInfo() {
// 		// Cleaned this us a little
// 		this.Title = this.FileBlob?.common.title || this.Title;
// 		this.Artist = this.FileBlob?.common.artist || this.Artist;
// 		this.Album = this.FileBlob?.common.album || this.Album;

// 		if (!this.Title || this.Title.trim() === "") {
// 			this.Title = this.FilePath;
// 		}
// 	}

// 	public SetFilePath(newPath:string) {
// 		this.FilePath = newPath;
// 		console.log(this.FilePath);
// 		GetSongData(this);

// 	}

// 	public SetAlbumArt(blob:Uint8Array|null) {
// 		if(blob != null) {
// 			this.AlbumArt = URL.createObjectURL(
// 				new Blob([blob as BlobPart], {
// 					type: "image/"
// 				})
// 			);
// 		}
// 	}
// }

// // FIXED: No useEffect. Just a plain async function.
// async function GetSongData(songData: SongData) {
// 	console.log("Getting song data for", songData);

// 	try {
// 		const response = await fetch(songData.FilePath);
// 		const blob = await response.blob();
// 		const parsed = await parseBlob(blob);

// 		songData.FileBlob = parsed;

// 		const picture = parsed.common.picture?.[0];
// 		if (picture) {
// 			songData.SetAlbumArt(picture.data);
// 		}

// 		songData.UpdateTrackInfo();
// 		console.log("Data updated");
// 	} catch (err) {
// 		console.error("Error in GetSongData:", err);
// 	}
// }

// export { SongData, GetSongData };