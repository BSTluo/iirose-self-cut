import { Context, Schema } from 'koishi';

export const name = 'iirose-self-cut';

export interface Config { }

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  // write your plugin here
  ctx.command('iirose', '花园工具')

  ctx.command("iirose.cut", '切除bot的一首歌').action(async v => {
    if (v.session.platform != 'iirose') { return; }
    await v.session.send('cut')
  });

  ctx.command("iirose.allcut", '切除bot的所有歌').action(async v => {
    if (v.session.platform != 'iirose') { return; }
    const bot = v.session.bot;
    await v.session.send('cut all')
  });
}
