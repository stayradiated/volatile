# @stayradiated/kiwi-coin

## API

```typescript
import * as kiwiCoin from '@stayradiated/kiwi-coin'
```

```typescript
kiwiCoin.ticker()
kiwiCoin.orderBook()
```

```typescript
cost config = {
  userId: 'XXXX-XXXX-XXXX',
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  apiSecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
}
```

```typescript
kiwiCoin.balance(config)
kiwiCoin.openOrders(config)
kiwiCoin.trades(config, timeframe)
kiwiCoin.cancelOrder(config, orderId)
kiwiCoin.buy(config, { price, amount })
kiwiCoin.sell(config, { price, amount })
```
