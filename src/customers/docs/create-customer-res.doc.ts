import { ApiProperty } from '@nestjs/swagger';
import { CreateCustomerDoc } from './create-customer.doc';

export class CreateCustomerResponseDoc extends CreateCustomerDoc {
  @ApiProperty({
    type: Number,
    example: new Date().getTime(),
    description: 'Unique identifier for customer.',
  })
  id: number;
}
