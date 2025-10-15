// components/KakaoMap.jsx
import { useEffect, useRef } from "react";

function KakaoMap({ type, handleClick }) {
  const mapRef = useRef(null);

  useEffect(() => {
    // 👉 SDK 로드 여부 확인용 로그
    console.log("window.kakao:", window.kakao);

    if (window.kakao?.maps?.load) {
      window.kakao.maps.load(() => {
        console.log("✅ Kakao Map SDK loaded!");

        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울시청
          level: 3
        };

        const map = new window.kakao.maps.Map(container, options);

        new window.kakao.maps.Marker({
          position: options.center,
          map: map
        });
      });
    } else {
      console.error("❌ Kakao Map SDK not loaded yet.");
    }
  }, []);

  return (
    <>
      <div id="map" ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
      <button className="travel-map-button" type="button" onClick={() => handleClick(type)}>●</button>
    </>
  );
}

export default KakaoMap;