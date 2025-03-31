"use client";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  function localStorageProvider() {
    const myMap = new Map();
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("app-cache") || "{}");
      Object.keys(data).map((item) => {
        myMap.set(item, data[item]);
      });
      window.addEventListener("beforeunload", () => {
        const json = {
          "user/loginInfo": myMap.get("user/loginInfo"),
        };
        localStorage.setItem("app-cache", JSON.stringify(json));
      });
    }

    return myMap;
  }

  return <>{children}</>;
};

export default Provider;
