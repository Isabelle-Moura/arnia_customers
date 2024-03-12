import { PartialType } from '@nestjs/swagger';

import { CreateCustomerDoc } from './create-customer.doc';

export class UpdateCustomerDoc extends PartialType(CreateCustomerDoc) {}
