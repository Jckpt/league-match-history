export const getItems = (items) => {
  const allTrinkets = [3330, 3340, 3364, 2052, 3363, 3513]; // IDs of trinkets
  let trinket = null;
  if (allTrinkets.includes(items[items.length - 1])) trinket = items.pop();
  //add null value that will be replaced as placeholder box if player didn't use all 6 inventory space
  for (let i = items.length; i < 6; i++) {
    items.push(null);
  }
  return [items, trinket];
};
