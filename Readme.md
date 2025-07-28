

## 🧮 Ultimate Calculator App

A powerful and feature-rich mobile calculator app built with **React Native** and **Expo**, supporting **scientific calculations**, **BMI**, **currency conversion**, **EMI calculations**, and more — all in **offline mode**.

---


## ✨ Features

* 🔢 **Scientific Calculator** – Basic + advanced mathematical functions
* 💰 **Currency Converter** – Offline mode with last-used rates
* 🏋️ **BMI Calculator** – Simple health tracking
* 🏦 **EMI Calculator** – For loans, credit cards, etc.
* ⚙️ **Tools Stack** – Tip calculator, age calculator, and more
* 🕶️ **Dark/Light Theme Toggle**
* 💥 **Haptic Feedback**
* 🧠 **History Tracking**
* 🌐 Fully **Offline Capable**
* 📂 Modular & Scalable Architecture

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (18+)
* [Expo CLI](https://docs.expo.dev/get-started/installation/)
* Android/iOS Emulator or Physical Device

---

### 🔧 Installation

```bash
git clone https://github.com/your-username/ultimate-calculator-app.git
cd ultimate-calculator-app
npm install
```

---

### 📲 Running the App

#### On Android/iOS (via Expo Go):

```bash
npx expo start
```

* Scan the QR code using Expo Go app on your device

#### On Emulator:

```bash
npx expo start --android
```

or

```bash
npx expo start --ios
```

---

## 📦 Building APK (Offline Installable Android App)

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```

Download the generated `.apk` and install on Android device.

---

## 📁 Project Structure

```
.
├── App.js
├── screens/
│   ├── HomeScreen.js
│   ├── ToolsScreen.js
│   ├── EMICalculator.js
│   └── ToolsStack.js
├── ThemeContext.js
├── assets/
│   └── icon.png
├── app.json
└── README.md
```

---

## 🔥 Tech Stack

* **React Native** (with Expo)
* **React Navigation**
* **AsyncStorage** (for theme & history persistence)
* **EAS CLI** (for APK builds)
* **Vector Icons** via `@expo/vector-icons`

---

## 🎨 Theming

Supports dynamic theme switching using `ThemeContext`:

* Light Theme
* Dark Theme
* All styles adapt to system preferences

---

## 🧪 Testing Tips

* You don't need USB debugging every time!
* Use Expo Go for wireless preview
* Or generate a QR code from Expo Dev Tools

---

## 📌 Upcoming Features

* 📊 Unit Converter (Distance, Weight, etc.)
* 🧮 Voice Input
* 🔒 App Lock with Fingerprint
* 🗂️ PDF Report Export

---

## 📦 Publishing to Play Store

When you're ready to go public:

```bash
eas build --platform android --profile production
```

Follow Expo's guide to upload the `.aab` to Google Play Console.

---

## 🧑‍💻 Developer

Made with ❤️ by ANUJJJJ

---

## 📜 License

MIT License – use, fork, and contribute freely!

---

Would you like me to:

* Generate this `README.md` file in your project?
* Add app screenshots or icons?
* Add a license and GitHub Actions for automated builds?

Let me know!

https://expo.dev/accounts/yadavanujkumar/projects/my-calculator-app/builds/ced44857-cdd2-45cc-80fd-a330a873ae7b
