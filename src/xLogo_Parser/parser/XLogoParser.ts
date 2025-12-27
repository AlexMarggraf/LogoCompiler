
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { XLogoListener } from "./XLogoListener.js";
import { XLogoVisitor } from "./XLogoVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class XLogoParser extends antlr.Parser {
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

    public static readonly literalNames = [
        null, "'\\uFEFF'", "'['", "']'", "'repeat'", "'if'", "'while'", 
        "'{'", "'}'", "'('", "')'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", 
        "'<'", "'<='", "'>'", "'>='", "'='", "'!='", "'&&'", "'||'", "'to'", 
        "'end'", null, null, null, null, null, "'make'", null, "'sin'", 
        "'sqrt'", "'tan'", "'abs'", null, null, null, "'cos'", "'mod'", 
        null, "'round'", null, null, "'pi'", "'e'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, "To", "End", "FuncNameNoArg", "FuncNameOneArg", 
        "FuncNameTwoArg", "Colorname", "ColornameGray", "Make", "Print", 
        "Sin", "Sqrt", "Tan", "Abs", "Arccos", "Arcsin", "Arctan", "Cos", 
        "Mod", "Random", "Round", "Power", "Log", "PiConst", "EConst", "Variable", 
        "VarDecl", "Number", "Boolean", "Identifier", "COMMENT", "EOL", 
        "WS", "ErrorCharacter"
    ];
    public static readonly ruleNames = [
        "prog", "inputLines", "programDeclaration", "paramList", "stmt", 
        "stmtBlock", "repeatStmt", "ifStmt", "whileStmt", "makeStmt", "printStmt", 
        "progCallStmt", "expr", "literal",
    ];

    public get grammarFileName(): string { return "XLogo.g4"; }
    public get literalNames(): (string | null)[] { return XLogoParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return XLogoParser.symbolicNames; }
    public get ruleNames(): string[] { return XLogoParser.ruleNames; }
    public get serializedATN(): number[] { return XLogoParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, XLogoParser._ATN, XLogoParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, XLogoParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 31;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 55) {
                {
                {
                this.state = 28;
                this.match(XLogoParser.EOL);
                }
                }
                this.state = 33;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 44;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 34;
                this.programDeclaration();
                this.state = 41;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 55) {
                    {
                    {
                    this.state = 35;
                    this.match(XLogoParser.EOL);
                    this.state = 37;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 25) {
                        {
                        this.state = 36;
                        this.programDeclaration();
                        }
                    }

                    }
                    }
                    this.state = 43;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 47;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 46;
                this.match(XLogoParser.T__0);
                }
            }

            this.state = 49;
            this.match(XLogoParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inputLines(): InputLinesContext {
        let localContext = new InputLinesContext(this.context, this.state);
        this.enterRule(localContext, 2, XLogoParser.RULE_inputLines);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 55;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 10485763) !== 0)) {
                {
                this.state = 53;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case XLogoParser.T__3:
                case XLogoParser.T__4:
                case XLogoParser.T__5:
                case XLogoParser.Make:
                case XLogoParser.Print:
                case XLogoParser.Identifier:
                    {
                    this.state = 51;
                    this.stmt();
                    }
                    break;
                case XLogoParser.EOL:
                    {
                    this.state = 52;
                    this.match(XLogoParser.EOL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 57;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 58;
            this.match(XLogoParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public programDeclaration(): ProgramDeclarationContext {
        let localContext = new ProgramDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 4, XLogoParser.RULE_programDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 60;
            this.match(XLogoParser.To);
            this.state = 61;
            this.match(XLogoParser.Identifier);
            this.state = 63;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 62;
                this.paramList();
                }
            }

            this.state = 65;
            this.match(XLogoParser.EOL);
            this.state = 75;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 10485763) !== 0)) {
                {
                {
                this.state = 69;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2097155) !== 0)) {
                    {
                    {
                    this.state = 66;
                    this.stmt();
                    }
                    }
                    this.state = 71;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 72;
                this.match(XLogoParser.EOL);
                }
                }
                this.state = 77;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 78;
            this.match(XLogoParser.End);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public paramList(): ParamListContext {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 6, XLogoParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 81;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 80;
                this.match(XLogoParser.Variable);
                }
                }
                this.state = 83;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 49);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 8, XLogoParser.RULE_stmt);
        try {
            this.state = 91;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case XLogoParser.Make:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 85;
                this.makeStmt();
                }
                break;
            case XLogoParser.Print:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 86;
                this.printStmt();
                }
                break;
            case XLogoParser.T__3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 87;
                this.repeatStmt();
                }
                break;
            case XLogoParser.T__4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 88;
                this.ifStmt();
                }
                break;
            case XLogoParser.T__5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 89;
                this.whileStmt();
                }
                break;
            case XLogoParser.Identifier:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 90;
                this.progCallStmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmtBlock(): StmtBlockContext {
        let localContext = new StmtBlockContext(this.context, this.state);
        this.enterRule(localContext, 10, XLogoParser.RULE_stmtBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 93;
            this.match(XLogoParser.T__1);
            this.state = 98;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 10485763) !== 0)) {
                {
                this.state = 96;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case XLogoParser.T__3:
                case XLogoParser.T__4:
                case XLogoParser.T__5:
                case XLogoParser.Make:
                case XLogoParser.Print:
                case XLogoParser.Identifier:
                    {
                    this.state = 94;
                    this.stmt();
                    }
                    break;
                case XLogoParser.EOL:
                    {
                    this.state = 95;
                    this.match(XLogoParser.EOL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 100;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 101;
            this.match(XLogoParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public repeatStmt(): RepeatStmtContext {
        let localContext = new RepeatStmtContext(this.context, this.state);
        this.enterRule(localContext, 12, XLogoParser.RULE_repeatStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 103;
            this.match(XLogoParser.T__3);
            this.state = 104;
            this.expr(0);
            this.state = 105;
            this.stmtBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStmt(): IfStmtContext {
        let localContext = new IfStmtContext(this.context, this.state);
        this.enterRule(localContext, 14, XLogoParser.RULE_ifStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 107;
            this.match(XLogoParser.T__4);
            this.state = 108;
            this.expr(0);
            this.state = 109;
            this.stmtBlock();
            this.state = 111;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 110;
                this.stmtBlock();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStmt(): WhileStmtContext {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 16, XLogoParser.RULE_whileStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 113;
            this.match(XLogoParser.T__5);
            this.state = 114;
            this.match(XLogoParser.T__1);
            this.state = 115;
            this.expr(0);
            this.state = 116;
            this.match(XLogoParser.T__2);
            this.state = 117;
            this.stmtBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public makeStmt(): MakeStmtContext {
        let localContext = new MakeStmtContext(this.context, this.state);
        this.enterRule(localContext, 18, XLogoParser.RULE_makeStmt);
        try {
            this.state = 125;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 119;
                this.match(XLogoParser.Make);
                this.state = 120;
                this.match(XLogoParser.VarDecl);
                this.state = 121;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 122;
                this.match(XLogoParser.Make);
                this.state = 123;
                this.match(XLogoParser.Variable);
                this.state = 124;
                this.expr(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public printStmt(): PrintStmtContext {
        let localContext = new PrintStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, XLogoParser.RULE_printStmt);
        try {
            let alternative: number;
            this.state = 138;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 127;
                this.match(XLogoParser.Print);
                this.state = 128;
                this.match(XLogoParser.T__1);
                this.state = 132;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 129;
                        this.matchWildcard();
                        }
                        }
                    }
                    this.state = 134;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                }
                this.state = 135;
                this.match(XLogoParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 136;
                this.match(XLogoParser.Print);
                this.state = 137;
                this.expr(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public progCallStmt(): ProgCallStmtContext {
        let localContext = new ProgCallStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, XLogoParser.RULE_progCallStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 140;
            this.match(XLogoParser.Identifier);
            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2013280900) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 13) !== 0)) {
                {
                {
                this.state = 141;
                this.expr(0);
                }
                }
                this.state = 146;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 24;
        this.enterRecursionRule(localContext, 24, XLogoParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case XLogoParser.Colorname:
            case XLogoParser.Variable:
            case XLogoParser.Number:
            case XLogoParser.Boolean:
                {
                localContext = new ExprLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 148;
                this.literal();
                }
                break;
            case XLogoParser.T__6:
                {
                localContext = new ExprColorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 149;
                this.match(XLogoParser.T__6);
                this.state = 150;
                this.expr(0);
                this.state = 151;
                this.expr(0);
                this.state = 152;
                this.expr(0);
                this.state = 153;
                this.match(XLogoParser.T__7);
                }
                break;
            case XLogoParser.T__1:
                {
                localContext = new ExprColorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 155;
                this.match(XLogoParser.T__1);
                this.state = 156;
                this.expr(0);
                this.state = 157;
                this.expr(0);
                this.state = 158;
                this.expr(0);
                this.state = 159;
                this.match(XLogoParser.T__2);
                }
                break;
            case XLogoParser.T__8:
                {
                localContext = new ExprInBracketsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 161;
                this.match(XLogoParser.T__8);
                this.state = 162;
                this.expr(0);
                this.state = 163;
                this.match(XLogoParser.T__9);
                }
                break;
            case XLogoParser.T__10:
            case XLogoParser.T__11:
            case XLogoParser.T__12:
                {
                localContext = new ExprUnaryOpContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 165;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14336) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 166;
                this.expr(10);
                }
                break;
            case XLogoParser.FuncNameTwoArg:
                {
                localContext = new ExprFuncTwoArgContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 167;
                this.match(XLogoParser.FuncNameTwoArg);
                this.state = 168;
                this.expr(0);
                this.state = 169;
                this.expr(8);
                }
                break;
            case XLogoParser.FuncNameOneArg:
                {
                localContext = new ExprFuncOneArgContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 171;
                this.match(XLogoParser.FuncNameOneArg);
                this.state = 172;
                this.expr(7);
                }
                break;
            case XLogoParser.FuncNameNoArg:
                {
                localContext = new ExprFuncNoArgContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 173;
                this.match(XLogoParser.FuncNameNoArg);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 196;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 194;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprBOpMultContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, XLogoParser.RULE_expr);
                        this.state = 176;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 177;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 114688) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 178;
                        this.expr(10);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprBOpAddContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, XLogoParser.RULE_expr);
                        this.state = 179;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 180;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 11 || _la === 12)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 181;
                        this.expr(6);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprBOpCompContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, XLogoParser.RULE_expr);
                        this.state = 182;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 183;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1966080) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 184;
                        this.expr(5);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprBOpEqContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, XLogoParser.RULE_expr);
                        this.state = 185;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 186;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 21 || _la === 22)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 187;
                        this.expr(4);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ExprBOpAndContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, XLogoParser.RULE_expr);
                        this.state = 188;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 189;
                        this.match(XLogoParser.T__22);
                        this.state = 190;
                        this.expr(3);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ExprBOpOrContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, XLogoParser.RULE_expr);
                        this.state = 191;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 192;
                        this.match(XLogoParser.T__23);
                        this.state = 193;
                        this.expr(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 198;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 26, XLogoParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 199;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 6815745) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 12:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 9);
        case 1:
            return this.precpred(this.context, 5);
        case 2:
            return this.precpred(this.context, 4);
        case 3:
            return this.precpred(this.context, 3);
        case 4:
            return this.precpred(this.context, 2);
        case 5:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,57,202,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,1,0,1,0,3,0,38,8,0,5,0,40,8,
        0,10,0,12,0,43,9,0,3,0,45,8,0,1,0,3,0,48,8,0,1,0,1,0,1,1,1,1,5,1,
        54,8,1,10,1,12,1,57,9,1,1,1,1,1,1,2,1,2,1,2,3,2,64,8,2,1,2,1,2,5,
        2,68,8,2,10,2,12,2,71,9,2,1,2,5,2,74,8,2,10,2,12,2,77,9,2,1,2,1,
        2,1,3,4,3,82,8,3,11,3,12,3,83,1,4,1,4,1,4,1,4,1,4,1,4,3,4,92,8,4,
        1,5,1,5,1,5,5,5,97,8,5,10,5,12,5,100,9,5,1,5,1,5,1,6,1,6,1,6,1,6,
        1,7,1,7,1,7,1,7,3,7,112,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
        1,9,1,9,1,9,3,9,126,8,9,1,10,1,10,1,10,5,10,131,8,10,10,10,12,10,
        134,9,10,1,10,1,10,1,10,3,10,139,8,10,1,11,1,11,5,11,143,8,11,10,
        11,12,11,146,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
        12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
        12,1,12,1,12,1,12,1,12,3,12,175,8,12,1,12,1,12,1,12,1,12,1,12,1,
        12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,
        12,195,8,12,10,12,12,12,198,9,12,1,13,1,13,1,13,1,132,1,24,14,0,
        2,4,6,8,10,12,14,16,18,20,22,24,26,0,6,1,0,11,13,1,0,14,16,1,0,11,
        12,1,0,17,20,1,0,21,22,3,0,30,30,49,49,51,52,223,0,31,1,0,0,0,2,
        55,1,0,0,0,4,60,1,0,0,0,6,81,1,0,0,0,8,91,1,0,0,0,10,93,1,0,0,0,
        12,103,1,0,0,0,14,107,1,0,0,0,16,113,1,0,0,0,18,125,1,0,0,0,20,138,
        1,0,0,0,22,140,1,0,0,0,24,174,1,0,0,0,26,199,1,0,0,0,28,30,5,55,
        0,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,44,
        1,0,0,0,33,31,1,0,0,0,34,41,3,4,2,0,35,37,5,55,0,0,36,38,3,4,2,0,
        37,36,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,35,1,0,0,0,40,43,1,
        0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,44,
        34,1,0,0,0,44,45,1,0,0,0,45,47,1,0,0,0,46,48,5,1,0,0,47,46,1,0,0,
        0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,5,0,0,1,50,1,1,0,0,0,51,54,3,
        8,4,0,52,54,5,55,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,57,1,0,0,0,55,
        53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,5,0,0,
        1,59,3,1,0,0,0,60,61,5,25,0,0,61,63,5,53,0,0,62,64,3,6,3,0,63,62,
        1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,75,5,55,0,0,66,68,3,8,4,0,
        67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,
        0,0,0,71,69,1,0,0,0,72,74,5,55,0,0,73,69,1,0,0,0,74,77,1,0,0,0,75,
        73,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,77,75,1,0,0,0,78,79,5,26,
        0,0,79,5,1,0,0,0,80,82,5,49,0,0,81,80,1,0,0,0,82,83,1,0,0,0,83,81,
        1,0,0,0,83,84,1,0,0,0,84,7,1,0,0,0,85,92,3,18,9,0,86,92,3,20,10,
        0,87,92,3,12,6,0,88,92,3,14,7,0,89,92,3,16,8,0,90,92,3,22,11,0,91,
        85,1,0,0,0,91,86,1,0,0,0,91,87,1,0,0,0,91,88,1,0,0,0,91,89,1,0,0,
        0,91,90,1,0,0,0,92,9,1,0,0,0,93,98,5,2,0,0,94,97,3,8,4,0,95,97,5,
        55,0,0,96,94,1,0,0,0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,
        98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,102,5,3,0,0,102,
        11,1,0,0,0,103,104,5,4,0,0,104,105,3,24,12,0,105,106,3,10,5,0,106,
        13,1,0,0,0,107,108,5,5,0,0,108,109,3,24,12,0,109,111,3,10,5,0,110,
        112,3,10,5,0,111,110,1,0,0,0,111,112,1,0,0,0,112,15,1,0,0,0,113,
        114,5,6,0,0,114,115,5,2,0,0,115,116,3,24,12,0,116,117,5,3,0,0,117,
        118,3,10,5,0,118,17,1,0,0,0,119,120,5,32,0,0,120,121,5,50,0,0,121,
        126,3,24,12,0,122,123,5,32,0,0,123,124,5,49,0,0,124,126,3,24,12,
        0,125,119,1,0,0,0,125,122,1,0,0,0,126,19,1,0,0,0,127,128,5,33,0,
        0,128,132,5,2,0,0,129,131,9,0,0,0,130,129,1,0,0,0,131,134,1,0,0,
        0,132,133,1,0,0,0,132,130,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,
        0,135,139,5,3,0,0,136,137,5,33,0,0,137,139,3,24,12,0,138,127,1,0,
        0,0,138,136,1,0,0,0,139,21,1,0,0,0,140,144,5,53,0,0,141,143,3,24,
        12,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,
        0,0,145,23,1,0,0,0,146,144,1,0,0,0,147,148,6,12,-1,0,148,175,3,26,
        13,0,149,150,5,7,0,0,150,151,3,24,12,0,151,152,3,24,12,0,152,153,
        3,24,12,0,153,154,5,8,0,0,154,175,1,0,0,0,155,156,5,2,0,0,156,157,
        3,24,12,0,157,158,3,24,12,0,158,159,3,24,12,0,159,160,5,3,0,0,160,
        175,1,0,0,0,161,162,5,9,0,0,162,163,3,24,12,0,163,164,5,10,0,0,164,
        175,1,0,0,0,165,166,7,0,0,0,166,175,3,24,12,10,167,168,5,29,0,0,
        168,169,3,24,12,0,169,170,3,24,12,8,170,175,1,0,0,0,171,172,5,28,
        0,0,172,175,3,24,12,7,173,175,5,27,0,0,174,147,1,0,0,0,174,149,1,
        0,0,0,174,155,1,0,0,0,174,161,1,0,0,0,174,165,1,0,0,0,174,167,1,
        0,0,0,174,171,1,0,0,0,174,173,1,0,0,0,175,196,1,0,0,0,176,177,10,
        9,0,0,177,178,7,1,0,0,178,195,3,24,12,10,179,180,10,5,0,0,180,181,
        7,2,0,0,181,195,3,24,12,6,182,183,10,4,0,0,183,184,7,3,0,0,184,195,
        3,24,12,5,185,186,10,3,0,0,186,187,7,4,0,0,187,195,3,24,12,4,188,
        189,10,2,0,0,189,190,5,23,0,0,190,195,3,24,12,3,191,192,10,1,0,0,
        192,193,5,24,0,0,193,195,3,24,12,2,194,176,1,0,0,0,194,179,1,0,0,
        0,194,182,1,0,0,0,194,185,1,0,0,0,194,188,1,0,0,0,194,191,1,0,0,
        0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,197,25,1,0,0,0,
        198,196,1,0,0,0,199,200,7,5,0,0,200,27,1,0,0,0,22,31,37,41,44,47,
        53,55,63,69,75,83,91,96,98,111,125,132,138,144,174,194,196
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!XLogoParser.__ATN) {
            XLogoParser.__ATN = new antlr.ATNDeserializer().deserialize(XLogoParser._serializedATN);
        }

        return XLogoParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(XLogoParser.literalNames, XLogoParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return XLogoParser.vocabulary;
    }

    private static readonly decisionsToDFA = XLogoParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(XLogoParser.EOF, 0)!;
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(XLogoParser.EOL);
    	} else {
    		return this.getToken(XLogoParser.EOL, i);
    	}
    }
    public programDeclaration(): ProgramDeclarationContext[];
    public programDeclaration(i: number): ProgramDeclarationContext | null;
    public programDeclaration(i?: number): ProgramDeclarationContext[] | ProgramDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProgramDeclarationContext);
        }

        return this.getRuleContext(i, ProgramDeclarationContext);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_prog;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InputLinesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(XLogoParser.EOF, 0)!;
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(XLogoParser.EOL);
    	} else {
    		return this.getToken(XLogoParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_inputLines;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterInputLines) {
             listener.enterInputLines(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitInputLines) {
             listener.exitInputLines(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitInputLines) {
            return visitor.visitInputLines(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProgramDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public To(): antlr.TerminalNode {
        return this.getToken(XLogoParser.To, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(XLogoParser.Identifier, 0)!;
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(XLogoParser.EOL);
    	} else {
    		return this.getToken(XLogoParser.EOL, i);
    	}
    }
    public End(): antlr.TerminalNode {
        return this.getToken(XLogoParser.End, 0)!;
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_programDeclaration;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterProgramDeclaration) {
             listener.enterProgramDeclaration(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitProgramDeclaration) {
             listener.exitProgramDeclaration(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitProgramDeclaration) {
            return visitor.visitProgramDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Variable(): antlr.TerminalNode[];
    public Variable(i: number): antlr.TerminalNode | null;
    public Variable(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(XLogoParser.Variable);
    	} else {
    		return this.getToken(XLogoParser.Variable, i);
    	}
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_paramList;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterParamList) {
             listener.enterParamList(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitParamList) {
             listener.exitParamList(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public makeStmt(): MakeStmtContext | null {
        return this.getRuleContext(0, MakeStmtContext);
    }
    public printStmt(): PrintStmtContext | null {
        return this.getRuleContext(0, PrintStmtContext);
    }
    public repeatStmt(): RepeatStmtContext | null {
        return this.getRuleContext(0, RepeatStmtContext);
    }
    public ifStmt(): IfStmtContext | null {
        return this.getRuleContext(0, IfStmtContext);
    }
    public whileStmt(): WhileStmtContext | null {
        return this.getRuleContext(0, WhileStmtContext);
    }
    public progCallStmt(): ProgCallStmtContext | null {
        return this.getRuleContext(0, ProgCallStmtContext);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_stmt;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(XLogoParser.EOL);
    	} else {
    		return this.getToken(XLogoParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_stmtBlock;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterStmtBlock) {
             listener.enterStmtBlock(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitStmtBlock) {
             listener.exitStmtBlock(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitStmtBlock) {
            return visitor.visitStmtBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RepeatStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public stmtBlock(): StmtBlockContext {
        return this.getRuleContext(0, StmtBlockContext)!;
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_repeatStmt;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterRepeatStmt) {
             listener.enterRepeatStmt(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitRepeatStmt) {
             listener.exitRepeatStmt(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitRepeatStmt) {
            return visitor.visitRepeatStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public stmtBlock(): StmtBlockContext[];
    public stmtBlock(i: number): StmtBlockContext | null;
    public stmtBlock(i?: number): StmtBlockContext[] | StmtBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtBlockContext);
        }

        return this.getRuleContext(i, StmtBlockContext);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_ifStmt;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterIfStmt) {
             listener.enterIfStmt(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitIfStmt) {
             listener.exitIfStmt(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public stmtBlock(): StmtBlockContext {
        return this.getRuleContext(0, StmtBlockContext)!;
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_whileStmt;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterWhileStmt) {
             listener.enterWhileStmt(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitWhileStmt) {
             listener.exitWhileStmt(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MakeStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Make(): antlr.TerminalNode {
        return this.getToken(XLogoParser.Make, 0)!;
    }
    public VarDecl(): antlr.TerminalNode | null {
        return this.getToken(XLogoParser.VarDecl, 0);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public Variable(): antlr.TerminalNode | null {
        return this.getToken(XLogoParser.Variable, 0);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_makeStmt;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterMakeStmt) {
             listener.enterMakeStmt(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitMakeStmt) {
             listener.exitMakeStmt(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitMakeStmt) {
            return visitor.visitMakeStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Print(): antlr.TerminalNode {
        return this.getToken(XLogoParser.Print, 0)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_printStmt;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterPrintStmt) {
             listener.enterPrintStmt(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitPrintStmt) {
             listener.exitPrintStmt(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitPrintStmt) {
            return visitor.visitPrintStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProgCallStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(XLogoParser.Identifier, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_progCallStmt;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterProgCallStmt) {
             listener.enterProgCallStmt(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitProgCallStmt) {
             listener.exitProgCallStmt(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitProgCallStmt) {
            return visitor.visitProgCallStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_expr;
    }
    public override copyFrom(ctx: ExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ExprLiteralContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprLiteral) {
             listener.enterExprLiteral(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprLiteral) {
             listener.exitExprLiteral(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprLiteral) {
            return visitor.visitExprLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprColorContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprColor) {
             listener.enterExprColor(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprColor) {
             listener.exitExprColor(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprColor) {
            return visitor.visitExprColor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprInBracketsContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprInBrackets) {
             listener.enterExprInBrackets(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprInBrackets) {
             listener.exitExprInBrackets(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprInBrackets) {
            return visitor.visitExprInBrackets(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprUnaryOpContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprUnaryOp) {
             listener.enterExprUnaryOp(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprUnaryOp) {
             listener.exitExprUnaryOp(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprUnaryOp) {
            return visitor.visitExprUnaryOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprFuncTwoArgContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FuncNameTwoArg(): antlr.TerminalNode {
        return this.getToken(XLogoParser.FuncNameTwoArg, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprFuncTwoArg) {
             listener.enterExprFuncTwoArg(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprFuncTwoArg) {
             listener.exitExprFuncTwoArg(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprFuncTwoArg) {
            return visitor.visitExprFuncTwoArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprFuncOneArgContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FuncNameOneArg(): antlr.TerminalNode {
        return this.getToken(XLogoParser.FuncNameOneArg, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprFuncOneArg) {
             listener.enterExprFuncOneArg(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprFuncOneArg) {
             listener.exitExprFuncOneArg(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprFuncOneArg) {
            return visitor.visitExprFuncOneArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprFuncNoArgContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FuncNameNoArg(): antlr.TerminalNode {
        return this.getToken(XLogoParser.FuncNameNoArg, 0)!;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprFuncNoArg) {
             listener.enterExprFuncNoArg(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprFuncNoArg) {
             listener.exitExprFuncNoArg(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprFuncNoArg) {
            return visitor.visitExprFuncNoArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprBOpMultContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprBOpMult) {
             listener.enterExprBOpMult(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprBOpMult) {
             listener.exitExprBOpMult(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprBOpMult) {
            return visitor.visitExprBOpMult(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprBOpAddContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprBOpAdd) {
             listener.enterExprBOpAdd(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprBOpAdd) {
             listener.exitExprBOpAdd(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprBOpAdd) {
            return visitor.visitExprBOpAdd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprBOpCompContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprBOpComp) {
             listener.enterExprBOpComp(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprBOpComp) {
             listener.exitExprBOpComp(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprBOpComp) {
            return visitor.visitExprBOpComp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprBOpEqContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprBOpEq) {
             listener.enterExprBOpEq(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprBOpEq) {
             listener.exitExprBOpEq(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprBOpEq) {
            return visitor.visitExprBOpEq(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprBOpAndContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprBOpAnd) {
             listener.enterExprBOpAnd(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprBOpAnd) {
             listener.exitExprBOpAnd(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprBOpAnd) {
            return visitor.visitExprBOpAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprBOpOrContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterExprBOpOr) {
             listener.enterExprBOpOr(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitExprBOpOr) {
             listener.exitExprBOpOr(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitExprBOpOr) {
            return visitor.visitExprBOpOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Variable(): antlr.TerminalNode | null {
        return this.getToken(XLogoParser.Variable, 0);
    }
    public Number(): antlr.TerminalNode | null {
        return this.getToken(XLogoParser.Number, 0);
    }
    public Colorname(): antlr.TerminalNode | null {
        return this.getToken(XLogoParser.Colorname, 0);
    }
    public Boolean(): antlr.TerminalNode | null {
        return this.getToken(XLogoParser.Boolean, 0);
    }
    public override get ruleIndex(): number {
        return XLogoParser.RULE_literal;
    }
    public override enterRule(listener: XLogoListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: XLogoListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: XLogoVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
