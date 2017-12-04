# in-browser React & friends :-)

Basically I created this project to see if I could create a simple React app
without using Node.js or build too / pipleline.

## Install

Look mom no Node.js or node_modules required :-)

Simply clone the repo with your favorite git client. I prefer to do it the
following way using using my Terminal.

```
git clone https://github.com/ipatch/playground-dnd-app3
```

After that, run `node install` ...ahhh just kidding 🤡

## Gotchas

One thing I really like to figure out / solve is be able to run the app by just
pointing to the browser to location of where the file is stored on the system,
unfortunately I don't know any browser that supports this.

## Note

The easiest way to see the app in all it's beauty is to use a web server
provided by Python.

You can see if Python is installed locally on your system by running the below
command in favorite Terminal emulator. `python -V`

If you have `Python 2.x` installed on your system you can run `python -m
SimpleHTTPServer` in the root of the directory you just cloned.

If Python version returned above is 3.X run the below command `python -m
http.server`

In your favorite browser go to `localhost:8000`
