<h1 align="center">
  Spacetime
</h1>

<p align="center">
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDUzMjM3ODY0ZjQ1ZjU1Yzk5NTE4MWQ1NTMwMTcxNGM0ZGExNjAzZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/EyJLE62w9GnJLGsXSY/giphy.gif" alt="Spacetime" width="100%">
  </p>

## :computer: Project
Spacetime act as a personal timeline, where you login with your Github account using Oauth and create important moments of your life.

## :rocket: Technologies
This project was developed with the following technologies:
-  [Typescript](https://www.typescriptlang.org)
-  [ReactJS](https://reactjs.org/)
-  [Next](https://nextjs.org)
-  [React Native](https://reactnative.dev)
-  [Node](https://nodejs.org/en/)
-  [Prisma](https://www.prisma.io)
-  [Fastify](https://www.fastify.io)
-  [Axios](https://github.com/axios/axios)
-  [Tailwind](https://tailwindcss.com)
-  [NativeWind](https://www.nativewind.dev)
-  [Zod](https://github.com/colinhacks/zod)
-  [React Navigation](https://reactnavigation.org)

## :information_source: How To Run
From your command line:

### API
```bash
# Clone this repository
$ git clone git@github.com:1TATO/spacetime.git

# Go into the repository
$ cd server

# Install dependencies
$ npm install

# Run Migrates
$ npx prisma migrate dev

# Start server
$ npm run dev
```

### Front-end
```bash
# Clone this repository
$ git clone git@github.com:1TATO/spacetime.git

# Go into the repository
$ cd web

# Install dependencies
$ npm install

# When running web application
Go to .env file in server
Uncomment GITHUB_CLIENT_SECRET and GITHUB_CLIENT_ID under Github (WEB)
Comment GITHUB_CLIENT_SECRET and GITHUB_CLIENT_ID under Github (Mobile)

# Run web
$ npm run dev
```

### Mobile
```bash
# Clone this repository
$ git clone git@github.com:1TATO/spacetime.git

# Go into the repository
$ cd web

# Install dependencies
$ npm install

# When running mobile application
Go to .env file in server
Unomment GITHUB_CLIENT_SECRET and GITHUB_CLIENT_ID under Github (Mobile)
Comment GITHUB_CLIENT_SECRET and GITHUB_CLIENT_ID under Github (WEB)

# Run web
$ npm run start

# use expo or an emulator
```
---
Made with ♥ by José Neto :wave: [Get in touch!](https://www.linkedin.com/in/jose-netopr/)
