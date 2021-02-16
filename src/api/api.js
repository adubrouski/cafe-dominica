const fetchDoners = (type, category, criterion) => {
  const categoryUrl = category === null ? '' : `category=${category}`;
  const criterionUrl = `&_order=asc&_sort=${criterion}`;

  return fetch(`/api/${type}?${categoryUrl}${criterionUrl}`).then((resp) => resp.json());
};

export default fetchDoners;
