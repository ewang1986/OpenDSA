/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,16],$V1=[1,17],$V2=[1,24],$V3=[1,25],$V4=[1,22],$V5=[1,23],$V6=[1,18],$V7=[1,19],$V8=[1,27],$V9=[1,28],$Va=[1,29],$Vb=[1,21],$Vc=[1,26],$Vd=[5,19,20,21,25,26,28,29,31,32,33,34,35,37,44,45,46,47,48,49,50,51,52,53,56,57,58,59,60,61],$Ve=[1,36],$Vf=[2,47],$Vg=[2,31],$Vh=[1,65],$Vi=[19,20,21,25,29,33,34,35,44,45,46,56,59],$Vj=[32,61];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"exp":4,"EOF":5,"var_exp":6,"intlit_exp":7,"fn_exp":8,"app_exp":9,"prim1_app_exp":10,"prim2_app_exp":11,"if_exp":12,"let_exp":13,"letrec_exp":14,"print_exp":15,"print2_exp":16,"assign_exp":17,"while_exp":18,"VAR":19,"INT":20,"PRINT":21,"DQUOTE":22,"optional":23,"COLON":24,"SET":25,"EQ":26,"block":27,"SEMICOLON":28,"LET":29,"bindings":30,"IN":31,"END":32,"LETREC":33,"FN":34,"LPAREN":35,"formals":36,"RPAREN":37,"THATRETURNS":38,"moreformals":39,"COMMA":40,"args":41,"prim1_op":42,"prim2_op":43,"ADD1":44,"NEG":45,"NOT":46,"PLUS":47,"MINUS":48,"TIMES":49,"DIV":50,"REM":51,"LT":52,"GT":53,"prim_args":54,"more_prim_args":55,"IF":56,"THEN":57,"ELSE":58,"WHILE":59,"LBRACE":60,"RBRACE":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",19:"VAR",20:"INT",21:"PRINT",22:"DQUOTE",24:"COLON",25:"SET",26:"EQ",28:"SEMICOLON",29:"LET",31:"IN",32:"END",33:"LETREC",34:"FN",35:"LPAREN",37:"RPAREN",38:"THATRETURNS",40:"COMMA",44:"ADD1",45:"NEG",46:"NOT",47:"PLUS",48:"MINUS",49:"TIMES",50:"DIV",51:"REM",52:"LT",53:"GT",56:"IF",57:"THEN",58:"ELSE",59:"WHILE",60:"LBRACE",61:"RBRACE"},
productions_: [0,[3,2],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[6,1],[7,1],[15,2],[16,5],[23,1],[23,1],[17,4],[27,1],[27,3],[13,5],[14,7],[30,3],[30,4],[8,6],[36,0],[36,2],[39,0],[39,3],[9,4],[10,4],[11,5],[42,1],[42,1],[42,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[43,1],[41,0],[41,2],[54,0],[54,2],[55,0],[55,3],[12,6],[18,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return SLang.absyn.createProgram($$[$0-1]); 
break;
case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 20: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46:
 this.$ = $$[$0]; 
break;
case 15:
 this.$ = SLang.absyn.createVarExp( $$[$0] ); 
break;
case 16:
 this.$ = SLang.absyn.createIntExp( $$[$0] ); 
break;
case 17:
 this.$ = SLang.absyn.createPrintExp( $$[$0] ); 
break;
case 18:
 this.$ = SLang.absyn.createPrint2Exp( $$[$0-2], $$[$0] ); 
break;
case 19:
 this.$ = null; 
break;
case 21:
 this.$ = SLang.absyn.createAssignExp( $$[$0-2], $$[$0] ); 
break;
case 22:
 this.$ = [ $$[$0] ]; 
break;
case 23:
 $$[$0].unshift( $$[$0-2] ); this.$ = $$[$0]; 
break;
case 24:
 var args = $$[$0-3][1]; args.unshift( "args" );
             var fnexp = SLang.absyn.createFnExp($$[$0-3][0],$$[$0-1]);
	     var appExp = SLang.absyn.createAppExp(fnexp,args);
	     appExp.comesFromLetBlock = true;
             this.$ = appExp;
           
break;
case 25:
 this.$ = SLang.absyn.createLetRecExp($$[$0-5],$$[$0-3],$$[$0-1]); 
break;
case 26:
 this.$ = [ [ $$[$0-2] ], [ $$[$0] ] ]; 
break;
case 27:
 var vars = $$[$0][0];  vars.unshift($$[$0-3]);
             var vals = $$[$0][1];  vals.unshift($$[$0-1]);
	     this.$ = [ vars, vals ];
           
break;
case 28:
 this.$ = SLang.absyn.createFnExp($$[$0-3],[$$[$0]]); 
break;
case 29: case 47: case 49:
 this.$ = [ ]; 
break;
case 30: case 48:
 var result;
          if ($$[$0] === [ ])
	     result = [ $$[$0-1] ];
          else {
             $$[$0].unshift($$[$0-1]);
             result = $$[$0];
          }
          this.$ = result;
        
break;
case 31: case 51:
 this.$ = [ ] 
break;
case 32:
 $$[$0].unshift($$[$0-1]); 
         this.$ = $$[$0]; 
break;
case 33:
  $$[$0-1].unshift("args");
          this.$ = SLang.absyn.createAppExp($$[$0-2],$$[$0-1]); 
break;
case 34:
 this.$ = SLang.absyn.createPrim1AppExp($$[$0-3],$$[$0-1]); 
break;
case 35:
 this.$ = SLang.absyn.createPrim2AppExp($$[$0-2],$$[$0-3],$$[$0-1]); 
break;
case 50: case 52:
 $$[$0].unshift($$[$0-1]); this.$ = $$[$0]; 
break;
case 53:
 this.$ = SLang.absyn.createIfExp($$[$0-4],$$[$0-2],$$[$0]); 
break;
case 54:
 this.$ = SLang.absyn.createWhileExp($$[$0-3],$$[$0-1]); 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{1:[3]},{5:[1,30]},o($Vd,[2,2]),o($Vd,[2,3]),o($Vd,[2,4]),o($Vd,[2,5]),o($Vd,[2,6]),o($Vd,[2,7]),o($Vd,[2,8]),o($Vd,[2,9]),o($Vd,[2,10]),o($Vd,[2,11]),o($Vd,[2,12]),o($Vd,[2,13]),o($Vd,[2,14]),o($Vd,[2,15]),o($Vd,[2,16]),{35:[1,31]},{4:32,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{35:[1,33]},{4:34,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{19:$Ve,30:35},{19:[1,37]},{4:38,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,22:[1,39],25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{19:[1,40]},{4:41,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{35:[2,36]},{35:[2,37]},{35:[2,38]},{1:[2,1]},{19:[1,43],36:42,37:[2,29]},{4:46,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,26:[1,54],29:$V4,33:$V5,34:$V6,35:$V7,37:$Vf,41:44,42:20,43:45,44:$V8,45:$V9,46:$Va,47:[1,47],48:[1,48],49:[1,49],50:[1,50],51:[1,51],52:[1,52],53:[1,53],56:$Vb,59:$Vc},{4:55,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{57:[1,56]},{31:[1,57]},{26:[1,58]},{26:[1,59]},o($Vd,[2,17]),{19:[1,60]},{26:[1,61]},{60:[1,62]},{37:[1,63]},{37:$Vg,39:64,40:$Vh},{37:[1,66]},{4:67,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{4:46,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,37:$Vf,41:68,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},o($Vi,[2,39]),o($Vi,[2,40]),o($Vi,[2,41]),o($Vi,[2,42]),o($Vi,[2,43]),o($Vi,[2,44]),o($Vi,[2,45]),o($Vi,[2,46]),{37:[1,69]},{4:70,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{4:72,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,27:71,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{4:73,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{8:74,34:$V6},{22:[1,75]},{4:76,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{4:72,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,27:77,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{38:[1,78]},{37:[2,30]},{19:[1,79]},o($Vd,[2,33]),{37:[1,80]},{37:[2,48]},o($Vd,[2,34]),{58:[1,81]},{32:[1,82]},o($Vj,[2,22],{28:[1,83]}),{19:$Ve,30:84,31:[2,26]},{31:[1,85]},{4:88,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,23:86,24:[1,87],25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},o($Vd,[2,21]),{61:[1,89]},{4:90,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{37:$Vg,39:91,40:$Vh},o($Vd,[2,35]),{4:92,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},o($Vd,[2,24]),{4:72,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,27:93,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},{31:[2,27]},{4:72,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:$V0,20:$V1,21:$V2,25:$V3,27:94,29:$V4,33:$V5,34:$V6,35:$V7,42:20,44:$V8,45:$V9,46:$Va,56:$Vb,59:$Vc},o($Vd,[2,18]),o($Vd,[2,19]),o($Vd,[2,20]),o($Vd,[2,54]),o($Vd,[2,28]),{37:[2,32]},o($Vd,[2,53]),o($Vj,[2,23]),{32:[1,95]},o($Vd,[2,25])],
defaultActions: {27:[2,36],28:[2,37],29:[2,38],30:[2,1],64:[2,30],68:[2,48],84:[2,27],91:[2,32]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* skip whitespace */ 
break;
case 1: return 34; 
break;
case 2: return 35; 
break;
case 3: return 37; 
break;
case 4: return 47; 
break;
case 5: return 49; 
break;
case 6: return 50; 
break;
case 7: return 51; 
break;
case 8: return 48; 
break;
case 9: return 52; 
break;
case 10: return 53; 
break;
case 11: return 26; 
break;
case 12: return 45; 
break;
case 13: return 46; 
break;
case 14: return 44; 
break;
case 15: return 29; 
break;
case 16: return 31; 
break;
case 17: return 32; 
break;
case 18: return 21; 
break;
case 19: return 25; 
break;
case 20: return 33; 
break;
case 21: return 59; 
break;
case 22: return 60; 
break;
case 23: return 61; 
break;
case 24: return 28; 
break;
case 25: return 24; 
break;
case 26: return 40; 
break;
case 27: return 38; 
break;
case 28: return 56; 
break;
case 29: return 57; 
break;
case 30: return 58; 
break;
case 31: return 26; 
break;
case 32: return 22; 
break;
case 33: return 5; 
break;
case 34: return 19; 
break;
case 35: return 20; 
break;
case 36: return 'INVALID'; 
break;
}
},
rules: [/^(?:\s+)/,/^(?:fn\b)/,/^(?:\()/,/^(?:\))/,/^(?:\+)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:<)/,/^(?:>)/,/^(?:===)/,/^(?:~)/,/^(?:not\b)/,/^(?:add1\b)/,/^(?:let\b)/,/^(?:in\b)/,/^(?:end\b)/,/^(?:print\b)/,/^(?:set\b)/,/^(?:letrec\b)/,/^(?:while\b)/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?::)/,/^(?:,)/,/^(?:=>)/,/^(?:if\b)/,/^(?:then\b)/,/^(?:else\b)/,/^(?:=)/,/^(?:")/,/^(?:$)/,/^(?:([a-zA-Z_])(([a-zA-Z_])|([0-9])|_)*)/,/^(?:([0-9])+)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}