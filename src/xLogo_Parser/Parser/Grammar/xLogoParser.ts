// Generated from Grammar/xLogo.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { xLogoVisitor } from "./xLogoVisitor";


export class xLogoParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly To = 25;
	public static readonly End = 26;
	public static readonly FuncNameNoArg = 27;
	public static readonly FuncNameOneArg = 28;
	public static readonly FuncNameTwoArg = 29;
	public static readonly Colorname = 30;
	public static readonly ColornameGray = 31;
	public static readonly Make = 32;
	public static readonly Print = 33;
	public static readonly Sin = 34;
	public static readonly Sqrt = 35;
	public static readonly Tan = 36;
	public static readonly Abs = 37;
	public static readonly Arccos = 38;
	public static readonly Arcsin = 39;
	public static readonly Arctan = 40;
	public static readonly Cos = 41;
	public static readonly Mod = 42;
	public static readonly Random = 43;
	public static readonly Round = 44;
	public static readonly Power = 45;
	public static readonly Log = 46;
	public static readonly PiConst = 47;
	public static readonly EConst = 48;
	public static readonly Variable = 49;
	public static readonly VarDecl = 50;
	public static readonly Number = 51;
	public static readonly Boolean = 52;
	public static readonly Identifier = 53;
	public static readonly COMMENT = 54;
	public static readonly EOL = 55;
	public static readonly WS = 56;
	public static readonly ErrorCharacter = 57;
	public static readonly RULE_prog = 0;
	public static readonly RULE_inputLines = 1;
	public static readonly RULE_programDeclaration = 2;
	public static readonly RULE_paramList = 3;
	public static readonly RULE_stmt = 4;
	public static readonly RULE_stmtBlock = 5;
	public static readonly RULE_repeatStmt = 6;
	public static readonly RULE_ifStmt = 7;
	public static readonly RULE_whileStmt = 8;
	public static readonly RULE_makeStmt = 9;
	public static readonly RULE_printStmt = 10;
	public static readonly RULE_progCallStmt = 11;
	public static readonly RULE_expr = 12;
	public static readonly RULE_literal = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "inputLines", "programDeclaration", "paramList", "stmt", "stmtBlock", 
		"repeatStmt", "ifStmt", "whileStmt", "makeStmt", "printStmt", "progCallStmt", 
		"expr", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\uFEFF'", "'['", "']'", "'repeat'", "'if'", "'while'", "'{'", 
		"'}'", "'('", "')'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'<'", 
		"'<='", "'>'", "'>='", "'='", "'!='", "'&&'", "'||'", "'to'", "'end'", 
		undefined, undefined, undefined, undefined, undefined, "'make'", undefined, 
		"'sin'", "'sqrt'", "'tan'", "'abs'", undefined, undefined, undefined, 
		"'cos'", "'mod'", undefined, "'round'", undefined, undefined, "'pi'", 
		"'e'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "To", "End", "FuncNameNoArg", 
		"FuncNameOneArg", "FuncNameTwoArg", "Colorname", "ColornameGray", "Make", 
		"Print", "Sin", "Sqrt", "Tan", "Abs", "Arccos", "Arcsin", "Arctan", "Cos", 
		"Mod", "Random", "Round", "Power", "Log", "PiConst", "EConst", "Variable", 
		"VarDecl", "Number", "Boolean", "Identifier", "COMMENT", "EOL", "WS", 
		"ErrorCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(xLogoParser._LITERAL_NAMES, xLogoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return xLogoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "xLogo.g4"; }

	// @Override
	public get ruleNames(): string[] { return xLogoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return xLogoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(xLogoParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, xLogoParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === xLogoParser.EOL) {
				{
				{
				this.state = 28;
				this.match(xLogoParser.EOL);
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === xLogoParser.To) {
				{
				this.state = 34;
				this.programDeclaration();
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === xLogoParser.EOL) {
					{
					{
					this.state = 35;
					this.match(xLogoParser.EOL);
					this.state = 37;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === xLogoParser.To) {
						{
						this.state = 36;
						this.programDeclaration();
						}
					}

					}
					}
					this.state = 43;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === xLogoParser.T__0) {
				{
				this.state = 46;
				this.match(xLogoParser.T__0);
				}
			}

			this.state = 49;
			this.match(xLogoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputLines(): InputLinesContext {
		let _localctx: InputLinesContext = new InputLinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, xLogoParser.RULE_inputLines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xLogoParser.T__3) | (1 << xLogoParser.T__4) | (1 << xLogoParser.T__5))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (xLogoParser.Make - 32)) | (1 << (xLogoParser.Print - 32)) | (1 << (xLogoParser.Identifier - 32)) | (1 << (xLogoParser.EOL - 32)))) !== 0)) {
				{
				this.state = 53;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case xLogoParser.T__3:
				case xLogoParser.T__4:
				case xLogoParser.T__5:
				case xLogoParser.Make:
				case xLogoParser.Print:
				case xLogoParser.Identifier:
					{
					this.state = 51;
					this.stmt();
					}
					break;
				case xLogoParser.EOL:
					{
					this.state = 52;
					this.match(xLogoParser.EOL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 58;
			this.match(xLogoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programDeclaration(): ProgramDeclarationContext {
		let _localctx: ProgramDeclarationContext = new ProgramDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, xLogoParser.RULE_programDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(xLogoParser.To);
			this.state = 61;
			this.match(xLogoParser.Identifier);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === xLogoParser.Variable) {
				{
				this.state = 62;
				this.paramList();
				}
			}

			this.state = 65;
			this.match(xLogoParser.EOL);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xLogoParser.T__3) | (1 << xLogoParser.T__4) | (1 << xLogoParser.T__5))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (xLogoParser.Make - 32)) | (1 << (xLogoParser.Print - 32)) | (1 << (xLogoParser.Identifier - 32)) | (1 << (xLogoParser.EOL - 32)))) !== 0)) {
				{
				{
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xLogoParser.T__3) | (1 << xLogoParser.T__4) | (1 << xLogoParser.T__5))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (xLogoParser.Make - 32)) | (1 << (xLogoParser.Print - 32)) | (1 << (xLogoParser.Identifier - 32)))) !== 0)) {
					{
					{
					this.state = 66;
					this.stmt();
					}
					}
					this.state = 71;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 72;
				this.match(xLogoParser.EOL);
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 78;
			this.match(xLogoParser.End);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, xLogoParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 80;
				this.match(xLogoParser.Variable);
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === xLogoParser.Variable);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, xLogoParser.RULE_stmt);
		try {
			this.state = 91;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case xLogoParser.Make:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.makeStmt();
				}
				break;
			case xLogoParser.Print:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.printStmt();
				}
				break;
			case xLogoParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 87;
				this.repeatStmt();
				}
				break;
			case xLogoParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 88;
				this.ifStmt();
				}
				break;
			case xLogoParser.T__5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 89;
				this.whileStmt();
				}
				break;
			case xLogoParser.Identifier:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 90;
				this.progCallStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmtBlock(): StmtBlockContext {
		let _localctx: StmtBlockContext = new StmtBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, xLogoParser.RULE_stmtBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(xLogoParser.T__1);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xLogoParser.T__3) | (1 << xLogoParser.T__4) | (1 << xLogoParser.T__5))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (xLogoParser.Make - 32)) | (1 << (xLogoParser.Print - 32)) | (1 << (xLogoParser.Identifier - 32)) | (1 << (xLogoParser.EOL - 32)))) !== 0)) {
				{
				this.state = 96;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case xLogoParser.T__3:
				case xLogoParser.T__4:
				case xLogoParser.T__5:
				case xLogoParser.Make:
				case xLogoParser.Print:
				case xLogoParser.Identifier:
					{
					this.state = 94;
					this.stmt();
					}
					break;
				case xLogoParser.EOL:
					{
					this.state = 95;
					this.match(xLogoParser.EOL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.match(xLogoParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatStmt(): RepeatStmtContext {
		let _localctx: RepeatStmtContext = new RepeatStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, xLogoParser.RULE_repeatStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(xLogoParser.T__3);
			this.state = 104;
			this.expr(0);
			this.state = 105;
			this.stmtBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, xLogoParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(xLogoParser.T__4);
			this.state = 108;
			this.expr(0);
			this.state = 109;
			this.stmtBlock();
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === xLogoParser.T__1) {
				{
				this.state = 110;
				this.stmtBlock();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, xLogoParser.RULE_whileStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(xLogoParser.T__5);
			this.state = 114;
			this.match(xLogoParser.T__1);
			this.state = 115;
			this.expr(0);
			this.state = 116;
			this.match(xLogoParser.T__2);
			this.state = 117;
			this.stmtBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public makeStmt(): MakeStmtContext {
		let _localctx: MakeStmtContext = new MakeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, xLogoParser.RULE_makeStmt);
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.match(xLogoParser.Make);
				this.state = 120;
				this.match(xLogoParser.VarDecl);
				this.state = 121;
				this.expr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.match(xLogoParser.Make);
				this.state = 123;
				this.match(xLogoParser.Variable);
				this.state = 124;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printStmt(): PrintStmtContext {
		let _localctx: PrintStmtContext = new PrintStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, xLogoParser.RULE_printStmt);
		try {
			let _alt: number;
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.match(xLogoParser.Print);
				this.state = 128;
				this.match(xLogoParser.T__1);
				this.state = 132;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 129;
						this.matchWildcard();
						}
						}
					}
					this.state = 134;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 135;
				this.match(xLogoParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.match(xLogoParser.Print);
				this.state = 137;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public progCallStmt(): ProgCallStmtContext {
		let _localctx: ProgCallStmtContext = new ProgCallStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, xLogoParser.RULE_progCallStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(xLogoParser.Identifier);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xLogoParser.T__1) | (1 << xLogoParser.T__6) | (1 << xLogoParser.T__8) | (1 << xLogoParser.T__10) | (1 << xLogoParser.T__11) | (1 << xLogoParser.T__12) | (1 << xLogoParser.FuncNameNoArg) | (1 << xLogoParser.FuncNameOneArg) | (1 << xLogoParser.FuncNameTwoArg) | (1 << xLogoParser.Colorname))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (xLogoParser.Variable - 49)) | (1 << (xLogoParser.Number - 49)) | (1 << (xLogoParser.Boolean - 49)))) !== 0)) {
				{
				{
				this.state = 141;
				this.expr(0);
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, xLogoParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case xLogoParser.Colorname:
			case xLogoParser.Variable:
			case xLogoParser.Number:
			case xLogoParser.Boolean:
				{
				_localctx = new ExprLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 148;
				this.literal();
				}
				break;
			case xLogoParser.T__6:
				{
				_localctx = new ExprColorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 149;
				this.match(xLogoParser.T__6);
				this.state = 150;
				this.expr(0);
				this.state = 151;
				this.expr(0);
				this.state = 152;
				this.expr(0);
				this.state = 153;
				this.match(xLogoParser.T__7);
				}
				break;
			case xLogoParser.T__1:
				{
				_localctx = new ExprColorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 155;
				this.match(xLogoParser.T__1);
				this.state = 156;
				this.expr(0);
				this.state = 157;
				this.expr(0);
				this.state = 158;
				this.expr(0);
				this.state = 159;
				this.match(xLogoParser.T__2);
				}
				break;
			case xLogoParser.T__8:
				{
				_localctx = new ExprInBracketsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 161;
				this.match(xLogoParser.T__8);
				this.state = 162;
				this.expr(0);
				this.state = 163;
				this.match(xLogoParser.T__9);
				}
				break;
			case xLogoParser.T__10:
			case xLogoParser.T__11:
			case xLogoParser.T__12:
				{
				_localctx = new ExprUnaryOpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 165;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xLogoParser.T__10) | (1 << xLogoParser.T__11) | (1 << xLogoParser.T__12))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 166;
				this.expr(10);
				}
				break;
			case xLogoParser.FuncNameTwoArg:
				{
				_localctx = new ExprFuncTwoArgContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 167;
				this.match(xLogoParser.FuncNameTwoArg);
				this.state = 168;
				this.expr(0);
				this.state = 169;
				this.expr(8);
				}
				break;
			case xLogoParser.FuncNameOneArg:
				{
				_localctx = new ExprFuncOneArgContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 171;
				this.match(xLogoParser.FuncNameOneArg);
				this.state = 172;
				this.expr(7);
				}
				break;
			case xLogoParser.FuncNameNoArg:
				{
				_localctx = new ExprFuncNoArgContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 173;
				this.match(xLogoParser.FuncNameNoArg);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 196;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 194;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprBOpMultContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, xLogoParser.RULE_expr);
						this.state = 176;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 177;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xLogoParser.T__13) | (1 << xLogoParser.T__14) | (1 << xLogoParser.T__15))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 178;
						this.expr(10);
						}
						break;

					case 2:
						{
						_localctx = new ExprBOpAddContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, xLogoParser.RULE_expr);
						this.state = 179;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 180;
						_la = this._input.LA(1);
						if (!(_la === xLogoParser.T__10 || _la === xLogoParser.T__11)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 181;
						this.expr(6);
						}
						break;

					case 3:
						{
						_localctx = new ExprBOpCompContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, xLogoParser.RULE_expr);
						this.state = 182;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 183;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << xLogoParser.T__16) | (1 << xLogoParser.T__17) | (1 << xLogoParser.T__18) | (1 << xLogoParser.T__19))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 184;
						this.expr(5);
						}
						break;

					case 4:
						{
						_localctx = new ExprBOpEqContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, xLogoParser.RULE_expr);
						this.state = 185;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 186;
						_la = this._input.LA(1);
						if (!(_la === xLogoParser.T__20 || _la === xLogoParser.T__21)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 187;
						this.expr(4);
						}
						break;

					case 5:
						{
						_localctx = new ExprBOpAndContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, xLogoParser.RULE_expr);
						this.state = 188;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 189;
						this.match(xLogoParser.T__22);
						this.state = 190;
						this.expr(3);
						}
						break;

					case 6:
						{
						_localctx = new ExprBOpOrContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, xLogoParser.RULE_expr);
						this.state = 191;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 192;
						this.match(xLogoParser.T__23);
						this.state = 193;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, xLogoParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (xLogoParser.Colorname - 30)) | (1 << (xLogoParser.Variable - 30)) | (1 << (xLogoParser.Number - 30)) | (1 << (xLogoParser.Boolean - 30)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03;\xCC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02\x03" +
		"\x02\x03\x02\x03\x02\x05\x02(\n\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02" +
		"\x05\x02/\n\x02\x03\x02\x05\x022\n\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x07\x038\n\x03\f\x03\x0E\x03;\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x05\x04B\n\x04\x03\x04\x03\x04\x07\x04F\n\x04\f\x04\x0E\x04I\v\x04" +
		"\x03\x04\x07\x04L\n\x04\f\x04\x0E\x04O\v\x04\x03\x04\x03\x04\x03\x05\x06" +
		"\x05T\n\x05\r\x05\x0E\x05U\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06^\n\x06\x03\x07\x03\x07\x03\x07\x07\x07c\n\x07\f\x07\x0E\x07" +
		"f\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x05\tr\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\v\x80\n\v\x03\f\x03\f\x03\f\x07\f\x85\n\f\f\f\x0E\f" +
		"\x88\v\f\x03\f\x03\f\x03\f\x05\f\x8D\n\f\x03\r\x03\r\x07\r\x91\n\r\f\r" +
		"\x0E\r\x94\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\xB1\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xC5\n\x0E\f\x0E\x0E\x0E\xC8" +
		"\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x86\x02\x03\x1A\x10\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x02\b\x03\x02\r\x0F\x03\x02\x10\x12\x03\x02\r\x0E" +
		"\x03\x02\x13\x16\x03\x02\x17\x18\x05\x02  3356\x02\xE1\x02!\x03\x02\x02" +
		"\x02\x049\x03\x02\x02\x02\x06>\x03\x02\x02\x02\bS\x03\x02\x02\x02\n]\x03" +
		"\x02\x02\x02\f_\x03\x02\x02\x02\x0Ei\x03\x02\x02\x02\x10m\x03\x02\x02" +
		"\x02\x12s\x03\x02\x02\x02\x14\x7F\x03\x02\x02\x02\x16\x8C\x03\x02\x02" +
		"\x02\x18\x8E\x03\x02\x02\x02\x1A\xB0\x03\x02\x02\x02\x1C\xC9\x03\x02\x02" +
		"\x02\x1E \x079\x02\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F" +
		"\x03\x02\x02\x02!\"\x03\x02\x02\x02\".\x03\x02\x02\x02#!\x03\x02\x02\x02" +
		"$+\x05\x06\x04\x02%\'\x079\x02\x02&(\x05\x06\x04\x02\'&\x03\x02\x02\x02" +
		"\'(\x03\x02\x02\x02(*\x03\x02\x02\x02)%\x03\x02\x02\x02*-\x03\x02\x02" +
		"\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02" +
		"\x02.$\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x0202\x07\x03\x02" +
		"\x0210\x03\x02\x02\x0212\x03\x02\x02\x0223\x03\x02\x02\x0234\x07\x02\x02" +
		"\x034\x03\x03\x02\x02\x0258\x05\n\x06\x0268\x079\x02\x0275\x03\x02\x02" +
		"\x0276\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02" +
		"\x02:<\x03\x02\x02\x02;9\x03\x02\x02\x02<=\x07\x02\x02\x03=\x05\x03\x02" +
		"\x02\x02>?\x07\x1B\x02\x02?A\x077\x02\x02@B\x05\b\x05\x02A@\x03\x02\x02" +
		"\x02AB\x03\x02\x02\x02BC\x03\x02\x02\x02CM\x079\x02\x02DF\x05\n\x06\x02" +
		"ED\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02" +
		"HJ\x03\x02\x02\x02IG\x03\x02\x02\x02JL\x079\x02\x02KG\x03\x02\x02\x02" +
		"LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NP\x03\x02\x02\x02" +
		"OM\x03\x02\x02\x02PQ\x07\x1C\x02\x02Q\x07\x03\x02\x02\x02RT\x073\x02\x02" +
		"SR\x03\x02\x02\x02TU\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02" +
		"V\t\x03\x02\x02\x02W^\x05\x14\v\x02X^\x05\x16\f\x02Y^\x05\x0E\b\x02Z^" +
		"\x05\x10\t\x02[^\x05\x12\n\x02\\^\x05\x18\r\x02]W\x03\x02\x02\x02]X\x03" +
		"\x02\x02\x02]Y\x03\x02\x02\x02]Z\x03\x02\x02\x02][\x03\x02\x02\x02]\\" +
		"\x03\x02\x02\x02^\v\x03\x02\x02\x02_d\x07\x04\x02\x02`c\x05\n\x06\x02" +
		"ac\x079\x02\x02b`\x03\x02\x02\x02ba\x03\x02\x02\x02cf\x03\x02\x02\x02" +
		"db\x03\x02\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02" +
		"gh\x07\x05\x02\x02h\r\x03\x02\x02\x02ij\x07\x06\x02\x02jk\x05\x1A\x0E" +
		"\x02kl\x05\f\x07\x02l\x0F\x03\x02\x02\x02mn\x07\x07\x02\x02no\x05\x1A" +
		"\x0E\x02oq\x05\f\x07\x02pr\x05\f\x07\x02qp\x03\x02\x02\x02qr\x03\x02\x02" +
		"\x02r\x11\x03\x02\x02\x02st\x07\b\x02\x02tu\x07\x04\x02\x02uv\x05\x1A" +
		"\x0E\x02vw\x07\x05\x02\x02wx\x05\f\x07\x02x\x13\x03\x02\x02\x02yz\x07" +
		"\"\x02\x02z{\x074\x02\x02{\x80\x05\x1A\x0E\x02|}\x07\"\x02\x02}~\x073" +
		"\x02\x02~\x80\x05\x1A\x0E\x02\x7Fy\x03\x02\x02\x02\x7F|\x03\x02\x02\x02" +
		"\x80\x15\x03\x02\x02\x02\x81\x82\x07#\x02\x02\x82\x86\x07\x04\x02\x02" +
		"\x83\x85\v\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02" +
		"\x86\x87\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x89\x03\x02\x02\x02" +
		"\x88\x86\x03\x02\x02\x02\x89\x8D\x07\x05\x02\x02\x8A\x8B\x07#\x02\x02" +
		"\x8B\x8D\x05\x1A\x0E\x02\x8C\x81\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02" +
		"\x8D\x17\x03\x02\x02\x02\x8E\x92\x077\x02\x02\x8F\x91\x05\x1A\x0E\x02" +
		"\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02" +
		"\x92\x93\x03\x02\x02\x02\x93\x19\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02" +
		"\x95\x96\b\x0E\x01\x02\x96\xB1\x05\x1C\x0F\x02\x97\x98\x07\t\x02\x02\x98" +
		"\x99\x05\x1A\x0E\x02\x99\x9A\x05\x1A\x0E\x02\x9A\x9B\x05\x1A\x0E\x02\x9B" +
		"\x9C\x07\n\x02\x02\x9C\xB1\x03\x02\x02\x02\x9D\x9E\x07\x04\x02\x02\x9E" +
		"\x9F\x05\x1A\x0E\x02\x9F\xA0\x05\x1A\x0E\x02\xA0\xA1\x05\x1A\x0E\x02\xA1" +
		"\xA2\x07\x05\x02\x02\xA2\xB1\x03\x02\x02\x02\xA3\xA4\x07\v\x02\x02\xA4" +
		"\xA5\x05\x1A\x0E\x02\xA5\xA6\x07\f\x02\x02\xA6\xB1\x03\x02\x02\x02\xA7" +
		"\xA8\t\x02\x02\x02\xA8\xB1\x05\x1A\x0E\f\xA9\xAA\x07\x1F\x02\x02\xAA\xAB" +
		"\x05\x1A\x0E\x02\xAB\xAC\x05\x1A\x0E\n\xAC\xB1\x03\x02\x02\x02\xAD\xAE" +
		"\x07\x1E\x02\x02\xAE\xB1\x05\x1A\x0E\t\xAF\xB1\x07\x1D\x02\x02\xB0\x95" +
		"\x03\x02\x02\x02\xB0\x97\x03\x02\x02\x02\xB0\x9D\x03\x02\x02\x02\xB0\xA3" +
		"\x03\x02\x02\x02\xB0\xA7\x03\x02\x02\x02\xB0\xA9\x03\x02\x02\x02\xB0\xAD" +
		"\x03\x02\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\xC6\x03\x02\x02\x02\xB2\xB3" +
		"\f\v\x02\x02\xB3\xB4\t\x03\x02\x02\xB4\xC5\x05\x1A\x0E\f\xB5\xB6\f\x07" +
		"\x02\x02\xB6\xB7\t\x04\x02\x02\xB7\xC5\x05\x1A\x0E\b\xB8\xB9\f\x06\x02" +
		"\x02\xB9\xBA\t\x05\x02\x02\xBA\xC5\x05\x1A\x0E\x07\xBB\xBC\f\x05\x02\x02" +
		"\xBC\xBD\t\x06\x02\x02\xBD\xC5\x05\x1A\x0E\x06\xBE\xBF\f\x04\x02\x02\xBF" +
		"\xC0\x07\x19\x02\x02\xC0\xC5\x05\x1A\x0E\x05\xC1\xC2\f\x03\x02\x02\xC2" +
		"\xC3\x07\x1A\x02\x02\xC3\xC5\x05\x1A\x0E\x04\xC4\xB2\x03\x02\x02\x02\xC4" +
		"\xB5\x03\x02\x02\x02\xC4\xB8\x03\x02\x02\x02\xC4\xBB\x03\x02\x02\x02\xC4" +
		"\xBE\x03\x02\x02\x02\xC4\xC1\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6" +
		"\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x1B\x03\x02\x02\x02\xC8" +
		"\xC6\x03\x02\x02\x02\xC9\xCA\t\x07\x02\x02\xCA\x1D\x03\x02\x02\x02\x18" +
		"!\'+.179AGMU]bdq\x7F\x86\x8C\x92\xB0\xC4\xC6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!xLogoParser.__ATN) {
			xLogoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(xLogoParser._serializedATN));
		}

		return xLogoParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(xLogoParser.EOF, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(xLogoParser.EOL);
		} else {
			return this.getToken(xLogoParser.EOL, i);
		}
	}
	public programDeclaration(): ProgramDeclarationContext[];
	public programDeclaration(i: number): ProgramDeclarationContext;
	public programDeclaration(i?: number): ProgramDeclarationContext | ProgramDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgramDeclarationContext);
		} else {
			return this.getRuleContext(i, ProgramDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_prog; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputLinesContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(xLogoParser.EOF, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(xLogoParser.EOL);
		} else {
			return this.getToken(xLogoParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_inputLines; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitInputLines) {
			return visitor.visitInputLines(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramDeclarationContext extends ParserRuleContext {
	public To(): TerminalNode { return this.getToken(xLogoParser.To, 0); }
	public Identifier(): TerminalNode { return this.getToken(xLogoParser.Identifier, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(xLogoParser.EOL);
		} else {
			return this.getToken(xLogoParser.EOL, i);
		}
	}
	public End(): TerminalNode { return this.getToken(xLogoParser.End, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_programDeclaration; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitProgramDeclaration) {
			return visitor.visitProgramDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public Variable(): TerminalNode[];
	public Variable(i: number): TerminalNode;
	public Variable(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(xLogoParser.Variable);
		} else {
			return this.getToken(xLogoParser.Variable, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_paramList; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public makeStmt(): MakeStmtContext | undefined {
		return this.tryGetRuleContext(0, MakeStmtContext);
	}
	public printStmt(): PrintStmtContext | undefined {
		return this.tryGetRuleContext(0, PrintStmtContext);
	}
	public repeatStmt(): RepeatStmtContext | undefined {
		return this.tryGetRuleContext(0, RepeatStmtContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public whileStmt(): WhileStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileStmtContext);
	}
	public progCallStmt(): ProgCallStmtContext | undefined {
		return this.tryGetRuleContext(0, ProgCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_stmt; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtBlockContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(xLogoParser.EOL);
		} else {
			return this.getToken(xLogoParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_stmtBlock; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitStmtBlock) {
			return visitor.visitStmtBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatStmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmtBlock(): StmtBlockContext {
		return this.getRuleContext(0, StmtBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_repeatStmt; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitRepeatStmt) {
			return visitor.visitRepeatStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmtBlock(): StmtBlockContext[];
	public stmtBlock(i: number): StmtBlockContext;
	public stmtBlock(i?: number): StmtBlockContext | StmtBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtBlockContext);
		} else {
			return this.getRuleContext(i, StmtBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_ifStmt; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmtBlock(): StmtBlockContext {
		return this.getRuleContext(0, StmtBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_whileStmt; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MakeStmtContext extends ParserRuleContext {
	public Make(): TerminalNode { return this.getToken(xLogoParser.Make, 0); }
	public VarDecl(): TerminalNode | undefined { return this.tryGetToken(xLogoParser.VarDecl, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public Variable(): TerminalNode | undefined { return this.tryGetToken(xLogoParser.Variable, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_makeStmt; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitMakeStmt) {
			return visitor.visitMakeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStmtContext extends ParserRuleContext {
	public Print(): TerminalNode { return this.getToken(xLogoParser.Print, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_printStmt; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitPrintStmt) {
			return visitor.visitPrintStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgCallStmtContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(xLogoParser.Identifier, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_progCallStmt; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitProgCallStmt) {
			return visitor.visitProgCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprLiteralContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprLiteral) {
			return visitor.visitExprLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprColorContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprColor) {
			return visitor.visitExprColor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprInBracketsContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprInBrackets) {
			return visitor.visitExprInBrackets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprUnaryOpContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprUnaryOp) {
			return visitor.visitExprUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBOpMultContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprBOpMult) {
			return visitor.visitExprBOpMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprFuncTwoArgContext extends ExprContext {
	public FuncNameTwoArg(): TerminalNode { return this.getToken(xLogoParser.FuncNameTwoArg, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprFuncTwoArg) {
			return visitor.visitExprFuncTwoArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprFuncOneArgContext extends ExprContext {
	public FuncNameOneArg(): TerminalNode { return this.getToken(xLogoParser.FuncNameOneArg, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprFuncOneArg) {
			return visitor.visitExprFuncOneArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprFuncNoArgContext extends ExprContext {
	public FuncNameNoArg(): TerminalNode { return this.getToken(xLogoParser.FuncNameNoArg, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprFuncNoArg) {
			return visitor.visitExprFuncNoArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBOpAddContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprBOpAdd) {
			return visitor.visitExprBOpAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBOpCompContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprBOpComp) {
			return visitor.visitExprBOpComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBOpEqContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprBOpEq) {
			return visitor.visitExprBOpEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBOpAndContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprBOpAnd) {
			return visitor.visitExprBOpAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprBOpOrContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitExprBOpOr) {
			return visitor.visitExprBOpOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public Variable(): TerminalNode | undefined { return this.tryGetToken(xLogoParser.Variable, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(xLogoParser.Number, 0); }
	public Colorname(): TerminalNode | undefined { return this.tryGetToken(xLogoParser.Colorname, 0); }
	public Boolean(): TerminalNode | undefined { return this.tryGetToken(xLogoParser.Boolean, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return xLogoParser.RULE_literal; }
	// @Override
	public accept<Result>(visitor: xLogoVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


