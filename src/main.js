const { Eth, Clv, C2d, C3d, UniPool } = require('./lib/Tokens');
const contracts = require('./lib/contracts');

const eth = new Eth();
const clv = new Clv('Clover', 'CLV', contracts.clv.address, contracts.clv.abi);
const c2d = new C2d('C2D', 'C2D', contracts.c2d.address, contracts.c2d.abi);
const c3d = new C3d('C3D', 'C3D', contracts.c3d.address, contracts.c3d.abi);
const liq = new UniPool('CLV/ETH LP Token', 'UNI-V2', contracts.liquidClv.address, contracts.liquidClv.abi);

// All DOM nodes that will be updated in the update()/render() cycle.
const nodes = {
    clv: {
        
    },
    c2d: {
        contractBaseBalance: '',
        percentHeld: '',
        totalSupply: '',

        priceBuy: '',
        priceSell: '',

        accountDividends: '',
        accountValue: '',
        accountC2D: '',
        accountCLV: '',
    },
    c3d: {
        contractBaseBalance: '',
        percentHeld: '',
        totalSupply: '',

        priceBuy: '',
        priceSell: '',

        accountDividends: '',
        accountValue: '',
        accountC3D: '',
        accountLP: '',
    },
    liq: {},
}

function init() {
    setInterval(() => {
        update();
    }, 5000);
}

function update() {
    eth.fetchUsdPrice();
    console.log(eth.priceUSD);
}

init();