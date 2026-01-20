
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { formatEther, BaseError } from 'viem'
import NeoTokenABI from '../constants/abis/NeoTokenV2.json'

export const NEO_TOKEN_ADDRESS = '0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B'

export function useNeoToken() {
    const { address, isConnected } = useAccount()
    const { writeContract, data: hash, isPending: isMinting, error: writeError } = useWriteContract()

    // 1. Read Balance
    const { data: balance, refetch: refetchBalance } = useReadContract({
        address: NEO_TOKEN_ADDRESS,
        abi: NeoTokenABI as any,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
        query: {
            enabled: !!address,
        }
    })

    // 2. Read Contract Info (Multi-call-like optimization)
    const { data: contractInfo, isLoading: isLoadingInfo, refetch: refetchInfo } = useReadContract({
        address: NEO_TOKEN_ADDRESS,
        abi: NeoTokenABI as any,
        functionName: 'getContractInfo',
    })

    // 3. Read specific constants (optional but good for clarity)
    const { data: maxSupply } = useReadContract({
        address: NEO_TOKEN_ADDRESS,
        abi: NeoTokenABI as any,
        functionName: 'MAX_SUPPLY',
    })

    const { data: totalSupply } = useReadContract({
        address: NEO_TOKEN_ADDRESS,
        abi: NeoTokenABI as any,
        functionName: 'totalSupply',
    })

    // 4. Public Mint Function with Validations
    const mint = async () => {
        if (!isConnected) throw new Error('Wallet not connected')
        if (!contractInfo) throw new Error('Contract info not loaded')

        const info = contractInfo as any
        const mintEnabled = info[4]
        const mintPrice = info[2]

        if (!mintEnabled) throw new Error('Public mint is not active')

        return writeContract({
            address: NEO_TOKEN_ADDRESS,
            abi: NeoTokenABI as any,
            functionName: 'publicMint',
            value: mintPrice,
        } as any)
    }

    // 5. Wait for transaction
    const {
        isLoading: isWaitingTransaction,
        isSuccess: mintSuccess,
        error: transactionError
    } = useWaitForTransactionReceipt({
        hash,
    })

    // 6. Detailed error parsing
    const getErrorMessage = (err: any) => {
        if (!err) return null
        if (err instanceof BaseError) {
            if (err.message.includes('insufficient funds')) return 'Saldo insuficiente de ETH na carteira.'
            if (err.message.includes('User rejected')) return 'Transação recusada pelo usuário.'
            if (err.message.includes('hasPublicMinted')) return 'Esta carteira já realizou o mint gratuito.'
        }
        return err.message || 'Ocorreu um erro na transação.'
    }

    return {
        address,
        isConnected,
        balance: balance ? formatEther(balance as bigint) : '0',
        stats: contractInfo ? {
            currentSupply: formatEther((contractInfo as any)[0]),
            maxSupply: formatEther((contractInfo as any)[1]),
            mintPrice: formatEther((contractInfo as any)[2]),
            mintAmount: formatEther((contractInfo as any)[3]),
            mintEnabled: (contractInfo as any)[4],
        } : null,
        mint,
        isPending: isMinting || isWaitingTransaction,
        isMinting,
        isWaitingTransaction,
        mintSuccess,
        error: getErrorMessage(writeError || transactionError),
        refetch: () => {
            refetchBalance()
            refetchInfo()
        }
    }
}
