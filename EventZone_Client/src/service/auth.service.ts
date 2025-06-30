import { jwtDecode } from "jwt-decode";
import { AUTH_INFO_KEY, AUTH_KEY } from "../constant/storage.key";
import {
  getFromLocalStorage,
  getFromLocalStorageAsParse,
  setToLocalStorageAsStringify,
} from "../utils/local-storage";

export const storeToken = ({ accessToken }: { accessToken: string }) => {
  const tokenWithBearer = `Bearer ${accessToken}`;
  return localStorage.setItem(AUTH_KEY, tokenWithBearer);
};

// handle Loggedin
export const handleLoggedIn = (token: string) => {
  storeToken({ accessToken: token });
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(AUTH_KEY);
  return !!authToken;
};

export const getTokenInfo = (): any => {
  if (isLoggedIn()) {
    const tokenInfo = getFromLocalStorageAsParse(AUTH_INFO_KEY);

    if (tokenInfo !== null) {
      return tokenInfo as any;
    }

    const token = getFromLocalStorage(AUTH_KEY);

    if (token) {
      const userDecodedData = jwtDecode<any>(token.split(" ")[1]);
      const info = userDecodedData._doc;

      setToLocalStorageAsStringify(AUTH_INFO_KEY, info);
      return info;
    }
  }
  return null;
};

// handle Logout
export const Logout = () => {
  // localStorage.removeItem(AUTH_KEY);
  // localStorage.removeItem(AUTH_INFO_KEY);
  localStorage.clear();
  return;
};
