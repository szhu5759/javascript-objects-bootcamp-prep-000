var playlist = { ['The Kooks'] : "Naive" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(artistName, songTitle) {
  delete playlist(artistName:songTitle)
}
