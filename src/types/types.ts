export type LineItem = {
    item_id: string;
    item_name: string;
    unit: string;
    quantity: number;
    rate: number;
    description: string;   

}

export type FormStore = {
    form: {
        customer_id: string; 
        line_items: LineItem[];
        forToday: boolean;
    }
    setCustomerId: (id: string) => void;
    setLineItems: (item: LineItem) => void;
    removeLineItem: (item: LineItem) => void;
};

export type DropDownProp<T> = {
    options: T[] | null;
    label: keyof T;
    IDLabel: keyof T;
     
};


export type Item = {
  description: string;  
  item_id: string;
  item_name: string;
  name: string;
  rate: number;
  unit: string;
}



export type Customer = {
  company_name: string | null;
  contact_id: string | null;
  customer_name: string ;
};
