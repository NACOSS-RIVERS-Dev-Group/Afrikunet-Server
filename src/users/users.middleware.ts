import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware Present !!!');
    console.log('Device ID', req.headers.deviceId);
    const { deviceId } = req.headers;

    if (!deviceId) {
      throw new HttpException(
        'You are hereby FORBIDDEN !!!',
        HttpStatus.FORBIDDEN,
      );
    }

    next();
  }
}
