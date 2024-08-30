# ⚡ Squid Torch: AI-Driven Token Liquidity Model for Secure Grants⚡

## 🔍 Project Overview
In today’s global landscape, stablecoins and cryptocurrencies have become prominent methods for providing grants and payments to developers, particularly in the context of international collaboration. This approach simplifies transactions, bypassing the complexities and bureaucratic hurdles associated with traditional financial infrastructures, such as banks.

However, while this method offers efficiency, it also introduces the challenge of ensuring the stability of the chosen cryptocurrency, especially for developers who intend to hold these tokens over the long term. Predicting the future price of a token can be an uncertain and often futile endeavor. Instead, focusing on the liquidity of a token as a measure of its stability presents a more reliable approach. By prioritizing liquidity, developers can make more informed decisions about which tokens or coins they should accept as payments or grants, ensuring greater financial security in the volatile world of cryptocurrency.

### 📊 Forecasting Pool Liquidity of Different Tokens and Token Pairs for Grant Selection
As the DeFi space continues to evolve, liquidity has emerged as a key metric for evaluating the long-term stability of cryptocurrencies. This project emphasizes the importance of forecasting pool liquidity, particularly over token price, to guide developers and other stakeholders in selecting the most stable tokens for grants and payments. Liquidity is not just an indicator of market health but also a critical factor in executing large transactions and securing long-term investments.

### 💡 Liquidity as a Stability Indicator
- _Market Confidence_: High liquidity reflects strong market confidence, suggesting that a token is widely accepted and actively traded. This makes it a more reliable choice for developers and other market participants.

- _Ease of Transaction_: Liquidity ensures that large transactions can occur without significantly impacting the token's price, which is crucial for developers and other users who may need to move substantial amounts of the token efficiently.

### 💬 Liquidity vs. Price Volatility
- _Stability Over Volatility_: While token prices can fluctuate due to speculation or market shocks, liquidity tends to be more stable. This stability is often underpinned by long-term holders and well-established liquidity pools, indicating the overall strength and durability of the token’s market.

- _Buffer Against Volatility_: High liquidity serves as a cushion against market volatility, allowing for the absorption of sales without a dramatic drop in token price. This creates a safer environment for managing assets and reduces the risk of severe price fluctuations.

### 🧪 Planning and Strategy
- _Long-Term Planning_: By forecasting liquidity, developers and investors can plan for the long term. Tokens with consistently high liquidity are more likely to remain viable and tradable, supporting ongoing operations and development without the added risk of illiquidity.

- _Risk Management_: Focusing on liquidity forecasting helps developers manage the risks associated with illiquid tokens. This is crucial in avoiding tokens that may suffer liquidity shortages, forcing sellers to accept lower prices in the future.

### 🔗 Enhancing Models with Squid SDK
To enrich our modeling efforts, we leverage the data provided by Squid's SDK. This tool offers transactional insights and real-time data on token liquidity, enabling more accurate predictions and enhancing our ability to forecast market conditions. By integrating Squid's SDK, we aim to significantly improve the performance of our models, allowing for better decision-making regarding token selection and grant distribution.

### 📌 Impact on Developers and the DeFi Ecosystem
In the advent of DeFi, it has become increasingly common for software developers to be compensated in cryptocurrencies. In this context, liquidity becomes a crucial consideration for developers when choosing which tokens to accept as payment. Ensuring that developers are paid in stable and liquid tokens can protect their earnings from sharp price drops and liquidity risks.

Beyond software developers, many other transactions within the DeFi ecosystem rely on liquid markets. By improving our ability to model liquidity across various tokens, we contribute to creating a more stable and sustainable economy within the cryptocurrency and DeFi space. This project is a critical step toward guiding participants in the DeFi ecosystem toward informed and secure financial decisions.

## 🔧 Tech Stack Used:
1) **GizaTech's Dataset**:
    - _balancer-daily-pool-liquidity_
    - _balancer-daily-trade-volume_
2) **Squid SDK**: Enables the collection of real-time blockchain transaction data for specific and selected tokens:
    - _DAI_
    - _MATIC_
    - _USDT_
    - _WBTC_
    - _WETH_
3) **Pytorch**: Used to train a model for predicting the Pool Liquidity (in Logs) in USD for each token pairs
