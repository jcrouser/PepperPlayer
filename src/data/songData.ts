import { IAudioMetadata, parseBlob, type IPicture } from 'music-metadata';
import { useEffect } from 'react';

class SongData {
	public Title:string = "Loading Title...";
	public Artist:string = "Loading Artist...";
	public Album:string = "Loading Album..."
	public AlbumArt:string = "./src/assets/blank_cd.jpg";
	public FilePath:string;
	public FileBlob:IAudioMetadata|null = null;

	constructor(filePath : string) {
		this.FilePath = filePath;
		GetSongData(this);
	}

	public UpdateTrackInfo() {
		this.Title = this.FileBlob?.common.title? this.FileBlob.common.title : this.Title;
		this.Artist = this.FileBlob?.common.artist? this.FileBlob.common.artist : this.Artist;
		this.Album = this.FileBlob?.common.album? this.FileBlob.common.album : this.Album;

		if(this.Title == "" || this.Title == null) {
			this.Title = this.FilePath;
		}
	}

	public SetFilePath(newPath:string) {
		this.FilePath = newPath;
		console.log(this.FilePath);

		GetSongData(this);

	}

	public SetAlbumArt(blob:Uint8Array|null) {
		if(blob != null) {
			this.AlbumArt = URL.createObjectURL(
				new Blob([blob as BlobPart], {
					type: "image/"
				})
			);
		}
	}
}

function GetSongData(songData:SongData){
	useEffect(() => {
		const GetSongDataAsync = async () => {
			fetch(songData.FilePath)
				.then(response => response.blob())
				.then(blob => parseBlob(blob))
				.then(blob => songData.FileBlob = blob)
				.then(blob => blob.common.picture? blob.common.picture[0] : null)
				.then(blob => songData.SetAlbumArt(blob? blob.data : null))
				.then(blob => songData.UpdateTrackInfo())
				.then(blob => console.log("Data updated"))
		}

		GetSongDataAsync();
	}, []);
}


export {SongData, GetSongData}