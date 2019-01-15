var schedule = require('node-schedule');
var downloader = require('./gdrive-downloader');

var rule = new schedule.RecurrenceRule();
rule.hour = 3;

var j = schedule.scheduleJob(rule, function() {
    downloader.downloadFiles();
});

process.on('SIGHUP', function() {
    j.cancel();
    process.exit();
});

process.on('SIGTERM', () => {
    j.cancel();
})
