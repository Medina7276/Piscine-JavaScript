function hasCity(country,cities){
 return function res(city){
    for(let i=0;i<cities.length;i++){
        if(cities[i]=== city){
            return city + ' is a city from ' + country
        }
    }
    return city + ' is not a city from ' + country
 }
}
