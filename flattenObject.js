const object = {
    name: "zaid",
    email: "muhammadzaidabcd@gmail.com",
    website: "https://zaiddev.netlify.app",
    address: {
        house: "XYZ",
        street: "ABC",
        city: "Lahore",
        postalCode: "54000"
    }
}
const flattenObject = () => {
    const finalObject = {};
    const internal = (object) => {
        const objectKeyValue = Object.keys(object);
        objectKeyValue.forEach((current, index) => {
            if(typeof object[current] === "object") internal(object[current]);
            else finalObject[current] = object[current];
        })
        return finalObject; 
    }
    return internal;
}
const flattenObjectFunction = flattenObject();
console.log(flattenObjectFunction(object))