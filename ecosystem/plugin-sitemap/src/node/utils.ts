import chalk from 'chalk'

export const log = (msg, color = 'blue', label = 'SITEMAP'): void =>
  console.log(`\n${chalk.reset.inverse.bold[color](` ${label} `)} ${msg}`)
