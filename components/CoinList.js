import Coins from './Coins';

const CoinList = ({ coinsData }) => {
    return (
        <>

        
            {coinsData.map(coin => {
                return (
                    <Coins
                        key={coin.id}
                        name={coin.name}
                        id={coin.id}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                        high24={coin.high_24h}
                        low24={coin.low_24h}
                        rank={coin.market_cap_rank}
                    />
                )
            })}
        </>
    )
}

export default CoinList

