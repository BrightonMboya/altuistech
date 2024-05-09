## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This repo uses `pnpm` to manage dependencies and the monorepo.
Install the dependencies with `pnpm install`. Make sure you have `node` and `pnpm` installed in your pc.

create the local .env file based off the content from `.env.example`
```bash
cp .env.example .env
```

Getting the mobile app up and running, this will start the ios simulator on your machine. Make sure you have Xcode installed and have the simulators installed.
```bash
cd apps/expo && pnpm run dev:ios
```
to start the android emulator
```bash
cd apps/expo && pnpm run dev:android
```

## Deployment

This project is deployed to the [Expo](https://expo.io/) app store. To deploy the app to the store, you will need to have an Expo account and have the Expo CLI installed.

To deploy the app to the store, run the following command:

```bash
expo publish
```

## Built With

* [Expo](https://expo.io/) - The official Expo client for building and deploying React Native apps.
* [React Native](https://reactnative.dev/) - A framework for building native apps with React.
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc               