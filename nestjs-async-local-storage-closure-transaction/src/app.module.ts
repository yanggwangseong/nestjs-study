import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlsModule } from './als.module';

@Module({
  imports: [AlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
