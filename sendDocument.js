const GetSearchRequest = (z, bundle)=>{
	
	
    var statuses  = bundle.inputData.statuses;
    var toAssignedDateTime = bundle.inputData.toAssignedDateTime;
    var fromDueDate  = bundle.inputData.fromDueDate;
    var toDueDate = bundle.inputData.toDueDate;
    var fromAssignedDateTime  = bundle.inputData.fromAssignedDateTime;
    var data = statuses.toString();
    var url=`http://az-s-evo-iis-2.eastus2.cloudapp.azure.com/EVO/api/Vendor/Search/Services?statuses=${data}&fromAssignedDateTime=${fromAssignedDateTime}&toAssignedDateTime=${toAssignedDateTime}&fromDueDate=${fromDueDate}&toDueDate=${toDueDate}`
 return z.request(url,{
    method:'GET'
}).then(response =>{return z.JSON.parse(response.content)});
    
        
};
const docFields = (z, bundle) => {
    // const response = z.request('http://example.com/api/v2/fields.json');
   
    // json is is [{"key":"field_1"},{"key":"field_2"}]
    if(bundle.inputData.doc_id=="123456")
 {   return [{ key: '$title',
    label: 'title'
   },{ key: '$name',
  
    label: 'name'
    }]}
  };
  
  const recenameFields = (z, bundle) => {
  var arr=[]
    if(bundle.inputData.recepient>0)
 {  

for(var i=1;i<=bundle.inputData.recepient;i++){
arr.push({key:`recipient${i}_name`,label:`Recepient ${i} name`})
}
return arr

 }
  };

  const receemailFields = (z, bundle) => {
    var arr=[]
      if(bundle.inputData.recepient>0)
   {  
  
  for(var i=1;i<=bundle.inputData.recepient;i++){
  arr.push({key:`recipient${i}_email`,label:`Recepient ${i} email`})
  }
  return arr
  
   }
    };

   



module.exports={
 

key:'SendDocument',
noun:'SendDocument',
display:{
    label:'Send Docusign',
    description:'Send Documents and PDF',
    important:true
},
operation:{
    inputFields: [
        { key: 'doc_id',
    required: true,
    label: 'Document ID',
    helpText: 'Enter the document ID',
    dynamic: "docfieldsList.id.label",
    altersDynamicFields: true},
    {
key:'recepient',
label:'Total Recepients',
required:true

    },
        docFields,
      
        {
            key:'method',
            required:true,
            label:"Method",
            helpText:"Select a Method",
              
                choices:{ podio: 'Podio', docusign: 'Docusign', email: 'Email' }
               
            
        }
       
     ],
 
    sample:{'Status':'Success'},                
    perform:GetSearchRequest
}

};