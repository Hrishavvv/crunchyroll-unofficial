<h1 align="center">Crunchyroll Unofficial</h1>
<p align="center">
  <strong>An unofficial Crunchyroll app for Linux</strong> <img src="https://github.com/user-attachments/assets/8acc53a4-be94-4840-8c9f-64a29a57f271" width="30" height="30" alt="emoji">
</p>

<h2 align="center">Disclaimer</h2>
<p align="center">
  This is an unofficial application and is not associated with or endorsed by Crunchyroll, LLC. The app is an Electron wrapper created for personal use only. All content, trademarks, and logos are the property of their respective owners. Use of this app is for personal purposes only and not for commercial distribution.
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/ea95a1f5-0b14-44eb-bc14-8e8eff5f38fa"
alt="App Screenshot" style="max-width: 100%; height: auto;">
</p>


<h2 align="center">Release Note</h2>

This release includes a custom-compiled Electron binary bundled with **Widevine CDM**, enabling full DRM support out-of-the-box — something most PWAs (Progressive Web Apps) often struggle with on Linux platforms, especially for streaming services like Crunchyroll.

The source code is provided in a raw, unbundled form, allowing you to **customize the app to your liking**. While it's currently a lightweight wrapper around the Crunchyroll website, it comes with a few practical enhancements that make it a more stable and native alternative to standard browser-based experiences.

Enjoy seamless playback and a more integrated desktop feel — without the usual DRM headaches.


<h2 align="center">Installation</h2>

Download the ```.zip``` file from the ```Releases``` section and unzip it in your pc.

OR

Use the following command:
```bash
sudo apt update && sudo apt upgrade -y && sudo apt install wget -y
wget https://github.com/Hrishavvv/crunchyroll-unofficial/releases/download/v1.0/crunchyroll-linux-x64.zip
unzip crunchyroll-linux-x64
cd crunchyroll-unofficial
```

<strong> Once inside ```crunchyroll-unofficial``` folder, you can install the app using : </strong>
```bash
chmod +x install.sh
./install.sh
```

Now you should have your Crunchyroll App in your system which you can access from the Application Menu.

