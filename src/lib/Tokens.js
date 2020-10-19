const fetch = require('node-fetch');

class Eth {
    constructor() {
        this.priceUSD = null;
        this.fetchUsdPrice();
    }

    fetchUsdPrice() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                this.priceUSD = parseFloat(data.ethereum.usd);
            });
    }
}

class Token {
    constructor(name, symbol, address, abi) {
        this.name = name;
        this.symbol = symbol;

        this.address = address;
        this.abi = abi;
    }
}

class Clv extends Token {
    constructor(name, symbol, address, abi) {
        super(name, symbol, address, abi);
    }
}

class C2d extends Token {
    constructor(name, symbol, address, abi) {
        super(name, symbol, address, abi);
    }
}

class C3d extends Token {
    constructor(name, symbol, address, abi) {
        super(name, symbol, address, abi);
    }
}

class UniPool extends Token {
    constructor(name, symbol, address, abi) {
        super(name, symbol, address, abi);
    }
}

exports.Eth = Eth;
exports.Clv = Clv;
exports.C2d = C2d;
exports.C3d = C3d;
exports.UniPool = UniPool;