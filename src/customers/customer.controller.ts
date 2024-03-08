import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dto/create-customer.dto';
import { Customer } from 'src/entities/customer.entity';
import { CustomerService } from './customer.services';
import { UpdateCustomerDto } from 'src/customers/dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post('create-new-customer')
  create(@Body() data: CreateCustomerDto) {
    return this.customerService.create(data);
  }

  @Get('get-all-customers')
  listAll(@Query('age') age?: number): Customer[] {
    return this.customerService.listAll(age);
  }

  @Get('get-customer/:id')
  getCustomerById(@Param('id', ParseIntPipe) id: number): Customer {
    return this.customerService.getById(id);
  }

  @Patch('update-customer/:id')
  updateCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateCustomerDto,
  ): Customer {
    return this.customerService.updateById(id, data);
  }

  @Delete('delete-customer/:id')
  deleteCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.deleteById(id);
  }
}
