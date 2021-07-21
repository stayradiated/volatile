# @stayradiated/dasset-api

## API

```typescript
import * as dasset from '@stayradiated/dasset-api'
```

```typescript
cost config = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  accountId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
}
```

```typescript
dasset.balanceAll(config)
dasset.balanceSingle(config, 'NZD')
dasset.openOrders(config)
dasset.closedOrders(config)
dasset.cancelOrder(config, orderId)
dasset.createOrder(config, { ... })
```
