export const generateTelegramShareLink = (message) => {
    const baseUrl = 'https://t.me/share?url=http://localhost:3000';
    // const encodedMessage = encodeURIComponent(message);
    // return `${baseUrl}${encodedMessage}`;
    return `${baseUrl}`;
  };