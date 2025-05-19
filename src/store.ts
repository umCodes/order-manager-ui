import {create} from 'zustand'; 

export type LineItem = {
    item_id: string;
    item_name: string;
    unit: string;
    quantity: number;
    rate: number;
    description: string;   


}

type FormStore = {
    form: {
        customer_id: string; 
        line_items: LineItem[];
    }
    setCustomerId: (id: string) => void;
    setLineItems: (item: LineItem) => void;
    removeLineItem: (item: LineItem) => void;
};

type ShowListStore = {
    showList: boolean;
    setShowList: (bool: boolean) => void;


}

type VoidyFunction = () => void;

type UseNavigate = {
    location: string;
    setCreateInvoice: VoidyFunction;
    setDrafts: VoidyFunction;
}

export const useFormStore = create<FormStore>((set) =>({
    form: {
        customer_id: '',
        line_items: []
    },
    setCustomerId: (id) => {
        set((state) => ({
            form:{
                ...state.form,
                customer_id: id,
            }
        }))
    },
    setLineItems: (item) =>{

        set((state) => ({
            form:{
                ...state.form,
                line_items:  [...state.form.line_items, item]
            }
        }))
    },

    removeLineItem: (item) =>{

        set((state) => ({
            form:{
                ...state.form,
                line_items:  [...state.form.line_items].filter(i => i.item_id !== item.item_id)
            }
        }))


    
    }

}));



export const useShowListStore = create<ShowListStore>((set) => ({
    showList: false,
    setShowList: (bool) => {
    
        set(() => ({
            showList: bool,
        }))  
    }
}))

export const useNavigate = create<UseNavigate>((set) => ({
    location: "createInvoice",
    
    setCreateInvoice: () =>{
        set(() =>({
                location: "createInvoice",   
        }))
    },

    setDrafts: () =>{
        set(() =>({
                location: "drafts",   
        }))
    }
    
}))
