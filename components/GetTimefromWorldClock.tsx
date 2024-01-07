import moment from "moment";

let WORLDCLOCK_API = 'http://worldtimeapi.org/api/timezone/' ;

const GetTimeatLocation = async (timezone: string): Promise<number> => {
  
  const timezone_uri = WORLDCLOCK_API + timezone ;
  let location_date_time = moment() ;
  let calculated_time_gap_in_seconds = 0 ;
  // console.log('Type of time_gap variable inside function : ', typeof calculated_time_gap_in_seconds);
  // console.log('Time in local system: ', location_date_time.format('HH:mm:ss')) ;

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
      const response = await fetch(timezone_uri);
      const data = await response.json();
      location_date_time = moment(data.datetime.substr(0, 19)) ;
      calculated_time_gap_in_seconds = location_date_time.diff(moment(), 'seconds');

      // console.log('Response from API: ', data.datetime.substr(0, 19));
      // console.log('Current Time for Selected Location:', timezone, ' : ', location_date_time.format('HH:mm:ss'));
      // console.log('Time Difference between India and Selected Location in Seconds : ', location_date_time.diff(moment(), 'seconds'));
      // console.log('Result of adding 100000 seconds: ', location_date_time.add(100000,'seconds').format('DD-MMM-YYYY HH:mm:ss') );
    } 
    catch (error) {
      console.error('Error fetching API:', error);
    };

    return Promise.resolve(calculated_time_gap_in_seconds);

  };

  export default GetTimeatLocation ;