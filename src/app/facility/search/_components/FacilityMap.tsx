'use client';
import Script from 'next/script';
import { useRef } from 'react';

export function FacilityMap() {
  const container = useRef(null);

  const handleLoad = () => {
    const kakao = (window as any).kakao;
    kakao.maps.load(() => {
      const options = {
        center: new kakao.maps.LatLng(37.402056,127.108212),
        level: 3,
      };
      const map = new kakao.maps.Map(container.current, options);
      // TODO: Use the map object to add markers, etc.
    });
  };
  const handleError = (e: unknown) => {
    console.error('Kakao Map Load Error', e);
  };
  return (
    <>
      <Script
        type="text/javascript"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services,clusterer,drawing`}
        strategy="lazyOnload" // beforeInteractive, afterInteractive, lazyOnload (default)
        onLoad={handleLoad}
        onError={handleError}
      />
      <div id="map" ref={container} className="h-80 w-full"></div>
    </>
  );
}
