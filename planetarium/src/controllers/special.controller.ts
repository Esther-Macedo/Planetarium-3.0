import {
  Body,
  Controller,
  Get,
  Res,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { SpecialService } from 'src/services/special.service';

@Controller('special')
export class SpecialController {
  constructor(private readonly SService: SpecialService) {}

  @Get('users')
  async getAll(@Res() res: Response) {
    try {
      const data = this.SService.getcostbyorderid();
      res.json(data);
    } catch (e) {
      console.log(e);
      res.json({ message: 'Ops' });
    }
  }

  @Get('prod')
  async getAllorders(@Res() res: Response) {
    const data = this.SService.getodbyorderid();
    res.json(data);
  }
}
