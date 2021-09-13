
const test = (z, bundle) => {
  //   const promise = z.request('http://az-s-evo-iis-2.eastus2.cloudapp.azure.com/EVO/api/Vendor',{
  //     method:'HEAD',
  //     headers:{'Authorization':'Bearer '+bundle.authData.apikey}
  // });
  //   return promise.then((response) => {
  //     if (response.status !== 200) {
  //       throw new Error('Invalid API Key');
  //     }
      return {"username":"deepanshu"}
    // });
  }



module.exports = {
  type: 'custom',
  // Define any auth fields your app requires here. The user will be prompted to enter this info when
  // they connect their account.
  fields: [
    {key: 'apikey', label: 'API Key', required: true, type: 'string'}
  ],
  test: test,
  // The test method allows Zapier to verify that the credentials a user provides are valid. We'll execute this
  // method whenver a user connects their account for the first time.
 
  // assuming "username" is a key in the json returned from testAuth
  connectionLabel:'{{apikey}}'
  
};