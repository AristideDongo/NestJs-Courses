// import { Property } from 'src/entities/property.entity';
// import { PropertyFeature } from 'src/entities/propertyFeature.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://nestjscoursedb_owner:CO4SmIo2gsHb@ep-sweet-butterfly-a2dnm760.eu-central-1.aws.neon.tech/nestjscoursedb?sslmode=require',
  type: 'postgres',
  port: 3306,
  // entities: [Property, PropertyFeature],
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
