# Moni 🖥

Monitoring Satuan Tugas Kebersihan Dalam Menjaga kebersihan Kota Sleman

- Monitoring dan Visualisasi situasi secara nyata melalui Geotaging
- Percepatan komunikasi, koordinasi dan memutakhirkan budaya hirarkis agar mampu menjadi dinamis
- Dapat menjadi prototype dan mengembangkan budaya digital

## Live Demo

You can see the running example here [the deployment of the app on Vercel](https://moni.vercel.app).

## Features

- Dashboard Analytics dan Visualisasi
- Monitoring dan Visualisasi situasi secara nyata melalui Geotaging
- Manajemen satgas dan bank sampah secara terpusat
## Tech

Moni uses a number of open source projects to work properly:

- [React] - A JavaScript library for building user interfaces
- [developer.spotify.com] - Build experiences for millions of music lovers with playback, personalization, and much, much more.
- [Axios] -  a simple promise based HTTP client for the browser and node.js.
- [Chakra UI] -  a simple, modular and accessible component library

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `14 || 15 || 16`
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it here for [windows][win-path] or [mac/linux][mac-path].

## Setup

After you've made sure to have the correct things (and versions) installed, you should be able to just run a few commands to get set up:

```
git clone https://github.com/lucky401/moni.git
cd moni
npm run setup
```

This may take a few minutes. If you get any errors, please read through them and see if you can find out what the problem is. If you can't work it out on your own then please [file an issue][issue] and provide _all_ the output from the commands you ran (even if it's a lot).

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```
npm install
```

If you are still unable to fix issues and you know how to use Docker 🐳 you can
setup the project with the following command:

```shell
docker-compose up --detach --build
```

## Running the app

**Set up the proper environment variables**
```shell
cp .env.example .env
```

```env
NODE_ENV=development
REACT_APP_STAGE=development
```

To get the app up and running (and really see if it worked), run:

```shell
npm run start
```

Verify the deployment by navigating to your server address in
your preferred browser.

```shell
localhost:3000
```

You can also open [the deployment of the app on Vercel](https://moni.vercel.app).

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [React]: <https://reactjs.org>
   [Chakra UI]: <https://chakra-ui.com>
   [React Table]: <https://react-table.tanstack.com>
   [Axios]: <https://axios-http.com>
   [npm]: <https://www.npmjs.com/>
   [node]: <https://nodejs.org>
   [git]: <https://git-scm.com/>
   [developer.spotify.com]: <https://developer.spotify.com/>
   [win-path]: <https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/>
   [mac-path]: <http://stackoverflow.com/a/24322978/971592>
   [Spotify developer doc]: <https://developer.spotify.com/documentation/general/guides/authorization/app-settings/>
   [issue]: <https://github.com/lucky401/moni/issues/new>
