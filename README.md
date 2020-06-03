democli
=======

demo of oclif cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/democli.svg)](https://npmjs.org/package/democli)
[![Downloads/week](https://img.shields.io/npm/dw/democli.svg)](https://npmjs.org/package/democli)
[![License](https://img.shields.io/npm/l/democli.svg)](https://github.com/dchilkur/democli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g democli
$ democli COMMAND
running command...
$ democli (-v|--version|version)
democli/0.0.0 darwin-x64 node-v13.10.1
$ democli --help [COMMAND]
USAGE
  $ democli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`democli deploy [FILE]`](#democli-deploy-file)
* [`democli hello [FILE]`](#democli-hello-file)
* [`democli help [COMMAND]`](#democli-help-command)

## `democli deploy [FILE]`

describe the command here

```
USAGE
  $ democli deploy [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/deploy.ts](https://github.com/dchilkur/democli/blob/v0.0.0/src/commands/deploy.ts)_

## `democli hello [FILE]`

describe the command here

```
USAGE
  $ democli hello [FILE]

OPTIONS
  -f, --force
  -h, --help               show CLI help
  -l, --language=language  [default: spanish] language to greet in
  -n, --name=name          name to print

EXAMPLE
  $ democli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/dchilkur/democli/blob/v0.0.0/src/commands/hello.ts)_

## `democli help [COMMAND]`

display help for democli

```
USAGE
  $ democli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_
<!-- commandsstop -->
