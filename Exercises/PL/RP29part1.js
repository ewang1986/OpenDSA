/* global console, SLang, PLutils  */
(function() {
  "use strict";

    var RP29part1 = {    


	init: function() {
	    var SL = SLang;
	    var A = SL.absyn;
	    var E = SL.env;
	    var globVar, globVal;
	    var arrName, arrLen, arrVals = [];
	    var mainVal, mainParams = [ ];
	    var fooParams = [], fooParamConstIndex;
	    var fooBody, fooBodyLen;

	    var vs = "xyz";	    
	    var fs = "fgh";
	    var exp, expStr;
	    var value, value2, rnd, iterations;
	    var globalEnv = E.update(E.createEmptyEnv(),
				     ["x","y","z"],
				     [E.createNum(1),
				      E.createNum(2),
				      E.createNum(3)]);

	    function getRandomLHS() {
		var rnd = A.getRnd(0,4);
		switch (rnd) {
		case 0: return fooParams[0];		    
		case 1: return fooParams[1];		
		case 2: return globVar;
		case 3: return arrName + "[" + A.getRnd(0,arrLen-1) + "]";
		case 4: return arrName + "[" + globVar + "]";
		};
	    }//  getRandomLHS function

	    function getRandomRHS(LHS) {
		return "To Do";
	    }// getRandomRHS function

	    function getRandomAssignment() {
		var LHS = getRandomLHS();
		var RHS = getRandomRHS(LHS);
		while (JSON.stringify(RHS) === JSON.stringify(LHS)) {
		       RHS = getRandomRHS(LHS);
		}
		return [LHS,RHS];
	    }// getRandomAssignment function

	    function initRandomParts() {
		var i;
		var globVars = [ "f", "g", "h" ];
		var arrNames = [ "a", "b", "c" ];
		globVar = globVars[ A.getRnd(0,globVars.length-1)];
		globVal = (headsOrTails() ? 1 : -1) * A.getRnd(0,10);
		arrName = arrNames[ A.getRnd(0,arrNames.length-1)];
		arrLen = A.getRnd(3,5);
		for(i=0; i<arrLen; i++) {
		    arrVals.push((headsOrTails() ? 1 : -1)*A.getRnd(0,10));
		}
		mainVal = A.getRnd(0,arrLen-1);
		switch (A.getRnd(0,2)) {
		    case 0: fooParams = ["p","q"]; break;
		    case 1: fooParams = ["r","s"]; break;
		    case 2: fooParams = ["u","v"]; break;
		}
		fooParamConstIndex = headsOrTails() ? 0 : 1;
		fooBody = [];
		fooBodyLen = A.getRnd(3,6);
		for(i=0; i<fooBodyLen; i++) {
		    fooBody.push(getRandomAssignment());
		}
	    }// initRandomParts function


	    function getPseudocode() {
		var i, output = [], line;
		output.push("int " + globVar + " = " + globVal + ";");
		line = "int " + arrName + "[" + arrLen + "] = { ";
		for(i=0; i<arrLen-1; i++) {
		    line += arrVals[i] + ", ";
		}
		line += arrVals[i] + " };";
		output.push(line);
		output.push("");
		output.push("void foo(int " + fooParams[0] + ", int " + 
			    fooParams[1] + ") {");
		output.push("");
		output.push("}");
		output.push("int main() {");
		output.push("  int " + globVar + " = " + mainVal + ";");
		if (fooParamConstIndex === 0) {
		    output.push("  foo(" + arrName + "[" + mainVal + "], " +
				arrName + "[" + globVar + "]);");
		} else {
		    output.push("  foo(" + arrName + "[" + globVar + "], " +
				arrName + "[" + mainVal + "]);");
		}
		for(i=0; i<fooBodyLen; i++) {
		    output.push("  " + fooBody[0] + " = " +  fooBody[1] + ";");
		}
		output.push("}");
		return output;
	    }
	    function headsOrTails() {
		return A.getRnd(0,1)===0;
	    }

	    function getRandomPrimApp(variables) {
		// assumes that variables.length >= 2
		var v = variables.split("");
		PLutils.shuffle(v);
		var body;
		var incr = A.createPrimApp1Exp("add1",A.createVarExp(v[0]));
		var addition1 = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
						    A.createVarExp(v[0]),
						     A.createVarExp(v[1]));
		var addition2 = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
		    A.createIntExp(A.getRnd(3,10)), A.createVarExp(v[2]));
		var addition3 = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
		    A.createVarExp(v[1]), A.createIntExp(A.getRnd(3,10)));
		var mult1 = A.createPrimApp2Exp("*",
					         A.createVarExp(v[0]),
						 A.createVarExp(v[1]));
		var mult2 = A.createPrimApp2Exp("*",
  	            A.createIntExp(A.getRnd(3,10)), A.createVarExp(v[2]));
		var mult3 = A.createPrimApp2Exp("*",
		    A.createVarExp(v[1]), A.createIntExp(A.getRnd(3,10)));

		PLutils.shuffle(v);
		switch (A.getRnd(0,22)) {
		case 0: body = incr; break;
		case 1: body = addition1; break;
		case 2: body = addition2; break;
		case 3: body = addition3; break;
		case 4: body = mult1; break;
		case 5: body = mult2; break;
		case 6: body = mult3; break;
		case 7: body = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
				A.createVarExp(v[0]), mult1 );
		    break;
		case 8: body = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
				 A.createVarExp(v[0]), mult2 );
		    break;
		case 9: body = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
				 A.createVarExp(v[0]), mult3 );
		    break;
		case 10: body = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
				 mult1, A.createVarExp(v[0]) );
		    break;
		case 11: body = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
				 mult2, A.createVarExp(v[0]) );
		    break;
		case 12: body = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
				 mult3, A.createVarExp(v[0]) );
		    break;
		case 13: body = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
			 incr, A.createVarExp(v[0]) );		  
		    break;
		case 14: body = A.createPrimApp2Exp(headsOrTails() ? "+" : "-",
			 A.createVarExp(v[0]), incr );		  
		    break;
		case 15: body = A.createPrimApp2Exp("*", 
			 incr, A.createVarExp(v[0]) );		  
		    break;
		case 16: body = A.createPrimApp2Exp("*", 
			 A.createVarExp(v[0]), incr );		  
		    break;
		case 17: body = A.createPrimApp2Exp("*", 
			 A.createVarExp(v[0]), addition1 );		  
		    break;
		case 18: body = A.createPrimApp2Exp("*", 
			 A.createVarExp(v[0]), addition2 );		  
		    break;
		case 19: body = A.createPrimApp2Exp("*", 
			 A.createVarExp(v[0]), addition3 );		  
		    break;
		case 20: body = A.createPrimApp2Exp("*", 
			 addition1, A.createVarExp(v[0]) );		  
		    break;
		case 21: body = A.createPrimApp2Exp("*", 
			 addition2, A.createVarExp(v[0]) );		  
		    break;
		case 22: body = A.createPrimApp2Exp("*", 
			 addition3, A.createVarExp(v[0]) );		  
		    break;
		}
		return body;
	    }// getRandomPrimApp function


	    function assignmentToCppSyntax(assignment) {

		function isAtomic(exp) {
		    return A.isIntExp(exp) || A.isVarExp(exp);
		}
		function arithmeticToString(exp) {
		    var op, left, right;
		    if (A.isIntExp(exp)) {
			return A.getIntExpValue(exp) + "";
		    } else if (A.isVarExp(exp)) {
			return A.getVarExpId(exp);
		    } else if (A.isPrimApp2Exp(exp)) {
			op = A.getPrimApp2ExpPrim(exp);
			left = A.getPrimApp2ExpArg1(exp);
			right = A.getPrimApp2ExpArg2(exp);
			if (isAtomic(left)) {
			    if (isAtomic(right)) {
				return arithmeticToString(left) + op + 
				    arithmeticToString(right);
			    } else {
				return arithmeticToString(left) + op + 
				    "(" + arithmeticToString(right) +")";
			    }
			} else {
			    if (isAtomic(right)) {
				return "(" + arithmeticToString(left) + ")" + op + 
				    arithmeticToString(right);
			    } else {
				return "(" + arithmeticToString(left) + ")"+ op + 
				    "(" + arithmeticToString(right) +")";
			    }
			}
		    } else {
			// add1 case
			return arithmeticToString(A.getPrimApp1ExpArg(exp)) + "+1";
		    }		    
		}
		var LHS = A.getAssignExpVar(assignment);
		return   "  " + LHS + " = " + arithmeticToString(A.getAssignExpRHS(assignment));

	    }
	    function convertToCppSyntax(exp) {
		var xVal = A.getIntExpValue( A.getAppExpArgs(exp)[0] );
		var yVal = A.getIntExpValue( A.getAppExpArgs(exp)[1] );
		var body = A.getFnExpBody( A.getAppExpArgs(exp)[2] );
		var i;
		var code = [ 
		    "#include &lt;iostream&gt;", 
		    "using namespace std;",
		    "",
		    "void by_value(int a, int b)  {"];
		var shared = [];
		for(i = 0; i<body.length; i++) {
		    shared.push( assignmentToCppSyntax(body[i]) + ";" );
		}
		code = code.concat(shared);
		code.push( "}" );
		code.push( "void by_reference(int &a, int &b) {" );
		code = code.concat(shared);
		code.push( "}" );
		code.push( "" );
		code.push("int main() {");
		code.push("  int x,y;");
		code.push("  x = " + xVal + "; y = " + yVal + ";");


		code.push("  by_value(" + exp.v1 + "," + exp.v2 + ");");
		if (exp.v1 === exp.v2) {
		    code.push("  cout &lt;&lt; " + exp.v1 + " &lt;&lt; endl;");
		} else {
		    code.push("  cout &lt;&lt; x &lt;&lt; endl &lt;&lt; y &lt;&lt; endl;");
		}
		code.push(" ");
		code.push("  x = " + xVal + "; y = " + yVal + ";");
		code.push("  by_reference(" + exp.v1 + "," + exp.v2 + ");");
		if (exp.v1 === exp.v2) {
		    code.push("  cout &lt;&lt; " + exp.v1 + " &lt;&lt; endl;");
		} else {
		    code.push("  cout &lt;&lt; x &lt;&lt; endl &lt;&lt; y &lt;&lt; endl;");
		}
		code.push( "}" );
		
		return code;
	    }
	    function getRndExpRP29part1() {
		// structure of exp: 
		//  let x =<int> y = <int>
		//      f = fn (a,b) => let notUsed=-1 in  body1 end
                //  in
		//     (f x y);  // this is body below
		//     print x;		
		//     print y
		//  end
		// that is:
		// (fn (x,y,f) =>(fn(_)=>body -1)  <int> <int> fn(a,b)=>body1 )
		// where body = (f v1 v2); print v1; print v2
		// or    body = (f v v); print v
		// and body assigns a and b using between 2 and 4 assignments
		var xVal = A.getRnd(4,10);
		var yVal = A.getRnd(4,10);
		var innerApp, innerFunc, body = [], args;
		var fVarExp = A.createVarExp("f");
		var v1 = headsOrTails() ? "x" : "y";
		var v2 = headsOrTails() ? "x" : "y";
		var v1VarExp = A.createVarExp(v1);
		var v2VarExp = A.createVarExp(v2);
		var output;
		body.push(A.createAppExp(fVarExp,["args",v1VarExp,v2VarExp]));
		if (v1 !== v2) {
		    body.push(A.createPrintExp(A.createVarExp("x")));
		    body.push(A.createPrintExp(A.createVarExp("y")));
		} else {
		    body.push(A.createPrintExp(v1VarExp));
		}
		innerFunc = A.createFnExp(["notUsed"],body);
		innerApp = A.createAppExp(innerFunc,
					  ["args",A.createIntExp(-1)]);
		innerApp.comesFromLetBlock = true; // to avoid call by ref
		args = ["args", A.createIntExp(xVal),A.createIntExp(yVal)];
		args.push( A.createFnExp(["a","b"], getRandomBody() ) );
		output= SL.absyn.createAppExp( 
		    SL.absyn.createFnExp(["x","y","f"],[ innerApp ]),
		    args);
		output.comesFromLetBlock = true; // to avoid call by ref
		output.v1 = v1;		
		output.v2 = v2;
		return output;
	    }// getRndExpRP29part1 function

	    function callByValueRP29part1(exp,envir) {
		var f = evalExpRP29part1(A.getAppExpFn(exp),envir);
		var args = evalExpsRP29part1(A.getAppExpArgs(exp),envir);
		if (E.isClo(f)) {
		    if (E.getCloParams(f).length !== args.length) {		
			throw new Error("Runtime error: wrong number of arguments in " +
					"a function call (" + E.getCloParams(f).length +
					" expected but " + args.length + " given)");
		    } else {
			var values = evalExpsRP29part1(E.getCloBody(f),
					      E.update(E.getCloEnv(f),
						       E.getCloParams(f),args));
			return values[values.length-1];
		    }
		} else {
		    throw f + " is not a closure and thus cannot be applied.";
		}    
	    }

	    function callByReferenceRP29part1(exp,envir) {
		var f = evalExpRP29part1(A.getAppExpFn(exp),envir);
		var args = A.getAppExpArgs(exp).map( function (arg) {
		    if (A.isVarExp(arg)) {
			return E.lookupReference(envir,A.getVarExpId(arg));
		    } else {
			throw new Error("The arguments of a function called by-ref must all be variables.");
		    }
		} );
		if (E.isClo(f)) {
		    if (E.getCloParams(f).length !== args.length) {		
			throw new Error("Runtime error: wrong number of arguments in " +
					"a function call (" + E.getCloParams(f).length +
					" expected but " + args.length + " given)");
		    } else {
			var values = evalExpsRP29part1(E.getCloBody(f),
					      E.updateWithReferences(
						  E.getCloEnv(f),
						  E.getCloParams(f),args));
			return values[values.length-1];
		    }
		} else {
		    throw new Error(f + " is not a closure and thus cannot be applied.");
		}    
	    }

	    function evalExpsRP29part1(list,envir) {
		return list.map( function(e) { return evalExpRP29part1(e,envir); } );
	    }



	    function evalExpRP29part1(exp,envir) {
		if (A.isIntExp(exp)) {
		    return E.createNum(A.getIntExpValue(exp));
		}
		else if (A.isVarExp(exp)) {
		    return E.lookup(envir,A.getVarExpId(exp));
		} else if (A.isPrintExp(exp)) {
		    SL.output += JSON.stringify(
			evalExpRP29part1( A.getPrintExpExp(exp), envir ));
		} else if (A.isPrint2Exp(exp)) {
		    SL.output += A.getPrint2ExpString(exp) +
				 (A.getPrint2ExpExp(exp) !== null ?
				  " " + JSON.stringify( evalExpRP29part1( A.getPrint2ExpExp(exp), 
								 envir ) )
				  : "");
		} else if (A.isAssignExp(exp)) {
		    var v = evalExpRP29part1(A.getAssignExpRHS(exp),envir);
		    E.lookupReference(
                        envir,A.getAssignExpVar(exp))[0] = v;
		    return v;
		} else if (A.isFnExp(exp)) {
		    return E.createClo(A.getFnExpParams(exp),
				       A.getFnExpBody(exp),envir);
		}
		else if (A.isAppExp(exp)) {
		    if (exp.comesFromLetBlock) {
			return callByValueRP29part1(exp,envir);
		    } else {
			switch (SL.ppm) {
			case "byval" : return callByValueRP29part1(exp,envir);
			case "byref" : return callByReferenceRP29part1(exp,envir);
			}
		    }
		} else if (A.isPrimApp1Exp(exp)) {
		    return SL.applyPrimitive(A.getPrimApp1ExpPrim(exp),
					     [evalExpRP29part1(A.getPrimApp1ExpArg(exp),envir)]);
		} else if (A.isPrimApp2Exp(exp)) {
		    return SL.applyPrimitive(A.getPrimApp2ExpPrim(exp),
					     [evalExpRP29part1(A.getPrimApp2ExpArg1(exp),envir),
					      evalExpRP29part1(A.getPrimApp2ExpArg2(exp),envir)]);
		} else if (A.isIfExp(exp)) {
		    if (E.getBoolValue(evalExpRP29part1(A.getIfExpCond(exp),envir))) {
			return evalExpRP29part1(A.getIfExpThen(exp),envir);
		    } else {
			return evalExpRP29part1(A.getIfExpElse(exp),envir);
		    }
		} else {
		    throw "Error: Attempting to evaluate an invalid expression";
		}
	    }// evalExpRP29part1 function



	    initRandomParts();
	    this.expression = getPseudocode().join("<br />");

	    return;

	    iterations = 0;
	    while(true) {
		exp = undefined;
		iterations++;
		exp = getRndExpRP29part1();
		expStr =  convertToCppSyntax(exp);
		value = null;
		try {
		    expStr = undefined;
		    SL.output = "";
		    SL.ppm = "byval";
		    value = evalExpRP29part1(exp,globalEnv);
		    SL.ppm = "byref";
		    value2 = evalExpRP29part1(exp,globalEnv);
		    expStr = convertToCppSyntax(exp);
		} catch (e) {
		    //console.log("My exception: ",e);
		}
		if (value !== null && value2 !== null &&
		    SL.output.match(/-?\d+/g).filter(
			function (s) { return s.length > 6; } )
		    .length === 0) {

		    // no printed number is longer than 6 digits
		    this.answer = SL.output.match(/-?\d+/g).join(" ");
		    break;
		}
		if (iterations>500) {
		    // not needed locally but might be needed on Canvas
		    // when the files do not load appropriately???
		    expStr = ["Something went wrong...",
			      "Please, reload the page."];
		    break;
		}
	    }

	    this.expression = expStr.join("<br />");
	    
	    console.log(this.answer);
	},// init function

	validateAnswer: function (guess) {
	    return this.answer.replace(/\s+/g,"") ===
		guess.replace(/\s+/g,"");
	}// validateAnswer function
	
    };

    window.RP29part1 = window.RP29part1 || RP29part1;

}());


