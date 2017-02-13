(() => {
  'use_strict'
  angular.module('whatsapp.services').factory('ContactsSrv', ContactsSrv)
  // Might use a resource here that returns a JSON array

  function ContactsSrv() {
    // Some fake testing data
    var contacts = [
      {
        "_id": "589b286616f7c6a07180b3f6",
        "email": "junemadden@crustatia.com",
        "phone": "+1 (961) 447-2868",
        "firstName": "Hilary",
        "lastName": "Hampton"
      },
      {
        "_id": "589b286646a9a7d3a224deaf",
        "email": "hilaryhampton@crustatia.com",
        "phone": "+1 (862) 593-3734",
        "firstName": "Guerrero",
        "lastName": "Gilbert"
      },
      {
        "_id": "589b28664d17054aed20b63d",
        "email": "guerrerogilbert@crustatia.com",
        "phone": "+1 (984) 553-3515",
        "firstName": "Esther",
        "lastName": "Sullivan"
      },
      {
        "_id": "589b2866b648d8b973f39da3",
        "email": "esthersullivan@crustatia.com",
        "phone": "+1 (888) 554-2995",
        "firstName": "Crystal",
        "lastName": "Mack"
      },
      {
        "_id": "589b2866cd807e41dbc48d70",
        "email": "crystalmack@crustatia.com",
        "phone": "+1 (998) 456-2857",
        "firstName": "Misty",
        "lastName": "Booker"
      },
      {
        "_id": "589b2866e6820dd7c62d2391",
        "email": "mistybooker@crustatia.com",
        "phone": "+1 (950) 499-3266",
        "firstName": "Estes",
        "lastName": "Riggs"
      }
    ];

    return {
      all: () => contacts,
      get: (contactId) => contacts.find(e => e["_id"] === contactId)
    };
  }
})()