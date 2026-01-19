# ReactNative Task 1 - UI Challenge

A beautifully designed chat application UI built with React Native and Expo. This project showcases modern mobile UI patterns with animated components, custom navigation, and a polished user experience.

## Inspiration

Insert your inspiration screenshot here:

![Inspiration](./assets/inspiration.png)

---

## Features

- **Custom Chat UI** - Modern chat list interface with smooth animations
- **Avatar Components** - Customizable user avatars with fallback support
- **Tab Navigation** - Multi-tab navigation for different chat categories
- **Floating Action Button** - Quick access to create new messages
- **Responsive Design** - Optimized for various screen sizes
- **TypeScript Support** - Full type safety throughout the application

---

## Project Structure

```
app/
├── _layout.tsx           # Root navigation layout
├── index.tsx             # Home screen
├── components/           # Reusable UI components
│   ├── Avatar.tsx        # User avatar component
│   ├── ChatListItem.tsx   # Individual chat item
│   ├── ChatTabs.tsx       # Tab navigation for chats
│   ├── FloatingButton.tsx # Floating action button
│   └── Header.tsx         # App header component
├── data/
│   └── chats.tsx          # Mock chat data
└── screens/
    └── ChatScreen.tsx     # Chat screen component
assets/
├── icons/                 # Icon assets
└── images/                # Image assets
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Expo CLI** (install globally or use `npx expo`)

### Installation

1. **Clone and navigate to the project directory:**

```
https://github.com/Ashley-Blu/ReactNative-Task1-UI_Challenge.git
```

```
cd ReactNative-Task1-UIChallenge
```

2. **Install dependencies:**

```
npm install
```

### Running the Project

Choose your platform:

#### **Start Development Server**

```
npm start
```

This opens the Expo CLI where you can choose your platform.

#### **Run on Android**

```
npm run android
```

_Requires Android Emulator or physical device_

#### **Run on iOS**

```
npm run ios
```

_Requires macOS with Xcode installed_

#### **Run on Web**

```
npm run web
```

Opens the app in your default web browser.

---

## Development Commands

| Command                 | Description                       |
| ----------------------- | --------------------------------- |
| `npm start`             | Start the development server      |
| `npm run android`       | Launch on Android emulator/device |
| `npm run ios`           | Launch on iOS simulator           |
| `npm run web`           | Launch in web browser             |
| `npm run lint`          | Run ESLint to check code quality  |
| `npm run reset-project` | Reset project to initial state    |

---

## Using Expo Go (Easiest Method)

1. **Download Expo Go App:**
   - [iOS App Store](https://apps.apple.com/app/expo-go/id1054424667)
   - [Android Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start the development server:**

   ```
   npm start
   ```

3. **Scan the QR code** with your phone:
   - **Android:** Use the Expo Go app's built-in scanner
   - **iOS:** Use the Camera app

---

## Screenshots

### Chat Details

![Chat Details](./assets/screenshot-chat.png)

---

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo** - React Native development platform
- **Expo Router** - File-based routing
- **React Navigation** - Navigation library
- **TypeScript** - Type-safe JavaScript
- **React Native Reanimated** - Smooth animations

---
