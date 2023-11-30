export const createQueryString = (obj: { [key: string]: string }) => {
    const params = new URLSearchParams();
    Object.entries(obj).forEach(([key, value]) => {
        if (value) params.set(key, value);
    });
    return "?" + params.toString();
};