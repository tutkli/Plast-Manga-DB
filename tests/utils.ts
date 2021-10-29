import SpyObj = jasmine.SpyObj;

export function provideSpy(clazz: any): {provide: typeof clazz, useValue: SpyObj<typeof clazz>} {
  return {provide: clazz, useValue: createMock<typeof clazz>(clazz)};
}
