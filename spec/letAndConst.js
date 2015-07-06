describe("how let works", function(){
	it("will provide block scoping, unlike var", function(){
		var doWork = function(flag){
			if(flag){
				var x = 3;
			}
			return x;
		};

		var result = doWork(true);
		expect(result).toBe(3);
	});

});