const fetch = require("node-fetch");

class LastFMService {
    constructor(username, secret) {
        this.username = username;
        this.secret = secret;
        this.url = "http://ws.audioscrobbler.com";
    }

    async getRecentTrack() {
        const method = "user.getrecenttracks";
        const limit = 1;
        const response = await fetch(`${this.url}/2.0/?method=${method}&limit=${limit}&user=${this.username}&api_key=${this.secret}&format=json`);
        const data = await response.json();

        return {
            name: data.recenttracks.track[0].name,
            artist: data.recenttracks.track[0].artist['#text'],
            album: data.recenttracks.track[0].album['#text'],
            cover: data.recenttracks.track[0].image[3]['#text'],
            date: data.recenttracks.track[0].date['#text']
        }
    }
}

module.exports = LastFMService;