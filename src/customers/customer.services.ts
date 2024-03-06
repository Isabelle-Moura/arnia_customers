import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/dto/customer.dto';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];
  private id: number = 1;

  create(data: CreateCustomerDto) {
    this.customers.push({
      id: this.id,
      ...data,
    });

    this.id++;
  }

  listAll(): Customer[] {
    return this.customers;
  }
}
