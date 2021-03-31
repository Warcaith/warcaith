const Mustache = require("mustache");
const fs = require("fs");

const MUSTACHE_MAIN_LAYOUT = "./main.mustache";

function generate() {
    fs.readFile(MUSTACHE_MAIN_LAYOUT, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), null);
        fs.writeFileSync("README.md", output);
        console.log("done")
    });
}

generate();
