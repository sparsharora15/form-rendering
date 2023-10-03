import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { Form } from './form.models';

@Controller('api/user/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('createUser')
  async createUser(@Body() userDto: User) {
    
    return this.appService.createUser(userDto);
  }
  @Post('createForm')
  async addDetailsToForm(@Body() form: Form) {
    return this.appService.createForm(form);
  }
  @Get(':userID')
  async getFormDetails(@Param('userID') userID: string) {
    return this.appService.findFormDetails(userID);
  }
  @Put('updateForm')
  async updateForm(@Body() data: string) {
    return this.appService.updateUserForm(data);
  }


}
