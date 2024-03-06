import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCustomerDto } from 'src/dto/customer.dto';
import { Customer } from 'src/entities/customer.entity';
import { CustomerService } from './customer.services';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  create(@Body() data: CreateCustomerDto) {
    return this.customerService.create(data);
  }

  @Get()
  listAll(): Customer[] {
    return this.customerService.listAll();
  }
}
