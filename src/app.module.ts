import { Module } from '@nestjs/common';
import { TestModuleModule } from './test-module/test-module.module';
import { TestControllerController } from './test-controller/test-controller.controller';

@Module({
  imports: [TestModuleModule],
  controllers: [TestControllerController]
})
export class AppModule {}
