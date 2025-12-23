/**
 * Types for XLogo language. Each expression is always of one of those types.
 */

import {Color} from './color.js';

export abstract class XLogoType {
  public abstract isAssignableTo(type: XLogoType): boolean;

  public abstract getCommonType(type: XLogoType): XLogoType;
}

export class UnsetType extends XLogoType {
  dummy = 'Type not set';

  public isAssignableTo(_type: XLogoType): boolean {
    throw new Error('Type is not set');
  }

  public getCommonType(): XLogoType {
    throw new Error('test');
  }
}

export class UnknownType extends XLogoType {
  public getCommonType(): XLogoType {
    return new UnknownType();
  }

  public isAssignableTo(): boolean {
    return true;
  }
}

/** NumberType is the generic number type. This type is used when we cannot statically
 * determine whether a number is an integer or a float
 *
 * At runtime, we use this type when we don't care to distinguish ints and floats
 */
export class NumberType extends XLogoType {
  public getCommonType(type: XLogoType): XLogoType {
    if (type instanceof NumberType) {
      return new NumberType();
    }
    return new UnknownType();
  }

  public isAssignableTo(type: XLogoType): boolean {
    return (
      type instanceof NumberType ||
      // Ints between 1-16 are valid colors. This needs runtime check to verify the range and that indeed is an int
      type instanceof ColorType ||
      type instanceof UnknownType
    );
  }
}
export class StringType extends XLogoType {
  public override getCommonType(type: XLogoType): XLogoType {
    if (type instanceof StringType) {
      return new StringType();
    }
    return new UnknownType();
  }

  public override isAssignableTo(type: XLogoType): boolean {
    return type instanceof StringType || type instanceof UnknownType;
  }
}
// This type used in a static context determines that the value is for sure a float
export class FloatType extends NumberType {
  public override getCommonType(type: XLogoType): XLogoType {
    if (type instanceof FloatType) {
      return new FloatType();
    }
    return super.getCommonType(type);
  }

  public override isAssignableTo(type: XLogoType): boolean {
    return (
      (type instanceof NumberType && !(type instanceof IntegerType)) ||
      type instanceof UnknownType
    );
  }
}

// This type used in a static context determines that the value is for sure an int
export class IntegerType extends NumberType {
  public override getCommonType(type: XLogoType): XLogoType {
    if (type instanceof IntegerType) {
      return new IntegerType();
    }
    return super.getCommonType(type);
  }

  public override isAssignableTo(type: XLogoType): boolean {
    return (
      type instanceof NumberType ||
      type instanceof ColorType || // Ints between 1-16 are valid colors. This needs runtime check to verify the range
      type instanceof UnknownType
    );
  }
}

export class ColorType extends XLogoType {
  public getCommonType(type: XLogoType): XLogoType {
    if (type instanceof ColorType) {
      return new ColorType();
    }
    return new UnknownType();
  }

  public isAssignableTo(type: XLogoType): boolean {
    return type instanceof ColorType || type instanceof UnknownType;
  }
}

export class BooleanType extends XLogoType {
  public getCommonType(type: XLogoType): XLogoType {
    if (type instanceof BooleanType) {
      return new BooleanType();
    }
    return new UnknownType();
  }

  public isAssignableTo(type: XLogoType): boolean {
    return type instanceof BooleanType || type instanceof UnknownType;
  }
}

export interface IntegerValueObject {
  Type: IntegerType;
  Value: number;
}

export interface NumberValueObject {
  Type: NumberType;
  Value: number;
}

export interface ColorValueObject {
  Type: ColorType;
  Value: Color;
}

export interface BooleanValueObject {
  Type: BooleanType;
  Value: boolean;
}
export interface StringValueObject {
  Type: StringType;
  Value: string;
}

export type ValueObject =
  | NumberValueObject
  | ColorValueObject
  | StringValueObject
  | BooleanValueObject;

export function isNumber(val: ValueObject): val is NumberValueObject {
  return val.Type instanceof NumberType;
}

export function isColor(val: ValueObject): val is ColorValueObject {
  return val.Type instanceof ColorType;
}

export function isBoolean(val: ValueObject): val is BooleanValueObject {
  return val.Type instanceof BooleanType;
}
export function isString(val: ValueObject): val is StringValueObject {
  return val.Type instanceof StringType;
}
export function isInteger(val: ValueObject): val is IntegerValueObject {
  if (isNumber(val) && Number.isInteger(val.Value)) {
    val.Type = new IntegerType();
    return true;
  }
  return false;
}
