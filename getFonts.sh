export FONT_SOURCE=http://konferencjamomentum.pl/webfonts
export FONT_DESTINATION=./assets/fonts
export FONT_STATIC=./static/fonts

for FONT_NAME in ProximaNova-Regular ProximaNova-Light ProximaNova-Black
do
  for EXTENSION in eot woff2 woff ttf svg
  do
    wget -O $FONT_DESTINATION/$FONT_NAME.$EXTENSION $FONT_SOURCE/$FONT_NAME.$EXTENSION
    cp $FONT_DESTINATION/$FONT_NAME.$EXTENSION $FONT_STATIC/$FONT_NAME.$EXTENSION
  done
done
