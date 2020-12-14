import { Module } from '@nestjs/common';
import { TestModuleModule } from './test-module/test-module.module';
import { TestControllerController } from './test-controller/test-controller.controller';
import { ServiceModuleService } from './test-service/service-module/service-module.service';

@Module({
  imports: [TestModuleModule],
  controllers: [TestControllerController],
  providers: [ServiceModuleService],
})
export class AppModule {}
