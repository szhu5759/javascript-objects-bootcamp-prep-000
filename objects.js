var playlist = new Object({ artist: "song1" })

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}
