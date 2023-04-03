# <span style="color: #5486ff;">**DEVJOBS APP**</span>

#### A mobile application for job search mainly in the tech industry

<div style="margin-top: 30px;"></div>

### **Technologies Used** 🤖

<div style="margin-top: 10px;"></div>

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![FastAPI](https://img.shields.io/badge/RapidAPI-4b81c0?style=for-the-badge&logo=api)

<div style="margin-top: 20px;"></div>
 
***

<div style="margin-top: 20px;"></div>

### **Provisional Rendering**

<div style="margin-top: 30px;"></div>

- **`Home Page`**

<img src="assets/images/iPhone-README-image.png" style="height: 500px"/>

<div style="margin-top: 40px;"></div>

<!-- <div style="margin-top: 30px;"></div> -->

- **`Job Detail Page`**

<img src="assets/images/iphone-readme-job-details-image.png" style="height: 500px"/>

<div style="margin-top: 10px;"></div>

#

<div style="margin-top: 35px;"></div>

## 🚀 [<span style="font-weight: bold; color: white">How to use</span>](#🚀-how-to-use)

<div style="margin-top: 20px;"></div>

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

```sh
npx create-react-native-app -e with-router

OR

npx create-react-native-app -t with-router
```

#

<div style="margin-top: 30px;"></div>

### [<span style="font-weight: bold; color: white">Expo router Info</span>](#expo-router-info) 📝

<div style="margin-top: 20px;"></div>

- Find out how to fully use expo router by reading the [_Documentation_](https://expo.github.io/router)

<div style="margin-top: 30px;"></div>

### **Launch of the project**

---

```sh
npm start
```

<div style="margin-top: 30px;"></div>

### **In case of connection problems**

Follow these steps

1. Shut down the server

```sh
Ctrl + c
```

2. Install expo cli with this command :

```sh
npm install -g expo-cli
```

3. Run the command: npm

```sh
expo-cli start --tunnel
```

<!-- Takes an item from data and renders it into the list. Typical usage:

_renderItem = ({item}) => (
  <TouchableOpacity onPress={() => this._onPress(item)}>
    <Text>{item.title}</Text>
  <TouchableOpacity/>
);
...
<FlatList data={[{title: 'Title Text', key: 'item1'}]} renderItem={this._renderItem} />
Provides additional metadata like index if you need it.

AXIOS CONNECTION PROBLEM
Request failed with status code 429
at node_modules\axios\lib\core\settle.js:null in settle
at node_modules\axios\lib\adapters\xhr.js:null in onloadend
- ... 10 more stack frames from framework internals
-->
