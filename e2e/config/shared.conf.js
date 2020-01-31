// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

exports.config = {

    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000,
    },
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec'],

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],

    // For options and arguments see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    appium: {
        args: {},
        command: 'appium'
    },

    port: 4723,

    // ====================
    // Some hooks
    // ====================
    beforeSession: () => {
        require('@babel/register');
        global.expect = require('chai').expect;
    },
};