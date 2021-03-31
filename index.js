const Mustache = require("mustache");
const fs = require("fs");

const MUSTACHE_MAIN_LAYOUT = "./main.mustache";

const LastFMService = require('./services/lastfm.service');
const lastFmService = new LastFMService("Warcaith", process.env.LAST_FM_SECRET);

function generate(view) {
    fs.readFile(MUSTACHE_MAIN_LAYOUT, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), view);
        fs.writeFileSync("README.md", output);
    });
}

(async() => {
    const VIEW = {}

    VIEW.recentTrack = await lastFmService.getRecentTrack();

    generate(VIEW);
})();
