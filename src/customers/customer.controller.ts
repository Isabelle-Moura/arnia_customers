import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dto/create-customer.dto';
import { Customer } from 'src/entities/customer.entity';
import { CustomerService } from './customer.services';
import { UpdateCustomerDto } from 'src/customers/dto/update-customer.dto';
import { CreateCustomerDoc } from './docs/create-customer.doc';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateCustomerResponseDoc } from './docs/create-customer-res.doc';
import { UpdateCustomerDoc } from './docs/update-customer.doc';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @ApiBody({
    type: CreateCustomerDoc,
  })
  @ApiResponse({
    type: CreateCustomerResponseDoc,
  })
  @Post('create-new-customer')
  create(@Body() data: CreateCustomerDto) {
    return this.customerService.create(data);
  }

  @ApiResponse({
    type: CreateCustomerResponseDoc,
    isArray: true,
  })
  @Get('get-all-customers')
  listAll(@Query('age') age?: number): Customer[] {
    return this.customerService.listAll(age);
  }

  @ApiResponse({
    type: CreateCustomerResponseDoc,
  })
  @Get('get-customer/:id')
  getCustomerById(@Param('id', ParseIntPipe) id: number): Customer {
    return this.customerService.getById(id);
  }

  @ApiBody({
    type: UpdateCustomerDoc,
  })
  @ApiResponse({
    type: CreateCustomerResponseDoc,
  })
  @Patch('update-customer/:id')
  updateCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateCustomerDto,
  ): Customer {
    return this.customerService.updateById(id, data);
  }

  @ApiResponse({
    type: CreateCustomerResponseDoc,
  })
  @HttpCode(202)
  @Delete('delete-customer/:id')
  deleteCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.deleteById(id);
  }
}
