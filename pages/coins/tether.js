import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Tether() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                    <div className={styles.coin__container}>
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
                                <p className={styles.coin__low_24}><svg width="95" height="30"><defs><linearGradient id="area-gradientOKBUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,22.439999999999927L0.6884057971014492,21.364999999999927C1.3768115942028984,20.289999999999928,2.753623188405797,18.13999999999993,4.130434782608695,17.949999999999946C5.507246376811594,17.759999999999962,6.884057971014492,19.529999999999994,8.26086956521739,20.709999999999997C9.63768115942029,21.89,11.014492753623188,22.479999999999976,12.391304347826086,22.909999999999968C13.768115942028984,23.33999999999996,15.144927536231883,23.60999999999997,16.52173913043478,23.699999999999974C17.89855072463768,23.789999999999978,19.27536231884058,23.699999999999974,20.652173913043477,24.309999999999974C22.028985507246375,24.919999999999973,23.40579710144927,26.229999999999976,24.782608695652172,27.19499999999998C26.159420289855074,28.159999999999986,27.53623188405797,28.78,28.91304347826087,28.925C30.28985507246377,29.070000000000004,31.666666666666668,28.73999999999999,33.04347826086956,27.294999999999977C34.42028985507246,25.849999999999977,35.79710144927537,23.289999999999974,37.17391304347826,21.624999999999975C38.550724637681164,19.959999999999987,39.927536231884055,19.190000000000005,41.30434782608695,18.245000000000005C42.68115942028985,17.300000000000004,44.05797101449275,16.179999999999986,45.43478260869565,15.80499999999997C46.811594202898554,15.429999999999957,48.188405797101446,15.799999999999947,49.565217391304344,16.35499999999995C50.94202898550724,16.909999999999954,52.31884057971015,17.64999999999997,53.69565217391304,19.89499999999998C55.07246376811594,22.139999999999986,56.44927536231884,25.889999999999986,57.82608695652174,27.234999999999975C59.20289855072465,28.57999999999997,60.57971014492754,27.519999999999953,61.95652173913044,26.639999999999944C63.333333333333336,25.759999999999934,64.71014492753623,25.05999999999993,66.08695652173913,24.364999999999934C67.46376811594202,23.66999999999994,68.84057971014492,22.979999999999947,70.21739130434783,20.34499999999996C71.59420289855073,17.709999999999972,72.97101449275362,13.129999999999988,74.34782608695652,9.629999999999992C75.72463768115942,6.1299999999999955,77.10144927536233,3.7099999999999866,78.4782608695652,2.384999999999984C79.85507246376811,1.059999999999981,81.23188405797102,0.8299999999999841,82.60869565217392,0.8699999999999797C83.98550724637681,0.9099999999999753,85.3623188405797,1.2199999999999633,86.73913043478262,1.2499999999999645C88.1159420289855,1.2799999999999656,89.49275362318842,1.0299999999999798,90.86956521739131,1.794999999999991C92.2463768115942,2.5600000000000023,93.62318840579711,4.3400000000000105,94.31159420289855,5.230000000000015L95,6.120000000000019L95,591L94.31159420289855,591C93.62318840579711,591,92.2463768115942,591,90.86956521739131,591C89.49275362318842,591,88.1159420289855,591,86.73913043478261,591C85.3623188405797,591,83.98550724637681,591,82.60869565217392,591C81.23188405797102,591,79.85507246376811,591,78.4782608695652,591C77.10144927536233,591,75.72463768115942,591,74.34782608695653,591C72.97101449275362,591,71.59420289855073,591,70.21739130434783,591C68.84057971014492,591,67.46376811594202,591,66.08695652173913,591C64.71014492753623,591,63.333333333333336,591,61.95652173913044,591C60.57971014492754,591,59.20289855072465,591,57.82608695652174,591C56.44927536231884,591,55.07246376811594,591,53.69565217391304,591C52.31884057971015,591,50.94202898550724,591,49.565217391304344,591C48.188405797101446,591,46.811594202898554,591,45.434782608695656,591C44.05797101449275,591,42.68115942028985,591,41.30434782608696,591C39.927536231884055,591,38.550724637681164,591,37.17391304347826,591C35.79710144927537,591,34.42028985507246,591,33.04347826086956,591C31.666666666666668,591,30.28985507246377,591,28.913043478260875,591C27.53623188405797,591,26.159420289855074,591,24.782608695652172,591C23.40579710144927,591,22.028985507246375,591,20.652173913043477,591C19.27536231884058,591,17.89855072463768,591,16.52173913043478,591C15.144927536231883,591,13.768115942028984,591,12.391304347826086,591C11.014492753623188,591,9.63768115942029,591,8.26086956521739,591C6.884057971014492,591,5.507246376811594,591,4.130434782608695,591C2.753623188405797,591,1.3768115942028984,591,0.6884057971014492,591L0,591Z" fill="url(#area-gradientOKBUSDT#007dff)" class="strokePath"></path><path d="M0,22.439999999999927L0.6884057971014492,21.364999999999927C1.3768115942028984,20.289999999999928,2.753623188405797,18.13999999999993,4.130434782608695,17.949999999999946C5.507246376811594,17.759999999999962,6.884057971014492,19.529999999999994,8.26086956521739,20.709999999999997C9.63768115942029,21.89,11.014492753623188,22.479999999999976,12.391304347826086,22.909999999999968C13.768115942028984,23.33999999999996,15.144927536231883,23.60999999999997,16.52173913043478,23.699999999999974C17.89855072463768,23.789999999999978,19.27536231884058,23.699999999999974,20.652173913043477,24.309999999999974C22.028985507246375,24.919999999999973,23.40579710144927,26.229999999999976,24.782608695652172,27.19499999999998C26.159420289855074,28.159999999999986,27.53623188405797,28.78,28.91304347826087,28.925C30.28985507246377,29.070000000000004,31.666666666666668,28.73999999999999,33.04347826086956,27.294999999999977C34.42028985507246,25.849999999999977,35.79710144927537,23.289999999999974,37.17391304347826,21.624999999999975C38.550724637681164,19.959999999999987,39.927536231884055,19.190000000000005,41.30434782608695,18.245000000000005C42.68115942028985,17.300000000000004,44.05797101449275,16.179999999999986,45.43478260869565,15.80499999999997C46.811594202898554,15.429999999999957,48.188405797101446,15.799999999999947,49.565217391304344,16.35499999999995C50.94202898550724,16.909999999999954,52.31884057971015,17.64999999999997,53.69565217391304,19.89499999999998C55.07246376811594,22.139999999999986,56.44927536231884,25.889999999999986,57.82608695652174,27.234999999999975C59.20289855072465,28.57999999999997,60.57971014492754,27.519999999999953,61.95652173913044,26.639999999999944C63.333333333333336,25.759999999999934,64.71014492753623,25.05999999999993,66.08695652173913,24.364999999999934C67.46376811594202,23.66999999999994,68.84057971014492,22.979999999999947,70.21739130434783,20.34499999999996C71.59420289855073,17.709999999999972,72.97101449275362,13.129999999999988,74.34782608695652,9.629999999999992C75.72463768115942,6.1299999999999955,77.10144927536233,3.7099999999999866,78.4782608695652,2.384999999999984C79.85507246376811,1.059999999999981,81.23188405797102,0.8299999999999841,82.60869565217392,0.8699999999999797C83.98550724637681,0.9099999999999753,85.3623188405797,1.2199999999999633,86.73913043478262,1.2499999999999645C88.1159420289855,1.2799999999999656,89.49275362318842,1.0299999999999798,90.86956521739131,1.794999999999991C92.2463768115942,2.5600000000000023,93.62318840579711,4.3400000000000105,94.31159420289855,5.230000000000015L95,6.120000000000019" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default Tether

