// Suppose, we have some data we want to fetch from a third party API

// suppose the API response to be an array of objects with properties as follows
// [{fullname: "Abhinav Tomar", age: 19, role: "Intern"},...]

async function fetchDataFromAPI() {
    var response = await axios.get("Some API URL")
    var data = await response.json()

    return data
}

/** 
 * and we have implemented our application logic according to that and further down the road
 * the API definition has changed and now properties are different now
 * in comparision to what they were during the time of implementation
 * to avoid the confusion and reduce the amount of work required to make the application compatible
 * to the new API changes, we can introduce an adapter which makes sure the data is translated,
 * before it is consumed by the application
 */

// original adapter
async function getAdaptedData() {
    var originalData = await fetchDataFromAPI()
    var adapterData = originalData.map(function(obj) {
        return {
            name: obj.fullname,
            age: obj.age,
            role: obj.role
        }
    })

    return adapterData
}

/**
 * suppose the API's return type changes to a format wehre the user's name is broken down into Firstname and Lastname
 * while our Application is used to using the Full Name format. if we have an adapter in place, 
 * we can just make some changes to that instead of replacing every instance with new logic in the application
 */

// updated adapter
async function getAdaptedData() {
    var originalData = await fetchDataFromAPI()
    var adapterData = originalData.map(function(obj) {
        return {
            name: obj.firstname + " " + obj.lastname,
            age: obj.age,
            role: obj.role
        }
    })

    return adapterData
}