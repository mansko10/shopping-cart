export default function urlFriendly(string) {
  const result = string.replace("/", "%2F");

  return result;
}
