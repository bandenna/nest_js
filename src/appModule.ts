import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './entities/products.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'sample',
            entities: [Product],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Product]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class AppModule { }
