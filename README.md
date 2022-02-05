Dexie with Vite repro

I'm unable to use dexie-cloud with a repo initialized on vitejs. This is a demo of such a repo.

Install and run:

```
yarn
yarn dev
```

to see the error:

```
error when starting dev server:
Error: Build failed with 1 error:
node_modules/dexie-cloud-addon/dist/modern/dexie-cloud-addon.js:19:16: error: No matching export in "node_modules/dexie/dist/dexie.mjs" for import "cmp"
    at failureErrorWithLog (/Users/dustyphillips/Desktop/Code/dexie-vite-repro/node_modules/esbuild/lib/main.js:1493:15)
    at /Users/dustyphillips/Desktop/Code/dexie-vite-repro/node_modules/esbuild/lib/main.js:1151:28
    at runOnEndCallbacks (/Users/dustyphillips/Desktop/Code/dexie-vite-repro/node_modules/esbuild/lib/main.js:941:63)
    at buildResponseToResult (/Users/dustyphillips/Desktop/Code/dexie-vite-repro/node_modules/esbuild/lib/main.js:1149:7)
    at /Users/dustyphillips/Desktop/Code/dexie-vite-repro/node_modules/esbuild/lib/main.js:1258:14
    at /Users/dustyphillips/Desktop/Code/dexie-vite-repro/node_modules/esbuild/lib/main.js:629:9
    at handleIncomingPacket (/Users/dustyphillips/Desktop/Code/dexie-vite-repro/node_modules/esbuild/lib/main.js:726:9)
    at Socket.readFromStdout (/Users/dustyphillips/Desktop/Code/dexie-vite-repro/node_modules/esbuild/lib/main.js:596:7)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:324:12)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Note: Originally, I did not have rxjs installed, and I got a `Could not resolve rxjs` instead.
This repo now has the state after I did `yarn add rxjs`.

This repo was created with the command `yarn create vite dexie-vite-repro --template react-ts`.
