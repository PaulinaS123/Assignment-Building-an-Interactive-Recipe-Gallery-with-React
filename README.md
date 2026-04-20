# Assignment-Building-an-Interactive-Recipe-Gallery-with-React

### Author: Victoria Salomon
---
## Overview

This project is a React application that displays an interactive recipe gallery. Users can view different recipe images and navigate through them using "Next" and "Previous" buttons. The application demonstrates the use of React state, conditional rendering, and user interaction.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Paulinas123/gallery-app.git
   ```

2. Navigate into the project folder:
   ```bash
   cd gallery-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the provided local URL in your browser.

---

## Key Concepts Demonstrated
- React `useState` hook to manage current image index
- Conditional rendering for navigation and button states
- Event handling for user interaction
- Array indexing and length handling
- Basic UI styling

---

## Test Cases

### Normal Cases
1. Clicking "Next" moves to the next image  
2. Clicking "Previous" moves to the previous image  
3. Navigating through all images works correctly  

### Edge Cases
1. At the first image, the "Previous" button is disabled  
2. At the last image, the "Next" button is disabled  
3. The index never goes below 0 or above the array length  

---

## Video Demonstration

https://youtu.be/BbFgnCvC8GM

## Project Structure
```
src/
  assets/
    pasta.avif
    salad.jpg
    pancakes.jpg
  Gallery.jsx
  App.jsx
```
