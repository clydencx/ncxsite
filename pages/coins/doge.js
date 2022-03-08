import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Doge() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
            setData(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            {
                data.map((item) => (
                    <div key={item.id} className={styles.coin__container}>
                        <div className={styles.coin__row}>
                            <div className={styles.coin__data}>
                                <p className={styles.coin__symbol}>{item.symbol} / <span style={{color: "gray"}}>USD</span> </p>
                                <p className={styles.coin__price}>{item.current_price.toFixed(2)}</p>
                                {item.price_change_percentage_24h < 0 ? (
                                    <p className={styles.red}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                    <p className={styles.green}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                )}
                                <p className={styles.coin__high_24}>{item.high_24h}</p>
                                <p className={styles.coin__low_24}>{item.low_24h}</p>
                                <p className={styles.coin__low_24}><svg width="95" height="30"><defs><linearGradient id="area-gradientETHUSDT#007dff" x2="1" y2="1"><stop offset="10%" stopColor="#007dff" stopOpacity="0.01"></stop><stop offset="100%" stopColor="#007dff" stopOpacity="0.5"></stop></linearGradient></defs><path d="M0,2.137499999999931L0.6884057971014492,3.204999999999927C1.3768115942028984,4.272499999999922,2.753623188405797,6.407499999999914,4.130434782608695,7.066249999999911C5.507246376811594,7.724999999999909,6.884057971014492,6.907499999999914,8.26086956521739,5.709999999999923C9.63768115942029,4.512499999999933,11.014492753623188,2.9349999999999468,12.391304347826086,2.3749999999999445C13.768115942028984,1.814999999999942,15.144927536231883,2.272499999999924,16.52173913043478,4.716249999999946C17.89855072463768,7.159999999999969,19.27536231884058,11.590000000000032,20.652173913043477,14.853750000000048C22.028985507246375,18.117500000000064,23.40579710144927,20.215000000000032,24.782608695652172,21.48875000000004C26.159420289855074,22.762500000000045,27.53623188405797,23.21250000000009,28.91304347826087,22.55875000000009C30.28985507246377,21.905000000000086,31.666666666666668,20.147500000000036,33.04347826086956,18.743750000000034C34.42028985507246,17.340000000000032,35.79710144927537,16.290000000000077,37.17391304347826,16.361250000000098C38.550724637681164,16.43250000000012,39.927536231884055,17.625000000000114,41.30434782608695,17.49250000000012C42.68115942028985,17.360000000000127,44.05797101449275,15.902500000000146,45.43478260869565,15.331250000000125C46.811594202898554,14.760000000000105,48.188405797101446,15.075000000000045,49.565217391304344,14.711250000000007C50.94202898550724,14.347499999999968,52.31884057971015,13.30499999999995,53.69565217391304,11.926249999999925C55.07246376811594,10.5474999999999,56.44927536231884,8.832499999999868,57.82608695652174,9.294999999999902C59.20289855072465,9.757499999999936,60.57971014492754,12.397500000000036,61.95652173913044,14.460000000000036C63.333333333333336,16.522500000000036,64.71014492753623,18.007499999999936,66.08695652173913,20.079999999999927C67.46376811594202,22.152499999999918,68.84057971014492,24.8125,70.21739130434783,23.45625000000001C71.59420289855073,22.100000000000023,72.97101449275362,16.727499999999964,74.34782608695652,13.829999999999927C75.72463768115942,10.93249999999989,77.10144927536233,10.509999999999879,78.4782608695652,10.721249999999884C79.85507246376811,10.93249999999989,81.23188405797102,11.777499999999918,82.60869565217392,13.284999999999968C83.98550724637681,14.792500000000018,85.3623188405797,16.96250000000009,86.73913043478262,18.645000000000095C88.1159420289855,20.3275000000001,89.49275362318842,21.522500000000036,90.86956521739131,20.251250000000027C92.2463768115942,18.980000000000018,93.62318840579711,15.242500000000064,94.31159420289855,13.373750000000086L95,11.50500000000011L95,1912.5L94.31159420289855,1912.5C93.62318840579711,1912.5,92.2463768115942,1912.5,90.86956521739131,1912.5C89.49275362318842,1912.5,88.1159420289855,1912.5,86.73913043478261,1912.5C85.3623188405797,1912.5,83.98550724637681,1912.5,82.60869565217392,1912.5C81.23188405797102,1912.5,79.85507246376811,1912.5,78.4782608695652,1912.5C77.10144927536233,1912.5,75.72463768115942,1912.5,74.34782608695653,1912.5C72.97101449275362,1912.5,71.59420289855073,1912.5,70.21739130434783,1912.5C68.84057971014492,1912.5,67.46376811594202,1912.5,66.08695652173913,1912.5C64.71014492753623,1912.5,63.333333333333336,1912.5,61.95652173913044,1912.5C60.57971014492754,1912.5,59.20289855072465,1912.5,57.82608695652174,1912.5C56.44927536231884,1912.5,55.07246376811594,1912.5,53.69565217391304,1912.5C52.31884057971015,1912.5,50.94202898550724,1912.5,49.565217391304344,1912.5C48.188405797101446,1912.5,46.811594202898554,1912.5,45.434782608695656,1912.5C44.05797101449275,1912.5,42.68115942028985,1912.5,41.30434782608696,1912.5C39.927536231884055,1912.5,38.550724637681164,1912.5,37.17391304347826,1912.5C35.79710144927537,1912.5,34.42028985507246,1912.5,33.04347826086956,1912.5C31.666666666666668,1912.5,30.28985507246377,1912.5,28.913043478260875,1912.5C27.53623188405797,1912.5,26.159420289855074,1912.5,24.782608695652172,1912.5C23.40579710144927,1912.5,22.028985507246375,1912.5,20.652173913043477,1912.5C19.27536231884058,1912.5,17.89855072463768,1912.5,16.52173913043478,1912.5C15.144927536231883,1912.5,13.768115942028984,1912.5,12.391304347826086,1912.5C11.014492753623188,1912.5,9.63768115942029,1912.5,8.26086956521739,1912.5C6.884057971014492,1912.5,5.507246376811594,1912.5,4.130434782608695,1912.5C2.753623188405797,1912.5,1.3768115942028984,1912.5,0.6884057971014492,1912.5L0,1912.5Z" fill="url(#area-gradientETHUSDT#007dff)" class="strokePath"></path><path d="M0,2.137499999999931L0.6884057971014492,3.204999999999927C1.3768115942028984,4.272499999999922,2.753623188405797,6.407499999999914,4.130434782608695,7.066249999999911C5.507246376811594,7.724999999999909,6.884057971014492,6.907499999999914,8.26086956521739,5.709999999999923C9.63768115942029,4.512499999999933,11.014492753623188,2.9349999999999468,12.391304347826086,2.3749999999999445C13.768115942028984,1.814999999999942,15.144927536231883,2.272499999999924,16.52173913043478,4.716249999999946C17.89855072463768,7.159999999999969,19.27536231884058,11.590000000000032,20.652173913043477,14.853750000000048C22.028985507246375,18.117500000000064,23.40579710144927,20.215000000000032,24.782608695652172,21.48875000000004C26.159420289855074,22.762500000000045,27.53623188405797,23.21250000000009,28.91304347826087,22.55875000000009C30.28985507246377,21.905000000000086,31.666666666666668,20.147500000000036,33.04347826086956,18.743750000000034C34.42028985507246,17.340000000000032,35.79710144927537,16.290000000000077,37.17391304347826,16.361250000000098C38.550724637681164,16.43250000000012,39.927536231884055,17.625000000000114,41.30434782608695,17.49250000000012C42.68115942028985,17.360000000000127,44.05797101449275,15.902500000000146,45.43478260869565,15.331250000000125C46.811594202898554,14.760000000000105,48.188405797101446,15.075000000000045,49.565217391304344,14.711250000000007C50.94202898550724,14.347499999999968,52.31884057971015,13.30499999999995,53.69565217391304,11.926249999999925C55.07246376811594,10.5474999999999,56.44927536231884,8.832499999999868,57.82608695652174,9.294999999999902C59.20289855072465,9.757499999999936,60.57971014492754,12.397500000000036,61.95652173913044,14.460000000000036C63.333333333333336,16.522500000000036,64.71014492753623,18.007499999999936,66.08695652173913,20.079999999999927C67.46376811594202,22.152499999999918,68.84057971014492,24.8125,70.21739130434783,23.45625000000001C71.59420289855073,22.100000000000023,72.97101449275362,16.727499999999964,74.34782608695652,13.829999999999927C75.72463768115942,10.93249999999989,77.10144927536233,10.509999999999879,78.4782608695652,10.721249999999884C79.85507246376811,10.93249999999989,81.23188405797102,11.777499999999918,82.60869565217392,13.284999999999968C83.98550724637681,14.792500000000018,85.3623188405797,16.96250000000009,86.73913043478262,18.645000000000095C88.1159420289855,20.3275000000001,89.49275362318842,21.522500000000036,90.86956521739131,20.251250000000027C92.2463768115942,18.980000000000018,93.62318840579711,15.242500000000064,94.31159420289855,13.373750000000086L95,11.50500000000011" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
                                <p className={styles.coin__low_24}><div className={styles.buybuttons}>
                                <button className={styles.btn_buy}>Buy</button><button className={styles.btn_trade}>Trade</button></div></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Doge

