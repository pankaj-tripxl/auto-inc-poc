import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pankajprajapati:Zz1zIdFjaILB3du0@cluster0.zyoxbeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
