// Stores statis dummy data to be used to display brt routes

const brtRouteInformation = () => {

    // Stores a immutable list of predefined brtRoutes
    const brtRouteInfo = {
        'Blue Route': {
            // 4 Stations Per Brt Route
            'Brt Stations': [
                {
                    'Station Code': '001',
                    'lat': '1.288109',
                    'lng': '103.846664',
                    'Full Name': 'Clarke Quay MRT Station, Singapore 059815',
                },

                {
                    'Station Code': '002',
                    'lat': '1.338299',
                    'lng': '103.870444',
                    'Full Name': 'Woodleigh Station Exit B',
                },

                {
                    'Station Code': '003',
                    'lat': '1.359582',
                    'lng': '103.884182',
                    'Full Name': 'Kovan Mrt Station, Singapore 534799',
                },

                {
                    'Station Code': '004',
                    'lat': '1.412513',
                    'lng': '103.910743',
                    'Full Name': 'SIT - Singapore Institute of Technology (Punggol)',
                },
            ],

            'Encoded Polyline': [],
        },
    }

    return brtRouteInfo;

}

export default brtRouteInformation;