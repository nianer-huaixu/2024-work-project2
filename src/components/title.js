export default function Title(props){
  const {EN,CH1,CH2,TIP} = props
  return <div className="com-title">
    <span>{EN}</span>
    <h2>{CH1}<b>{TIP}</b>{CH2? CH2:''}</h2>
  </div>
}