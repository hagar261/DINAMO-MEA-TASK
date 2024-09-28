import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StrategyName } from 'src/constants/enum';

@Injectable()
export class UserAuthGuard extends AuthGuard(StrategyName.JwtUserStrategy) { }
