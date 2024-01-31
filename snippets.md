# Some code snippets

```jsx
import {configureStore} from "@reduxjs/toolkit";
import appReducer from '@/app/slices/AppSlice'
import userReducer from '@/app/slices/UserSlice'

const store = configureStore({
  reducer : {
    user : userReducer,
    app : appReducer,
  }
})

export default store;
```
