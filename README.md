
# EmbedTube

![logo](/src/icons/50.png)

Browser extension to replace YouTube videos with embedded versions. Circumvents adblock warning. 

> [!WARNING]  
> No warranty, not liable for any actions taken against the user for use of this extension. 

> [!IMPORTANT]  
> This extension is currently in prototyping stage. Bugs are **very likely** to occur. 

## How to install?

This extension is not available on any browser store currently.

### Firefox (Temporary Add-on):

1) Clone this repo to your disk.
2) Navigate to `about:debugging#/runtime/this-firefox`.
3) Click on `Load Temporary Add-on`.
4) Navigate to the `src` folder in the cloned repo and select the folder. 

## Development Checklist:
- [ ] Youtube playlists skip automatically thinking that the video is broken.
- [ ] Clicking to another video does not update the video player.
- [ ] Video audio remains after clicking off the video (pause when leaving page?)
- [ ] Resizing issues, see if script can hook and use the old CSS for the player.

## License:

This project is licensed under [The 3-Clause BSD License](https://opensource.org/license/bsd-3-clause).