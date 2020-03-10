import * as moment from 'moment';

export function convertToDate(date: any): string {
    return moment(date).format('YYYY-MM-DD');
}