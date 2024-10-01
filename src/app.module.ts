import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';
import { User } from './user/entities/user.entity';
import { Profile } from './user/entities/profile.entity';
import { Order } from './order/entities/order.entity';
import { Product } from './product/entities/product.entity';
import { Category } from './category/entities/category.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,

      entities: [User, Profile, Order, Product, Category],
      // synchronize: true,
      // autoLoadEntities: true,
    }),
    UserModule,
    ProductModule,
    OrderModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
