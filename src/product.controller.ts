
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/products.entity';
@Controller('products')
export class ProductController {
    constructor(private readonly userService: ProductService) { }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.userService.findAll();
    }

    @Get('/single/:id')
    async findOne(@Param('id') id: number): Promise<Product> {
        return this.userService.findOne(id);
    }

    @Post("/create")
    async create(@Body() product: Product): Promise<Product> {
        return this.userService.create(product);
    }

    @Put('/update/:id')
    async update(@Param('id') id: number, @Body() product: Product): Promise<Product> {
        return this.userService.update(id, product);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.userService.delete(id);
    }
}
