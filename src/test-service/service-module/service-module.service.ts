import { Injectable } from '@nestjs/common';
import { TestDemoInterface } from 'src/model.types/testDemo.model';
import { DemoStatusType } from '../../model.types/testDemo.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ServiceModuleService {
  private testsDemo: TestDemoInterface[] = [];

  getAllTestDemoService(): TestDemoInterface[] {
    return this.testsDemo;
  }

  getOneItemById(id: string): TestDemoInterface {
    return this.testsDemo.find((f) => f.id === id);
  }

  createTestService(num: number, name: string): TestDemoInterface {
    const test: TestDemoInterface = {
      id: uuidv4(),
      num,
      name,
      status: DemoStatusType.OPEN,
    };
    this.testsDemo.push(test);
    return test;
  }

  deleteTestService(id: string) {
    this.testsDemo = this.testsDemo.filter((f) => f.id !== id);
  }

  updateTestStatus(id: string, status: DemoStatusType) {
    const test = this.getOneItemById(id);
    test.status = status;
    return test;
  }
}
