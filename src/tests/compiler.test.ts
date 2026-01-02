import assert from "node:assert/strict";
import { describe, it, test} from "node:test";
import { compileCode, runnableFromCode } from "../xLogo_Parser/compiler.js";
import { ActionSet } from "../ActionSet.js";

describe("Compiler", () => {
  it("repeat test", async (t) => {
    let fdcounter = 0
    const actionset = {print: (_len: number) => { fdcounter = fdcounter + 1;}};
    const script = compileCode( "to main\n" +
                                "  repeat 4 [\n" +
                                "    print 100\n" +
                                "  ]\n" +
                                "end");
    await runnableFromCode(script)(actionset as ActionSet);

    assert.strictEqual(fdcounter, 4);
  })
  it("while test", async (t) => {
    let fdcounter = 0
    const actionset = {print: (_len: number) => { fdcounter = fdcounter + 1;}};
    const script = compileCode( "to main\n" +
                                "  repeat 4 [\n" +
                                "    print 100\n" +
                                "  ]\n" +
                                "end");
    await runnableFromCode(script)(actionset as ActionSet);

    assert.strictEqual(fdcounter, 4);
  })
  it("color expression test 1", async (t) => {
    let color: [number, number, number];
    const actionset = {setpc: (_color: [number, number, number]) => { color = _color; }};
    const script = compileCode( 'to main\n' +
                                '  make "a 5\n' +
                                '  make "b 6\n' +
                                '  setpc [:a :b :a * :b]\n' +
                                'end');
    await runnableFromCode(script)(actionset as ActionSet);

    assert.equal(color[0], 5);
    assert.equal(color[1], 6);
    assert.equal(color[2], 30);
  })
  it("color expression test 2", async (t) => {
    let color: [number, number, number];
    const actionset = {setpc: (_color: [number, number, number]) => { color = _color; }};
    const script = compileCode( 'to main\n' +
                                '  setpc red\n' +
                                'end');
    await runnableFromCode(script)(actionset as ActionSet);

    assert.equal(color[1], 0);
    assert.equal(color[1], 0);
    assert.equal(color[2], 0);
  })
  it("color expression test 3", async (t) => {
    let color: [number, number, number];
    const actionset = {setpc: (_color: [number, number, number]) => { color = _color; }};
    const script = compileCode( 'to main\n' +
                                '  setpc 1\n' +
                                'end');
    await runnableFromCode(script)(actionset as ActionSet);

    assert.equal(color[0], 255);
    assert.equal(color[1], 0);
    assert.equal(color[2], 0);
  })
  it("color expression test 4", async (t) => {
    let color: [number, number, number];
    const actionset = {setpc: (_color: [number, number, number]) => { color = _color; }};
    const script = compileCode( 'to main\n' +
                                '  setpc mod 18 17\n' +
                                'end');
    await runnableFromCode(script)(actionset as ActionSet);

    assert.equal(color[0], 255);
    assert.equal(color[1], 0);
    assert.equal(color[2], 0);
  })
  it("long command names test", async (t) => {
    let fd = 0, bk = 0, lt = 0, rt = 0, setpc = 0, cs = 0, pe = 0, ppt = 0, pd = 0, pu = 0, home = 0, ct = 0, setpw = 0, wash = 0, setsc = 0, setxy = 0, setx = 0, sety = 0, setheading = 0, wait = 0, print = 0;
    const actionset = {
      fd: (_l: number) => { fd++; },
      bk: (_l: number) => { bk++; },
      lt: (_l: number) => { lt++; },
      rt: (_l: number) => { rt++; },
      setpc: (_l: [number, number, number]) => { setpc++; },
      cs: () => { cs++; },
      pe: () => { pe++; },
      ppt: () => { ppt++; },
      pd: () => { pd++; },
      pu: () => { pu++; },
      home: () => { home++; },
      ct: () => { ct++; },
      setpw: (_l: number) => { setpw++; },
      wash: () => { wash++; },
      setsc: (_l: [number, number, number]) => { setsc++; },
      setxy: (_l: number, _k: number) => { setxy++; },
      setx: (_l: number) => { setx++; },
      sety: (_l: number) => { sety++; },
      setheading: () => { setheading++; },
      wait: (_l: number) => { wait++; },
      print: (_l: any) => { print++; },
    };
    const script = compileCode( 'to main\n' +
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
                                'end');
    await runnableFromCode(script)(actionset as ActionSet);
    assert.equal(fd, 2);
    assert.equal(bk, 3);
    assert.equal(lt, 2);
    assert.equal(rt, 2);
    assert.equal(setpc, 2);
    assert.equal(cs, 2);
    assert.equal(pe, 2);
    assert.equal(ppt, 2);
    assert.equal(pd, 2);
    assert.equal(pu, 2);
    assert.equal(home, 1);
    assert.equal(ct, 2);
    assert.equal(setpw, 2);
    assert.equal(wash, 1);
    assert.equal(setsc, 2);
    assert.equal(setxy, 1);
    assert.equal(setx, 1);
    assert.equal(sety, 1);
    assert.equal(setheading, 1);
    assert.equal(wait, 1);
    assert.equal(print, 1);
  })
  it("parses mathematical expression correctly", async (t) => {
    let results: number[] = [];
    const actionset = {print: (res: number) => { results = results.concat(res); }};
    const script = compileCode( 'to main\n' +
                                '  print 1 * 2 + 3\n' +
                                '  print 1 + 2 * 3\n' +
                                '  print 1 * 6 / 3\n' +
                                'end');
    await runnableFromCode(script)(actionset as ActionSet);

    assert.equal(results[0], 5);
    assert.equal(results[1], 7);
    assert.equal(results[2], 2);
  })
})