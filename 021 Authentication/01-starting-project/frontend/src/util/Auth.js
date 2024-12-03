import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();

  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function GetAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return GetAuthToken();
}

export function checkAuthLoader() {
  const token = GetAuthToken();

  if (!token) {
    return redirect("/auth");
  }
}

// import { redirect } from 'react-router-dom';

// export function getTokenDuration() {
//   const storedExpirationDate = localStorage.getItem('expiration');
//   const expirationDate = new Date(storedExpirationDate);
//   const now = new Date();
//   const duration = expirationDate.getTime() - now.getTime();
//   return duration;
// }

// export function getAuthToken() {
//   const token = localStorage.getItem('token');

//   if (!token) {
//     return null;
//   }

//   const tokenDuration = getTokenDuration();

//   if (tokenDuration < 0) {
//     return 'EXPIRED';
//   }

//   return token;
// }

// export function tokenLoader() {
//   const token = getAuthToken();
//   return token;
// }

// export function checkAuthLoader() {
//   const token = getAuthToken();

//   if (!token) {
//     return redirect('/auth');
//   }
// }
