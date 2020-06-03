import {Command, flags} from '@oclif/command'
import  {cosmiconfig} from 'cosmiconfig'

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
    const explorer = cosmiconfig('democli')
    const  config = await explorer.search().then(({config}: { env: string, env_number: string }) => config)
    this.log(config)
    if (config.env === 'DEV') {
      this.log('Deploying to DEV')
    } else if (config.env === 'PROD') {
      this.log(`Deploying to Prod ${config.env_number}`)
    } else {
      this.log('Deploying to Local')
    }
  }
}
