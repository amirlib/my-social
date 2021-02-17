const createFormData = (values) => {
  const data = new FormData();
  const pairs = Object.entries(values);

  pairs.forEach((pair) => data.append(pair[0], pair[1]));

  return data;
};

export { createFormData };
