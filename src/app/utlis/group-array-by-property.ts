export const groupArrayByProperty = (array: Array<any>, property: string) => {
  return array.reduce((r, a) => {
    const index = a[property];
    r[index] = r[index] || [];
    r[index].push(a);
    return r;
  }, Object.create(null));
};
