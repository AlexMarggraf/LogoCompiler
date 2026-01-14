import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Compiler, CompileStrategy, Stopper } from "../xLogo_Parser/compiler.js";
import { ActionSet } from "../ActionSet.js";

class MockContext {
  fd_calls: any[];
  bk_calls: any[];
  lt_calls: any[];
  rt_calls: any[];
  setpc_calls: any[];
  cs_calls: any[];
  pe_calls: any[];
  ppt_calls: any[];
  pd_calls: any[];
  pu_calls: any[];
  home_calls: any[];
  ct_calls: any[];
  setpw_calls: any[];
  wash_calls: any[];
  setsc_calls: any[];
  setxy_calls: any[];
  setx_calls: any[];
  sety_calls: any[];
  setheading_calls: any[];
  wait_calls: any[];
  print_calls: any[];
  constructor() {
    this.fd_calls = [];
    this.bk_calls = [];
    this.lt_calls = [];
    this.rt_calls = [];
    this.setpc_calls = [];
    this.cs_calls = [];
    this.pe_calls = [];
    this.ppt_calls = [];
    this.pd_calls = [];
    this.pu_calls = [];
    this.home_calls = [];
    this.ct_calls = [];
    this.setpw_calls = [];
    this.wash_calls = [];
    this.setsc_calls = [];
    this.setxy_calls = [];
    this.setx_calls = [];
    this.sety_calls = [];
    this.setheading_calls = [];
    this.wait_calls = [];
    this.print_calls = [];
  }
}
class MockActionSet {
  public ctx: MockContext;

  constructor(ctx2?: MockContext) {
    if (ctx2) {
      this.ctx = ctx2;
    } else {
      this.ctx = new MockContext();
    }
  }
  [s: string]: any;

  reset() {
    this.ctx = new MockContext();
  }

  fd(arg: any) {this.ctx.fd_calls = this.ctx.fd_calls.concat([arg]);}
  bk(arg: any) {this.ctx.bk_calls = this.ctx.bk_calls.concat([arg]);}
  lt(arg: any) {this.ctx.lt_calls = this.ctx.lt_calls.concat([arg]);}
  rt(arg: any) {this.ctx.rt_calls = this.ctx.rt_calls.concat([arg]);}
  setpc(arg: any) {this.ctx.setpc_calls = this.ctx.setpc_calls.concat([arg]);}
  cs() {this.ctx.cs_calls = this.ctx.cs_calls.concat({});}
  pe() {this.ctx.pe_calls = this.ctx.pe_calls.concat({});}
  ppt() {this.ctx.ppt_calls = this.ctx.ppt_calls.concat({});}
  pd() {this.ctx.pd_calls = this.ctx.pd_calls.concat({});}
  pu() {this.ctx.pu_calls = this.ctx.pu_calls.concat({});}
  home() {this.ctx.home_calls = this.ctx.home_calls.concat({});}
  ct() {this.ctx.ct_calls = this.ctx.ct_calls.concat({});}
  setpw(arg: any) {this.ctx.setpw_calls = this.ctx.setpw_calls.concat([arg]);}
  wash() {this.ctx.wash_calls = this.ctx.wash_calls.concat({});}
  setsc(arg: any) {this.ctx.setsc_calls = this.ctx.setsc_calls.concat([arg]);}
  setxy(argx: any, argy: any) {this.ctx.setxy_calls = this.ctx.setxy_calls.concat([[argx, argy]]);}
  setx(arg: any) {this.ctx.setx_calls = this.ctx.setx_calls.concat([arg]);}
  sety(arg: any) {this.ctx.sety_calls = this.ctx.sety_calls.concat([arg]);}
  setheading(arg: any) {this.ctx.setheading_calls = this.ctx.setheading_calls.concat([arg]);}
  wait(arg: any) {
    this.ctx.wait_calls = this.ctx.wait_calls.concat([arg]);
    return new Promise(resolve => setTimeout(resolve, arg * 10));
  }
  print(arg: any) {this.ctx.print_calls = this.ctx.print_calls.concat([arg]);}
}
const allstrategies: CompileStrategy[] = ["direct_access", "array_access", "hard_coded"];

