var playlist = { ['The Kooks'] : "Naive" }

//function called updatePlaylist
//accepts three parameters (playlist, artistName, songTitle)
//body of function add song and artist as key-value pair
//returns whole playlist

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
