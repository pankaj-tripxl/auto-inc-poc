// customer.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
const mongoose = require('mongoose');
const AutoIncrementFactory = require('mongoose-sequence');

const connection = mongoose.createConnection(
    'mongodb+srv://pankajprajapati:Zz1zIdFjaILB3du0@cluster0.zyoxbeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
);

const AutoIncrement = AutoIncrementFactory(connection);

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  customerId: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

CustomerSchema.plugin(AutoIncrement, { inc_field: 'customerId' });