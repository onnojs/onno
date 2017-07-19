## Setup

```bash
yarn add onno
```

Then add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "onno",
    "build": "onno build",
    "start": "onno start"
  },
  "dependencies": {
    "onno": "latest"
  }
}
```

Create an `index.js` file and add the following code:

```js
export default () => 'Hello onno'
```

From your command line run:

```bash
yarn dev
```

To build and run the project for production:

```bash
yarn build
yarn start
```
