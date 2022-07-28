export const getNotion = (path) => {
    console.log("URL",  process.env.REACT_APP_SERVER_URL + path)
    return {
        url: process.env.REACT_APP_SERVER_URL + path,
        headers: {
        "Content-Type": "application/json",
        },
    }
}

export const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
}
