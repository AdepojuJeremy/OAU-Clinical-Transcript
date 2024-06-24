import { useState, useEffect } from "react";

function getRememberMe() {
  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem("rememberMe");
    return storedValue === "true";
  } else {
    return false; // Or return a default value as needed
  }
}

function getExpiryTime() {
  // TODO: set expiry time

  return 3600;
}

function isExpired() {
  const storedTime = localStorage.getItem("rememberMeTime");
  if (!storedTime) return false;

  const currentTime = Math.floor(Date.now() / 1000); // converts milliseconds to secs
  const expiryTime = parseInt(storedTime, 10); // Convert string to int

  return currentTime > expiryTime + getExpiryTime(); // Check if current time exceeds expiry time
}

function clearRememberMe() {
  localStorage.removeItem("rememberMe");
  localStorage.removeItem("rememberMeTime");
}

function storeRememberMe(){
  localStorage.setItem("rememberMe", "true");
  localStorage.setItem("rememberMeTime", Math.floor(Date.now() / 1000).toString());

}

export function useRememberMe() {
  const [rememberMe, setRememberMe] = useState(getRememberMe());

  useEffect(() => {
    // Access localStorage here, as it's guaranteed to be available in the browser
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("rememberMe");
      setRememberMe(storedValue === "true");
    }
  }, []);

  const handleRememberMeChange = (event) => {
    const isChecked = event
    setRememberMe(isChecked);
    console.log(isChecked); 
   

    if (isChecked) {
       storeRememberMe() } else {
        clearRememberMe();
    }
};
  return { rememberMe, handleRememberMeChange,storeRememberMe,clearRememberMe };
}
