const { bootstrapWorker } = require('@vendure/core');
const { config } = require('./vendure-config');

bootstrapWorker(config).catch(err => {
    // tslint:disable-next-line:no-console
    console.log(err);
});
