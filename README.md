# in-browser React & friends :-)

Basically I created this project to see if I could create a simple React app
without using Node.js or a build tool / pipleline.

## Install

Look mom, no Node.js or `node_modules` directory required :-)

Simply clone the repo with your favorite git client. I prefer to clone repos with git in a terminal using a CLI.

```
git clone https://github.com/ipatch/playground-dnd-app3
```

After that, run `node install` ...ahhh just kidding 🤡

## Gotchas

One thing that I would have really liked to figure out or solve is being able to
run the app by just pointing the URL in the browser to
`file:///some/path/for/index.html` located where the file is stored on the
system, unfortunately I do not know of any browser that supports this.

## Notes

The easiest way to see the app in all its beauty 🌈 is to use a web server
provided by Python.

You can see if Python is installed locally on your system by running the below
command in favorite terminal emulator. 

```shell
python -V
```

If you have Python 2.x installed on your system you can run

`python -m SimpleHTTPServer`

in the root of the directory you just cloned.

If Python version returned above is 3.x run the below command

`python -m http.server`

In your favorite browser go to `localhost:8000`
