RESOURCES_DIR="../website/resources"
pushd $RESOURCES_DIR
echo `ls`
sass --watch css/sass/main.scss:css/main.css

popd
