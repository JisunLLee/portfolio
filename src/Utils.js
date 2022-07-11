export const getNotion = (path) => {
    return {
        url: "http://localhost:3003"+path,
        headers: {
        "Content-Type": "application/json",
        },
    }
}

export const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
}
