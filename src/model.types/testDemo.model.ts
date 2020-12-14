export interface TestDemoInterface {
  id: string;
  num: number;
  name: string;
  status: DemoStatusType;
}
export enum DemoStatusType {
  OPEN = 'OPEN',
  CLOSE = 'CLOSED',
}
