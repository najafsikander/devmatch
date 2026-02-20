import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  //GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  //Get /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
