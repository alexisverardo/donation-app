import {IDateCampaign} from '../campaign-dates-modal/campaign-dates-modal.page';

export interface ICampaign {
    first_name?: string;
    last_name?: string;
    bloods?: IBloods[];
    qty_donants?: number;
    campaign_dates?: IDateCampaign[];
    hospital?: IHospital;
    id?: number;
}
export interface IBloods {
    blood_type: string;
}

export interface IHospital {
    name: string;
}
