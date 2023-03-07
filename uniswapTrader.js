const { ethers } = require('ethers')
const { abi: IUniswapV3PoolABI} = require('@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json')
const { abi: SwapRouterABI} = require('@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json')
const { getPoolImmutables, getPoolState } = require('./helpers')
const ERC20ABI = require('./abi.json')

require('dotenv').config()
const INFURA_URL_TESTNET = process.env.INFURA_URL_TESTNET
const WALLET_ADDRESS = process.env.WALLET_ADDRESS
const WALLET_SECRET = process.env.WALLET_SECRET

const provider = new ethers.provider.JsonRpcProvider(INFURA_URL_TESTNET) // Ropsten
const poolAddress = ""
const swapRouterAddress = '0xE592427A0AEce92De3Edee1F18E0157C05861564'

const name0 = 'Wrapped Ether'
const symbol0 = 'WETH'
const decimals0 = 18
const address0 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

const name0 = 'Uniswap Token'
const symbol0 = 'UNI'
const decimals0 = 18
const address0 = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

async function main() {
    const poolContract = new ethers.Contract(
        poolAddress,
        IUniswapV3PoolABI,
        provider
)

    const immutables = await getPoolImmutables(poolContract)
    const state = await getPoolState(poolContract)
    
    const wallet = new ethers.Wallet(WALLET_SECRET)
    const connectedWallet = wallet.connect(provider)

    const swapRouterContract = new ethers.Contract(
        swapRouterAddress,
        SwapRouterABI,
        provider
    )

    const inputAmount = 0.001
    // .001 => 
    const amountIn = ether.utils.parseUnits(
        inputAmount.toString(),
        decimals0
    )
    
    const approvalAmount = (amountIn * 100000)
    const tokenContract0 = new ethers.Contract(
        address0,
        ERC20ABI,
        provider
    )

    const approvalResponse = await tokenContract0.connect(connectWallet).approve(
        swapRouterAddress,
        approvalAmount
    )

    const transaction = swapRouterContract.connect(connectWallet)
}