// TODO
const spotifyApi = require("../config/spotify.config");

module.exports.home = (req, res, next) => {
  res.render("home");
};

module.exports.search = (req, res, next) => {
  spotifyApi
    .searchArtists(req.query.search)
    .then((data) => {
      res.render("artists", { artists: data.body.artists.items });
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
};

module.exports.album = (req, res, next) => {
  spotifyApi
    .getArtistAlbums(req.params.artistId)
    .then((data) => {
      res.render("albums", { albums: data.body.items });
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
};

module.exports.tracks = (req, res, next) => {
    spotifyApi
      .getAlbumTracks(req.params.albumId)
      .then((data) => {
        res.render("tracks", { tracks: data.body.items });
      })
      .catch((err) =>
        console.log("The error while searching artists occurred: ", err)
      );
  };