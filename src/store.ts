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
        forToday: boolean;
    }
    setCustomerId: (id: string) => void;
    setLineItems: (item: LineItem) => void;
    removeLineItem: (item: LineItem, index: number) => void;
    resetForm: () => void;
    toggleForToday: () => void;
};

type ShowListStore = {
    showList: boolean;
    setShowList: (bool: boolean) => void;


}

type Popup = {
    message: string;
    success: boolean;
}
type PopupStore = {
    popup: Popup;
    setPopup: (popup: Popup) => void;


}


type VoidyFunction = () => void;

type UseNavigate = {
    location: string;
    setCreateInvoice: VoidyFunction;
    setDrafts: VoidyFunction;
}

const defaultForm = {
        customer_id: '',
        line_items: [],
        forToday: false
    } 

export const useFormStore = create<FormStore>((set) =>({
    form: defaultForm,
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
    toggleForToday: () =>{

        set((state) => ({
            form:{
                ...state.form,
                forToday: !state.form.forToday
            }
        }))
    },

    removeLineItem: (item, index) =>{

        set((state) => ({
            form:{
                ...state.form,
                line_items:  [...state.form.line_items].filter((el, i) => ((el.item_id + i) !== item.item_id + index))
            }
        }))


    
    },

    resetForm: () =>{

        set(() => ({
            form: defaultForm
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


export const usePopupStore = create<PopupStore>((set) => ({
    popup: {
        message: "",
        success: true
    },
    
    setPopup: (popup) => {
        set(() => ({
            popup: popup,
        }))
    }
}))
