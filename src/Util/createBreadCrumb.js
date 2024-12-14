export default function createBreadCrumb(string = "/shop/jewelery/5") {
  let path = "/";

  const array = string.split("/");

  if (!array[0]) array.shift();

  const paths = array.map((p) => {
    path += `${p}/`;

    return {
      name: p,
      path: path,
    };
  });

  return paths;
}
