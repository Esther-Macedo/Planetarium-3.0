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
import { OrderService } from 'src/services/order.service';
import { incomingOrder } from 'src/dtos/order.dto';
import { toDeleteOrder } from 'src/dtos/order.delete.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly OrderService: OrderService) {}

  @Get('allorders')
  async getAllorders(@Res() res: Response) {
    try {
      const data = await this.OrderService.getAllOrders();
      res.json(data);
    } catch (e) {
      console.log(e);
      res.json({ message: 'Ops' });
    }
  }

  @Post('new')
  async newproduct(@Res() res: Response, @Body() newOrder: incomingOrder) {
    try {
      const data = await this.OrderService.addOrder(newOrder);
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
    const deleted = await this.OrderService.deleteOrder(id);
    res.json(deleted);
  }
}
