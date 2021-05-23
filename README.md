# Momentum

## 🏗️ How to develop

### Requirements

- [Node.js](https://nodejs.org/) (v15 or v16)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (v1)
- [Docker](https://docs.docker.com/engine/install/),
- [docker-componse](https://docs.docker.com/compose/install/).

### Installation

1. Run `yarn install`.
2. Run `yarn build`.
3. Run `docker-compose up`.<br/>It will start Hasura, Core, Admin and Backend service. You can
   append `-d` parameter to start in background. Remember to stop it later with
   `docker-compose down`
4. Apply migrations with `yarn migrate`

### Development (🐧|🍏)

- Admin panel is available on [`localhost:3000/panel`](`http://localhost:3000/panel`) from docker
- Run `yarn app` to start work on Expo application (`./packages/app`)

### 🪟 Windows setup

On Windows some development servers are not Dockerized.

- _**instead**_ of running ~~`docker-compose up`~~, run
  **`docker-compose -f docker-compose.windows.yml up`**. If you're already running
  `docker-compose up -d`, stop it with `docker-compose down`.
- `yarn app` should start Expo application (see `./packages/app`)
- `yarn windows` (in separate console) runs all backend packages in parallel (`backend`, `panel` and
  `db`)

When trying to run on the device with Expo Go, double-check Firewall (network type to private).

### 📁 File Structure

Built with [3factor app](https://3factor.app/) architectural pattern in mind, but deployed as
monolith for ease of configuration and local development.

```
├── README.md ➡️ You are here
│
├── package.json ➡️ Monorepository root
└── 📦 packages
    ├── 📱 app ➡️ Client application (React Native, Expo)
    ├── 🧑‍🔧 admin ➡️ Admin panel frontend (React Admin)
    ├── 🧰 backend ➡️ Backend logic, proxy to web apps and Hasura (Node.js, Express)
    └── 🗂️ database ➡️ Config, migrations, schema (Hasura)

```

## 📝 Notes

- example template
  [with-yarn-workspaces](https://github.com/expo/examples/tree/master/with-yarn-workspaces)
- [expo-yarn-workspaces](https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces)
