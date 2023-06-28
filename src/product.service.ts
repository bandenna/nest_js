import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityPropertyNotFoundError, Repository } from 'typeorm';
import { Product } from './entities/products.entity';
import { FindOneOptions } from 'typeorm';


@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async findOne(id): Promise<Product> {
        return this.productRepository.findOne(id);
    }


    async create(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }

    async update(id, product: Product): Promise<Product> {
        await this.productRepository.update(id, product);
        return this.productRepository.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }
}
