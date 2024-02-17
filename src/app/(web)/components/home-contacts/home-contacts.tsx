"use client";

import Link from "next/link";

import {
  RiArrowRightLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTimeLine,
} from "@remixicon/react";
import { Button } from "@nextui-org/react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { AppLink } from "@/common/enums";

export const HomeContacts = () => {
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
    language: "uk",
    region: "UA",
  });

  if (!isLoaded) {
    return (
      <div className="py-10 px-4 text-center">
        Чекаємо поки Гугл підвантаже карти... 🙄
      </div>
    );
  }

  return (
    <section className="py-10 px-4" id="contacts">
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
          КОНТАКТИ
        </h2>

        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-5 text-lg font-medium w-full md:w-auto">
            <div className="flex items-center gap-2">
              <RiMapPinLine />

              <Link
                href={AppLink.GOOGLE_MAPS}
                target="_blank"
                className="hover:text-[#e62621] transition-colors"
              >
                <span>вул. Перемоги, 59</span>
              </Link>
            </div>

            <div className="flex gap-2">
              <RiPhoneLine />

              <div className="flex flex-col">
                <Link
                  href="tel:380663372763"
                  target="_blank"
                  className="hover:text-[#e62621] transition-colors"
                >
                  <span>+38 (066) 337 27 63</span>
                </Link>

                <Link
                  href="tel:380687710337"
                  target="_blank"
                  className="hover:text-[#e62621] transition-colors"
                >
                  <span>+38 (068) 771 03 37</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <RiMailLine />

              <Link
                href="mailto:rowdy.barbershop@gmail.com"
                target="_blank"
                className="hover:text-[#e62621] transition-colors"
              >
                <span>rowdy.barbershop@gmail.com</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <RiTimeLine />
              <span>10:00 - 20:00</span>
            </div>

            <Link href={AppLink.ALTEGIO} target="_blank">
              <Button
                color="primary"
                radius="full"
                size="lg"
                endContent={<RiArrowRightLine />}
                className="bg-[#e62621] w-full md:w-auto animate-pulsate"
              >
                Забронювати візит
              </Button>
            </Link>
          </div>

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
        </div>
      </div>
    </section>
  );
};
