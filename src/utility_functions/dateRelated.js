export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to get the correct month index, padStart ensures two digits
    const day = date.getDate().toString().padStart(2, '0'); // padStart ensures two digits
    return `${month} / ${day}`;
  };