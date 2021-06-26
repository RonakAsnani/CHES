import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import mongoose from "mongoose";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User doesn't exist.",
      });
    }
    const isPasswordCorrrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrrect) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      "test",
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      result: existingUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const signup = async (req, res) => {
  const { email, password, name, confirmPassword, secretKey } = req.body;
  try {
    if (secretKey !== "CHES_SVNIT_2021_*#0*#") {
      return res.status(400).json({
        message: "Invalid Key",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exist.",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password doesn't match",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${name}`,
    });
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      "test",
      { expiresIn: "24h" }
    );
    console.log("control");
    return res.status(200).json({
      result,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { email, linkedIn, selectedFile, _id, position, batchOf } = req.body;
    //console.log(req.body);

    const user = await User.findOne({ email });
    //console.log(user);
    if (!user) {
      return res.status(404).send("No user exist with that id");
    }
    if (selectedFile == "") {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        {
          linkedIn: linkedIn,
          position: position,
          batchOf: batchOf,
        },
        {
          new: true,
        }
      );
      res.json(updatedUser);
    } else {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        {
          linkedIn: linkedIn,
          selectedFile: selectedFile,
          position: position,
          batchOf: batchOf,
        },
        {
          new: true,
        }
      );
      res.json(updatedUser);
    }

    //console.log(updatedUser);
  } catch (error) {
    console.log(error);
  }
};
