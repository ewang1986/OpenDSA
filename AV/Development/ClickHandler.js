"use strict";

(function ($) {

	/*
	 * JSAV click handler for handling moving and copying between different structures
	 *
	 * Move currently works with arrays and lists
	 *
	 * Copy and Swap behave strangly with lists
	 *
	 *
	 *
	*/
	var ClickHandler = function ClickHandler(jsav, exercise, options) {
		var defaults = {
			selectedClass: "jsavhighlight",
			selectEmpty: false,
			effect: "move",
			removeNodes: true,
			gradeable: true,
			select: "click",			//click, first, last
			drop: "click",				//click, first, last
			keep: false,				//don't allow selecting the last node
			onSelect: function() {},	//called by array when array is selected
			onDrop: function() {}		//called by array when value has been changed
		};

		this.jsav = jsav;
		this.exercise = exercise;
		this.selStruct = jsav.variable(-1);
		this.selIndex = jsav.variable(-1);
		this.selNode;	//only valid when selStruct != -1 and selIndex = -1
		this.ds = [];
		this.options = $.extend({}, defaults, options);
	}

	ClickHandler.prototype = {
		//get the index of a structure
		getDsIndex: function getDsIndex(ds) {
			return $.inArray(ds, this.ds);
		},

		//get a structure 
		getDs: function getDs(index) {
			return this.ds[index];
		},

		//reset the click handler, but keeps datastructures and settings
		//should be done when initializing an exercise
		reset: function reset() {
			this.selStruct.value(-1);
			this.selIndex.value(-1);
			this.selNode = null;
		},

		//remove structure from click handler
		remove: function remove(ds) {
			if (this.getDsIndex(ds) === -1) {
				return false;
			} else {
				this.ds.splice(this.getDsIndex(ds), 1);
				return true;
			}
		},

		//unselect the selected node
		unselect: function unselect() {
			if (this.selStruct.value() !== -1) {
				if (this.selIndex.value() === -1) {
					//unselect node
					this.selNode.removeClass(this.options.selectedClass);
				} else {
					//unselect from array
					this.getDs(this.selStruct.value()).removeClass(this.selIndex.value(), this.options.selectedClass);
				}
				this.reset();
			}
		},

		//add an array to the click handler
		addArray: function addArray(array, options) {
			//push array into ds
			this.ds.push(array);

			options = $.extend({}, this.options, options);

			var ch = this;

			//add click handler
			array.click(function(index) {
				//move the values from the JSAV variables into regulas js vars
				var sStruct = ch.selStruct.value();
				var sIndex = ch.selIndex.value();
				//changed to true if the step should be graded
	            var grade = false;

				if (sStruct === -1) {
					//select empty nodes only if the options allow it
					if (!options.selectEmpty && this.value(index) === "")
						return;
					//call onSelect function
					var continueSelect = options.onSelect.call(this, index);
					//return if onSelect returns false
					if (typeof continueSelect !== "undefined" && !continueSelect)
						return;
					//mark as selected
					this.addClass(index, ch.options.selectedClass);
					//set sStruct and sIndex values
					sStruct = ch.getDsIndex(this);
					sIndex = index;
				} else if (sStruct === ch.getDsIndex(this)) {
					//swap with empty nodes only if the options allow it
					if (!options.selectEmpty && this.value(index) === "" && ch.options.effect === "swap")
						return;
					//unselect
					this.removeClass(sIndex, ch.options.selectedClass);
					if (sIndex !== index) {
						//move/copy/swap within the array
						valueEffect(ch, {
							from: ch.getDs(sStruct), 
							fromIndex: sIndex, 
							to: ch.getDs(sStruct), 
							toIndex: index,
							effect: options.effect
						});
						//call onDrop function
						grade = options.onDrop.call(this, index);
						if (typeof grade === "undefined") {
							//set true if nothing was returned
							grade = true;
						} else {
							//convert to boolean
							grade = !!grade;
						}
					}
					//set sStruct and sIndex values
					sStruct = -1;
					sIndex = -1;
				} else {
					//move/copy/swap from an another structure
					//swap with empty nodes only if the options allow it
					if (!options.selectEmpty && this.value(index) === "" && ch.options.effect === "swap")
						return;
					if (sIndex === -1) {
						//from node
						//unselect node
						ch.selNode.removeClass(ch.options.selectedClass);
						//move value
						valueEffect(ch, {
							from: ch.selNode,
							to: this, 
							toIndex: index,
							effect: options.effect
						});
					} else {
						//from another array
						//unselect
						ch.getDs(sStruct).removeClass(sIndex, ch.options.selectedClass);
						//move value
						valueEffect(ch, {
							from: ch.getDs(sStruct), 
							fromIndex: sIndex, 
							to: this, 
							toIndex: index,
							effect: options.effect
						});
					}
					//call onDrop function
						grade = options.onDrop.call(this, index);
						if (typeof grade === "undefined") {
							//set true if nothing was returned
							grade = true;
						} else {
							//convert to boolean
							grade = !!grade;
						}					
					//set sStruct and sIndex values					
					sStruct = -1;
					sIndex = -1;
				}
	            //move the values back to the JSAV variables
				ch.selStruct.value(sStruct);
				ch.selIndex.value(sIndex);
				//grade if grade is true
				if (options.gradeable && grade)
					ch.exercise.gradeableStep();
			});
		},

		//add a list to the click handler
		addList: function addList(list, options) {
			//push array into ds
			this.ds.push(list);

			options = $.extend({}, this.options, options);

			var ch = this;

			//add click handler
			list.click(function() {
				//move the values from the JSAV variables into regulas js vars
				var sStruct = ch.selStruct.value();
				var sIndex = ch.selIndex.value();
				//changed to true if the step should be graded
	            var grade = false;

				if (sStruct === -1) {
					//select empty nodes only if the options allow it
					if (!options.selectEmpty && this.value() === "" && options.select === "click")
						return;
					//don't allow to select the last node if keep is true
					if (options.keep && list.size() === 1)
						return;
					//select
					switch (options.select) {
						case "first":
							ch.selNode = list.first();
							break;
						case "last":
							ch.selNode = list.last();
							break;
						default: //"click"
							ch.selNode = this;
					}
					//call onSelect function
					var continueSelect = options.onSelect.call(ch.selNode);
					//return if onSelect returns false
					if (typeof continueSelect !== "undefined" && !continueSelect)
						return;
					//mark as selected
					ch.selNode.addClass(ch.options.selectedClass);
					//set sStruct and sIndex values
					sStruct = ch.getDsIndex(list);
					sIndex = -1;
				} else if (sStruct === ch.getDsIndex(list)) {
					//unselect
					ch.selNode.removeClass(ch.options.selectedClass);
					var to;
					switch (options.drop) {
						case "first":
							if (options.select === "first" || this === ch.selNode) {
								to = list.first();
								break;
							}
							to = list.addFirst().first();
							break;
						case "last":
							if (options.select === "last" || this === ch.selNode) {
								to = list.last();
								break;
							}
							to = list.addLast().last();
							break;
						default: //"click"
							to = this;
					}
					if (to !== ch.selNode && this !== ch.selNode) {
						//move/copy/swap within the list
						valueEffect(ch, {
							from: ch.selNode, 
							to: to,
							effect: options.effect
						});
						list.layout();
						//call onDrop function
						grade = options.onDrop.call(to);
						if (typeof grade === "undefined") {
							//set true if nothing was returned
							grade = true;
						} else {
							//convert to boolean
							grade = !!grade;
						}
					}
					//set sStruct and sIndex values
					sStruct = -1;
					sIndex = -1;
				} else {
					//move/copy/swap from an another structure
					var to;
					switch (options.drop) {
						case "first":
							to = list.addFirst().first();
							break;
						case "last":
							to = list.addLast().last();
							break;
						default: //"click"
							to = this;
					}
					if (sIndex === -1) {
						//from node
						//unselect node
						ch.selNode.removeClass(ch.options.selectedClass);
						//move value
						valueEffect(ch, {
							from: ch.selNode,
							to: to,
							effect: options.effect
						});
						list.layout();
					} else {
						//from an array
						//unselect
						ch.getDs(sStruct).removeClass(sIndex, ch.options.selectedClass);
						//move value
						valueEffect(ch, {
							from: ch.getDs(sStruct), 
							fromIndex: sIndex, 
							to: to,
							effect: options.effect
						});
						list.layout();
					}
					//call onDrop function
						grade = options.onDrop.call(to);
						if (typeof grade === "undefined") {
							//set true if nothing was returned
							grade = true;
						} else {
							//convert to boolean
							grade = !!grade;
						}					
					//set sStruct and sIndex values					
					sStruct = -1;
					sIndex = -1;
				}
	            //move the values back to the JSAV variables
				ch.selStruct.value(sStruct);
				ch.selIndex.value(sIndex);
				//grade if grade is true
				if (options.gradeable && grade)
					ch.exercise.gradeableStep();
			});
		}
	}

	/*
	 * moves, copies or swaps the elements
	*/
	function valueEffect(ch, options) {
		//create an argument array for apply()
		var args = valueEffectArguments(options);

		switch (options.effect) {
			case "move":
				ch.jsav.effects.moveValue.apply(this, args);
				break;
			case "copy":
				ch.jsav.effects.copyValue.apply(this, args);
				break;
			case "swap":
				ch.jsav.effects.swapValues.apply(this, args);
				break;
			case "toss":
				//remove value from "from structure"
				if (typeof options.fromIndex === "number")
					//remove from array
					ch.getDs(ch.selStruct.value()).value(ch.selIndex.value(), "");
				break;
		}

		if (ch.options.removeNodes &&
			$.inArray(options.effect, ["move", "toss"]) !== - 1 &&
			typeof options.fromIndex === "undefined")
			{
			//remove empty node
			if (ch.getDs(ch.selStruct.value()) instanceof JSAV._types.ds.List) {
				//remove node from list
				var list = ch.getDs(ch.selStruct.value());
				var i;
				for (i = 0; i < list.size(); i++) {
					if (list.get(i) === options.from) {
						list.remove(i);
						if (i !== 0)
							options.from.hide();
						break;
					}
				}
			} else {
				//TODO: check if this works
				options.from.remove();
			}
			//refresh structures with nodes
			ch.getDs(ch.selStruct.value()).layout();
		}
	}

	//creates an argument array for moveValue/copyValue/swapValue.apply()
	function valueEffectArguments(options) {
		if (typeof options.fromIndex !== "undefined") {
			if (typeof options.toIndex !== "undefined") {
				//array to array
				return [options.from, options.fromIndex, options.to, options.toIndex];
			} else {
				//array to node
				return [options.from, options.fromIndex, options.to];
			}
		} else {
			if (typeof options.toIndex !== "undefined") {
				//node to array
				return [options.from, options.to, options.toIndex];
			} else {
				//node to node
				return [options.from, options.to];
			}
		}
	}

	if (window) {
    	window.ClickHandler = ClickHandler;
  	}
}(jQuery));