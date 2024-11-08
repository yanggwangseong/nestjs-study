import { Module } from '@nestjs/common';
import { AsyncLocalStorage } from 'node:async_hooks';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: AsyncLocalStorage,
      useValue: new AsyncLocalStorage(),
    },
  ],
  exports: [AsyncLocalStorage],
})
export class AlsModule {}
