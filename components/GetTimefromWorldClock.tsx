import moment from "moment";

let WORLDCLOCK_API = 'http://worldtimeapi.org/api/timezone/' ;

export const GetTimeatLocation = async (timezone: string) => {
  
  const timezone_uri = WORLDCLOCK_API + timezone ;
  let location_date_time = null ;

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
      const response = await fetch(timezone_uri);
      const data = await response.json();
      let location_date_time = moment.parseZone(data.datetime) ;

      console.log('Current Time for Selected Location:', timezone, ' : ', location_date_time.format('HH:mm:ss'));
    } 
    catch (error) {
      console.error('Error fetching API:', error);
    }

  }