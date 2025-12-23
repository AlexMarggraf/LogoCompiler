export class Color {
  public static readonly BLACK = new Color(0, 0, 0);
  public static readonly RED = new Color(214, 0, 0);
  public static readonly GREEN = new Color(0, 150, 36);
  public static readonly YELLOW = new Color(255, 214, 0);
  public static readonly BLUE = new Color(13, 71, 161);
  public static readonly MAGENTA = new Color(197, 17, 98);
  public static readonly CYAN = new Color(0, 184, 212);
  public static readonly WHITE = new Color(255, 255, 255);
  public static readonly GRAY = new Color(128, 128, 128);
  public static readonly LIGHTGRAY = new Color(192, 192, 192);
  public static readonly DARKRED = new Color(156, 0, 0);
  public static readonly DARKGREEN = new Color(27, 94, 32);
  public static readonly DARKBLUE = new Color(0, 33, 113);
  public static readonly ORANGE = new Color(255, 145, 0);
  public static readonly PINK = new Color(253, 85, 143);
  public static readonly PURPLE = new Color(74, 20, 140);
  public static readonly BROWN = new Color(197, 98, 0);

  //

  /**
   * Colors of XLogo
   *
   * The order of this array matters. A Color can be referenced using number from 0 - 16.
   * We directly use this number to index the color within this array, which is not the best idea
   * but we did not find a better solution in time.
   */
  private static readonly colorNumberNameMapping: {
    color: Color;
    names: string[];
  }[] = [
    {color: Color.BLACK, names: ['black']},
    {color: Color.RED, names: ['red']},
    {color: Color.GREEN, names: ['green']},
    {color: Color.YELLOW, names: ['yellow']},
    {color: Color.BLUE, names: ['blue']},
    {color: Color.MAGENTA, names: ['magenta']},
    {color: Color.CYAN, names: ['cyan']},
    {color: Color.WHITE, names: ['white']},
    {color: Color.GRAY, names: ['grey', 'gray']},
    {color: Color.LIGHTGRAY, names: ['lightgrey', 'lightgray']},
    {color: Color.DARKRED, names: ['darkred']},
    {color: Color.DARKGREEN, names: ['darkgreen']},
    {color: Color.DARKBLUE, names: ['darkblue']},
    {color: Color.ORANGE, names: ['orange']},
    {color: Color.PINK, names: ['pink']},
    {color: Color.PURPLE, names: ['purple']},
    {color: Color.BROWN, names: ['brown']},
  ];

  public static lookupColor(value: string | number): Color | undefined {
    // I did not find a better solution to handle lookup of string and number nicely
    if (typeof value === 'string') {
      for (const mapping of this.colorNumberNameMapping) {
        if (mapping.names.includes(value)) {
          return mapping.color;
        }
      }
      return undefined;
    } else if (typeof value === 'number') {
      return Color.colorNumberNameMapping[value]?.color;
    }
    return undefined;
  }

  public static getIndex(color: Color | string): number | undefined {
    for (let i = 0; i < Color.colorNumberNameMapping.length; i++) {
      if (Color.colorNumberNameMapping[i]?.color === color) {
        return i;
      }
    }
    return undefined;
  }

  constructor(
    private _red: number,
    private _green: number,
    private _blue: number,
  ) {
    // TODO: Throw error if out of range!!
  }

  get red(): number {
    return this._red;
  }

  get green(): number {
    return this._green;
  }

  get blue(): number {
    return this._blue;
  }

  public equals(other: unknown): boolean {
    if (other instanceof Color) {
      return (
        this.red === other.red &&
        this.green === other.green &&
        this.blue === other.blue
      );
    } else if (typeof other === 'number' && isFinite(other)) {
      const convertedColor = Color.lookupColor(other);
      if (convertedColor) {
        return (
          this.red === convertedColor.red &&
          this.green === convertedColor.green &&
          this.blue === convertedColor.blue
        );
      }
    }
    return false;
  }

  public getName(): string {
    for (const mapping of Color.colorNumberNameMapping) {
      if (mapping.color === this) {
        return mapping.names[0];
      }
    }
    console.error("Unexpected color can't be found in mapping");
    // should never happen
    return 'undefined';
  }

  public toString(): string {
    return `Color(${this._red},${this._green},${this._blue})`;
  }
}
