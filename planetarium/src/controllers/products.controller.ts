import {
  Body,
  Controller,
  Get,
  Res,
  Post,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { Product } from 'src/entity/product.entity';
import { incomingProduct } from 'src/dtos/product.dto';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductService: ProductsService) {}

  @Get('all')
  async getAllproducts(@Res() res: Response) {
    try {
      const data = await this.ProductService.getAllProducts();
      res.json(data);
    } catch (e) {
      console.log(e);
      res.json({ message: 'Ops' });
    }
  }

  @Post('new')
  async newproduct(@Res() res: Response, @Body() newProduct: incomingProduct) {
    try {
      const data = await this.ProductService.addProduct(newProduct);
      res.json(data);
    } catch (e) {
      console.log(e);
      res.json({ menssagem: 'Eita' });
    }
  }

  @Delete(':id')
  async deleteProduct(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const deleted = await this.ProductService.deleteProduct(id);
    res.json(deleted);
  }
}
