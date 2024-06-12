// Stores statis dummy data to be used to display brt routes

const brtRouteInfo = () => {

    // Stores a immutable list of predefined brtRoutes
    const brtRouteInfo = {

        'Blue Route': {
            // 4 Stations Per Brt Route
            'Brt Stations': [
                {
                'Station Code': '',
                'lat': '',
                'lng': '',
                'Full Name': '',
                },

                {
                'Station Code': '',
                'lat': '',
                'lng': '',
                'Full Name': '',
                },

                {
                'Station Code': '',
                'lat': '',
                'lng': '',
                'Full Name': '',
                },

                {
                'Station Code': '',
                'lat': '',
                'lng': '',
                'Full Name': '',
                },
            ],

            'Decoded Polyline': ''
        },
    }

    return brtRouteInfo;

}

export default brtRouteInfo;