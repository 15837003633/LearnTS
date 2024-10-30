import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
export function formatUTCDate(utcString: string, format: string = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs.utc(utcString).add(8, 'hours').format(format)
}
