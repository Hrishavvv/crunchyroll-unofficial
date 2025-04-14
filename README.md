<h1 align="center">Crunchyroll Unofficial</h1>
<p align="center">
  <strong>An unofficial Crunchyroll app for Linux</strong> <img src="https://github.com/user-attachments/assets/8acc53a4-be94-4840-8c9f-64a29a57f271" width="30" height="30" alt="emoji">
</p>

<h2 align="center">Disclaimer</h2>
<p align="center">
  This is an unofficial application and is not associated with or endorsed by Crunchyroll, LLC. The app is an Electron wrapper created for personal use only. All content, trademarks, and logos are the property of their respective owners. Use of this app is for personal purposes only and not for commercial distribution.
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/20aa9f54-b4b7-4da7-a4b0-f7275d6f1151" alt="App Screenshot" style="max-width: 100%; height: auto;">
</p>



<h2 align="center">Usage</h2>

Download the ```.zip``` file from the ```Releases``` section and unzip it in your pc.

```bash
unzip crunchyroll-linux-x64
```



Change directory to the downloaded folder.

```bash
cd crunchyroll-unofficial
```

Once inside the downloaded folder run :
```bash
pwd
```

and note the ```PATH```.



Run the app using :

```bash
./electron-widevine/electron .
```

<h3 align="center">Making an Application Menu Shortcut for Crunchyroll</h3>

Create a ```.desktop``` file of your desired name.

```bash
sudo nano ~/.local/share/applications/crunchyroll.desktop
```


Write the content of the ```.desktop``` file :
```bash                
[Desktop Entry]
Name=Crunchyroll
Exec=PATH/electron-widevine/electron PATH/main.js
Icon=PATH/resources/app/icon.png
Terminal=false
Type=Application
Categories=Video;Entertainment;
Comment=Crunchyroll Web App
#StartupWMClass=Crunchyroll
```

Replace ```PATH``` with the actual PATH that you noted earlier. 

Once updated, close the ```nano``` text editor by ``Ctrl + X`` followed ``Y`` followed by ``ENTER``.

Once you exit run :
```bash 
update-desktop-database ~/.local/share/applications
```

Now you should have your Crunchyroll App in your system which you can access from the Application Menu.
