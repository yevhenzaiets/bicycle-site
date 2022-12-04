// import { src } from 'gulp';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        // img: `${buildFolder}/img/`,
        // js: `${buildFolder}/js/`,
        // css: `${buildFolder}/css/`,
        // html: `./`,
        // files: `${buildFolder}/files/`,
        img: `./img/`,
        js: `./js/`,
        css: `./css/`,
        html: `./`,
        files: `${buildFolder}/files/`,
    },
    src: {
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`, 
    },
    watch: {
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}