export default function cookieParser(cookieHeaders: string) {
  const cookies = cookieHeaders?.split(';');
  const splittedPairs = cookies.map((cookie) => cookie.split('='));

  const cookieObj = splittedPairs.reduce<{ [key: string]: string }>(
    (obj, cookie) => {
      const key = cookie[0].trim();
      obj[key] = cookie[1].trim();

      return obj;
    },
    {}
  );

  return cookieObj;
}
