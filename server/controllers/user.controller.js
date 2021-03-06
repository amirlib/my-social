import extend from 'lodash/extend';
import { uploadProfilePicture } from '../aws/user.aws';
import { getErrorMessage } from '../helpers/dbErrorHandler';
import User from '../models/user.model';

const create = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const user = await User.findOne({ email: email.trim().toLowerCase() });

    if (user) {
      return res
        .status(400)
        .json({ error: 'Email already registered' });
    }

    const newUser = new User({
      email,
      name,
      password,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: 'Register success' });
  } catch (err) {
    return res
      .status(400)
      .json({ error: getErrorMessage(err) });
  }
};

const list = async (req, res) => {
  try {
    const users = await User.find().select('name email createdAt');

    return res
      .status(200)
      .json(users);
  } catch (err) {
    return res
      .status(400)
      .json({ error: getErrorMessage(err) });
  }
};

const read = (req, res) => res.json(req.user);

const remove = async (req, res) => {
  try {
    const { user } = req;
    const deletedUser = await user.remove();

    return res
      .status(200)
      .json(deletedUser);
  } catch (err) {
    return res
      .status(400)
      .json({ error: getErrorMessage(err) });
  }
};

const update = async (req, res) => {
  try {
    let { user } = req;

    user = extend(user, req.body);

    if (req.file) {
      const response = await uploadProfilePicture(req.file, user._id);

      if (response.Location) user.profilePictureUrl = response.Location;
    }

    await user.save();

    return res
      .status(200)
      .json(user);
  } catch (err) {
    return res
      .status(400)
      .json({ error: getErrorMessage(err) });
  }
};

const userById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return res
        .status(400)
        .json({ error: 'User not found' });
    }

    req.user = user;

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Could not retrieve user' });
  }
};

export {
  create,
  list,
  read,
  remove,
  update,
  userById,
};
