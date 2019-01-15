# Podcaster

We use this tool to sync our gdrive folder with digital ocean. And have one way of .mp3 files distribution.

## Before you start playing with code

Please read this article to realize how does this works:

1. [Article](https://medium.com/@humadvii/downloading-files-from-google-drive-using-node-js-3704c142a5f6)

2. [Drive API](https://developers.google.com/drive/api/v3/quickstart/nodejs)

Esle you have to download the `credentials.json` form 'Drive API' in the root.

## Scheduler

Thanks to `cron` we can run the download script once a day. For current project: each day at `3:00`.

----

[MIT](./LICENSE)
