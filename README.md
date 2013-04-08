Hi there!
=========
This is an amusing demo that shows some of the stuff Meteor lets you get away with, with minimal effort. It's not meant to be an exhaustive overview of everything Meteor offers, but it's a pretty good starting point. It's running live at [draw-with-me.meteor.com](http://draw-with-me.meteor.com/)

If you have any questions, ASK!

Topics Covered
--------------
- WTH is Meteor?
- Client vs Server
- Templates
- Reactivity
- Events
- Collections
- Cursors
- Session
- Mongo
- Publish/Subscribe
- Startup
- Autorun
- Meteor.call & Meteor.methods
- Project Structure
- Meteorite & Atmosphere
- Some Random JS and d3.

Setup
-----

You're going to want to have Chrome. Firefox has performance issues with rendering svg's through d3 and the technique we're using. It *should* work with IE9+. Safari, Opera, Konquerer? No idea.

We're going to add some packages from the [atmosphere](https://atmosphere.meteor.com/) repository. It has a ton of packages that aren't Meteor defaults and is super useful. To do this, we'll need [meteorite](https://github.com/oortcloud/meteorite), which requires [npm](https://npmjs.org/). So...

Download and install [npm](http://nodejs.org/download/). It's also on brew and aptitude (Ubuntu).

Use npm to install meteorite: `sudo npm install -g meteorite`

If you're on Windows, try [this](http://themeteorbook.com/2013/03/20/using-meteor-and-atmopshere-on-windows).

You should be able to run `mrt -v` if everything is OK. If you get command not found, try adding `/usr/local/share/npm/bin` to your PATH.

You'll need [git](http://git-scm.com/). Now you can clone this repository: `git clone git://github.com/nwmartin/meteor-multidraw-demo.git`

You should be able to set everything up and run the demo with `mrt run`. Cheers!
