const createFormData = (values) => {
  const data = new FormData();
  const pairs = Object.entries(values);

  pairs.forEach((pair) => {
    if (pair[1]) data.append(pair[0], pair[1]);
  });

  return data;
};

export { createFormData };
