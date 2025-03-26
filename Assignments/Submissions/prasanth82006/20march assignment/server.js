export default async function getFakeAddresses() {
     const response = await fetch(
          "https://fakerapi.it/api/v2/addresses?_quantity=10"
     );
     const data = await response.json();
     console.log("The total information:");
     console.log(data);
     return data.data;
}

function getIds(addresses) {
     console.log("The address IDs:");
     addresses.forEach((address) => {
          console.log(`ID: ${address.id}`);
     });
}

function getStreets(addresses) {
     console.log("The street details:");
     addresses.forEach((address) => {
          console.log(
               `Street: ${address.street}, Street Name: ${address.streetName}`
          );
     });
}

const AddressAPI = {
     getFakeAddresses,
     getIds,
     getStreets,
};

export { AddressAPI };
