import { useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const mapCenter = lat && lng ? [Number(lat), Number(lng)] : [40, 0];

  return { mapCenter, lat, lng };
}
