const { exec } = require('child_process');

function build() {
    process.env.NODE_ENV = "production";
    exec('vue-cli-service build && electron-packager . myClient --win --out ./myClient --arch=x64 --app-version=0.0.1 --electron-version=5.0.4 --overwrite');
}
build();