import {Command, flags} from '@oclif/command'

export default class Deploy extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
    env: flags.string({char: 'e', env: 'ENV_TO_DEPLOY'}),

  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Deploy)
    if (flags.env === 'DEV') {
      this.log('Deploying to DEV')
    } else {
      this.log('Deploying to Local')
    }
  }
}
