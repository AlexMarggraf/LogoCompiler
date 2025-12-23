import {Color} from './color.js';
import {
  ColorType,
  NumberType,
  StringType,
  ValueObject,
  XLogoType,
} from './types.js';

export class BuiltInActionSet {
  private actionMapping = new Map<
    DefinedBuiltIns,
    (arg: ValueObject[]) => void
  >();

  /**
   * This method is called when the interpreter starts execution.
   * It is called from the method {@link XLogoInterpreter#exec}
   */
  public executionStarted(): void {
    // Do nothing by default
  }

  /**
   * This method is called when the interpreter has finished execution.
   * Override this function to implement it.
   */
  public executionFinished(): void {
    // Do nothing by default
  }

  /**
   * This function is called when no action is registered for the given built-in command.
   * To change the behavior override this function.
   * @param arg Argument for the action
   */
  public defaultAction(): void {
    // Do nothing by default
  }

  /**
   * This action is called when the command 'print' is called in an XLogo program.
   * The default is to write to the console output. To change the behaviour override this function.
   * @param arg Argument for print. Can be string or any valid XLogo runtime value
   */
  public printAction(arg: number | boolean | Color | string): void {
    // Log to console by default. May help debugging
    console.log(arg);
  }

  /**
   * Register a function for a certain built-in command.
   * The function is called when the corresponding built-in command is called in an XLogo program.
   * Only one function can be registered for a built-in command per action set.
   * @param command The enum entry of the command to override
   * @param action A function taking an array of type any.
   */
  public registerCommandAction(
    command: DefinedBuiltIns,
    action: (arg: ValueObject[]) => void,
  ): void {
    this.actionMapping.set(command, action);
  }

  public getActionForCommand(
    command: DefinedBuiltIns,
  ): (arg: ValueObject[]) => void {
    let result = this.actionMapping.get(command);
    if (!result) {
      result = this.defaultAction;
    }

    return result;
  }
}

export enum DefinedBuiltIns {
  FORWARD,
  BACKWARD,
  LEFT,
  RIGHT,
  SETPENCOLOR,
  CLEARSCREEN,
  PENERASE,
  PENPAINT,
  PENDOWN,
  PENUP,
  HOME,
  SHOWTURTLE,
  HIDETURTLE,
  CLEARHISTORY,
  SETPENWIDTH,
  WASH,
  SETSCREENCOLOR,
  SETXY,
  SETX,
  SETY,
  CIRCLE,
  DOT,
  SETHEADING,
  GENERATESOLUTIONS,
  STARTPATH,
  SETFILLCOLOR,
  FILLPATH,
  // These Builtins are directly handled in the interpreter and any registered callbacks for these are ignored
  WAIT,
  STOP,
  STOPALL,

  MESSAGEDIALOG,
}

export interface BuiltInCommandStructure {
  command: DefinedBuiltIns;
  names: string[];
  args: XLogoType[];
}

// TODO: Maybe make names visible to test if a misspelled input could be one of those?
const builtIns: BuiltInCommandStructure[] = [
  {
    command: DefinedBuiltIns.FORWARD,
    names: ['forward', 'fd'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.BACKWARD,
    names: ['backward', 'back', 'bk'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.LEFT,
    names: ['left', 'lt'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.RIGHT,
    names: ['right', 'rt'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.SETPENCOLOR,
    names: ['setpencolor', 'setpc'],
    args: [new ColorType()],
  },
  {
    command: DefinedBuiltIns.CLEARSCREEN,
    names: ['clearscreen', 'cs'],
    args: [],
  },
  {
    command: DefinedBuiltIns.PENERASE,
    names: ['penerase', 'pe'],
    args: [],
  },
  {
    command: DefinedBuiltIns.PENPAINT,
    names: ['penpaint', 'ppt'],
    args: [],
  },
  {
    command: DefinedBuiltIns.PENDOWN,
    names: ['pendown', 'pd'],
    args: [],
  },
  {
    command: DefinedBuiltIns.PENUP,
    names: ['penup', 'pu'],
    args: [],
  },
  {
    command: DefinedBuiltIns.HOME,
    names: ['home'],
    args: [],
  },
  {
    command: DefinedBuiltIns.SHOWTURTLE,
    names: ['showturtle', 'st'],
    args: [],
  },
  {
    command: DefinedBuiltIns.HIDETURTLE,
    names: ['hideturtle', 'ht'],
    args: [],
  },
  {
    command: DefinedBuiltIns.CLEARHISTORY,
    names: ['clearterminal', 'ct'],
    args: [],
  },
  {
    command: DefinedBuiltIns.SETPENWIDTH,
    names: ['setpenwidth', 'setpw'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.WASH,
    names: ['wash'],
    args: [],
  },
  {
    command: DefinedBuiltIns.SETSCREENCOLOR,
    names: ['setscreencolor', 'setsc'],
    args: [new ColorType()],
  },
  {
    command: DefinedBuiltIns.SETXY,
    names: ['setxy'],
    args: [new NumberType(), new NumberType()],
  },
  {
    command: DefinedBuiltIns.SETX,
    names: ['setx'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.SETY,
    names: ['sety'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.CIRCLE,
    names: ['circle'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.DOT,
    names: ['dot'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.SETHEADING,
    names: ['setheading'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.GENERATESOLUTIONS,
    names: ['generatesolutions'],
    args: [],
  },
  {
    command: DefinedBuiltIns.STARTPATH,
    names: ['startpath'],
    args: [],
  },
  {
    command: DefinedBuiltIns.SETFILLCOLOR,
    names: ['setfillcolor', 'setfc'],
    args: [new ColorType()],
  },
  {
    command: DefinedBuiltIns.FILLPATH,
    names: ['fillpath'],
    args: [],
  },
  {
    command: DefinedBuiltIns.STOP,
    names: ['stop'],
    args: [],
  },
  {
    command: DefinedBuiltIns.STOPALL,
    names: ['stopall'],
    args: [],
  },
  {
    command: DefinedBuiltIns.WAIT,
    names: ['wait'],
    args: [new NumberType()],
  },
  {
    command: DefinedBuiltIns.MESSAGEDIALOG,
    names: ['messageDialog', 'msgDlg'],
    args: [new StringType()],
  },
];

// Create a mapping for all command names. This simplifies the lookup process
// as we don't have to traverse the list of all command.
const allBuiltInNames: Map<string, BuiltInCommandStructure> = new Map<
  string,
  BuiltInCommandStructure
>();
builtIns.forEach((item) => {
  item['names'].forEach((alias) => {
    allBuiltInNames.set(alias, item);
  });
});

/**
 * getBuiltInCommandStructure
 * Gets the structure for a built in command.
 * @param name Name of the command to get the structure for
 * @returns If the command exists it returns the structure, undefined otherwise
 */
export function getBuiltInCommandStructure(
  name: string,
): BuiltInCommandStructure | undefined {
  return allBuiltInNames.get(name);
}
