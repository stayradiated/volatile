# @stayradiated/exchange-rate

```typescript
import * as exchangeRate from '@stayradiated/exchange-rate'

const result = await exchangeRate.latest({
  appId: 'your-app-id',
  base: 'USD',
  symbol: 'NZD',
})

console.log(result.rate)
```

## Caching

On the free tier, openexchangerates.org only updates once every hour.
To save on API requests we can re-use previous results.
To do this, simply pass the previous result as a second argument to `.latest`.

```typescript

import * as exchangeRate from '@stayradiated/exchange-rate'

const result = await exchangeRate.latest(options, previousResult)

if (result === previousResult) {
  console.log('Previous result is still valid')
}
```
