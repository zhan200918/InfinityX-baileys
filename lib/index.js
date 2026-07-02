import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
╔══╗──╔═╦╗──╔╦╗──╔╗╔╗
╚║║╬═╦╣═╬╬═╦╬╣╚╦╦╬╗╔╝
╔║║╣║║║╔╣║║║║║╔╣║╠╝╚╗
╚══╩╩═╩╝╚╩╩═╩╩═╬╗╠╝╚╝
───────────────╚═╝
Creator : ZhanXoffcS
`));
console.log(chalk.hex("#00c2ff")("ZhanXoffc — a Baileys-based WhatsApp Web library\n"));
console.log(chalk.hex("#00c2ff")("Thank you for using Baileys ZhanXoffc. Hope it helps."));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
