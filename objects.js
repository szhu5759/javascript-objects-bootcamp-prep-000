var playlist = new Object({ artist1: "song1" })

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}