describe("Compiler", () => {
  it("repeat test", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as ActionSet)
    for (let strategy of ["direct_access", "array_access"] as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( "to main\n" +
                                  "  repeat 4 [\n" +
                                  "    print 100\n" +
                                  "  ]\n" +
                                  "end", strategy);
      await c.runnableFromCode(script)();
      assert.strictEqual(actionset.ctx.print_calls.length, 4, "strategy: " + strategy);
    }
  })

  it("while test", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as ActionSet)
    for (let strategy of ["direct_access", "array_access"] as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( "to main\n" +
                                  "  repeat 4 [\n" +
                                  "    print 100\n" +
                                  "  ]\n" +
                                  "end", strategy);
      await c.runnableFromCode(script)();

      assert.strictEqual(actionset.ctx.print_calls.length, 4, "strategy: " + strategy);
    }
  })

  it("color expression test 1", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as ActionSet)
    for (let strategy of ["direct_access", "array_access"] as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( 'to main\n' +
                                  '  make "a 5\n' +
                                  '  make "b 6\n' +
                                  '  setpc [:a :b :a * :b]\n' +
                                  'end', strategy);
      await c.runnableFromCode(script)();

      let color = actionset.ctx.setpc_calls[0];
      assert.equal(color[0], 5, "strategy: " + strategy);
      assert.equal(color[1], 6, "strategy: " + strategy);
      assert.equal(color[2], 30, "strategy: " + strategy);
    }
  })

  it("color expression test 2", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as ActionSet)
    for (let strategy of allstrategies as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( 'to main\n' +
                                  '  setpc red\n' +
                                  'end', strategy);
      await c.runnableFromCode(script)();

      let color = actionset.ctx.setpc_calls[0];
      assert.equal(color[1], 0, "strategy: " + strategy);
      assert.equal(color[1], 0, "strategy: " + strategy);
      assert.equal(color[2], 0, "strategy: " + strategy);
    }
  })

  it("color expression test 3", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as ActionSet)
    for (let strategy of allstrategies as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( 'to main\n' +
                                  '  setpc 1\n' +
                                  'end', strategy);
      await c.runnableFromCode(script)();

      let color = actionset.ctx.setpc_calls[0];
      assert.equal(color[0], 255, "strategy: " + strategy);
      assert.equal(color[1], 0, "strategy: " + strategy);
      assert.equal(color[2], 0, "strategy: " + strategy);
    }
  })

  it("color expression test 4", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as ActionSet)
    for (let strategy of allstrategies as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( 'to main\n' +
                                  '  setpc mod 18 17\n' +
                                  'end', strategy);
      await c.runnableFromCode(script)();

      let color = actionset.ctx.setpc_calls[0];
      assert.equal(color[0], 255);
      assert.equal(color[1], 0);
      assert.equal(color[2], 0);
    }
  })

  it("long command names test", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as ActionSet)
    for (let strategy of allstrategies as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( 'to main\n' +
                                  '  forward 123\n' +
                                  '  fd 123\n' +
                                  '  backward 123\n' +
                                  '  back 123\n' +
                                  '  bk 123\n' +
                                  '  right 123\n' +
                                  '  rt 123\n' +
                                  '  left 123\n' +
                                  '  lt 123\n' +
                                  '  setpencolor 1\n' +
                                  '  setpc 1\n' +
                                  '  clearscreen\n' +
                                  '  cs\n' +
                                  '  penerase\n' +
                                  '  pe\n' +
                                  '  penpaint\n' +
                                  '  ppt\n' +
                                  '  pendown\n' +
                                  '  pd\n' +
                                  '  penup\n' +
                                  '  pu\n' +
                                  '  home\n' +
                                  '  clearterminal\n' +
                                  '  ct\n' +
                                  '  setpenwidth 123\n' +
                                  '  setpw 123\n' +
                                  '  wash\n' +
                                  '  setscreencolor 1\n' +
                                  '  setsc 1\n' +
                                  '  setxy 1 2\n' +
                                  '  setx 1\n' +
                                  '  sety 1\n' +
                                  '  setheading 1\n' +
                                  '  wait 1\n' +
                                  '  print 1\n' +
                                  'end', strategy);
      await c.runnableFromCode(script)();

      let r = actionset.ctx;
      assert.equal(r.fd_calls.length, 2, "strategy: " + strategy + " line 1");
      assert.equal(r.bk_calls.length, 3, "strategy: " + strategy + " line 2");
      assert.equal(r.lt_calls.length, 2, "strategy: " + strategy + " line 3");
      assert.equal(r.rt_calls.length, 2, "strategy: " + strategy + " line 4");
      assert.equal(r.setpc_calls.length, 2, "strategy: " + strategy + " line 5");
      assert.equal(r.cs_calls.length, 2, "strategy: " + strategy + " line 6");
      assert.equal(r.pe_calls.length, 2, "strategy: " + strategy + " line 7");
      assert.equal(r.ppt_calls.length, 2, "strategy: " + strategy + " line 8");
      assert.equal(r.pd_calls.length, 2, "strategy: " + strategy + " line 9");
      assert.equal(r.pu_calls.length, 2, "strategy: " + strategy + " line 10");
      assert.equal(r.home_calls.length, 1, "strategy: " + strategy + " line 11");
      assert.equal(r.ct_calls.length, 2, "strategy: " + strategy + " line 12");
      assert.equal(r.setpw_calls.length, 2, "strategy: " + strategy + " line 13");
      assert.equal(r.wash_calls.length, 1, "strategy: " + strategy + " line 14");
      assert.equal(r.setsc_calls.length, 2, "strategy: " + strategy + " line 15");
      assert.equal(r.setxy_calls.length, 1, "strategy: " + strategy + " line 16");
      assert.equal(r.setx_calls.length, 1, "strategy: " + strategy + " line 17");
      assert.equal(r.sety_calls.length, 1, "strategy: " + strategy + " line 18");
      assert.equal(r.setheading_calls.length, 1, "strategy: " + strategy +" line 19");
      assert.equal(r.wait_calls.length, 1, "strategy: " + strategy + " line 20");
      assert.equal(r.print_calls.length, 1, "strategy: " + strategy + " line 21");
    }
  })

  it("mathematical expression test", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as unknown as ActionSet)
    for (let strategy of allstrategies as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( 'to main\n' +
                                  '  print 1 * 2 + 3\n' +
                                  '  print 1 + 2 * 3\n' +
                                  '  print 1 * 6 / 3\n' +
                                  'end', strategy);
      await c.runnableFromCode(script)();

      let results = actionset.ctx.print_calls;
      assert.equal(results[0], 5, "strategy: " + strategy);
      assert.equal(results[1], 7, "strategy: " + strategy);
      assert.equal(results[2], 2, "strategy: " + strategy);
    }
  })

  it("wait test", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as unknown as ActionSet)
    for (let strategy of allstrategies as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode( 'to main\n' +
                                  '  wait 1 * 2 + 3\n' +
                                  'end', strategy);
      console.log(script)
      await c.runnableFromCode(script)();

      assert.equal(actionset.ctx.wait_calls[0], 5, "strategy: " + strategy);
    }
  })

  it("wait test with interruption", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as ActionSet)
    for (let strategy of allstrategies as CompileStrategy[]) {
      actionset.reset();
      let stopper: Stopper = {runid: 0};
      const script = c.compileCode( 'to main\n' +
                                  '  repeat 100[\n' +
                                  '    wait 1\n' +
                                  '  ]\n' +
                                  'end', strategy);
      console.log(script)
      let p = c.runnableFromCode(script)(stopper, stopper.runid);
      await new Promise(resolve => setTimeout(resolve, 100));
      stopper.runid = 1;
      await p;
      let result = actionset.ctx.wait_calls.length;
      assert.ok(result >= 4, "strategy: " + strategy + " having waited " + result.toString() + " times")
      assert.ok(result < 30, "strategy: " + strategy + " having waited " + result.toString() + " times")
    }
  })

  it("stop test", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as unknown as ActionSet)
    const code = `
    to main
      fun
      print 1234
    end
    to fun
      make "a 0
      repeat 10 [ # only 3 iterations should happen here
        print :a
        make :a :a + 1
        if (:a > 2) [
          stop
        ]
      ]
      print :a
      if (1 > 0) [
        stop
      ]
      print 123 # should not be printed because we return in the preceding if statement
    end
    `;
    for (let strategy of allstrategies as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode(code, strategy);
      await c.runnableFromCode(script)();

      assert.equal(actionset.ctx.print_calls.length, 5, "strategy: " + strategy)
      assert.equal(actionset.ctx.print_calls[0], 0, "strategy: " + strategy);
      assert.equal(actionset.ctx.print_calls[1], 1, "strategy: " + strategy);
      assert.equal(actionset.ctx.print_calls[2], 2, "strategy: " + strategy);
      assert.equal(actionset.ctx.print_calls[3], 3, "strategy: " + strategy);
      assert.equal(actionset.ctx.print_calls[4], 1234, "strategy: " + strategy);
    }
  })

  it("JavaScript global names test", async (t) => {
    const actionset = new MockActionSet();
    const c = new Compiler(actionset as unknown as ActionSet)
    const code = `
    to main
      console
      print 1234
    end
    to console
      make "onmessage 12
      print :onmessage
    end
    `;
    for (let strategy of ["direct_access", "array_access", "hard_coded"] as CompileStrategy[]) {
      actionset.reset();
      const script = c.compileCode(code, strategy);
      await c.runnableFromCode(script)();

      assert.equal(actionset.ctx.print_calls.length, 2, "strategy: " + strategy)
      assert.equal(actionset.ctx.print_calls[0], 12, "strategy: " + strategy);
      assert.equal(actionset.ctx.print_calls[1], 1234, "strategy: " + strategy);
    }
  })
})