export const getFormattedDate = (timestamp) => {
    const date = new Date(timestamp);
    const fullYear = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${fullYear}`;
};
