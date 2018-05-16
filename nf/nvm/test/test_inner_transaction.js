"use strict";


var ProxyBankContract = function () {

};

// save value to contract, only after height of block, users can takeout
ProxyBankContract.prototype = {
	init: function () {
        //
    },
    
    save: function (address, to, height) {

        var funcs =  {
            save: function() { 
                
            }
        }
        var c = new Blockchain.Contract(address, funcs);

        var args = "[\"" + to + "\", \""+ height +"\"]";
        c.value(5).call("save", args); 
        this.transferEvent(true, address, height);
    },
    saveMem: function (address, to, mem) {
        var funcs =  {
            saveMem: function() { 
            
            }
        }
        var m = new ArrayBuffer(mem);
        var c = new Blockchain.Contract(address, funcs);
        var args = "[\"" + to + "\", \""+ mem +"\"]";
        c.value(0).call("saveMem", args); 
        this.transferEvent(true, address, 0, mem);
    },
    saveToLoop: function (address, to, height) {

        var funcs =  {
            saveToLoop: function() { 
            
            }
        }

        var c = new Blockchain.Contract(address, funcs);

        var args = "[\"" + address + "\", \"" + to + "\", \""+ height +"\"]";
        c.value(5).call("saveToLoop", args); 
        this.transferEvent(true, address, height);
    },
    transferEvent: function (status, address, height, mem) {
        Event.Trigger("test_inner_transaction", {
            Status: status,
            Transfer: {
                address: address,
                height: height,
                mem: mem,
                magic: "main"
            }
        });
    },
};

module.exports = ProxyBankContract;