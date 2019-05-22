var playlist = { ['The Kooks'] : "Naive" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

const music = {
  Rihanna: "Umbrella",
  ['DeathCab for Cutie']: "I\\'ll follow you into the dark" }

updatePlaylist(music)

console.log(music)
