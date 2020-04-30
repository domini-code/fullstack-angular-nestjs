import 'zone.js/dist/zone-node';
import './server/main';
export * from './src/main.server';
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
