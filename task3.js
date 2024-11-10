const tree = {
  value: 3,
  children: [
    {
      value: 1,
      children: []
    },
    {
      value: 4,
      children: []
    },
    {
      value: 3,
      children: [
        {
          value: 8,
          children: [
            {
              value: 2,
              children: []
            },
            {
              value: 5,
              children: []
            }
          ]
        },
        {
          value: 0,
          children: []
        }
      ]
    }
  ]
};

const getTreeSum = (data) => {
  if (Array.isArray(data)) {
    return data.reduce((sum, {value, children}) => {
      const vertexSum = value % 2 === 0 ? (sum + value) : sum;

      return vertexSum + (children.length && getTreeSum(children));
    }, 0);
  }

  return (data.value % 2 === 0 ? data.value : 0) + getTreeSum(data.children);
}

const treeSum = getTreeSum(tree);

console.log(treeSum)
