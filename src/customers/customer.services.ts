import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];
  private id = new Date().getTime();

  create(data: CreateCustomerDto) {
    this.customers.push({
      id: this.id,
      ...data,
    });
  }

  listAll(age?: number): Customer[] {
    if (age) {
      return this.customers.filter((customer) => customer.age === age);
    }
    return this.customers;
  }

  getById(id: number): Customer {
    const customer = this.customers.find((customer) => customer.id === id);

    if (!customer) {
      throw new NotFoundException(
        `A customer with this id:${id} was not found.`,
      );
    }
    return customer;
  }

  updateById(id: number, data: Partial<CreateCustomerDto>): Customer {
    const customer = this.getById(id);

    Object.assign(customer, data);

    return customer;
  }

  deleteById(id: number): Customer {
    const customer = this.getById(id);

    if (customer) {
      const index = this.customers.indexOf(customer);
      this.customers.splice(index, 1);
      return customer;
    }

    return null;
  }
}
