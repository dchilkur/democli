import {test} from '@oclif/test'

describe('hello command works ok', () => {
  test.skip()
  .stdout()
  .command(['hello', '--name', 'jeff']) // the command
  .it('runs hello', ctx => {
    expect(ctx.stdout).toBe('hola jeff from ./src/commands/hello.ts\n')
  })

  test
  .stdout()
  .command(['hello', '--name', 'jeff', '--language', 'english']) // the command
  .it('runs hello --name jeff -l english', ctx => {
    expect(ctx.stdout).toBe('hello jeff from ./src/commands/hello.ts\n')
  })

  test.skip()
  .stdout()
  .command(['hello', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).toBe('hello jeff from ./src/commands/hello.ts\n')
  })
})
