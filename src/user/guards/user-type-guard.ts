import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserType } from 'src/constants/enum';
import { UserTypes_KEY } from '../decorators/user.decorator';

@Injectable()
export class UserTypeGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredUserTypes = this.reflector.getAllAndOverride<UserType[]>(UserTypes_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredUserTypes) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();

        if (!user || !user.UserTypes) {
            return false;
        }

        return requiredUserTypes.some((UserType) => user.UserTypes.includes(UserType));
    }
}

