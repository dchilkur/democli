import {Command, flags} from '@oclif/command'

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ democli hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
    // flag with a value (-l, --language=VALUE), is required? required:true
    language: flags.string({char: 'l', description: 'language to greet in', default: 'spanish'}),
  }

  static args = [{name: 'file'}]

  // static strict=false

  async run() {
    const {args, flags} = this.parse(Hello)
    this.log(args)

    const name = flags.name ?? 'world'
    this.log(`${flags.language}`)
    if (flags.language === 'english') {
      this.log(`hello ${name} from ./src/commands/hello.ts`)
    } else {
      this.log(`hola ${name} from ./src/commands/hello.ts`)
    }
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
