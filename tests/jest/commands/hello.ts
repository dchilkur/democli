import {test} from '@oclif/test'

describe('hello command works ok', () => {
  test
  .stdout()
  .command(['hello']) // the command
  .it('runs hello', ctx => {
    expect(ctx.stdout).toBe('hello world from ./src/commands/hello.ts\n')
  })

  test.skip()
  .stdout()
  .command(['hello', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).toBe('hello jeff from ./src/commands/hello.ts\n')
  })
})
