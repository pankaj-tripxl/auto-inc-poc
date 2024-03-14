import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getCustomers() {
    const customers =  await this.customerService.findAll();
    return customers;
  }

  @Post()
  async createCustomer(
    @Body() customerParams: CreateCustomerDto
  ) {
    console.log(customerParams)
    const customer =  await this.customerService.create(customerParams);
    return customer;
  }
}