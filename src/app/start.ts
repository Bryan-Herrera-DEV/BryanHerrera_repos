import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "./../../.env") });

import { AppBackend } from './AppBackend';
try {
  new AppBackend().start();
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
