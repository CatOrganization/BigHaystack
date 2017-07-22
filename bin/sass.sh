RESOURCES_DIR="../website"
pushd $RESOURCES_DIR
echo `ls`
sass --watch css/sass/main.scss:css/main.css

popd
