import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ServiceModuleService } from '../test-service/service-module/service-module.service';
import { TestDemoInterface } from 'src/model.types/testDemo.model';
import { DemoStatusType } from '../model.types/testDemo.model';

@Controller('/test')
export class TestControllerController {
  constructor(private testService: ServiceModuleService) {}

  @Get()
  getAllTestDemos(): TestDemoInterface[] {
    return this.testService.getAllTestDemoService();
  }

  @Post()
  createTestDemo(
    @Body('num') num: number,
    @Body('name') name: string,
  ): TestDemoInterface {
    return this.testService.createTestService(num, name);
  }

  @Get('/:id')
  callOneTest(@Param('id') id: string): TestDemoInterface {
    return this.testService.getOneItemById(id);
  }

  @Delete('/:id')
  deleteATestDemo(@Param('id') id: string) {
    return this.testService.deleteTestService(id);
  }

  @Patch('/:id/:status')
  updateATestDemo(
    @Param('id') id: string,
    @Param('status') status: DemoStatusType,
  ) {
    return this.testService.updateTestStatus(id, status);
  }
}
