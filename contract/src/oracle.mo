actor Oracle {
    // Map untuk menyimpan data
    stable var footballSchedule : [(Nat, Text)] = [];
    stable var weatherData : [(Nat, Text)] = [];
    stable var cryptoPrices : [(Nat, Text)] = [];

    // Fungsi untuk menerima data sepak bola
    public shared(msg) func updateFootballSchedule(data : [(Nat, Text)]) : async Text {
        footballSchedule := data;
        return "Football schedule updated!";
    };

    // Fungsi untuk menerima data cuaca
    public shared(msg) func updateWeatherData(data : [(Nat, Text)]) : async Text {
        weatherData := data;
        return "Weather data updated!";
    };

    // Fungsi untuk menerima data harga cryptocurrency
    public shared(msg) func updateCryptoPrices(data : [(Nat, Text)]) : async Text {
        cryptoPrices := data;
        return "Crypto prices updated!";
    };

    // Fungsi untuk melihat data yang disimpan
    public query func getFootballSchedule() : async [(Nat, Text)] {
        return footballSchedule;
    };

    public query func getWeatherData() : async [(Nat, Text)] {
        return weatherData;
    };

    public query func getCryptoPrices() : async [(Nat, Text)] {
        return cryptoPrices;
    };
};
