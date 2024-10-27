/* eslint-disable @typescript-eslint/no-explicit-any */
export const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || (window as any).opera;
  
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }
  
    if (/android/i.test(userAgent)) {
      return "Android";
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      return "iOS";
    }
  
    return "unknown";
  };