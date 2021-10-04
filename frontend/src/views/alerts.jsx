import { useEffect } from 'react'
import { successesSelector } from './../selectors/successes'
import { useSelector, useDispatch } from 'react-redux'

const getAlertType = (status) => {
  return status.endsWith('FAILED') ? 'alert-danger' : 'alert-primary'
}

const Alerts = () => {
  const dispatch = useDispatch()
  const successes = useSelector(successesSelector)
  useEffect(() => {
    if (successes.fetchSuccess || successes.postSuccess || successes.patchSuccess || successes.deleteSuccess) {
      const timeout = setTimeout(() => { dispatch({ type: 'RESET_MESSAGES' }) }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [successes])
  return <>
    {Object.entries(successes).filter(([, value]) => !!value).map(([key, value]) => {
      return <div key={value} className={`alert ${getAlertType(value)}`}>{value}</div>
    })} </>
}

export default Alerts
