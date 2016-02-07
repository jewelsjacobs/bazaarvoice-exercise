# This is my [BazaarVoice JS-Hangman Exercise](docs/exercise.md)

## Functionality Added:

### Test Automation
- TDD / BDD Full Stack Tests and libraries - see good reference [here](http://attackofzach.com/setting-up-a-project-using-karma-with-mocha-and-chai/) for guide
- CI with TravisCI

### Documentation
- [CSS Documentation](http://jewelsjacobs.github.io/bazaarvoice-exercise/) with [KSS](http://warpspire.com/posts/kss/)
- [API Documentation](http://jewelsjacobs.github.io/bazaarvoice-exercise/apidoc) with [apidocjs](http://apidocjs.com/)
- [Jsdoc documentation](http://jewelsjacobs.github.io/bazaarvoice-exercise/jsdoc) with [jsdoc](http://usejsdoc.org/)

### Hosted
- Hosted on free Modulus trial
- Documentation hosted on [Github Pages](http://jewelsjacobs.github.io/bazaarvoice-exercise/) 

### Automation
- Grunt options and tasks organized using load-grunt-config and jit-grunt
- CSS Documentation generation: Guide to install [nodeJS version](https://github.com/kss-node/kss-node/wiki/Quick-Start-Guide)) 
  automated with [grunt-kss](https://github.com/kss-node/grunt-kss) 
- jsdoc documentation automation with [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc)
- apidocjs documentation automation with [grunt-apidoc](https://github.com/apidoc/grunt-apidoc)
- Publish to Github Pages with [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages) 
- Run with `grunt docs`

### Architecture
- Server files separated into api and route to allow for additional apis

### Development
- Added [nodemon](http://nodemon.io/) for 'live-reload' type functionality when doing server or api file development
- Run with `grunt server`

