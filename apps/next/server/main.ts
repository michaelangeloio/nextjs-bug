/*
 * This is only a minimal custom server to get started.
 * You may want to consider using Express or another server framework, and enable security features such as CORS.

 */
import { createServer } from 'http'
import next from 'next'
import * as path from 'path'
import { parse } from 'url'

// Make sure commands gracefully respect termination signals (e.g. from Docker)
// Allow the graceful termination to be manually configurable
if (!process.env.NEXT_MANUAL_SIG_HANDLE) {
  process.on('SIGTERM', () => process.exit(0))
  process.on('SIGINT', () => process.exit(0))
}

// Next.js server options:
// - The environment variable is set by `@nx/next:server` when running the dev server.
// - The fallback `__dirname` is for production builds.
const dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..')
const dev = process.env.NODE_ENV === 'development'

// HTTP Server options:
const hostname = '0.0.0.0'
const port = 8080
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const keepAliveTimeout = parseInt(process.env.KEEP_ALIVE_TIMEOUT ?? '', 10)

async function main() {
  const nextApp = next({ dev, dir })
  const handle = nextApp.getRequestHandler()

  await nextApp.prepare()

  const server = createServer((req, res) => {
    console.log('inbound request', { url: req.url, method: req.method })
    const parsedUrl = parse(req.url ?? '', true)
    handle(req, res, parsedUrl)
  })

  if (!Number.isNaN(keepAliveTimeout) && Number.isFinite(keepAliveTimeout) && keepAliveTimeout >= 0) {
    console.log('setting keepAliveTimeout', { keepAliveTimeout: `${keepAliveTimeout}ms` })
    server.keepAliveTimeout = keepAliveTimeout
  }

  server.listen(port, hostname)

  console.log('ready', { url: `http://${hostname}:${port}` })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
