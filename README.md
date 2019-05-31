# Vidhyadhan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Deployment

change `serverUrl` in `src/environments/environment.prod.ts` ::

	serverUrl: 'http://'

make production build::

	ng build --prod

zip the build folder and `scp` into server.
