#!/usr/bin/env ts-node

/**
 * 梦开始的地方
 */

import { Command } from 'commander';
import { resolve } from 'path';
import { cwd } from 'process';
import packageJson from './package.json';

function handlePath(path: string): string {
  return resolve(cwd(), path);
}

const program = new Command();
program
  .name('cli-cmw')
  .description('Get some template from cli-cmw')
  .version(packageJson.version);

program
  .command('install')
  .argument('[templateName]', 'some template', 'base')
  .action((templateName) => {
    // 拿到所有的要下载的模板
    console.log(templateName);
  });

program.parse(process.argv);

// const options = program.opts();
