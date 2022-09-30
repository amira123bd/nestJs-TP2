import { Controller,Get,Post,Delete,Put,Patch } from '@nestjs/common';

@Controller('premier')


export class PremierController {
@Get()
getmethod(): string{
    return "get method "
}
@Post()
postmethod(): string{
    return "post method "
}
@Delete()
deletemethod(): string{
    return "delete method "
}
@Put()
putmethod(): string{
    return "put method "
}
@Patch()
patchmethod(): string{
    return "patch method "
}
}
