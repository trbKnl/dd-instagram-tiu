import { Omit } from 'lodash';
export declare const isInstanceOf: <T>(arg: any, type: string, properties: Array<keyof T>) => arg is T;
export declare const isLike: <T>(arg: any, properties: Array<keyof T>) => arg is T;
export declare function assert(condition: unknown, msg?: string): asserts condition;
export type Weak<T> = Omit<T, '__type__'>;
