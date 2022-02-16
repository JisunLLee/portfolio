export const getNotion = (path) => {
    return {
        url: "http://localhost:3003"+path,
        headers: {
        "Content-Type": "application/json",
        },
    }
}