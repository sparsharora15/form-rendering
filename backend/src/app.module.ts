import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';
import { formSchema } from './form.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/user'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
    MongooseModule.forFeature([{name:'userForm',schema:formSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
