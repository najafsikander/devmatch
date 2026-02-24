import {
  Controller,
  Get,
  Post,
  Put,
  Query,
  Param,
  Body,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  //GET /profiles
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  //Get /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  //POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return {
      id,
      name: updateProfileDto.name,
      description: updateProfileDto.description,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
