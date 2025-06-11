import type { PrettyOptions, PrettyStream } from 'pino-pretty'

import { pino } from 'pino'
import { build } from 'pino-pretty'

/**
 * This function is required to expose pino's minimum level in config,
 * allowing to set it using environment variable and change it at runtime
 * simply by reloading pm2
 * */
export function pinoPrettyLogger(name: string) {

  const prettyOptions: PrettyOptions = {
    colorize: true,
    ignore: 'pid,hostname',
    translateTime: 'SYS:HH:MM:ss',
  }

  const prettyStream: PrettyStream = build(prettyOptions)

  return pino({
    name,
    enabled: process.env.DISABLE_LOGGING !== 'true',
    level: process.env.PAYLOAD_LOG_LEVEL || 'info'
  }, prettyStream )

}
