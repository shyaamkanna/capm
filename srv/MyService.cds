using {shyaam.db as shyaam} from '../db/datamodel';
// using {API_SALES_ORDER_SRV as api} from './external/API_SALES_ORDER_SRV';

@path: 'API_SALES_ORDER_SRV'
service MyService {
    entity Orderset as projection on shyaam.Orders;
}