
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base } from '@reown/appkit/networks'

// 1. Get projectId at https://cloud.reown.com
// Note: Use VITE_ prefix for Vite environment variables
export const projectId = import.meta.env.VITE_REOWN_PROJECT_ID || 'YOUR_REOWN_PROJECT_ID'
const hasValidProjectId = projectId !== 'YOUR_REOWN_PROJECT_ID'

// 2. Create wagmi adapter
export const wagmiAdapter = new WagmiAdapter({
    projectId,
    networks: [base],
})

// Export the config directly from the adapter to avoid redundancy and type mismatches
export const config = wagmiAdapter.wagmiConfig

// 3. Create modal only when the workspace has a valid Reown project id.
if (hasValidProjectId) {
    createAppKit({
        adapters: [wagmiAdapter],
        networks: [base],
        projectId,
        metadata: {
            name: 'NEO FlowOFF',
            description: 'B2B Scalability Processing for Telegram',
            url: 'https://neoprotocol.space',
            icons: ['https://avatars.githubusercontent.com/u/179229938']
        },
        themeMode: 'dark',
        themeVariables: {
            '--w3m-accent': '#ff008e',
            '--w3m-border-radius-master': '1px'
        }
    })
}
