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
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/dto/customer.dto';
import { Customer } from 'src/entities/customer.entity';
import { CustomerService } from './customer.services';

/* 
   FIXME: Refatorar aqui (jogar o que é de lógica lá no service).
   TODO: Testar as funções no Insomnia.
*/

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  create(@Body() data: CreateCustomerDto) {
    return this.customerService.create(data);
  }

  @Get()
  listAll(@Query('age') age?: number): Customer[] {
    if (age) {
      return this.customerService.listByAge(age);
    }
    return this.customerService.listAll();
  }

  @Get('id')
  getCustomerById(@Param('id', ParseIntPipe) id: number): Customer {
    const customer = this.customerService.getById(id);
    if (!customer) {
      throw new NotFoundException('Customer not found.');
    }
    return customer;
  }

  @Patch(':id')
  updateCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<CreateCustomerDto>,
  ): Customer {
    const updatedCustomer = this.customerService.updateById(id, data);
    if (!updatedCustomer) {
      throw new NotFoundException('Customer not found.');
    }
    return updatedCustomer;
  }
}
