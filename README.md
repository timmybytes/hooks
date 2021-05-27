<h1 align='center'>
  <img src='./public/logo512.png' alt='React logo' width='200' />
  <br />
  hooks
</h1>

<div align="center">
  <strong>React Hooks explained in simple examples</strong>
</div>

<p align="center">
  <sub>Built with ❤︎ by
  <a href="https://timmybytes.com">Timothy Merritt</a>
</p>

This is a collection of examples illustrating how
[React Hooks](https://reactjs.org/docs/hooks-intro.html) work, bootstrapped from
a default `create-react-app` project.

The [`hooks`](./src/hooks) directory in `src` contains a JavaScript file for
each of the 10 types of Hooks React makes available. Each Hook is a
self-contained component (with the exception of Hooks with greater scope, e.g.
`useContext`) which I've attempted to make as simple as possible in illustrating
state changes, ref values, etc., with very basic UI examples.

You can see the resulting site [here](https://timmybytes.github.io/hooks),
though it is **currently still a work in progress**.

## Development

To use locally, clone the repo:

```sh
git clone https://github.com/timmybytes/hooks.git
```

Open directory and install dependencies:

```sh
cd hooks/
npm install
```

To start the development environment:

```sh
npm run start
```

## License

[MIT License](./LICENSE.md).
