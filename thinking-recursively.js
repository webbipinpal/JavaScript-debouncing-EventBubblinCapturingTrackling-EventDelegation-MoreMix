let user = {
    name: "Bipin Kumar Pal",
    address: {
      block: 'nke',
      personal:{
       city:'D K Shikarpur',
       area:'Village Ramjanki Mandir'
      },
      office:{
        city:'Doha',
        area:{
            lankmark:'Albida Metro'
        }
      }
    }
  };

  let finalobj = [];

  let magic = (obj, parent) => {
    for(let key in obj){
      if(typeof obj[key] === 'object'){
        console.log(magic(obj[key], parent + '_' + key));
      }else{
        console.log(finalobj[parent + '_' + key] = obj[key]);
      }
    }
  }
 magic(user, 'user');