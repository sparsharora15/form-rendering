import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Form, formDocument } from './form.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
    @InjectModel('userForm')
    private readonly userFormModel: Model<formDocument>,
  ) {}
  //  creating a user
  async createUser(user: any): Promise<User> {
    const username = user.username;

    const existingUser = await this.userModel.findOne({ username });

    if (existingUser) {
      let data = await this.userModel
        .findById(existingUser._id)
        .select('form')
        .populate('form')
        .exec();
      return data;
    }

    const newUser = new this.userModel({ username });
    return await newUser.save();
  }
  async createForm(form: any): Promise<Form> {
    const newForm = new this.userFormModel(form);
    await newForm.save();
    const user = await this.userModel.findOneAndUpdate(
      { username: form.Username },
      {
        form: newForm._id,
      },
      {
        new: true,
      }
    );

    return newForm;
  }
  async findFormDetails(userID: string) {
    let data = await this.userModel
      .findById(userID)
      .select('form')
      .populate('form')
      .exec();
    return data;
  }

  // upadting the data
  async updateUserForm(data: any): Promise<Form> {
    const updateForm = await this.userFormModel.findByIdAndUpdate(
      data._id,
      data,
      {
        new: true,
      },
    );

    return updateForm;
  }
}
