import { calculateRegion } from "@/lib/map";
import { useLocationStore } from "@/store";
import { View, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {

    const { userLongitude, userLatitude, destinationLongitude, destinationLatitude } = useLocationStore();

    const region = calculateRegion({
        userLatitude,
        userLongitude,
        destinationLatitude,
        destinationLongitude,
    });

    return (
        <MapView
            provider={PROVIDER_DEFAULT}
            className="w-full h-full rounded-2xl"
            mapType="mutedStandard"
            tintColor="black"
            showsPointsOfInterest={false}
            showsUserLocation={true}
            userInterfaceStyle="light"
            initialRegion={region}
        >
        </MapView>
    )
}

export default Map;