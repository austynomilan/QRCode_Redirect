import { useEffect, useState } from 'react'
import { getMobileOperatingSystem } from '../utils/detect';

function Home() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
        function redirectForDownload() {
          if (typeof window !== "undefined") {
            if (/Mobi/.test(navigator.userAgent)) {
              setIsMobile(true);
              const platform = getMobileOperatingSystem();
              if (platform === "Android") {
                window.location.href =
                  "https://play.google.com/store/apps/details?id=net.humanmanager.app";
              } else if (platform === "iOS") {
                window.location.href =
                  "https://apps.apple.com/ng/app/humanmanager/id6456419119";
              }
            }
          }
        }
    
        redirectForDownload();
      }, []);
  
    if (isMobile) {
      return null;
    }
  return (
    <div>
      <p>Fall Back Page</p>
    </div>
  )
}

export default Home
