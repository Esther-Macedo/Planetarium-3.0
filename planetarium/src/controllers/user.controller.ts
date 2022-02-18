import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CostumerService } from 'src/services/costumer.service';
import { Response } from 'express';
import { newUser } from 'src/dtos/user.dto';
import { updateuser } from 'src/dtos/update.user.dto';

@Controller('costumer')
export class CostumerController {
  constructor(private CostumerService: CostumerService) {}

  @Get('all')
  async getAllCostumers(@Res() res: Response) {
    const allUsers = await this.CostumerService.getAllUsers();
    res.json(allUsers);
  }

  @Post('new')
  async newCostumer(@Res() res: Response, @Body() user: newUser) {
    const incomingData = await this.CostumerService.addUser(user);
    res.json(incomingData);
  }

  @Put(':id')
  async modifyCostumer(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
    @Body() userupdate: updateuser,
  ) {
    const newdata = await this.CostumerService.updateUser(userupdate, id);
    res.json(newdata);
  }

  @Delete(':id')
  async deleteCostumer(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const deleted = await this.CostumerService.deletUser(id);
    res.json(deleted);
  }
}
