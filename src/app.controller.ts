import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface TeamInput {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/signal')
  signal() {
    return this.appService.getHello();
  }

  @Post('/teams')
  createTeam(@Body() input: TeamInput) {
    return this.appService.createTeam(input.name);
  }

  @Get('/teams')
  async getTeams() {
    const teams = await this.appService.getTeams();
    console.log(teams);
    return teams;
  }
}
