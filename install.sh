#!/bin/bash

set -e

APP_PATH="$(pwd)"
EXEC_PATH="$APP_PATH/electron-widevine/electron"
MAIN_PATH="$APP_PATH/main.js"
ICON_PATH="$APP_PATH/resources/app/icon.png"
DESKTOP_FILE="/usr/share/applications/crunchyroll.desktop"

if [ ! -f "$EXEC_PATH" ] || [ ! -f "$MAIN_PATH" ] || [ ! -f "$ICON_PATH" ]; then
  echo "Missing required files. Make sure you're inside the extracted Crunchyroll folder."
  exit 1
fi

echo "Creating desktop entry..."

sudo tee "$DESKTOP_FILE" > /dev/null <<EOF
[Desktop Entry]
Name=Crunchyroll
Exec=$EXEC_PATH $MAIN_PATH
Icon=$ICON_PATH
Terminal=false
Type=Application
Categories=Video;Entertainment;
Comment=Crunchyroll Web App
EOF

sudo update-desktop-database /usr/share/applications

echo "Crunchyroll App shortcut created. Find it in your Application Menu."
