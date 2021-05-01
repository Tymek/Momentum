# Momentum

## 🚀 How to develop

1. Run `yarn install`.

2. Run `docker-compose up`.<br/>It will start Hasura, Core, Admin and Backend service.

3. Apply migrations with `yarn migrate`

4. Run `yarn app` to work on Expo application.

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
