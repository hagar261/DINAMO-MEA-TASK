import { SetMetadata } from '@nestjs/common';
import { UserType } from 'src/constants/enum';


export const UserTypes_KEY = 'UserTypes';
export const UserTypes = (...UserTypes: UserType[]) => SetMetadata(UserTypes_KEY, UserTypes);
