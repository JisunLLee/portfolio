export const getNotion = (path) => {
    const isEndSlice = /\/$/;
    const base_url = isEndSlice.test( process.env.REACT_APP_SERVER_URL) ? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_SERVER_URL + "/";
    return {
        url: base_url + path,
        headers: {
        "Content-Type": "application/json",
        },
    }
}

export const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
}
