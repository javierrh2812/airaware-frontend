import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  FeatureGroup,
} from "react-leaflet";
import Indicators from "./partials/Indicators";
import PopupLabel from "./partials/PopupLabel";
import { styleColor } from "../helpers/mapFunc";
import LayoutFooterNone from "./LayoutFooterNone";
import { useEffect, useState } from "react";
import { ButtonFill } from "./partials";

const defaultCenter = [-12.04318, -77.02824];

const conditions = ["good", "moderate", "unhealthy"];
const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getGeoDataInFunctionOfPosition = (center) => {
  const points = [];

  for (let i = 0; i <= 20; i++) {
    const lat = center[0] + getRandomNumber(-1,1)/100;
    const lon = center[1] - getRandomNumber(-1,1)/100;
    points.push({
      geometry: { coordinates: [lat, lon] },
      properties: {
        condition: conditions.at(getRandomInt(0,3)),
        location: "Lima",
        data_result: {
          iaq: "120",
          pressure: getRandomInt(999,1100),
          temperature: getRandomInt(15,30),
          humidity: getRandomInt(15,90),
        },
      },
    });
  }
  return points;
};
export default function Maps() {
  const [userLocation, setUserLocation] = useState(null);
  const [geoData, setGeoData] = useState([])
  const getPos = () => {

    const populateGeoData= (location) => {
        setUserLocation(location)
        const _geoData = getGeoDataInFunctionOfPosition(location);
        setGeoData(_geoData)

        const qty_un = _geoData.filter(e=>e.properties.condition === 'unhealthy').length

        alert(`🚨! Existen ${qty_un} puntos con pobre calidad de aire cerca a ti`)
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = [position.coords.latitude, position.coords.longitude]
        populateGeoData(location);
      },
      (error) => {
        populateGeoData(defaultCenter);
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };
  useEffect(() => {
    getPos();
  }, []);

  const handleGetPos = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log({ position });
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error(error);
        setUserLocation(defaultCenter);
      }
    );
  };

  if (!userLocation) {
    return (
      <LayoutFooterNone>
        <div className="w-full mx-auto p-4">
          <button
            className="inline-flex items-center px-8 py-3 text-white bg-prime border border-prime rounded hover:bg-transparent focus:outline-none focus:ring mr-2 mb-4 md:mb-0 cursor-pointer"
            onClick={handleGetPos}
          >
            Obtener ubicación
          </button>
        </div>
      </LayoutFooterNone>
    );
  }

  return (
    <LayoutFooterNone title={"Map | AirVision"}>
      <div className="relative">
        <MapContainer
          center={userLocation}
          zoom={17}
          scrollWheelZoom={false}
          className="w-full h-[calc(100vh-4rem)] z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Pradita University'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {geoData.map((feature, index) => {
            const styleOptions = {
              fillColor: styleColor(feature),
            };
            return (
              <FeatureGroup key={index}>
                <CircleMarker
                  center={feature.geometry.coordinates}
                  color="#000"
                  radius={13}
                  weight={0.9}
                  opacity={1}
                  fillOpacity={1}
                  pathOptions={styleOptions}
                >
                  <Popup>
                    <PopupLabel dataDevice={feature} />
                  </Popup>
                </CircleMarker>
              </FeatureGroup>
            );
          })}
        </MapContainer>
        <Indicators />
      </div>
    </LayoutFooterNone>
  );
}
