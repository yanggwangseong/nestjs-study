import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   *
   * Typescript 데코레이터는 런타임에서 동작하지 않아서 결국 request 요청이 들어 왔을때 string을 number로 바꿀 수 없군.
   *
   */
  @TransformParam()
  getHello(value: any): string {
    console.log(typeof value); // number로 출력될 것
    return `Value: ${value}`;
  }
}

function TransformParam(): MethodDecorator {
  return (
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      // 첫 번째 파라미터를 숫자로 변환
      if (typeof args[0] === 'string' && !isNaN(Number(args[0]))) {
        args[0] = Number(args[0]);
      }

      return originalMethod.apply(this, args);
    };
  };
}
