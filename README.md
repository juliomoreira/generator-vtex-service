# generator-vtex-service [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] ![Node.js Package][github-action-image]

> Generate VTEX Node service routes, middlewares and clients

## Installation

First, install [Yeoman](http://yeoman.io) and generator-vtex-service using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
yarn add -g yo
yarn add -g generator-vtex-service
```

Available generators:

#### Client

```console
$ yo vtex-service:client --help
Usage:
  yo vtex-service:client [<name>] [options]

Options:
  -h,   --help          # Print the generator's options and usage
        --skip-cache    # Do not remember prompt answers             Default: false
        --skip-install  # Do not automatically install dependencies  Default: false
        --baseURL       # Specifies a baseURL for your client.       Default: http://httpstat.us

Arguments:
  name  # Name you want to give to your client.  Type: String  Required: false
```

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Julio Moreira](http://juliomoreira.pro)

[npm-image]: https://badge.fury.io/js/generator-vtex-service.svg
[npm-url]: https://npmjs.org/package/generator-vtex-service
[travis-image]: https://travis-ci.com/juliomoreira/generator-vtex-service.svg?branch=master
[travis-url]: https://travis-ci.com/juliomoreira/generator-vtex-service
[daviddm-image]: https://david-dm.org/juliomoreira/generator-vtex-service.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/juliomoreira/generator-vtex-service
[github-action-image]: https://github.com/juliomoreira/generator-vtex-service/workflows/Node.js%20Package/badge.svg
