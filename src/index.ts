interface ExecuteFunc<A> {
  execute: (arr: A[]) => A[];
}
module.exports = {
  concat: <A>(arr1: A[], arr2: A[]) => {
    return [...arr1, ...arr2];
  },

  map: <A>(
    arr: Array<A>,
    callback: (item: A, index: number) => any
  ): Array<A> => {
    const newArr: A[] = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = callback(arr[i], i);
    }
    return newArr;
  },

  filter: <A>(arr: Array<A>, callback: (item: A) => any): any => {
    for (let i = 0; i < arr.length; i++) {
      const newArr: A[] = [];
      if (callback(arr[i])) {
        newArr.push(arr[i]);
      }
      return newArr;
    }
  },
  find: <A>(arr: Array<A>, callback: (item: A) => boolean | Array<A>) => {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
  },
};
