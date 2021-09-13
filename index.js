const authentication = require('./authentication');
const SendDocument = require ("./sendDocument")

const addApiKeyToHeader = (request, z, bundle) => {
  request.headers['Authorization'] = "Bearer "+bundle.authData.apikey;
  return request;
};

const handleHTTPError = (response, z, bundle) => {
  
 if(response.status >= 400) throw new Error(`Unexpected status code ${response.status}`);

  return response;
};


const docOptions = async(z,bundle)=>{

  // const url=`http://az-s-evo-iis-2.eastus2.cloudapp.azure.com/EVO/api/Lender/Order/${bundle.inputData.order_id}/Service/${bundle.inputData.service_id}/Email/Recipients`
 
  // var a;
  // var map_data=[]

  // return z.request(url,{
  //       method:'GET'
  //   }).then(response =>{
      
      
  //     a= z.JSON.parse(response.content)
  //     map_data=a.Recipients.map(data=>{
  //       return {id:data.UserUID,label:data.EmailAddress}
  //     })

  //     return map_data
    
// })
    
return [{id:"123456",label:"Assignment Contract.pdf"},
{id:"123782",label:"Purchase Contract.pdf"},
{id:"127128",label:"FIFI Contract.pdf"}]
    
    }












module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: authentication,

  beforeRequest: [addApiKeyToHeader],

  afterResponse: [handleHTTPError],

  // If you want your trigger to show up, you better include it here!
  triggers: {},

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {
    [SendDocument.key]: SendDocument
  },

  resources: { 
    orderfields: {
    key: "docfields",
    noun: "docfields",
    list: {
      display: { label: "docfields", description: "Availale Documents" },
      operation: { perform:docOptions  },
    },
  }
},
};
