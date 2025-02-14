**To-do App**

Experience it [here][url](https://ogtodos-app.netlify.app/).

![Feb-14-2025 12-09-04](https://github.com/user-attachments/assets/ceb1765c-823c-4055-8583-8550a30af27d)

## **📌 Technologies & Concepts Used**  

In this project, I aimed to use **Redux** for state management and applied the following JavaScript concepts:  

### **🔹 Redux & State Management**  
- **Redux Toolkit (`@reduxjs/toolkit`)** – Used to manage global state efficiently.  
- **`createSlice`** – Created a slice (`toDoSlice`) to define reducers and actions.  
- **`useSelector` & `useDispatch`** – Retrieved state and dispatched actions in components.  
- **Reducers & Actions** – Handled actions such as adding, removing, and toggling tasks.  
- **Middleware & LocalStorage Sync** – Persisted tasks in `localStorage` using `useEffect`.  

### **🔹 React & JavaScript Fundamentals**  
- **React Hooks (`useState`, `useEffect`)** – Managed local state and performed side effects.  
- **Event Handling (`onClick`, `onChange`)** – Captured user interactions.  
- **Array Methods (`map`, `filter`, `find`)** – Manipulated task lists dynamically.  
- **Destructuring & Spread Operator (`...`)** – Managed state updates immutably.  
- **Conditional Rendering (`&&`, Ternary Operator `? :`)** – Displayed tasks based on state.  

### **🔹 Browser APIs & LocalStorage**  
- **`localStorage.setItem` & `localStorage.getItem`** – Stored and retrieved tasks to persist data.  
- **`JSON.stringify` & `JSON.parse`** – Converted objects to strings and vice versa.  

### **🔹 Performance & Optimization**  
- **Memoization (`useSelector` usage)** – Prevented unnecessary re-renders by selecting only required state.  
- **Efficient State Updates in Redux** – Used `immer` (built-in with Redux Toolkit) to mutate state safely.  
