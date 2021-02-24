import userModel from '../user/user.model';

const createFormData = (values, model) => {
  const data = new FormData();
  const pairs = Object.entries(values);

  pairs.forEach((pair) => {
    if (pair[1]
      || (model
        && model[pair[0]]
        && !model[pair[0]].options.required)
    ) data.append(pair[0], pair[1]);
  });

  return data;
};

const createProfileFormData = (values) => createFormData(values, userModel);

export { createProfileFormData };
