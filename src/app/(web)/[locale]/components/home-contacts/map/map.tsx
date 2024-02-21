"use client";

import { FC, ReactNode } from "react";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export interface MapProps {
  loader: ReactNode;
  locale: string;
}

export const Map: FC<MapProps> = ({ loader, locale }) => {
  const libraries = ["places"];

  const mapOptions: google.maps.MapOptions = {
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  const mapCenter = { lat: 47.8400993347168, lng: 35.12051773071289 };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
    language: locale,
    region: "UA",
  });

  if (!isLoaded) {
    return (
      <div className="w-full max-w-[900px] py-10 px-4 text-center">
        {loader}
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={17}
      center={mapCenter}
      options={mapOptions}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{
        width: "100%",
        maxWidth: "900px",
        height: "400px",
        borderWidth: "3px",
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: "16px",
      }}
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  );
};
