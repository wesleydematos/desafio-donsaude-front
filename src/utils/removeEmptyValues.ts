export function removeEmptyValues<T>(obj: Partial<T>): Partial<T> {
  const newObj: Partial<T> = {};
  for (const key in obj) {
    if (typeof obj[key] !== "string" || obj[key] !== "") {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
