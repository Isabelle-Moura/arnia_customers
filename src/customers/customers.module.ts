import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.services';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomersModule {}
