import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class Zodvalidationpipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const parsedvalue = this.schema.safeParse(value);
    if (parsedvalue.success) return parsedvalue;
    throw new BadRequestException(parsedvalue.error.format());
  }
}
