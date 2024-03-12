import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDoc {
  @ApiProperty({
    type: String,
    example: 'Hamster',
    description: "Customer's first name.",
  })
  firstName: string;

  @ApiProperty({
    type: String,
    example: 'Da Foto',
    description: "Customer's last name.",
  })
  lastName: string;

  @ApiProperty({
    type: String,
    example: '220',
    description: "Customer's age.",
  })
  age: string;
}
