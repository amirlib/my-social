const create = async (user) => {
  try {
    const response = await fetch(
      '/api/users/',
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    return await response.json();
  } catch (err) {
    return { error: 'Error has occurred. Please try again or contact for support.' };
  }
};

const list = async (signal) => {
  try {
    const response = await fetch(
      '/api/users/',
      {
        credentials: 'include',
        method: 'GET',
        signal,
      },
    );

    return await response.json();
  } catch (err) {
    return { error: 'Error has occurred. Please try again or contact for support.' };
  }
};

const read = async (id, signal) => {
  try {
    const response = await fetch(
      `/api/users/${id}`,
      {
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
        signal,
      },
    );

    return await response.json();
  } catch (err) {
    return { error: 'Error has occurred. Please try again or contact for support.' };
  }
};

const remove = async (id) => {
  try {
    const response = await fetch(
      `/api/users/${id}`,
      {
        credentials: 'include',
        method: 'DELETE',
      },
    );

    return await response.json();
  } catch (err) {
    return { error: 'Error has occurred. Please try again or contact for support.' };
  }
};

const update = async (id, profile) => {
  try {
    const response = await fetch(
      `/api/users/${id}`,
      {
        body: profile,
        credentials: 'include',
        method: 'PATCH',
      },
    );

    return await response.json();
  } catch (err) {
    return { error: 'Error has occurred. Please try again or contact for support.' };
  }
};

export {
  create,
  list,
  read,
  remove,
  update,
};
