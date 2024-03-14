// customer.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './customer.model';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }]),
  ],
  providers: [CustomerService],
  controllers: [CustomerController],
  exports: [CustomerService]
})
export class CustomerModule {}
