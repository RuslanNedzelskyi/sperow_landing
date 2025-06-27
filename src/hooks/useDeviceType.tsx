import { useState, useEffect } from "react";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const updateType = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    updateType();
    window.addEventListener("resize", updateType);
    return () => window.removeEventListener("resize", updateType);
  }, []);

  return deviceType;
}
