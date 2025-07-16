# Pepper Player

TS+React+Electron based audio player for use on Windows, Linux, and MacOS computers locally and with the [Prepper Disk](https://www.prepperdisk.com/) (mobile support planned for future updates)

## Folder structure

This application will work best with a specific file structure on your computer. All this should be in the default `Music` folder on your system. For example, on Linux Mint that is `/home/username/Music/` and for Windows it would be `C:/Users/username/Music`.

The intended file structure within your music folder is:
```
├─┬ Artist 0
| |
| ├─┬Album 0
| | ├─Track 0
| | └─Track 1
| |
| └─┬Album 1
|   ├─Track 0
|   └─Track 1
|
└─┬ Artist 1
  |
  ├─┬Album 0
  | ├─Track 0
  | └─Track 1
  |
  └─┬Album 1
    ├─Track 0
    └─Track 1
```

Folder and file names do not matter and are not read, but this structure will allow the program to automatically filter by album. All audio files in the `Music` folder will be read, even if not in this structure.

## Initial setup for development

- make sure Node is installed

- open terminal

- run `npm install`

- run `npm run dev`