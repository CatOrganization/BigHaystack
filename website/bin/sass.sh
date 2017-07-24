#!/usr/bin/env bash
RESOURCES_DIR="./static"


function watch() {
    pushd ${RESOURCES_DIR}
    sass --watch css/sass/main.scss:css/main.css
    popd
}

function compile() {
    pushd ${RESOURCES_DIR}
    sass css/sass/main.scss css/main.css
    popd
}

$@